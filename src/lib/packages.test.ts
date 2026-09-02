import { describe, it, expect } from 'vitest'
import type { D1Database, D1PreparedStatement } from './db'
import type { SafariPackage } from '@/data/packages'
import { getFullPackage, createPackage, insertItinerary } from './packages'

// In-memory D1 fake for this file's tests only. Handles the query shapes
// this library actually issues -- single-table `SELECT ... WHERE col = ?`
// / `WHERE col IN (...)` (optionally `ORDER BY`), and `INSERT INTO table
// (cols...) VALUES (...)` with auto-incrementing per-table ids returned as
// meta.last_row_id -- without pulling in a real SQLite binding. Good
// enough to prove the row<->SafariPackage conversion logic itself, not D1
// behavior (that's covered separately by applying the migration to a real
// local D1 instance, already verified).
function makeFakeDb(seed: Record<string, Record<string, unknown>[]> = {}): D1Database {
  const tables: Record<string, Record<string, unknown>[]> = seed
  const nextId: Record<string, number> = {}
  for (const [table, rows] of Object.entries(tables)) {
    nextId[table] = rows.reduce((max, r) => Math.max(max, Number(r.id) || 0), 0) + 1
  }

  return {
    prepare(sql: string): D1PreparedStatement {
      const insertMatch = sql.match(/INSERT INTO (\w+)\s*\(([^)]+)\)/)
      const selectMatch = !insertMatch ? sql.match(/FROM (\w+)/) : null
      const whereCol = sql.match(/WHERE (\w+) (=|IN)/)?.[1]
      const orderCol = sql.match(/ORDER BY (\w+)/)?.[1]
      let bound: unknown[] = []
      const stmt: D1PreparedStatement = {
        bind(...values: unknown[]) {
          bound = values
          return stmt
        },
        async all<T>() {
          if (!selectMatch) return { results: [] as T[] }
          let rows = tables[selectMatch[1]] ?? []
          if (whereCol) rows = rows.filter((r) => bound.includes(r[whereCol]))
          if (orderCol) rows = [...rows].sort((a, b) => Number(a[orderCol]) - Number(b[orderCol]))
          return { results: rows as T[] }
        },
        async first<T>() {
          if (!selectMatch) return null
          let rows = tables[selectMatch[1]] ?? []
          if (whereCol) rows = rows.filter((r) => bound.includes(r[whereCol]))
          return (rows[0] as T) ?? null
        },
        async run() {
          if (!insertMatch) return { success: true }
          const table = insertMatch[1]
          const cols = insertMatch[2].split(',').map((c) => c.trim())
          const id = nextId[table] ?? 1
          nextId[table] = id + 1
          const row: Record<string, unknown> = { id }
          cols.forEach((col, i) => { row[col] = bound[i] })
          tables[table] = tables[table] ?? []
          tables[table].push(row)
          return { success: true, meta: { last_row_id: id } }
        },
      }
      return stmt
    },
    async batch<T>(statements: D1PreparedStatement[]) {
      const results = []
      for (const s of statements) {
        await s.run()
        results.push({ success: true, results: [] as T[] })
      }
      return results
    },
  }
}

