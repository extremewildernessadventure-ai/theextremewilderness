export type ReviewStatus = 'pending' | 'approved' | 'published'
export const REVIEW_STATUSES: ReviewStatus[] = ['pending', 'approved', 'published']

export interface Review {
  id: number
  client_id: number | null
  booking_id: number | null
  rating: number
  quote_text: string
  source: string | null
  park_tag: string | null
  status: ReviewStatus
  created_at: string
}
