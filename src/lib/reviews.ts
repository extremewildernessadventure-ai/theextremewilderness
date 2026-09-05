export type ReviewStatus = 'pending' | 'approved' | 'published'
export const REVIEW_STATUSES: ReviewStatus[] = ['pending', 'approved', 'published']

export interface Review {
  id: number
  client_id: number | null
  client_name_other: string | null
  booking_id: number | null
  booking_ref_other: string | null
  rating: number
  quote_text: string
  source: string | null
  park_tag: string | null
  // Soft FK by slug (migration 0031), matching departures.package_slug's
  // existing convention -- validated at the app layer, not a DB FK. Lets a
  // review be tied to the specific package it's about (used by the public
  // Guest Reviews tab); nullable since older/general reviews predate this.
  package_slug: string | null
  status: ReviewStatus
  created_at: string
}

// A review counts as "verified" only when it's actually linked to a real
// client/booking record -- never for an anonymous public submission that
// just supplied a free-text name (client_name_other/booking_ref_other).
// This is the honest equivalent of the prototype's "Verified Itinerary
// Traveler" badge, which it hardcoded to true on every single submission
// regardless of any real link -- deliberately not carried over as-is.
export function isVerifiedReview(review: Pick<Review, 'client_id' | 'booking_id'>): boolean {
  return review.client_id !== null || review.booking_id !== null
}
