import { describe, expect, it } from 'vitest'
import { buildCatalog, buildSystemPrompt, filterKnownSlugs, RESULTS_SENTINEL } from './aiCatalog'
import type { SafariPackage } from '@/data/packages'
import type { Destination } from '@/data/destinations'

const pkg: SafariPackage = {
  slug: 'test-package',
  name: 'Test Package',
  duration: 7,
  destinations: ['serengeti'],
  type: 'wildlife',
  priceFrom: 1000,
  groupSize: { min: 1, max: 8 },
  highlights: ['Big Five'],
  itinerary: [],
  included: [],
  excluded: [],
  heroImage: '/img.jpg',
  gallery: [],
  bestFor: ['couples', 'families', 'photographers', 'extra'],
}

const destination: Destination = {
  slug: 'serengeti',
  name: 'Serengeti National Park',
  region: 'northern',
  country: 'tanzania',
  heroImage: '/img.jpg',
  tagline: 'Endless plains',
  description: 'A very long description that should not appear in the catalog at all.',
  highlights: ['Migration', 'Big cats', 'Hot air balloons', 'Extra highlight'],
  wildlife: ['Lion'],
  bestMonths: [1, 2],
  packages: ['test-package'],
  coordinates: { lat: 0, lng: 0 },
  heatLevel: 5,
  mapRegion: 'north',
}

describe('buildCatalog', () => {
  it('trims destinations/highlights/bestFor and pulls in tags', () => {
    const catalog = buildCatalog([pkg], [destination], { 'test-package': ['bigfive', 'classic'] })

    expect(catalog.packages).toHaveLength(1)
    expect(catalog.packages[0].tags).toEqual(['bigfive', 'classic'])
    expect(catalog.packages[0].bestFor).toHaveLength(3)
    expect(catalog.destinations).toHaveLength(1)
    expect(catalog.destinations[0].highlights).toHaveLength(3)
    expect(catalog.destinations[0]).not.toHaveProperty('description')
  })

  it('defaults tags to an empty array when a package has none', () => {
    const catalog = buildCatalog([pkg], [destination], {})
    expect(catalog.packages[0].tags).toEqual([])
  })
})

describe('buildSystemPrompt', () => {
  it('includes the sentinel, catalog JSON and requested language', () => {
    const catalog = buildCatalog([pkg], [destination], {})
    const prompt = buildSystemPrompt(catalog, 'de')

    expect(prompt).toContain(RESULTS_SENTINEL)
    expect(prompt).toContain('German')
    expect(prompt).toContain('"test-package"')
  })

  it('falls back to English for an unknown locale', () => {
    const catalog = buildCatalog([], [], {})
    expect(buildSystemPrompt(catalog, 'xx')).toContain('English')
  })
})

describe('filterKnownSlugs', () => {
  it('drops slugs not present in the valid set', () => {
    const valid = new Set(['a', 'b'])
    expect(filterKnownSlugs(['a', 'c', 'b'], valid)).toEqual(['a', 'b'])
  })

  it('returns an empty array when nothing matches', () => {
    expect(filterKnownSlugs(['x', 'y'], new Set())).toEqual([])
  })
})
