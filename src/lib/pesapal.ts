// Pesapal API v3 client (https://developer.pesapal.com/api3-demo-keys.html).
// Small, focused functions — no SDK dependency. Every response field name
// below is based on Pesapal's commonly-documented v3 shape but has NOT been
// confirmed against a live call yet — each is marked with a FLAG comment.
// Verify against a real sandbox/production response before trusting this
// blind, especially in getTransactionStatus (the payment-confirmation path).
//
// IMPORTANT — a real gap that already bit us once: PESAPAL_CONSUMER_KEY/
// PESAPAL_CONSUMER_SECRET/PESAPAL_IPN_ID/PESAPAL_BASE_URL are all read
// lazily (inside function bodies here, never at module scope), so a missing
// one NEVER fails `next build` the way e.g. RESEND_API_KEY would (that
// client is constructed at module scope elsewhere) — there's no CI signal
// forcing anyone to notice. Setting these in .dev.vars only ever affects
// local dev; the deployed Cloudflare Worker needs each one separately
// provisioned with `wrangler secret put <NAME>` (or via the Cloudflare
// dashboard) — check `wrangler secret list` against .dev.vars.example
// after touching anything here.

const PESAPAL_BASE_URL = process.env.PESAPAL_BASE_URL || 'https://pay.pesapal.com/v3'

interface CachedToken { token: string; expiresAt: number }
// Best-effort, module-scope cache — persists only within a warm Workers
// isolate; a cold start just means the next call fetches a fresh token.
// Pesapal tokens are typically valid ~5 min; cached conservatively for 4.
let cachedToken: CachedToken | null = null

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) return cachedToken.token

  const consumerKey = process.env.PESAPAL_CONSUMER_KEY
  const consumerSecret = process.env.PESAPAL_CONSUMER_SECRET
  if (!consumerKey || !consumerSecret) throw new Error('Pesapal credentials are not configured')

  const res = await fetch(`${PESAPAL_BASE_URL}/api/Auth/RequestToken`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ consumer_key: consumerKey, consumer_secret: consumerSecret }),
  })
  if (!res.ok) throw new Error(`Pesapal auth failed: ${res.status}`)

  // FLAG: verify the exact field name — expecting `token`.
  const data = await res.json() as { token?: string; error?: unknown; message?: string }
  if (!data.token) throw new Error(`Pesapal auth response missing token: ${data.message ?? JSON.stringify(data)}`)

  cachedToken = { token: data.token, expiresAt: Date.now() + 4 * 60_000 }
  return data.token
}

export interface SubmitOrderParams {
  merchantReference: string
  amount: number
  currency: string
  description: string
  callbackUrl: string
  email?: string
  firstName?: string
  lastName?: string
}

export interface SubmitOrderResult {
  orderTrackingId: string
  redirectUrl: string
  merchantReference: string
}

export async function submitOrder(params: SubmitOrderParams): Promise<SubmitOrderResult> {
  const token = await getAccessToken()
  const notificationId = process.env.PESAPAL_IPN_ID
  if (!notificationId) throw new Error('PESAPAL_IPN_ID is not configured — register the IPN URL in the Pesapal dashboard first')

  const res = await fetch(`${PESAPAL_BASE_URL}/api/Transactions/SubmitOrderRequest`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      id: params.merchantReference,
      currency: params.currency,
      amount: params.amount,
      description: params.description,
      callback_url: params.callbackUrl,
      notification_id: notificationId,
      billing_address: {
        email_address: params.email,
        first_name: params.firstName,
        last_name: params.lastName,
      },
    }),
  })
  if (!res.ok) throw new Error(`Pesapal SubmitOrderRequest failed: ${res.status}`)

  // FLAG: verify field names — expecting order_tracking_id / redirect_url / merchant_reference.
  const data = await res.json() as {
    order_tracking_id?: string; redirect_url?: string; merchant_reference?: string
    error?: unknown; message?: string
  }
  if (!data.order_tracking_id || !data.redirect_url) {
    throw new Error(`Unexpected SubmitOrderRequest response shape: ${data.message ?? JSON.stringify(data)}`)
  }

  return {
    orderTrackingId: data.order_tracking_id,
    redirectUrl: data.redirect_url,
    merchantReference: data.merchant_reference ?? params.merchantReference,
  }
}

export interface TransactionStatus {
  paymentStatus: string // expect COMPLETED | FAILED | PENDING | INVALID | REVERSED
  amount: number
  currency: string
  merchantReference: string
  confirmationCode?: string
}

export async function getTransactionStatus(orderTrackingId: string): Promise<TransactionStatus> {
  const token = await getAccessToken()
  const url = `${PESAPAL_BASE_URL}/api/Transactions/GetTransactionStatus?orderTrackingId=${encodeURIComponent(orderTrackingId)}`
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } })
  if (!res.ok) throw new Error(`Pesapal GetTransactionStatus failed: ${res.status}`)

  // FLAG: verify field names — expecting payment_status_description, amount,
  // currency, merchant_reference, confirmation_code (commonly-documented v3 fields).
  const data = await res.json() as {
    payment_status_description?: string; amount?: number; currency?: string
    merchant_reference?: string; confirmation_code?: string
  }

  return {
    paymentStatus: (data.payment_status_description ?? 'PENDING').toUpperCase(),
    amount: data.amount ?? 0,
    currency: data.currency ?? 'USD',
    merchantReference: data.merchant_reference ?? '',
    confirmationCode: data.confirmation_code,
  }
}

export function isConfirmedPaid(paymentStatus: string): boolean {
  return paymentStatus === 'COMPLETED'
}
