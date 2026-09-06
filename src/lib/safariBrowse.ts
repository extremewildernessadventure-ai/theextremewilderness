// Shared browsing/filtering model for the /safaris listing page rebuild
// (SafariBookings-style prototype, Stage A) -- adapted from the prototype's
// filterUtils.ts to this site's real data model. Pure logic, no React, so it's
// usable from both the server component that builds the initial dataset and
// the client component that filters/sorts/paginates it.

import type { PricingTierRow, SafariPackage } from '@/data/packages'

export type TierKey = 'trail' | 'reserve' | 'sovereign'
export type OperatorTypeFilter = 'ewa' | 'other'
export type SortOption = 'recommended' | 'price-asc' | 'price-desc' | 'duration-asc' | 'duration-desc'

// The full real ActivityType union, not a narrowed subset -- one of the two
// mountain_trekking packages (14-days-kilimanjaro-lemosho-safari, a genuine
// safari+climb combo) has always appeared in this general listing, same as
// today's site; only kilimanjaro-machame-7day (marketed solely via the
// dedicated /trekking pages) is excluded, by slug, at the call site that
// builds the browsable dataset -- not by narrowing this type.
export type BrowsableActivityType = SafariPackage['type']

const EWA_OPERATOR_NAME = 'EWA Safari Outfitters'

// One row per package, pre-resolved with everything the filter/sort/card
// layer needs -- built server-side once per request (see buildBrowsableSafari
// below), never recomputed per-filter-change.
export interface BrowsableSafari {
  slug: string
  name: string
  duration: number
  priceFrom: number
  heroImage: string
  heroImageAlt?: string
  destinationSlugs: string[]
  destinationNames: string[]
  countries: string[] // 'tanzania' | 'kenya' | 'rwanda', deduped
  highlights: string[]
  // The short editorial hook shown as an italic quote on the card -- matches
  // the prototype's `safari.hook`; not every package has authored one.
  tagline?: string
  groupSize?: { min: number; max: number }
  badge?: 'bestseller' | 'new' | 'popular'
  type: BrowsableActivityType
  bestMonths?: string[] // 3-letter codes, e.g. ['Jun','Jul'] -- absent on packages with no real seasonal content (see project_safari_pages_rebuild memory)
  operatorName: string // always resolved (defaults to EWA_OPERATOR_NAME)
  tiersAvailable: TierKey[]
  tierMinPrice: Partial<Record<TierKey, number>>
  isSignature: boolean // one of the site's curated flagship editions
  reviewRating?: number // only set for packages with a real PACKAGE_REVIEWS entry -- never fabricated
}

export interface SafariFilterState {
  searchQuery: string
  minDuration: number
  maxDuration: number
  maxPrice: number
  countries: string[]
  parks: string[] // destination slugs
  activityTypes: string[]
  tiers: TierKey[]
  selectedMonth: string | null
  operatorTypes: OperatorTypeFilter[]
}

export function makeInitialFilters(bounds: { minDuration: number; maxDuration: number; maxPrice: number }): SafariFilterState {
  return {
    searchQuery: '',
    minDuration: bounds.minDuration,
    maxDuration: bounds.maxDuration,
    maxPrice: bounds.maxPrice,
    countries: [],
    parks: [],
    activityTypes: [],
    tiers: [],
    selectedMonth: null,
    operatorTypes: [],
  }
}

function pkgHasTier(rows: PricingTierRow[] | undefined, tier: TierKey): boolean {
  return !!rows?.some((row) => row[tier] !== undefined && row[tier]! > 0)
}

export function tiersAndMinPrices(rows: PricingTierRow[] | undefined): {
  tiersAvailable: TierKey[]
  tierMinPrice: Partial<Record<TierKey, number>>
} {
  const tiersAvailable: TierKey[] = []
  const tierMinPrice: Partial<Record<TierKey, number>> = {}
  for (const tier of ['trail', 'reserve', 'sovereign'] as const) {
    if (!pkgHasTier(rows, tier)) continue
    tiersAvailable.push(tier)
    for (const row of rows ?? []) {
      if (row[tier] === undefined || row[tier]! <= 0) continue
      if (tierMinPrice[tier] === undefined || row[tier]! < tierMinPrice[tier]!) tierMinPrice[tier] = row[tier]!
    }
  }
  return { tiersAvailable, tierMinPrice }
}

