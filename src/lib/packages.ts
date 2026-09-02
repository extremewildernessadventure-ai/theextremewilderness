import type { D1Database } from './db'

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