describe('getFullPackage', () => {
  it('returns null for an unknown slug', async () => {
    const db = makeFakeDb({ packages: [] })
    expect(await getFullPackage(db, 'nope')).toBeNull()
  })

  it('reassembles a Trail/Reserve/Sovereign package with pricing tiers and faq', async () => {
    const db = makeFakeDb({
      packages: [{
        id: 1, slug: 'test-safari', name: 'Test Safari', duration: 3, type: 'wildlife',
        price_from: 1000, group_size_min: 2, group_size_max: 8, hero_image: '/hero.jpg',
        hero_image_alt: null, badge: 'bestseller', tagline: 'A tagline', best_time_to_travel: null,
        why_different_heading: null, why_different_paragraphs: null, destination_highlights: null,
        notes: null, meta_title: null, meta_description: null, pricing_tiers_provisional: 0,
        destinations: '["serengeti"]', highlights: '["Big Five"]', best_for: '["Families"]',
        overview: null, included: '["Guide"]', excluded: '["Flights"]',
        included_categorized: null, excluded_categorized: null, status: 'published',
        created_at: '2026-01-01', updated_at: null,
      }],
      package_gallery: [
        { id: 1, package_id: 1, image: '/g1.jpg', alt: 'Gallery one', sort_order: 0 },
      ],
      package_itinerary_days: [
        { id: 10, package_id: 1, day_number: 1, title: 'Arrival', description: 'Land and transfer',
          accommodation: 'Lodge', meals: 'D', insider_fact: null, location: 'Arusha', sort_order: 0 },
      ],
      package_itinerary_tier_stays: [
        { id: 100, itinerary_day_id: 10, tier: 'trail', lodge_name: 'Trail Camp', image: '/trail.jpg', amenities: '["wifi"]' },
        { id: 101, itinerary_day_id: 10, tier: 'sovereign', lodge_name: 'Sovereign Lodge', image: '/sov.jpg', amenities: '["pool"]' },
      ],
      package_pricing_tiers: [
        { id: 1000, package_id: 1, pax: 2, season: 'high', trail_price: 500, reserve_price: 700, sovereign_price: 900, sort_order: 0 },
      ],
      package_family_pricing: [],
      package_faq: [
        { id: 1, package_id: 1, question: 'Is it safe?', answer: 'Yes.', sort_order: 0 },
      ],
    })

    const pkg = await getFullPackage(db, 'test-safari')
    expect(pkg).not.toBeNull()
    expect(pkg!.slug).toBe('test-safari')
    expect(pkg!.gallery).toEqual([{ src: '/g1.jpg', alt: 'Gallery one' }])
    expect(pkg!.badge).toBe('bestseller')
    expect(pkg!.itinerary).toHaveLength(1)
    expect(pkg!.itinerary[0].accommodationByTier?.trail).toEqual({ name: 'Trail Camp', image: '/trail.jpg', amenities: ['wifi'] })
    expect(pkg!.itinerary[0].accommodationByTier?.sovereign).toEqual({ name: 'Sovereign Lodge', image: '/sov.jpg', amenities: ['pool'] })
    expect(pkg!.itinerary[0].accommodationByTier?.reserve).toBeUndefined()
    expect(pkg!.itinerary[0].accommodationByFamilyTier).toBeUndefined()
    expect(pkg!.pricingTiers).toEqual([{ pax: 2, season: 'high', trail: 500, reserve: 700, sovereign: 900 }])
    expect(pkg!.familyPricing).toBeUndefined()
    expect(pkg!.faq).toEqual([{ q: 'Is it safe?', a: 'Yes.' }])
  })

  it('reassembles a family-tier package with familyPricing instead of pricingTiers', async () => {
    const db = makeFakeDb({
      packages: [{
        id: 2, slug: 'family-safari', name: 'Family Safari', duration: 10, type: 'wildlife',
        price_from: 5000, group_size_min: 2, group_size_max: 12, hero_image: '/hero2.jpg',
        hero_image_alt: 'Family on safari', badge: null, tagline: null, best_time_to_travel: 'Jun-Sep',
        why_different_heading: 'What sets it apart', why_different_paragraphs: '["Para one"]',
        destination_highlights: '{"heading":"Where you go","items":[{"title":"T","text":"X"}]}',
        notes: '["Bring sunscreen"]', meta_title: 'Meta title', meta_description: 'Meta description',
        pricing_tiers_provisional: 1, destinations: '["tarangire"]', highlights: '["Wildlife"]',
        best_for: '["Families"]', overview: '["Overview line"]', included: '["Meals"]',
        excluded: '["Visa"]', included_categorized: '{"transfers":["Airport pickup"]}',
        excluded_categorized: '["Tips"]', status: 'draft', created_at: '2026-01-02', updated_at: '2026-01-03',
      }],
      package_gallery: [],
      package_itinerary_days: [
        { id: 20, package_id: 2, day_number: 1, title: 'Day one', description: 'Desc',
          accommodation: 'Camp', meals: 'B,L,D', insider_fact: 'Fun fact', location: null, sort_order: 0 },
      ],
      package_itinerary_tier_stays: [
        { id: 200, itinerary_day_id: 20, tier: 'luxury', lodge_name: 'Luxury Camp', image: '/lux.jpg', amenities: '[]' },
        { id: 201, itinerary_day_id: 20, tier: 'ultra_luxury', lodge_name: 'Ultra Camp', image: '/ultra.jpg', amenities: '[]' },
      ],
      package_pricing_tiers: [],
      package_family_pricing: [
        { id: 1, package_id: 2, season: 'high', family_size: 4, luxury_price: 8000, ultra_luxury_price: 12000, sort_order: 0 },
      ],
      package_faq: [],
    })

    const pkg = await getFullPackage(db, 'family-safari')
    expect(pkg).not.toBeNull()
    expect(pkg!.pricingTiers).toBeUndefined()
    expect(pkg!.pricingTiersProvisional).toBe(true)
    expect(pkg!.familyPricing).toEqual([{ season: 'high', familySize: 4, luxury: 8000, ultraLuxury: 12000 }])
    expect(pkg!.itinerary[0].accommodationByFamilyTier).toEqual({
      luxury: { name: 'Luxury Camp', image: '/lux.jpg', amenities: [] },
      ultraLuxury: { name: 'Ultra Camp', image: '/ultra.jpg', amenities: [] },
    })
    expect(pkg!.itinerary[0].accommodationByTier).toBeUndefined()
    expect(pkg!.itinerary[0].insiderFact).toBe('Fun fact')
    expect(pkg!.itinerary[0].location).toBeUndefined()
    expect(pkg!.whyDifferent).toEqual({ heading: 'What sets it apart', paragraphs: ['Para one'] })
    expect(pkg!.destinationHighlights).toEqual({ heading: 'Where you go', items: [{ title: 'T', text: 'X' }] })
    expect(pkg!.includedCategorized).toEqual({ transfers: ['Airport pickup'] })
    expect(pkg!.excludedCategorized).toEqual(['Tips'])
    expect(pkg!.faq).toBeUndefined()
    expect(pkg!.metaTitle).toBe('Meta title')
    expect(pkg!.metaDescription).toBe('Meta description')
  })
})

