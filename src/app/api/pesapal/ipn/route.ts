import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { recordPesapalPaymentIfConfirmed } from '@/lib/invoices'

// Public, unauthenticated on purpose — Pesapal calls this directly and
// can't send an admin session cookie. This is the exact URL to register as
// the "IPN Listener Url" in the Pesapal dashboard:
// https://www.theextremewilderness.com/api/pesapal/ipn
//
// Security model: the callback's own OrderTrackingId/status claims are
// NEVER trusted directly. recordPesapalPaymentIfConfirmed() re-verifies via
// a server-to-server GetTransactionStatus call, and only records a payment
// if that verified call confirms COMPLETED — an attacker hitting this URL
// with a fabricated tracking id gets a real (negative) status check, not a
// forged "paid" invoice. The invoice association itself comes from
// invoice_pesapal_orders, a row only our own submitOrder() calls ever
// create, not from anything in the incoming request.
export const dynamic = 'force-dynamic'

// FLAG: the ack response shape below is a best-guess based on Pesapal v3's
// commonly-documented IPN contract — verify against Pesapal's actual docs
// before relying on it (their listener may care about the exact shape, or
// may not care at all beyond a 200 response).
async function handleIpn(orderTrackingId: string | null, notificationType: string | null) {
  if (!orderTrackingId) {
    return NextResponse.json({ error: 'Missing OrderTrackingId' }, { status: 400 })
  }

  const db = await getDb()
  let merchantReference = ''
  try {
    await recordPesapalPaymentIfConfirmed(db, orderTrackingId)
    const order = await db.prepare(
      'SELECT merchant_reference FROM invoice_pesapal_orders WHERE order_tracking_id = ?'
    ).bind(orderTrackingId).first<{ merchant_reference: string }>()
    merchantReference = order?.merchant_reference ?? ''
  } catch {
    // Swallow and still ack — Pesapal will retry an IPN that errors out on
    // our end, which is fine, but there's nothing more useful to tell it.
  }

  return NextResponse.json({
    orderNotificationType: notificationType ?? 'IPNCHANGE',
    orderTrackingId,
    orderMerchantReference: merchantReference,
    status: 200,
  })
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  return handleIpn(searchParams.get('OrderTrackingId'), searchParams.get('OrderNotificationType'))
}

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  let body: Record<string, string> = {}
  try {
    body = await req.json()
  } catch {
    // Not a JSON body — fall through to query params.
  }
  return handleIpn(
    body.OrderTrackingId ?? searchParams.get('OrderTrackingId'),
    body.OrderNotificationType ?? searchParams.get('OrderNotificationType'),
  )
}
