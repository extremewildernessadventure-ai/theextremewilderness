import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { PERMIT_TYPES, type Permit } from '@/lib/compliance'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const db = await getDb()
  const { results } = await db.prepare('SELECT * FROM permits ORDER BY created_at DESC').all()
  return NextResponse.json({ permits: results })
}

export async function POST(req: NextRequest) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json() as {
    departureId?: number; departureNotesOther?: string; type?: string; park?: string; permitNumber?: string
    amountPaid?: number; currency?: string; paidAt?: string; confirmationRef?: string
    validFrom?: string; validTo?: string; notes?: string
  }
  if (!body.type || !PERMIT_TYPES.includes(body.type as Permit['type'])) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }

  const db = await getDb()
  const result = await db.prepare(
    `INSERT INTO permits (departure_id, departure_notes_other, type, park, permit_number, amount_paid, currency, paid_at, confirmation_ref, valid_from, valid_to, notes)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    body.departureId ?? null, body.departureId ? null : (body.departureNotesOther || null),
    body.type, body.park ?? null, body.permitNumber ?? null,
    body.amountPaid ?? null, body.currency ?? 'USD', body.paidAt ?? null, body.confirmationRef ?? null,
    body.validFrom ?? null, body.validTo ?? null, body.notes ?? null,
  ).run()

  return NextResponse.json({ success: true, id: result.meta?.last_row_id })
}