describe('createPackage + insertItinerary + getFullPackage round-trip', () => {
  it('reproduces the original SafariPackage exactly, field for field', async () => {
    const original: SafariPackage = {
      slug: 'round-trip-safari',
      name: 'Round Trip Safari',
      duration: 4,
      destinations: ['serengeti', 'ngorongoro'],
      type: 'wildlife',
      priceFrom: 2500,
      groupSize: { min: 2, max: 6 },
      highlights: ['Big Five', 'Crater floor drive'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival',
          description: 'Fly in, transfer to camp',
          accommodation: 'Serengeti Camp',
          meals: 'D',
          insiderFact: 'Best light is at dawn',
          location: 'Serengeti',
          accommodationByTier: {
            trail: { name: 'Trail Camp', image: '/trail.jpg', amenities: ['wifi', 'pool'] },
            reserve: { name: 'Reserve Camp', image: '/reserve.jpg', amenities: ['spa'] },
            sovereign: { name: 'Sovereign Camp', image: '/sovereign.jpg', amenities: ['butler'] },
          },
        },
        {
          day: 2,
          title: 'Crater floor',
          description: 'Full day game drive',
          accommodation: 'Crater Lodge',
          meals: 'B,L,D',
        },
      ],
      included: ['Park fees', 'Guide'],
      excluded: ['Flights', 'Visa'],
      heroImage: '/hero.jpg',
      heroImageAlt: 'Lions on the plains',
      gallery: [
        { src: '/g1.jpg', alt: 'Gallery one' },
        { src: '/g2.jpg', alt: 'Gallery two' },
      ],
      badge: 'popular',
      bestFor: ['Couples', 'First-timers'],
      pricingTiers: [
        { pax: 2, season: 'high', trail: 500, reserve: 700, sovereign: 1000 },
        { pax: 4, season: 'low', trail: 450 },
      ],
      pricingTiersProvisional: true,
      includedCategorized: { transfers: ['Airport pickup'], guidingGameDrives: ['Private vehicle'] },
      excludedCategorized: ['Tips', 'Souvenirs'],
      notes: ['Prices in USD'],
      faq: [{ q: 'Is it malaria risk?', a: 'Yes, take prophylaxis.' }],
      overview: ['A short overview line'],
      tagline: 'The classic circuit',
      bestTimeToTravel: 'Jun-Oct',
      whyDifferent: { heading: 'Why this trip', paragraphs: ['Because reasons', 'And more reasons'] },
      destinationHighlights: { heading: 'Where you go', items: [{ title: 'Serengeti', text: 'Endless plains' }] },
      metaTitle: 'Round Trip Safari | Extreme Wilderness',
      metaDescription: 'A 4-day round trip test safari.',
    }

    const db = makeFakeDb()
    const id = await createPackage(db, original, 'published')
    await insertItinerary(db, id, original.itinerary)

    const roundTripped = await getFullPackage(db, original.slug)
    expect(roundTripped).toEqual(original)
  })
})
