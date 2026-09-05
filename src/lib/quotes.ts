import { round2 } from './invoices'

export type QuoteStatus = 'draft' | 'sent' | 'accepted' | 'declined' | 'expired'

export const QUOTE_STATUSES: QuoteStatus[] = ['draft', 'sent', 'accepted', 'declined', 'expired']

export interface Quote {
  id: number
  // A quote attaches to a lead, a client, or (rarely, once a lead converts)
  // both -- the DB enforces at least one via a CHECK constraint (migration
  // 0032). Never assume exactly one is set; always check both.
  lead_id: number | null
  client_id: number | null
  package_slug: string | null
  adults: number
  children: number
  // NULL means pricing hasn't been entered yet. price_per_child is a
  // genuinely distinct rate from price_per_adult, not the same "per person"
  // figure.
  price_per_adult: number | null
  price_per_child: number | null
  // Derived from adults/children/price_per_adult/price_per_child via
  // computeQuoteTotalCost, but stored (like invoices.amount) rather than
  // computed at every read site, since every existing consumer (list/detail/
  // PDF/the invoice-conversion link) already just reads `price` directly.
  // Recomputed server-side on every create/update that touches pricing --
  // never accept a hand-typed price from a form.
  price: number
  currency: string
  status: QuoteStatus
  valid_until: string | null
  notes: string | null
  created_at: string
  updated_at: string | null
}

// This is now the one place a trip's price is authoritatively entered --
// an invoice's balance schedule reads it via a real quote_id FK (see
// computeInvoiceBalanceSchedule in src/lib/invoices.ts), not a departure
// (departures went back to being simple in migration 0033). Never stored
// itself beyond the `price` column's derived-but-cached copy -- this
// function is what (re)computes that copy. null when price_per_adult
// hasn't been entered yet, rather than treating an unset price as free.
export function computeQuoteTotalCost(quote: Pick<Quote, 'adults' | 'children' | 'price_per_adult' | 'price_per_child'>): number | null {
  if (quote.price_per_adult == null) return null
  const adultsTotal = quote.adults * quote.price_per_adult
  const childrenTotal = quote.children * (quote.price_per_child ?? 0)
  return round2(adultsTotal + childrenTotal)
}
