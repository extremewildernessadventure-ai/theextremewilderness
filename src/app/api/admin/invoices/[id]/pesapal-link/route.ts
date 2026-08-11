import { NextRequest, NextResponse } from 'next/server'
import { hasValidAdminSession } from '@/lib/adminAuth'
import { getDb, type Invoice } from '@/lib/db'
import { submitOrder } from '@/lib/pesapal'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

// Generates a fresh, invoice-specific Pesapal payment link. Can be called
// more than once for the same invoice (e.g. an earlier link expired) — each
// call adds a new row to invoice_pesapal_orders rather than overwriting one.
export async function POST(_req: NextRequest, { params }: Params) {
  if (!(await hasValidAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const db = await getDb()
  const invoice = await db.prepare('SELECT * FROM invoices WHERE id = ?').bind(id).first<Invoice>()
  if (!invoice) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  if (!invoice.client_email) {
    return NextResponse.json({ error: 'This invoice has no client email — Pesapal needs one to bill to. Add a client email and try again.' }, { status: 400 })
  }

  const [firstName, ...rest] = invoice.client_name.trim().split(/\s+/)
  const lastName = rest.join(' ') || firstName

  let order
  try {
    order = await submitOrder({
      merchantReference: invoice.invoice_number,
      amount: invoice.amount,
      currency: invoice.currency,
      description: invoice.description || `Invoice ${invoice.invoice_number}`,
      callbackUrl: `${SITE_URL}/payments/return?invoice=${encodeURIComponent(invoice.invoice_number)}`,
      email: invoice.client_email,
      firstName,
      lastName,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to reach Pesapal'
    return NextResponse.json({ error: message }, { status: 502 })
  }

  await db.prepare(
    `INSERT INTO invoice_pesapal_orders (invoice_id, order_tracking_id, merchant_reference, redirect_url, amount, currency)
     VALUES (?, ?, ?, ?, ?, ?)`
  ).bind(id, order.orderTrackingId, order.merchantReference, order.redirectUrl, invoice.amount, invoice.currency).run()

  return NextResponse.json({ success: true, redirectUrl: order.redirectUrl, orderTrackingId: order.orderTrackingId })
}
