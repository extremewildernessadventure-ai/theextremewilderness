import type { ItineraryDay, TierStay } from '@/data/packages'

export type CampTierKey = 'trail' | 'reserve' | 'sovereign' | 'luxury' | 'ultraLuxury'

export interface CampRosterEntry {
  tier: CampTierKey
  lodges: TierStay[]
}

const TIER_ORDER: CampTierKey[] = ['trail', 'reserve', 'sovereign', 'luxury', 'ultraLuxury']

// Builds the "Lodges & Camps" tab's per-tier roster straight from the real
// itinerary data already on every package -- no schema change, no new admin
// data-entry. Unlike the prototype's Lodges & Camps tab (a flat, unlinked
// gallery with zero tier field on any lodge, confirmed by direct inspection
// of its LodgeDetail type), every lodge here is genuinely grouped under the
// real tier it's used for, deduplicated by name across the whole itinerary
// (the same lodge named on multiple days collapses to one roster entry).
export function buildCampsRoster(itinerary: ItineraryDay[]): CampRosterEntry[] {
  const byTier = new Map<CampTierKey, Map<string, TierStay>>()

  for (const day of itinerary) {
    const stays: [CampTierKey, TierStay | undefined][] = [
      ['trail', day.accommodationByTier?.trail],
      ['reserve', day.accommodationByTier?.reserve],
      ['sovereign', day.accommodationByTier?.sovereign],
      ['luxury', day.accommodationByFamilyTier?.luxury],
      ['ultraLuxury', day.accommodationByFamilyTier?.ultraLuxury],
    ]
    for (const [tier, stay] of stays) {
      if (!stay) continue
      if (!byTier.has(tier)) byTier.set(tier, new Map())
      byTier.get(tier)!.set(stay.name, stay)
    }
  }

  return TIER_ORDER
    .filter((tier) => byTier.has(tier))
    .map((tier) => ({ tier, lodges: [...byTier.get(tier)!.values()] }))
}
