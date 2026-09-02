import type { D1Database, D1PreparedStatement } from './db'
import type {
  SafariPackage,
  ItineraryDay,
  TierStay,
  PricingTierRow,
  FamilyPricingRow,
} from '@/data/packages'

// D1 row shapes for the admin-managed package catalog (migration
// 0029_create_packages.sql). Mirrors SafariPackage (src/data/packages.ts)
// field-for-field — see getFullPackage() below for the function that
// reassembles these rows back into that exact shape. Not read by anything
// live yet; part of the staged packages-to-D1/R2 migration.

export type PackageStatus = 'draft' | 'published'
export type PackageBadge = 'bestseller' | 'new' | 'popular'
export type PackageType = 'wildlife' | 'trekking' | 'beach' | 'combination'
export type PackageSeason = 'high' | 'low'
// Covers both the Wilderness Trail/Reserve/Sovereign vocabulary and the
// Luxury/Ultra-Luxury family-tier vocabulary in one column — see the
// migration's own comment on package_itinerary_tier_stays for why.
export type TierStayTier = 'trail' | 'reserve' | 'sovereign' | 'luxury' | 'ultra_luxury'

export interface PackageRow {
  id: number
  slug: string
  name: string
  duration: number
  type: PackageType
  price_from: number
  group_size_min: number
  group_size_max: number
  hero_image: string
  hero_image_alt: string | null
  badge: PackageBadge | null
  tagline: string | null
  best_time_to_travel: string | null
  why_different_heading: string | null
  why_different_paragraphs: string | null // JSON string[]
  destination_highlights: string | null // JSON {heading, items:[{title,text}]}
  notes: string | null // JSON string[]
  meta_title: string | null
  meta_description: string | null
  pricing_tiers_provisional: number // 0 | 1
  destinations: string // JSON string[]
  highlights: string // JSON string[]
  best_for: string // JSON string[]
  overview: string | null // JSON string[]
  included: string // JSON string[]
  excluded: string // JSON string[]
  included_categorized: string | null // JSON {transfers?, accommodationMeals?, guidingGameDrives?}
  excluded_categorized: string | null // JSON string[]
  status: PackageStatus
  created_at: string
  updated_at: string | null
}

export interface PackageGalleryRow {
  id: number
  package_id: number
  image: string
  alt: string
  sort_order: number
}

export interface PackageItineraryDayRow {
  id: number
  package_id: number
  day_number: number
  title: string
  description: string
  accommodation: string
  meals: string
  insider_fact: string | null
  location: string | null
  sort_order: number
}

export interface PackageItineraryTierStayRow {
  id: number
  itinerary_day_id: number
  tier: TierStayTier
  lodge_name: string
  image: string
  amenities: string // JSON string[]
}

export interface PackagePricingTierRow {
  id: number
  package_id: number
  pax: number
  season: PackageSeason | null
  trail_price: number | null
  reserve_price: number | null
  sovereign_price: number | null
  sort_order: number
}

export interface PackageFamilyPricingRow {
  id: number
  package_id: number
  season: PackageSeason
  family_size: number
  luxury_price: number
  ultra_luxury_price: number
  sort_order: number
}

export interface PackageFaqRow {
  id: number
  package_id: number
  question: string
  answer: string
  sort_order: number
}

// One row per (package, non-English locale) once AI-translated — see the
// migration's own comment for what payload holds and doesn't hold.
export interface PackageTranslationRow {
  id: number
  package_id: number
  locale: string
  payload: string // JSON — translated text fields only
  created_at: string
  updated_at: string | null
}

// Every JSON-string column above is written by this library and never by
// hand, so a parse failure here means real data corruption, not a bad
// input to validate against — surfacing it beats silently swallowing it
// into an empty array/undefined and shipping a quietly-wrong package page.
function parseJsonColumn<T>(raw: string | null, fallback: T): T {
  if (raw === null) return fallback
  return JSON.parse(raw) as T
}

export async function getPackageRowBySlug(db: D1Database, slug: string): Promise<PackageRow | null> {
  return db.prepare('SELECT * FROM packages WHERE slug = ?').bind(slug).first<PackageRow>()
}

export async function getPackageRowById(db: D1Database, id: number): Promise<PackageRow | null> {
  return db.prepare('SELECT * FROM packages WHERE id = ?').bind(id).first<PackageRow>()
}

// Admin list view — every package regardless of status, newest first.
// Deliberately not filtered to 'published' (that filter belongs to the
// build-pipeline read path once it exists, not the admin list).
export async function listPackageRows(db: D1Database): Promise<PackageRow[]> {
  const { results } = await db.prepare('SELECT * FROM packages ORDER BY created_at DESC').all<PackageRow>()
  return results
}

