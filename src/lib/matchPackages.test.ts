import { describe, it, expect } from 'vitest'
import { matchPackages, MATCH_THRESHOLD, type MatchInput } from './matchPackages'
import type { SafariPackage } from '@/data/packages'

function pkg(overrides: Partial<SafariPackage>): SafariPackage {
  return {
    slug: 'test-pkg',
    name: 'Test Package',
    duration: 7,
    destinations: ['serengeti'],
    type: 'big_five_game_drives',
    priceFrom: 3500,
    groupSize: { min: 1, max: 8 },
    highlights: [],
    itinerary: [],
    included: [],
    excluded: [],
    heroImage: '',
    gallery: [],
    bestFor: [],
    ...overrides,
  }
}

const baseInput: MatchInput = {
  days: 7,
  month: 'Jul',
  interests: ['migration', 'bigfive'],
  pax: 2,
  style: 'luxury',
  pace: 'classic',
}

describe('matchPackages', () => {
  it('ranks an exact tag + duration match at the top', () => {
    const exact = pkg({ slug: 'exact', duration: 7 })
    const partial = pkg({ slug: 'partial', duration: 5 })
    const packages = [partial, exact]
    const tags = {
      exact: ['migration', 'bigfive'],
      partial: ['migration'],
    }

    const { results } = matchPackages(baseInput, packages, tags)

    expect(results[0].package.slug).toBe('exact')
    expect(results[0].matchedTags).toEqual(['migration', 'bigfive'])
  })

  it('flags pax over the package max as a soft warning, not an exclusion', () => {
    const small = pkg({ slug: 'small-group', duration: 7, groupSize: { min: 2, max: 2 } })
    const packages = [small]
    const tags = { 'small-group': ['migration', 'bigfive'] }

    const { results } = matchPackages({ ...baseInput, pax: 5 }, packages, tags)

    expect(results).toHaveLength(1)
    expect(results[0].paxWarning).toBe(true)
  })

  it('returns belowThreshold when no package scores above MATCH_THRESHOLD', () => {
    const unrelated = pkg({ slug: 'unrelated', duration: 12 })
    const packages = [unrelated]
    const tags = { unrelated: ['trekking'] }

    const { belowThreshold, results } = matchPackages(
      { ...baseInput, days: 5, interests: ['gorilla'] },
      packages,
      tags
    )

    expect(results[0].score).toBeLessThan(MATCH_THRESHOLD)
    expect(belowThreshold).toBe(true)
  })

  it('breaks ties on badge rank (bestseller > popular > new > none)', () => {
    const bestseller = pkg({ slug: 'a', duration: 7, badge: 'bestseller' })
    const popular = pkg({ slug: 'b', duration: 7, badge: 'popular' })
    const packages = [popular, bestseller]
    const tags = { a: ['migration', 'bigfive'], b: ['migration', 'bigfive'] }

    const { results } = matchPackages(baseInput, packages, tags)

    expect(results[0].score).toBe(results[1].score)
    expect(results[0].package.slug).toBe('a')
  })
})
