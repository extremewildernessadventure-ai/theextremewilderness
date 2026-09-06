import { getCloudflareContext } from '@opennextjs/cloudflare'

// @cloudflare/workers-types isn't a dependency of this project, so the real
// D1Database type isn't ambiently available — this covers exactly the D1
// surface used here (prepare/bind/all/first/run), matching the real runtime
// API (https://developers.cloudflare.com/d1/worker-api/).
export interface D1Database {
  prepare(query: string): D1PreparedStatement
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<Array<{ success: boolean; results: T[] }>>
}
export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement
  all<T = unknown>(): Promise<{ results: T[] }>
  first<T = unknown>(): Promise<T | null>
  run(): Promise<{ success: boolean; meta?: { last_row_id?: number } }>
}

declare global {
  interface CloudflareEnv {
    DB?: D1Database
  }
}

export interface Invoice {
  id: number
  invoice_number: string
  client_id: number | null
  client_name: string
  client_email: string | null
  booking_reference: string | null
  amount: number
  amount_paid: number
  currency: string
  description: string | null
  departure_id: number | null
  departure_notes_other: string | null
  status: 'unpaid' | 'partial' | 'paid' | 'cancelled'
  due_date: string | null
  // NULL means a plain, non-deposit invoice (unaffected by any of this).
  // When set, THIS invoice's amount IS the deposit -- it represents
  // deposit_percent% of a larger implied total (never stored -- see
  // computeImpliedTotal()/computeRemainingBalance() in src/lib/invoices.ts).
  // The remainder isn't a second leg of this same invoice; it gets its own,
  // separate invoice (see parent_invoice_id below).
  deposit_percent: number | null
  // Self-referencing: set on a follow-up invoice (e.g. the balance invoice
  // generated from a deposit invoice via "Create Linked Invoice") to point
  // back at the invoice it follows on from. Immutable once set -- not
  // PATCH-editable, same convention as `slug` elsewhere in this codebase.
  // The first self-referencing FK in this schema; every other relationship
  // here is a child row pointing at a distinct parent table.
  parent_invoice_id: number | null
  // The quote this invoice's amount is billed against -- a real, permanent
  // FK (unlike the old one-time "Convert to Invoice" URL-param copy).
  // Immutable once set, not PATCH-editable, same convention as
  // parent_invoice_id above. Denormalized onto every invoice in a
  // parent_invoice_id chain, not just the root -- same convention
  // departure_id already follows. See computeQuoteTotalCost in
  // src/lib/quotes.ts / computeInvoiceBalanceSchedule in
  // src/lib/invoices.ts for the read side.
  quote_id: number | null
  notes: string | null
  sent_at: string | null
  sent_r2_key: string | null
  created_at: string
  updated_at: string | null
}

export interface InvoiceItem {
  id: number
  invoice_id: number
  description: string
  quantity: number
  unit_price: number
  sort_order: number
  created_at: string
  updated_at: string | null
}

export interface InvoicePayment {
  id: number
  invoice_id: number
  amount: number
  currency: string
  method: 'pesapal' | 'bank_transfer' | 'other' | 'correction'
  reference: string | null
  pesapal_order_tracking_id: string | null
  confirmed_at: string
  recorded_by: string | null
  notes: string | null
  created_at: string
}

export interface InvoicePesapalOrder {
  id: number
  invoice_id: number
  order_tracking_id: string
  merchant_reference: string
  redirect_url: string
  amount: number
  currency: string
  status: string
  created_at: string
  updated_at: string | null
}

export async function getDb(): Promise<D1Database> {
  const { env } = await getCloudflareContext({ async: true })
  if (!env.DB) {
    throw new Error('No DB (D1) binding available')
  }
  return env.DB
}
