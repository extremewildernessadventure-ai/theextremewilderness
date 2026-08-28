import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM refunds ORDER BY created_at DESC').all()
  return NextResponse.json({ refunds: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as {
    invoiceId?: number | null; invoiceRefOther?: string | null
    bookingId?: number | null; bookingRefOther?: string | null
    amount?: number; currency?: string; reason?: string; notes?: string
  }
  if (typeof body.amount !== 'number' || body.amount <= 0) {
    return NextResponse.json({ error: 'amount must be a positive number' }, { status: 400 })
  }

  const db = await getDb()
  const result = await db.prepare(
    `INSERT INTO refunds (invoice_id, invoice_ref_other, booking_id, booking_ref_other, amount, currency, reason, notes)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    body.invoiceId ?? null, body.invoiceId ? null : (body.invoiceRefOther || null),
    body.bookingId ?? null, body.bookingId ? null : (body.bookingRefOther || null),
    body.amount, body.currency ?? 'USD', body.reason ?? null, body.notes ?? null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
