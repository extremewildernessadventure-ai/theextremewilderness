import { describe, it, expect } from 'vitest'
import { computeQuoteTotalCost } from './quotes'

describe('computeQuoteTotalCost', () => {
  it('returns null when no price has been entered yet', () => {
    expect(computeQuoteTotalCost({ adults: 2, children: 0, price_per_adult: null, price_per_child: null })).toBeNull()
  })

  it('computes an adults-only total', () => {
    expect(computeQuoteTotalCost({ adults: 2, children: 0, price_per_adult: 1500, price_per_child: null })).toBe(3000)
  })

  it('computes an adults + children total with distinct rates', () => {
    expect(computeQuoteTotalCost({ adults: 2, children: 1, price_per_adult: 1500, price_per_child: 500 })).toBe(3500)
  })

  it('treats a missing price_per_child as free rather than throwing (children=0 is the normal case that hits this)', () => {
    expect(computeQuoteTotalCost({ adults: 2, children: 0, price_per_adult: 1500, price_per_child: null })).toBe(3000)
  })

  it('avoids float-sum drift', () => {
    expect(computeQuoteTotalCost({ adults: 3, children: 2, price_per_adult: 333.33, price_per_child: 111.11 }))
      .toBeCloseTo(1222.21, 2)
  })
})
