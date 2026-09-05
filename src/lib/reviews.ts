import type { D1Database } from './db'

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

// Public read path for the Guest Reviews tab -- only ever returns
// `status: 'published'` rows (the final state in the pending -> approved ->
// published moderation flow every review, staff-pasted or visitor-submitted,
// must pass through). Never reads 'pending'/'approved' rows, which is what
// keeps an unmoderated visitor submission from ever reaching the public site.
export async function getPublishedReviewsForPackage(db: D1Database, packageSlug: string): Promise<Review[]> {
  const { results } = await db.prepare(
    `SELECT * FROM reviews WHERE package_slug = ? AND status = 'published' ORDER BY created_at DESC`
  ).bind(packageSlug).all<Review>()
  return results
}

export interface ReviewStats {
  count: number
  average: number // 0 when count is 0
  distribution: Record<1 | 2 | 3 | 4 | 5, number> // raw counts per star, not percentages
}

// Real aggregate stats computed from actual published reviews -- no
// synthesized per-category sub-ratings like the prototype's "Expedition
// Metrics" panel, which showed 4 static fake numbers regardless of what
// reviews actually existed. This site's reviews table only ever collects
// one real overall rating per review, so that's the only real aggregate
// there is to show.
export function computeReviewStats(reviews: Pick<Review, 'rating'>[]): ReviewStats {
  const distribution: ReviewStats['distribution'] = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  let total = 0
  for (const r of reviews) {
    const star = Math.min(5, Math.max(1, Math.round(r.rating))) as 1 | 2 | 3 | 4 | 5
    distribution[star] += 1
    total += r.rating
  }
  return {
    count: reviews.length,
    average: reviews.length > 0 ? total / reviews.length : 0,
    distribution,
  }
}
