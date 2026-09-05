import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { validateDepositSplit } from '@/lib/invoices'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const invoice = await db.prepare('SELECT * FROM invoices WHERE id = ?').bind(id).first()
  if (!invoice) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ invoice })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    clientName?: string; clientEmail?: string; bookingReference?: string
    amount?: number; currency?: string; description?: string; departureId?: number | null
    departureNotesOther?: string | null
    status?: string; dueDate?: string; notes?: string
    depositPercent?: number | null; balanceDueDate?: string | null
  }

  const db = await getDb()

  // A partial PATCH only sends the field(s) actually changing, so validating
  // the split needs the *effective* post-write state, not just this body in
  // isolation -- e.g. PATCHing depositPercent alone must be checked against
  // the due_date/balanceDueDate already on the row, not against undefined.
  if (body.depositPercent !== undefined || body.balanceDueDate !== undefined || body.dueDate !== undefined) {
    const current = await db.prepare(
      'SELECT deposit_percent, balance_due_date, due_date FROM invoices WHERE id = ?'
    ).bind(id).first<{ deposit_percent: number | null; balance_due_date: string | null; due_date: string | null }>()
    if (!current) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    const effectiveDepositPercent = body.depositPercent !== undefined ? body.depositPercent : current.deposit_percent
    const effectiveBalanceDueDate = body.balanceDueDate !== undefined ? body.balanceDueDate : current.balance_due_date
    const effectiveDueDate = body.dueDate !== undefined ? body.dueDate : current.due_date
    const depositError = validateDepositSplit(effectiveDepositPercent, effectiveBalanceDueDate, effectiveDueDate)
    if (depositError) {
      return NextResponse.json({ error: depositError }, { status: 400 })
    }
  }

  // `amount` is derived from invoice_items (see PUT .../items and
  // src/lib/invoices.ts's recalculateInvoiceTotals) — the current admin UI
  // no longer sends it here, but the column map is left in place since a
  // direct PATCH with `amount` is still harmless to support.
  const columnMap: Record<string, unknown> = {
    client_name: body.clientName,
    client_email: body.clientEmail,
    booking_reference: body.bookingReference,
    amount: body.amount,
    currency: body.currency,
    description: body.description,
    status: body.status,
    due_date: body.dueDate,
    deposit_percent: body.depositPercent,
    balance_due_date: body.balanceDueDate,
    notes: body.notes,
  }
  const fields: string[] = []
  const values: unknown[] = []
  for (const [col, val] of Object.entries(columnMap)) {
    if (val !== undefined) {
      fields.push(`${col} = ?`)
      values.push(val)
    }
  }
  if (body.departureId !== undefined) {
    fields.push('departure_id = ?', 'departure_notes_other = ?')
    values.push(body.departureId, body.departureId ? null : (body.departureNotesOther || null))
  }
  if (fields.length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }
  fields.push('updated_at = CURRENT_TIMESTAMP')

  await db.prepare(`UPDATE invoices SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()

  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  // Child rows (invoice_items/invoice_payments/invoice_pesapal_orders)
  // reference invoices(id) without ON DELETE CASCADE, so they must be
  // cleared first or D1's foreign-key enforcement rejects the delete.
  await db.batch([
    db.prepare('DELETE FROM invoice_items WHERE invoice_id = ?').bind(id),
    db.prepare('DELETE FROM invoice_payments WHERE invoice_id = ?').bind(id),
    db.prepare('DELETE FROM invoice_pesapal_orders WHERE invoice_id = ?').bind(id),
    db.prepare('DELETE FROM invoices WHERE id = ?').bind(id),
  ])
  return NextResponse.json({ success: true })
}
