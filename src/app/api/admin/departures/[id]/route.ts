import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const departure = await db.prepare('SELECT * FROM departures WHERE id = ?').bind(id).first()
  if (!departure) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ departure })
}

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json() as {
    packageSlug?: string; startDate?: string; endDate?: string; cancelled?: boolean
  }

  const columnMap: Record<string, unknown> = {
    package_slug: body.packageSlug,
    start_date: body.startDate,
    end_date: body.endDate,
    cancelled: body.cancelled === undefined ? undefined : (body.cancelled ? 1 : 0),
  }
  const fields: string[] = []
  const values: unknown[] = []
  for (const [col, val] of Object.entries(columnMap)) {
    if (val !== undefined) {
      fields.push(`${col} = ?`)
      values.push(val)
    }
  }
  if (fields.length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }
  fields.push('updated_at = CURRENT_TIMESTAMP')

  const db = await getDb()
  await db.prepare(`UPDATE departures SET ${fields.join(', ')} WHERE id = ?`).bind(...values, id).run()
  return NextResponse.json({ success: true })
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()

  // Departures are referenced by bookings/invoices/expenses/supplier_payments
  // — D1 enforces those FK constraints at DELETE time, and unlike an
  // invoice's own item/payment rows (which are safe to cascade-clear because
  // they only exist to describe the invoice itself), these are independent
  // financial/operational records that must never be silently deleted as a
  // side effect. Block instead, with a clear reason.
  const [bookingCount, invoiceCount, expenseCount] = await Promise.all([
    db.prepare('SELECT COUNT(*) as count FROM bookings WHERE departure_id = ?').bind(id).first<{ count: number }>(),
    db.prepare('SELECT COUNT(*) as count FROM invoices WHERE departure_id = ?').bind(id).first<{ count: number }>(),
    db.prepare('SELECT COUNT(*) as count FROM expenses WHERE departure_id = ?').bind(id).first<{ count: number }>(),
  ])
  const blockers: string[] = []
  if ((bookingCount?.count ?? 0) > 0) blockers.push('bookings')
  if ((invoiceCount?.count ?? 0) > 0) blockers.push('invoices')
  if ((expenseCount?.count ?? 0) > 0) blockers.push('expenses')
  if (blockers.length > 0) {
    return NextResponse.json(
      { error: `Cannot delete this departure — it has linked ${blockers.join(', ')}. Remove or reassign those first.` },
      { status: 409 }
    )
  }

  await db.prepare('DELETE FROM departures WHERE id = ?').bind(id).run()
  return NextResponse.json({ success: true })
}
