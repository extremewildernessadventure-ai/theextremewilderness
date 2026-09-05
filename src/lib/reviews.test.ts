import { describe, it, expect } from 'vitest'
import { isVerifiedReview, computeReviewStats } from './reviews'

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
