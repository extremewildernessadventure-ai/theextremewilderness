import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { validateDepositPercent } from '@/lib/invoices'

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
    depositPercent?: number | null
  }

  const db = await getDb()

  const depositError = validateDepositPercent(body.depositPercent)
  if (depositError) {
    return NextResponse.json({ error: depositError }, { status: 400 })
  }

  // `amount` is derived from invoice_items (see PUT .../items and
  // src/lib/invoices.ts's recalculateInvoiceTotals) — the current admin UI
  // no longer sends it here, but the column map is left in place since a
  // direct PATCH with `amount` is still harmless to support. parent_invoice_id
  // is deliberately not PATCH-editable -- immutable once set at creation,
  // same convention as `slug` elsewhere in this codebase.
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
