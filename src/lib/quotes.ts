export type QuoteStatus = 'draft' | 'sent' | 'accepted' | 'declined' | 'expired'

export const QUOTE_STATUSES: QuoteStatus[] = ['draft', 'sent', 'accepted', 'declined', 'expired']

export interface Quote {
  id: number
  lead_id: number
  package_slug: string | null
  price: number
  currency: string
  status: QuoteStatus
  valid_until: string | null
  notes: string | null
  created_at: string
  updated_at: string | null
}
