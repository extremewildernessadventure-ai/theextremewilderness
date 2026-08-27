import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { SUPPLIER_PAYMENT_STATUSES, type SupplierPayment } from '@/lib/ops'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string; paymentId: string }> }

export async function PATCH(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { paymentId } = await params
  const body = await req.json() as { status?: string }

  if (!body.status || !SUPPLIER_PAYMENT_STATUSES.includes(body.status as SupplierPayment['status'])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const db = await getDb()
  const paidAt = body.status === 'paid' ? "datetime('now')" : 'NULL'
  await db.prepare(
    `UPDATE supplier_payments SET status = ?, paid_at = ${paidAt} WHERE id = ?`
  ).bind(body.status, paymentId).run()

  return NextResponse.json({ success: true })
}
