import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { D1Database } from './db'

const { getDbMock } = vi.hoisted(() => ({ getDbMock: vi.fn() }))
vi.mock('./db', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./db')>()),
  getDb: getDbMock,
}))

const { isVerifiedReview, computeReviewStats, getPublishedReviewsForPackage } = await import('./reviews')

describe('isVerifiedReview', () => {
  it('is verified when linked to a real client', () => {
    expect(isVerifiedReview({ client_id: 42, booking_id: null })).toBe(true)
  })

  it('is verified when linked to a real booking', () => {
    expect(isVerifiedReview({ client_id: null, booking_id: 7 })).toBe(true)
  })

  it('is NOT verified for an anonymous public submission (no real link)', () => {
    expect(isVerifiedReview({ client_id: null, booking_id: null })).toBe(false)
  })
})

describe('computeReviewStats', () => {
  it('returns zeroed stats for no reviews', () => {
    expect(computeReviewStats([])).toEqual({ count: 0, average: 0, distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } })
  })

  it('computes a real average and per-star distribution', () => {
    const stats = computeReviewStats([{ rating: 5 }, { rating: 5 }, { rating: 4 }, { rating: 3 }])
    expect(stats.count).toBe(4)
    expect(stats.average).toBeCloseTo(4.25)
    expect(stats.distribution).toEqual({ 1: 0, 2: 0, 3: 1, 4: 1, 5: 2 })
  })

  it('never synthesizes sub-category ratings -- only the real single rating field is aggregated', () => {
    const stats = computeReviewStats([{ rating: 5 }])
    expect(Object.keys(stats).sort()).toEqual(['average', 'count', 'distribution'])
  })
})

// These exercise the live-D1 branch (NEXT_PHASE unset in the test
// environment, same as `next dev` -- see reviews.ts's own NEXT_PHASE branch
// for why the build-phase path reads a static snapshot instead and is
// covered separately by generate-review-data.ts, not here).
describe('getPublishedReviewsForPackage (live D1 branch)', () => {
  beforeEach(() => {
    getDbMock.mockReset()
  })

  // Reviews aren't locale-specific -- every one of the 16 locale variants
  // of a package's detail page needs the same rows. Without the cache, a
  // live (non-build-phase) call site would fire the identical query
  // repeatedly for no reason; this confirms only one real query happens
  // per slug.
  it('caches results per slug -- a second call for the same slug does not re-query the db', async () => {
    const row = {
      id: 1, client_id: null, client_name_other: 'Jane Doe', booking_id: null, booking_ref_other: null,
      rating: 5, quote_text: 'Wonderful trip!', source: null, park_tag: null,
      package_slug: 'unique-test-slug-a', status: 'published' as const, created_at: '2026-01-01',
      resolved_client_name: null,
    }
    const all = vi.fn().mockResolvedValue({ results: [row] })
    const bind = vi.fn().mockReturnValue({ all })
    const prepare = vi.fn().mockReturnValue({ bind })
    getDbMock.mockResolvedValue({ prepare, batch: vi.fn() } as unknown as D1Database)

    const first = await getPublishedReviewsForPackage('unique-test-slug-a')
    const second = await getPublishedReviewsForPackage('unique-test-slug-a')

    expect(prepare).toHaveBeenCalledTimes(1)
    expect(first).toEqual(second)
    expect(first[0].reviewer_name).toBe('Jane Doe')
  })

  it('queries again for a different slug (cache is keyed per slug, not global)', async () => {
    const emptyAll = vi.fn().mockResolvedValue({ results: [] })
    const bind = vi.fn().mockReturnValue({ all: emptyAll })
    const prepare = vi.fn().mockReturnValue({ bind })
    getDbMock.mockResolvedValue({ prepare, batch: vi.fn() } as unknown as D1Database)

    await getPublishedReviewsForPackage('unique-test-slug-b')
    await getPublishedReviewsForPackage('unique-test-slug-c')

    expect(prepare).toHaveBeenCalledTimes(2)
    expect(bind).toHaveBeenCalledWith('unique-test-slug-b')
    expect(bind).toHaveBeenCalledWith('unique-test-slug-c')
  })

  it('retries a transient failure and succeeds without throwing', async () => {
    const all = vi.fn()
      .mockRejectedValueOnce(new Error('D1_ERROR: internal error'))
      .mockResolvedValueOnce({ results: [] })
    const bind = vi.fn().mockReturnValue({ all })
    const prepare = vi.fn().mockReturnValue({ bind })
    getDbMock.mockResolvedValue({ prepare, batch: vi.fn() } as unknown as D1Database)

    const result = await getPublishedReviewsForPackage('unique-test-slug-retry')
    expect(result).toEqual([])
    expect(all).toHaveBeenCalledTimes(2)
  })
})
