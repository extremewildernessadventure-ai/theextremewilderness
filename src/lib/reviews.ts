import { getDb } from './db'

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

export interface PublishedReview extends Review {
  // Resolved display name: the real client's name (joined from `clients`,
  // for staff-entered reviews linked by client_id) or the free-text name a
  // public visitor supplied (client_name_other) -- never both null, since
  // every review has one or the other by the time it's `published`.
  reviewer_name: string
}

// During `next build`'s static generation, calling getCloudflareContext()
// (what getDb() does under the hood) reliably crashes on Windows under the
// concurrency of ~700+ package/locale page variants across 7 parallel build
// workers -- src/lib/localeData.ts hit and solved this exact problem for
// every other dataset already: read a pre-generated static JSON snapshot
// straight off disk during the build phase instead of touching a live
// Cloudflare binding at all. Reviews are this site's first genuinely D1-
// backed (not checked-into-source) public content, so there's no existing
// snapshot for them -- generate-review-data.ts creates
// public/locale-data/reviews.json (grouped by package_slug), read here via
// the same NEXT_PHASE branch localeData.ts uses. Real, non-obvious
// tradeoff this introduces: a newly-approved review needs that script
// re-run and the site rebuilt+redeployed before it reaches the public
// page -- it does not appear the instant an admin approves it.
let reviewsSnapshotCache: Promise<Record<string, PublishedReview[]>> | null = null

async function readReviewsSnapshot(): Promise<Record<string, PublishedReview[]>> {
  if (!reviewsSnapshotCache) {
    reviewsSnapshotCache = (async () => {
      const { readFile } = await import('node:fs/promises')
      const { join } = await import('node:path')
      try {
        const raw = await readFile(join(process.cwd(), 'public', 'locale-data', 'reviews.json'), 'utf-8')
        return JSON.parse(raw) as Record<string, PublishedReview[]>
      } catch {
        // Missing snapshot (e.g. a fresh checkout before ever running
        // generate-review-data.ts) degrades to "no reviews yet" rather
        // than failing the whole build -- there's genuinely nothing to
        // show, not a fabrication risk, since the file simply doesn't
        // exist yet.
        console.warn('reviews.json snapshot not found -- run `npx tsx scripts/generate-review-data.ts` to generate it. Continuing with zero reviews.')
        return {}
      }
    })()
  }
  return reviewsSnapshotCache
}

// Outside the build phase (dev server, or any future dynamic/ISR request),
// live D1 is fully safe to call at real request time -- this transient-
// error retry only ever mattered for the build-time path above, kept here
// as cheap insurance against any other genuine transient infra blip.
async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  let lastError: unknown
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn()
    } catch (err) {
      lastError = err
      if (i < attempts - 1) await new Promise((resolve) => setTimeout(resolve, 200 * (i + 1)))
    }
  }
  throw lastError
}

// Reviews aren't locale-specific -- every one of the 16 locale variants of
// a package's detail page needs the exact same rows, so without this a live
// (non-build-phase) call site would fire the identical query up to 16x per
// package for no reason. Safe to cache for the whole process lifetime.
const publishedReviewsCache = new Map<string, Promise<PublishedReview[]>>()

// Public read path for the Guest Reviews tab -- only ever returns
// `status: 'published'` rows (the final state in the pending -> approved ->
// published moderation flow every review, staff-pasted or visitor-submitted,
// must pass through). Never reads 'pending'/'approved' rows, which is what
// keeps an unmoderated visitor submission from ever reaching the public site.
export async function getPublishedReviewsForPackage(packageSlug: string): Promise<PublishedReview[]> {
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    const snapshot = await readReviewsSnapshot()
    return snapshot[packageSlug] ?? []
  }

  const cached = publishedReviewsCache.get(packageSlug)
  if (cached) return cached

  const promise = withRetry(async () => {
    const db = await getDb()
    const { results } = await db.prepare(
      `SELECT reviews.*, clients.name AS resolved_client_name
       FROM reviews LEFT JOIN clients ON clients.id = reviews.client_id
       WHERE reviews.package_slug = ? AND reviews.status = 'published'
       ORDER BY reviews.created_at DESC`
    ).bind(packageSlug).all<Review & { resolved_client_name: string | null }>()

    return results.map(({ resolved_client_name, ...review }) => ({
      ...review,
      reviewer_name: review.client_name_other ?? resolved_client_name ?? 'Guest',
    }))
  })

  publishedReviewsCache.set(packageSlug, promise)
  // Don't let a genuine failure poison the cache for the rest of the
  // process -- a later call for the same slug gets a fresh attempt instead
  // of permanently reusing a rejected promise.
  promise.catch(() => publishedReviewsCache.delete(packageSlug))
  return promise
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