// Reassembles one package's rows back into the exact SafariPackage shape
// from src/data/packages.ts — the one function the eventual build-pipeline
// cutover (generate-locale-data.ts reading from D1 instead of the TS
// files) depends on for byte-identical output. Every optional SafariPackage
// field is only set when its underlying rows/columns are actually present,
// matching how the TS files themselves only set fields they need.
export async function getFullPackage(db: D1Database, slug: string): Promise<SafariPackage | null> {
  const row = await getPackageRowBySlug(db, slug)
  if (!row) return null

  const [galleryResult, dayRows, pricingTierRows, familyPricingRows, faqRows] = await Promise.all([
    db.prepare('SELECT * FROM package_gallery WHERE package_id = ? ORDER BY sort_order').bind(row.id).all<PackageGalleryRow>(),
    db.prepare('SELECT * FROM package_itinerary_days WHERE package_id = ? ORDER BY sort_order').bind(row.id).all<PackageItineraryDayRow>(),
    db.prepare('SELECT * FROM package_pricing_tiers WHERE package_id = ? ORDER BY sort_order').bind(row.id).all<PackagePricingTierRow>(),
    db.prepare('SELECT * FROM package_family_pricing WHERE package_id = ? ORDER BY sort_order').bind(row.id).all<PackageFamilyPricingRow>(),
    db.prepare('SELECT * FROM package_faq WHERE package_id = ? ORDER BY sort_order').bind(row.id).all<PackageFaqRow>(),
  ])

  const dayIds = dayRows.results.map((d) => d.id)
  const tierStaysByDayId = new Map<number, PackageItineraryTierStayRow[]>()
  if (dayIds.length > 0) {
    const placeholders = dayIds.map(() => '?').join(',')
    const { results: tierStayRows } = await db.prepare(
      `SELECT * FROM package_itinerary_tier_stays WHERE itinerary_day_id IN (${placeholders})`
    ).bind(...dayIds).all<PackageItineraryTierStayRow>()
    for (const stay of tierStayRows) {
      const list = tierStaysByDayId.get(stay.itinerary_day_id) ?? []
      list.push(stay)
      tierStaysByDayId.set(stay.itinerary_day_id, list)
    }
  }

  const toTierStay = (stay: PackageItineraryTierStayRow): TierStay => ({
    name: stay.lodge_name,
    image: stay.image,
    amenities: parseJsonColumn<string[]>(stay.amenities, []),
  })

  const itinerary: ItineraryDay[] = dayRows.results.map((day) => {
    const stays = tierStaysByDayId.get(day.id) ?? []
    const byTier = stays.filter((s) => s.tier === 'trail' || s.tier === 'reserve' || s.tier === 'sovereign')
    const byFamilyTier = stays.filter((s) => s.tier === 'luxury' || s.tier === 'ultra_luxury')

    const entry: ItineraryDay = {
      day: day.day_number,
      title: day.title,
      description: day.description,
      accommodation: day.accommodation,
      meals: day.meals,
    }
    if (day.insider_fact !== null) entry.insiderFact = day.insider_fact
    if (day.location !== null) entry.location = day.location
    if (byTier.length > 0) {
      entry.accommodationByTier = {}
      for (const stay of byTier) {
        if (stay.tier === 'trail') entry.accommodationByTier.trail = toTierStay(stay)
        if (stay.tier === 'reserve') entry.accommodationByTier.reserve = toTierStay(stay)
        if (stay.tier === 'sovereign') entry.accommodationByTier.sovereign = toTierStay(stay)
      }
    }
    if (byFamilyTier.length > 0) {
      entry.accommodationByFamilyTier = {}
      for (const stay of byFamilyTier) {
        if (stay.tier === 'luxury') entry.accommodationByFamilyTier.luxury = toTierStay(stay)
        if (stay.tier === 'ultra_luxury') entry.accommodationByFamilyTier.ultraLuxury = toTierStay(stay)
      }
    }
    return entry
  })

  const pricingTiers: PricingTierRow[] = pricingTierRows.results.map((r) => {
    const tier: PricingTierRow = { pax: r.pax }
    if (r.season !== null) tier.season = r.season
    if (r.trail_price !== null) tier.trail = r.trail_price
    if (r.reserve_price !== null) tier.reserve = r.reserve_price
    if (r.sovereign_price !== null) tier.sovereign = r.sovereign_price
    return tier
  })

  const familyPricing: FamilyPricingRow[] = familyPricingRows.results.map((r) => ({
    season: r.season,
    familySize: r.family_size,
    luxury: r.luxury_price,
    ultraLuxury: r.ultra_luxury_price,
  }))

  const pkg: SafariPackage = {
    slug: row.slug,
    name: row.name,
    duration: row.duration,
    destinations: parseJsonColumn<string[]>(row.destinations, []),
    type: row.type,
    priceFrom: row.price_from,
    groupSize: { min: row.group_size_min, max: row.group_size_max },
    highlights: parseJsonColumn<string[]>(row.highlights, []),
    itinerary,
    included: parseJsonColumn<string[]>(row.included, []),
    excluded: parseJsonColumn<string[]>(row.excluded, []),
    heroImage: row.hero_image,
    gallery: galleryResult.results.map((g) => ({ src: g.image, alt: g.alt })),
    bestFor: parseJsonColumn<string[]>(row.best_for, []),
  }

  if (row.hero_image_alt !== null) pkg.heroImageAlt = row.hero_image_alt
  if (row.badge !== null) pkg.badge = row.badge
  if (pricingTiers.length > 0) pkg.pricingTiers = pricingTiers
  if (row.pricing_tiers_provisional === 1) pkg.pricingTiersProvisional = true
  if (row.included_categorized !== null) {
    pkg.includedCategorized = parseJsonColumn<NonNullable<SafariPackage['includedCategorized']>>(row.included_categorized, {})
  }
  if (row.excluded_categorized !== null) pkg.excludedCategorized = parseJsonColumn<string[]>(row.excluded_categorized, [])
  if (row.notes !== null) pkg.notes = parseJsonColumn<string[]>(row.notes, [])
  if (familyPricing.length > 0) pkg.familyPricing = familyPricing
  if (faqRows.results.length > 0) {
    pkg.faq = faqRows.results.map((f) => ({ q: f.question, a: f.answer }))
  }
  if (row.overview !== null) pkg.overview = parseJsonColumn<string[]>(row.overview, [])
  if (row.tagline !== null) pkg.tagline = row.tagline
  if (row.best_time_to_travel !== null) pkg.bestTimeToTravel = row.best_time_to_travel
  if (row.why_different_heading !== null) {
    pkg.whyDifferent = {
      heading: row.why_different_heading,
      paragraphs: parseJsonColumn<string[]>(row.why_different_paragraphs, []),
    }
  }
  if (row.destination_highlights !== null) {
    pkg.destinationHighlights = parseJsonColumn<NonNullable<SafariPackage['destinationHighlights']>>(
      row.destination_highlights,
      { heading: '', items: [] }
    )
  }
  if (row.meta_title !== null) pkg.metaTitle = row.meta_title
  if (row.meta_description !== null) pkg.metaDescription = row.meta_description

  return pkg
}

