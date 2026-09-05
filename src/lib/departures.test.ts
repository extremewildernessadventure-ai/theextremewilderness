import { describe, it, expect } from 'vitest'
import { computeDepartureTotalCost } from './departures'

describe('computeDepartureTotalCost', () => {
  it('returns null when no price has been entered yet', () => {
    expect(computeDepartureTotalCost({ adults: 2, children: 0, price_per_adult: null, price_per_child: null })).toBeNull()
  })

  it('computes an adults-only total', () => {
    expect(computeDepartureTotalCost({ adults: 2, children: 0, price_per_adult: 1500, price_per_child: null })).toBe(3000)
  })

  it('computes an adults + children total with distinct rates', () => {
    expect(computeDepartureTotalCost({ adults: 2, children: 1, price_per_adult: 1500, price_per_child: 500 })).toBe(3500)
  })

  it('treats a missing price_per_child as free rather than throwing (children=0 is the normal case that hits this)', () => {
    expect(computeDepartureTotalCost({ adults: 2, children: 0, price_per_adult: 1500, price_per_child: null })).toBe(3000)
  })

  it('avoids float-sum drift', () => {
    expect(computeDepartureTotalCost({ adults: 3, children: 2, price_per_adult: 333.33, price_per_child: 111.11 }))
      .toBeCloseTo(1222.21, 2)
  })
})
