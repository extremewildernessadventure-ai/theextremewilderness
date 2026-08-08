import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM invoices ORDER BY created_at DESC').all()
  return NextResponse.json({ invoices: results })
}

// Same entropy as invoiceNumber's own generator (last 6 digits of the epoch
// ms, ~16.7 min period) rather than the old 4-digit version, which cycled
// every 10 seconds and could hand out the same reference to two invoices
// created moments apart.
function generateBookingReference(): string {
  return `EWA-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`
}

function isUniqueConstraintError(err: unknown, column: string): boolean {
  const message = err instanceof Error ? err.message : String(err)
  return message.includes('UNIQUE constraint failed') && message.includes(column)
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json() as {
    clientName?: string; clientEmail?: string; bookingReference?: string
    amount?: number; currency?: string; description?: string; dueDate?: string; notes?: string
  }
  if (!body.clientName || !body.amount) {
    return NextResponse.json({ error: 'clientName and amount are required' }, { status: 400 })
  }

  const invoiceNumber = `INV-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`
  // Only auto-generated references are safe to silently retry on collision —
  // a staff-typed reference that collides means the value is already taken,
  // which the staff member needs to know about rather than have swapped out.
  const explicitBookingReference = body.bookingReference?.trim() || null
  let bookingReference = explicitBookingReference ?? generateBookingReference()

  const db = await getDb()
  const maxAttempts = 5
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await db.prepare(
        `INSERT INTO invoices (invoice_number, client_name, client_email, booking_reference, amount, currency, description, due_date, notes)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        invoiceNumber,
        body.clientName,
        body.clientEmail ?? null,
        bookingReference,
        body.amount,
        body.currency ?? 'USD',
        body.description ?? null,
        body.dueDate ?? null,
        body.notes ?? null,
      ).run()

      return NextResponse.json({ success: true, invoiceNumber })
    } catch (err) {
      if (!isUniqueConstraintError(err, 'booking_reference')) throw err

      if (explicitBookingReference) {
        return NextResponse.json({ error: 'That booking reference is already in use. Please choose another.' }, { status: 409 })
      }
      if (attempt === maxAttempts) {
        return NextResponse.json({ error: 'Could not generate a unique booking reference. Please try again.' }, { status: 500 })
      }
      bookingReference = generateBookingReference()
    }
  }

  // Unreachable — the loop above always returns or throws.
  return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
}