// Inserts one new package's parent row plus its simple flat child tables
// (gallery, pricing tiers, family pricing, faq — none of which need an
// id handed to a further-nested child, unlike itinerary days). Returns the
// new package's id; the caller is expected to follow up with
// insertItinerary() for the day-by-day itinerary + per-day tier stays.
// Takes the exact SafariPackage shape as input (not a separate Input type)
// since every field it needs already exists there under the right name —
// this is the same contract the migration script and the future admin
// form will both produce.
export async function createPackage(db: D1Database, pkg: SafariPackage, status: PackageStatus = 'draft'): Promise<number> {
  const result = await db.prepare(
    `INSERT INTO packages (
      slug, name, duration, type, price_from, group_size_min, group_size_max,
      hero_image, hero_image_alt, badge, tagline, best_time_to_travel,
      why_different_heading, why_different_paragraphs, destination_highlights,
      notes, meta_title, meta_description, pricing_tiers_provisional,
      destinations, highlights, best_for, overview, included, excluded,
      included_categorized, excluded_categorized, status
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
  ).bind(
    pkg.slug, pkg.name, pkg.duration, pkg.type, pkg.priceFrom, pkg.groupSize.min, pkg.groupSize.max,
    pkg.heroImage, pkg.heroImageAlt ?? null, pkg.badge ?? null, pkg.tagline ?? null, pkg.bestTimeToTravel ?? null,
    pkg.whyDifferent?.heading ?? null,
    pkg.whyDifferent ? JSON.stringify(pkg.whyDifferent.paragraphs) : null,
    pkg.destinationHighlights ? JSON.stringify(pkg.destinationHighlights) : null,
    pkg.notes ? JSON.stringify(pkg.notes) : null,
    pkg.metaTitle ?? null, pkg.metaDescription ?? null,
    pkg.pricingTiersProvisional ? 1 : 0,
    JSON.stringify(pkg.destinations), JSON.stringify(pkg.highlights), JSON.stringify(pkg.bestFor),
    pkg.overview ? JSON.stringify(pkg.overview) : null,
    JSON.stringify(pkg.included), JSON.stringify(pkg.excluded),
    pkg.includedCategorized ? JSON.stringify(pkg.includedCategorized) : null,
    pkg.excludedCategorized ? JSON.stringify(pkg.excludedCategorized) : null,
    status,
  ).run()

  const packageId = result.meta?.last_row_id
  if (!packageId) throw new Error(`createPackage(${pkg.slug}): insert did not return an id`)

  const statements: D1PreparedStatement[] = []
  pkg.gallery.forEach((g, i) => {
    statements.push(
      db.prepare('INSERT INTO package_gallery (package_id, image, alt, sort_order) VALUES (?,?,?,?)')
        .bind(packageId, g.src, g.alt, i)
    )
  })
  ;(pkg.pricingTiers ?? []).forEach((t, i) => {
    statements.push(
      db.prepare(
        'INSERT INTO package_pricing_tiers (package_id, pax, season, trail_price, reserve_price, sovereign_price, sort_order) VALUES (?,?,?,?,?,?,?)'
      ).bind(packageId, t.pax, t.season ?? null, t.trail ?? null, t.reserve ?? null, t.sovereign ?? null, i)
    )
  })
  ;(pkg.familyPricing ?? []).forEach((f, i) => {
    statements.push(
      db.prepare(
        'INSERT INTO package_family_pricing (package_id, season, family_size, luxury_price, ultra_luxury_price, sort_order) VALUES (?,?,?,?,?,?)'
      ).bind(packageId, f.season, f.familySize, f.luxury, f.ultraLuxury, i)
    )
  })
  ;(pkg.faq ?? []).forEach((f, i) => {
    statements.push(
      db.prepare('INSERT INTO package_faq (package_id, question, answer, sort_order) VALUES (?,?,?,?)')
        .bind(packageId, f.q, f.a, i)
    )
  })
  if (statements.length > 0) await db.batch(statements)

  return packageId
}

// Inserts one package's day-by-day itinerary + each day's per-tier
// lodging. Kept separate from createPackage() because, unlike the other
// child tables, each day's own id must be known (its INSERT must
// complete) before its tier-stay rows can reference it as
// itinerary_day_id -- so days are inserted one at a time rather than
// batched, with each day's tier stays batched right after it. Fine at
// this scale (a handful to ~15 days per package); not a hot path.
export async function insertItinerary(db: D1Database, packageId: number, days: ItineraryDay[]): Promise<void> {
  for (let i = 0; i < days.length; i++) {
    const day = days[i]
    const result = await db.prepare(
      `INSERT INTO package_itinerary_days
        (package_id, day_number, title, description, accommodation, meals, insider_fact, location, sort_order)
       VALUES (?,?,?,?,?,?,?,?,?)`
    ).bind(
      packageId, day.day, day.title, day.description, day.accommodation, day.meals,
      day.insiderFact ?? null, day.location ?? null, i
    ).run()

    const dayId = result.meta?.last_row_id
    if (!dayId) throw new Error(`insertItinerary(package ${packageId}): day ${day.day} insert did not return an id`)

    const stays: { tier: TierStayTier; stay: TierStay }[] = []
    if (day.accommodationByTier?.trail) stays.push({ tier: 'trail', stay: day.accommodationByTier.trail })
    if (day.accommodationByTier?.reserve) stays.push({ tier: 'reserve', stay: day.accommodationByTier.reserve })
    if (day.accommodationByTier?.sovereign) stays.push({ tier: 'sovereign', stay: day.accommodationByTier.sovereign })
    if (day.accommodationByFamilyTier?.luxury) stays.push({ tier: 'luxury', stay: day.accommodationByFamilyTier.luxury })
    if (day.accommodationByFamilyTier?.ultraLuxury) stays.push({ tier: 'ultra_luxury', stay: day.accommodationByFamilyTier.ultraLuxury })

    if (stays.length > 0) {
      await db.batch(stays.map(({ tier, stay }) =>
        db.prepare(
          'INSERT INTO package_itinerary_tier_stays (itinerary_day_id, tier, lodge_name, image, amenities) VALUES (?,?,?,?,?)'
        ).bind(dayId, tier, stay.name, stay.image, JSON.stringify(stay.amenities))
      ))
    }
  }
}
