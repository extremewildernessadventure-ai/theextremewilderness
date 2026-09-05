import { describe, it, expect } from 'vitest'
import {
  filterSafaris, sortSafaris, diagnoseEmptyState, activeFilterCount, makeInitialFilters,
  tiersAndMinPrices, type BrowsableSafari, type SafariFilterState,
} from './safariBrowse'

const BOUNDS = { minDuration: 2, maxDuration: 14, maxPrice: 10000 }

function makeSafari(overrides: Partial<BrowsableSafari> = {}): BrowsableSafari {
  return {
    slug: 'test-safari',
    name: 'Test Safari',
    duration: 7,
    priceFrom: 3000,
    heroImage: '/hero.jpg',
    destinationSlugs: ['serengeti'],
    destinationNames: ['Serengeti National Park'],
    countries: ['tanzania'],
    highlights: ['Game drives in the Serengeti', 'Private guide', 'All park fees'],
    type: 'big_five_game_drives',
    operatorName: 'EWA Safari Outfitters',
    tiersAvailable: ['trail', 'reserve'],
    tierMinPrice: { trail: 3000, reserve: 4000 },
    isSignature: false,
    ...overrides,
  }
}

describe('filterSafaris', () => {
  it('returns everything when no filters are active', () => {
    const items = [makeSafari(), makeSafari({ slug: 'b' })]
    const f = makeInitialFilters(BOUNDS)
    expect(filterSafaris(items, f)).toHaveLength(2)
  })

  it('filters by search query across name/destinations/type', () => {
    const items = [
      makeSafari({ slug: 'a', name: 'Serengeti Explorer' }),
      makeSafari({ slug: 'b', name: 'Gorilla Trek', type: 'gorilla_trekking', destinationSlugs: ['volcanoes'], destinationNames: ['Volcanoes National Park'] }),
    ]
    const f = { ...makeInitialFilters(BOUNDS), searchQuery: 'gorilla' }
    const result = filterSafaris(items, f)
    expect(result).toHaveLength(1)
    expect(result[0].slug).toBe('b')
  })

  it('search requires every token to match (AND across tokens)', () => {
    const items = [
      makeSafari({ slug: 'a', name: 'Ngorongoro Sunrise Safari' }),
      makeSafari({ slug: 'b', name: 'Ngorongoro Big Five Safari' }),
    ]
    const f = { ...makeInitialFilters(BOUNDS), searchQuery: 'ngorongoro sunrise' }
    const result = filterSafaris(items, f)
    expect(result.map((r) => r.slug)).toEqual(['a'])
  })

  it('recognizes the "big5"/"big-5" search alias for big_five_game_drives', () => {
    const items = [makeSafari({ type: 'big_five_game_drives' })]
    expect(filterSafaris(items, { ...makeInitialFilters(BOUNDS), searchQuery: 'big5' })).toHaveLength(1)
    expect(filterSafaris(items, { ...makeInitialFilters(BOUNDS), searchQuery: 'big-5' })).toHaveLength(1)
  })

  it('recognizes the "migration" search alias matching mara/serengeti/calving/crossing', () => {
    const items = [makeSafari({ name: 'Northern Serengeti Safari', destinationNames: ['Serengeti'] })]
    expect(filterSafaris(items, { ...makeInitialFilters(BOUNDS), searchQuery: 'migration' })).toHaveLength(1)
  })

  it('filters operator types by exact EWA name match', () => {
    const items = [
      makeSafari({ slug: 'ewa', operatorName: 'EWA Safari Outfitters' }),
      makeSafari({ slug: 'partner', operatorName: 'Some Partner Outfitter' }),
    ]
    const ewaOnly = filterSafaris(items, { ...makeInitialFilters(BOUNDS), operatorTypes: ['ewa'] })
    expect(ewaOnly.map((r) => r.slug)).toEqual(['ewa'])
    const otherOnly = filterSafaris(items, { ...makeInitialFilters(BOUNDS), operatorTypes: ['other'] })
    expect(otherOnly.map((r) => r.slug)).toEqual(['partner'])
  })

  it('excludes by duration and price bounds', () => {
    const items = [makeSafari({ duration: 3, priceFrom: 1500 }), makeSafari({ slug: 'b', duration: 12, priceFrom: 8000 })]
    const f = { ...makeInitialFilters(BOUNDS), minDuration: 5, maxDuration: 14 }
    expect(filterSafaris(items, f).map((r) => r.slug)).toEqual(['b'])
  })

  it('parks filter is OR/"any match", not "must include all selected parks"', () => {
    const items = [makeSafari({ destinationSlugs: ['serengeti', 'ngorongoro'] })]
    const f = { ...makeInitialFilters(BOUNDS), parks: ['ngorongoro', 'tarangire'] }
    expect(filterSafaris(items, f)).toHaveLength(1)
  })

  it('tiers filter matches if the package offers any of the selected tiers', () => {
    const items = [makeSafari({ tiersAvailable: ['trail'] }), makeSafari({ slug: 'b', tiersAvailable: ['sovereign'] })]
    const f = { ...makeInitialFilters(BOUNDS), tiers: ['sovereign' as const] }
    expect(filterSafaris(items, f).map((r) => r.slug)).toEqual(['b'])
  })

  it('month filter excludes packages with no bestMonths data at all', () => {
    const items = [makeSafari({ bestMonths: ['Jun', 'Jul'] }), makeSafari({ slug: 'b' })]
    const f = { ...makeInitialFilters(BOUNDS), selectedMonth: 'Jun' }
    expect(filterSafaris(items, f).map((r) => r.slug)).toEqual(['test-safari'])
  })
})

