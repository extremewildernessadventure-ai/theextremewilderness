import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb } from '@/lib/db'
import { recordPesapalPaymentIfConfirmed } from '@/lib/invoices'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

// Manual "check status now" action — calls the exact same
// recordPesapalPaymentIfConfirmed() helper the IPN callback uses, so this
// can never record something the IPN path wouldn't also accept. Useful
// while validating the IPN listener end-to-end, and as a fallback if an IPN
// delivery is ever missed.
export async function POST(req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const body = await req.json().catch(() => ({})) as { orderTrackingId?: string }

  const db = await getDb()
  let orderTrackingId = body.orderTrackingId
  if (!orderTrackingId) {
    const latest = await db.prepare(
      'SELECT order_tracking_id FROM invoice_pesapal_orders WHERE invoice_id = ? ORDER BY created_at DESC LIMIT 1'
    ).bind(id).first<{ order_tracking_id: string }>()
    orderTrackingId = latest?.order_tracking_id
  }
  if (!orderTrackingId) {
    return NextResponse.json({ error: 'No Pesapal order exists for this invoice yet' }, { status: 400 })
  }

  try {
    await recordPesapalPaymentIfConfirmed(db, orderTrackingId)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to check Pesapal status'
    return NextResponse.json({ error: message }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
