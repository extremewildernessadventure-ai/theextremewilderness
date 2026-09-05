import { describe, it, expect } from 'vitest'
import { isVerifiedReview } from './reviews'

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
