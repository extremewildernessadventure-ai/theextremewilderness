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
  client_name: string
  client_email: string | null
  booking_reference: string | null
  amount: number
  amount_paid: number
  currency: string
  description: string | null
  departure_id: number | null
  status: 'unpaid' | 'partial' | 'paid' | 'cancelled'
  due_date: string | null
  notes: string | null
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