// Same "AND across fields, OR within a multi-select field" semantics as the
// prototype's filterSafaris, adapted field-for-field to BrowsableSafari.
export function filterSafaris(items: BrowsableSafari[], f: SafariFilterState): BrowsableSafari[] {
  const query = f.searchQuery.trim().toLowerCase()
  const tokens = query === '' ? [] : query.split(/\s+/)

  return items.filter((item) => {
    if (tokens.length > 0) {
      const corpus = [
        item.name, item.type, item.operatorName,
        ...item.destinationNames, ...item.destinationSlugs, ...item.countries,
        ...(item.bestMonths ?? []),
      ].join(' ').toLowerCase()
      const allTokensMatch = tokens.every((token) => {
        if (corpus.includes(token)) return true
        if ((token === 'big5' || token === 'big-5' || token === 'big five') && corpus.includes('big_five')) return true
        if (token === 'migration' && /mara|serengeti|calving|crossing/.test(corpus)) return true
        return false
      })
      if (!allTokensMatch) return false
    }

    if (f.operatorTypes.length > 0) {
      const isEwa = item.operatorName === EWA_OPERATOR_NAME
      const matchesEwa = f.operatorTypes.includes('ewa') && isEwa
      const matchesOther = f.operatorTypes.includes('other') && !isEwa
      if (!matchesEwa && !matchesOther) return false
    }

    if (item.duration < f.minDuration || item.duration > f.maxDuration) return false
    if (item.priceFrom > f.maxPrice) return false

    if (f.countries.length > 0 && !item.countries.some((c) => f.countries.includes(c))) return false
    if (f.parks.length > 0 && !item.destinationSlugs.some((p) => f.parks.includes(p))) return false
    if (f.activityTypes.length > 0 && !f.activityTypes.includes(item.type)) return false
    if (f.tiers.length > 0 && !item.tiersAvailable.some((t) => f.tiers.includes(t))) return false
    if (f.selectedMonth && !(item.bestMonths ?? []).includes(f.selectedMonth)) return false

    return true
  })
}

const TIER_RANK: Record<TierKey, number> = { sovereign: 3, reserve: 2, trail: 1 }

export function sortSafaris(items: BrowsableSafari[], sort: SortOption): BrowsableSafari[] {
  const sorted = [...items]
  switch (sort) {
    case 'price-asc': return sorted.sort((a, b) => a.priceFrom - b.priceFrom)
    case 'price-desc': return sorted.sort((a, b) => b.priceFrom - a.priceFrom)
    case 'duration-asc': return sorted.sort((a, b) => a.duration - b.duration)
    case 'duration-desc': return sorted.sort((a, b) => b.duration - a.duration)
    case 'recommended':
    default:
      return sorted.sort((a, b) => {
        const rankA = Math.max(0, ...a.tiersAvailable.map((t) => TIER_RANK[t]))
        const rankB = Math.max(0, ...b.tiersAvailable.map((t) => TIER_RANK[t]))
        if (rankB !== rankA) return rankB - rankA
        return b.duration - a.duration
      })
  }
}

export interface RestrictiveFilterDiagnosis {
  field: keyof SafariFilterState | 'duration' | 'price'
  matchCount: number
  relax: (f: SafariFilterState) => SafariFilterState
}