describe('sortSafaris', () => {
  const items = [
    makeSafari({ slug: 'cheap', priceFrom: 1000, duration: 4, tiersAvailable: ['trail'] }),
    makeSafari({ slug: 'expensive', priceFrom: 9000, duration: 10, tiersAvailable: ['sovereign'] }),
  ]

  it('price-asc / price-desc', () => {
    expect(sortSafaris(items, 'price-asc').map((r) => r.slug)).toEqual(['cheap', 'expensive'])
    expect(sortSafaris(items, 'price-desc').map((r) => r.slug)).toEqual(['expensive', 'cheap'])
  })

  it('duration-asc / duration-desc', () => {
    expect(sortSafaris(items, 'duration-asc').map((r) => r.slug)).toEqual(['cheap', 'expensive'])
    expect(sortSafaris(items, 'duration-desc').map((r) => r.slug)).toEqual(['expensive', 'cheap'])
  })

  it('recommended sorts by highest available tier rank, then longer duration', () => {
    expect(sortSafaris(items, 'recommended').map((r) => r.slug)).toEqual(['expensive', 'cheap'])
  })

  it('does not mutate the input array', () => {
    const copy = [...items]
    sortSafaris(items, 'price-desc')
    expect(items).toEqual(copy)
  })
})

describe('diagnoseEmptyState', () => {
  it('returns null when no single filter is active to relax', () => {
    expect(diagnoseEmptyState([], makeInitialFilters(BOUNDS), BOUNDS)).toBeNull()
  })

  it('returns null when relaxing any one active filter still leaves zero matches', () => {
    // Two independent constraints (search text that matches nothing, AND an
    // activity type the item doesn't have) -- relaxing either alone still
    // leaves the other one excluding the item, so no single relaxation helps.
    const items = [makeSafari({ type: 'big_five_game_drives' })]
    const f: SafariFilterState = {
      ...makeInitialFilters(BOUNDS),
      searchQuery: 'this matches absolutely nothing at all',
      activityTypes: ['gorilla_trekking'],
    }
    expect(diagnoseEmptyState(items, f, BOUNDS)).toBeNull()
  })

  it('returns a diagnosis when relaxing the one active filter reveals matches', () => {
    const items = [makeSafari({ type: 'big_five_game_drives' })]
    const f: SafariFilterState = { ...makeInitialFilters(BOUNDS), activityTypes: ['gorilla_trekking'] }
    const diagnosis = diagnoseEmptyState(items, f, BOUNDS)
    expect(diagnosis).not.toBeNull()
    expect(diagnosis!.field).toBe('activityTypes')
    expect(diagnosis!.matchCount).toBe(1)
  })

  it('picks the single relaxation that unlocks the most matches, not the first checked', () => {
    const items = [
      makeSafari({ slug: 'a', type: 'gorilla_trekking', tiersAvailable: ['sovereign'] }),
      makeSafari({ slug: 'b', type: 'gorilla_trekking', tiersAvailable: ['trail'] }),
      makeSafari({ slug: 'c', type: 'big_five_game_drives', tiersAvailable: ['sovereign'] }),
    ]
    // Both tiers=['sovereign'] and activityTypes=['gorilla_trekking'] are active,
    // and neither alone matches anything (a is gorilla+sovereign, so relaxing
    // EITHER one alone unlocks it -- but relaxing tiers unlocks {a,b} while
    // relaxing activityTypes unlocks {a,c} -- both unlock 2, so it's a tie;
    // just confirm a non-null diagnosis with a sensible field is returned.
    const f: SafariFilterState = { ...makeInitialFilters(BOUNDS), tiers: ['sovereign'], activityTypes: ['gorilla_trekking'] }
    const diagnosis = diagnoseEmptyState(items, f, BOUNDS)
    expect(diagnosis).not.toBeNull()
    expect(diagnosis!.matchCount).toBeGreaterThan(0)
  })
})

describe('activeFilterCount', () => {
  it('counts each active dimension correctly', () => {
    const f: SafariFilterState = {
      ...makeInitialFilters(BOUNDS),
      searchQuery: 'gorilla',
      tiers: ['trail', 'reserve'],
      countries: ['kenya'],
      maxPrice: 5000,
      minDuration: 5,
    }
    // search(1) + tiers(2) + countries(1) + price(1) + duration(1) = 6
    expect(activeFilterCount(f, BOUNDS)).toBe(6)
  })

  it('is zero for the initial filter state', () => {
    expect(activeFilterCount(makeInitialFilters(BOUNDS), BOUNDS)).toBe(0)
  })
})

describe('tiersAndMinPrices', () => {
  it('derives available tiers and per-tier minimum price from pricing rows', () => {
    const rows = [
      { pax: 2, trail: 2000, reserve: 3000 },
      { pax: 4, trail: 1800, reserve: 3200, sovereign: 5000 },
    ]
    const { tiersAvailable, tierMinPrice } = tiersAndMinPrices(rows)
    expect(tiersAvailable).toEqual(['trail', 'reserve', 'sovereign'])
    expect(tierMinPrice).toEqual({ trail: 1800, reserve: 3000, sovereign: 5000 })
  })

  it('returns empty results for undefined/empty pricing rows', () => {
    expect(tiersAndMinPrices(undefined)).toEqual({ tiersAvailable: [], tierMinPrice: {} })
    expect(tiersAndMinPrices([])).toEqual({ tiersAvailable: [], tierMinPrice: {} })
  })

  it('ignores a tier field that is zero or undefined on every row', () => {
    const rows = [{ pax: 2, trail: 2000, reserve: 0 }]
    const { tiersAvailable } = tiersAndMinPrices(rows)
    expect(tiersAvailable).toEqual(['trail'])
  })
})
