import { describe, it, expect } from 'vitest'
import { buildCampsRoster } from './safariCamps'
import type { ItineraryDay } from '@/data/packages'

describe('buildCampsRoster', () => {
  it('groups lodges by tier, in trail/reserve/sovereign/luxury/ultraLuxury order', () => {
    const itinerary: ItineraryDay[] = [
      {
        day: 1, title: 'Arrival', description: '', accommodation: '', meals: '',
        accommodationByTier: {
          trail: { name: 'Trail Camp A', image: '/a.jpg', amenities: ['Wifi'] },
          sovereign: { name: 'Sovereign Lodge A', image: '/b.jpg', amenities: ['Pool'] },
        },
      },
      {
        day: 2, title: 'Day 2', description: '', accommodation: '', meals: '',
        accommodationByTier: {
          trail: { name: 'Trail Camp B', image: '/c.jpg', amenities: [] },
        },
        accommodationByFamilyTier: {
          luxury: { name: 'Family Lodge', image: '/d.jpg', amenities: [] },
        },
      },
    ]

    const roster = buildCampsRoster(itinerary)
    expect(roster.map((r) => r.tier)).toEqual(['trail', 'sovereign', 'luxury'])
    expect(roster.find((r) => r.tier === 'trail')?.lodges.map((l) => l.name)).toEqual(['Trail Camp A', 'Trail Camp B'])
  })

  it('deduplicates the same lodge named across multiple days', () => {
    const itinerary: ItineraryDay[] = [
      { day: 1, title: 'A', description: '', accommodation: '', meals: '', accommodationByTier: { reserve: { name: 'Same Camp', image: '/x.jpg', amenities: ['Pool'] } } },
      { day: 2, title: 'B', description: '', accommodation: '', meals: '', accommodationByTier: { reserve: { name: 'Same Camp', image: '/x.jpg', amenities: ['Pool'] } } },
      { day: 3, title: 'C', description: '', accommodation: '', meals: '', accommodationByTier: { reserve: { name: 'Different Camp', image: '/y.jpg', amenities: [] } } },
    ]

    const roster = buildCampsRoster(itinerary)
    expect(roster).toHaveLength(1)
    expect(roster[0].lodges).toHaveLength(2)
    expect(roster[0].lodges.map((l) => l.name)).toEqual(['Same Camp', 'Different Camp'])
  })

  it('returns an empty array for an itinerary with no tier-specific accommodation data', () => {
    const itinerary: ItineraryDay[] = [
      { day: 1, title: 'Day 1', description: '', accommodation: 'Some Lodge', meals: 'Full board' },
    ]
    expect(buildCampsRoster(itinerary)).toEqual([])
  })

  it('handles an empty itinerary', () => {
    expect(buildCampsRoster([])).toEqual([])
  })
})