// Same "try relaxing each active filter one at a time, pick whichever single
// relaxation unlocks the most matches" heuristic as the prototype's
// diagnoseEmptyState -- not priority-ranked by field order, purely by result.
export function diagnoseEmptyState(
  all: BrowsableSafari[],
  current: SafariFilterState,
  bounds: { minDuration: number; maxDuration: number; maxPrice: number }
): RestrictiveFilterDiagnosis | null {
  const candidates: RestrictiveFilterDiagnosis[] = []

  const tryField = (field: RestrictiveFilterDiagnosis['field'], relax: (f: SafariFilterState) => SafariFilterState) => {
    const relaxed = relax(current)
    const matchCount = filterSafaris(all, relaxed).length
    if (matchCount > 0) candidates.push({ field, matchCount, relax })
  }

  if (current.searchQuery.trim() !== '') tryField('searchQuery', (f) => ({ ...f, searchQuery: '' }))
  if (current.tiers.length > 0) tryField('tiers', (f) => ({ ...f, tiers: [] }))
  if (current.maxPrice < bounds.maxPrice) tryField('price', (f) => ({ ...f, maxPrice: bounds.maxPrice }))
  if (current.countries.length > 0) tryField('countries', (f) => ({ ...f, countries: [] }))
  if (current.parks.length > 0) tryField('parks', (f) => ({ ...f, parks: [] }))
  if (current.activityTypes.length > 0) tryField('activityTypes', (f) => ({ ...f, activityTypes: [] }))
  if (current.minDuration > bounds.minDuration || current.maxDuration < bounds.maxDuration) {
    tryField('duration', (f) => ({ ...f, minDuration: bounds.minDuration, maxDuration: bounds.maxDuration }))
  }
  if (current.selectedMonth) tryField('selectedMonth', (f) => ({ ...f, selectedMonth: null }))
  if (current.operatorTypes.length > 0) tryField('operatorTypes', (f) => ({ ...f, operatorTypes: [] }))

  if (candidates.length === 0) return null
  return candidates.reduce((best, c) => (c.matchCount > best.matchCount ? c : best))
}

export function activeFilterCount(f: SafariFilterState, bounds: { minDuration: number; maxDuration: number; maxPrice: number }): number {
  let count = 0
  if (f.searchQuery.trim() !== '') count += 1
  count += f.tiers.length
  count += f.countries.length
  count += f.parks.length
  count += f.activityTypes.length
  if (f.selectedMonth) count += 1
  if (f.maxPrice < bounds.maxPrice) count += 1
  if (f.minDuration > bounds.minDuration || f.maxDuration < bounds.maxDuration) count += 1
  count += f.operatorTypes.length
  return count
}

// Builds one BrowsableSafari from a real SafariPackage -- the single place
// that reconciles package data with destination lookups, real review data,
// and the curated "signature edition" flag. `destinationLookup` keys by
// destination slug (see src/data/destinations.ts); a slug missing from it is
// skipped for name/country resolution rather than throwing, since a package
// referencing a destination slug that doesn't exist in destinations.ts is a
// real data-integrity issue worth surfacing elsewhere, not crashing this page.
export function buildBrowsableSafari(
  pkg: SafariPackage,
  destinationLookup: Map<string, { name: string; country: string }>,
  review: { rating: number } | undefined,
  isSignature: boolean
): BrowsableSafari {
  // destinationSlugs and destinationNames are built together from the same
  // filtered pass so they stay index-aligned -- previously destinationSlugs
  // used pkg.destinations raw (unfiltered) while destinationNames dropped
  // any slug missing from destinationLookup, so a single unresolved slug
  // shifted every later name out of alignment with its real slug, showing
  // up in the parks filter as another park's name attached to a different
  // slug (visually indistinguishable from a genuine duplicate).
  const destinationSlugs: string[] = []
  const destinationNames: string[] = []
  const countries = new Set<string>()
  for (const slug of pkg.destinations) {
    const dest = destinationLookup.get(slug)
    if (!dest) continue
    destinationSlugs.push(slug)
    destinationNames.push(dest.name)
    countries.add(dest.country)
  }

  const { tiersAvailable, tierMinPrice } = tiersAndMinPrices(pkg.pricingTiers)

  const safari: BrowsableSafari = {
    slug: pkg.slug,
    name: pkg.name,
    duration: pkg.duration,
    priceFrom: pkg.priceFrom,
    heroImage: pkg.heroImage,
    destinationSlugs,
    destinationNames,
    countries: [...countries],
    highlights: pkg.highlights,
    type: pkg.type,
    operatorName: pkg.operatorName ?? EWA_OPERATOR_NAME,
    tiersAvailable,
    tierMinPrice,
    isSignature,
  }
  if (pkg.heroImageAlt) safari.heroImageAlt = pkg.heroImageAlt
  if (pkg.tagline) safari.tagline = pkg.tagline
  if (pkg.groupSize) safari.groupSize = pkg.groupSize
  if (pkg.badge) safari.badge = pkg.badge
  if (pkg.bestMonths && pkg.bestMonths.length > 0) safari.bestMonths = pkg.bestMonths
  if (review) safari.reviewRating = review.rating
  return safari
}
