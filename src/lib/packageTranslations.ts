import type { SafariPackage, ItineraryDay, TierStay } from '@/data/packages'

// The translated-text-only shape stored in package_translations.payload (one
// row per non-English locale, see migration 0029). Every field here is
// exactly the subset of SafariPackage that actually varies by locale in
// today's hand-translated sibling files (packages.fr.ts, packages.de.ts,
// etc.) -- everything else (slug, duration, destinations, type, priceFrom,
// groupSize, heroImage, gallery[].src, badge, pricingTiers,
// pricingTiersProvisional, familyPricing, itinerary[].day, and every
// accommodationByTier/accommodationByFamilyTier .image) is structural and
// stays English-row-authoritative for every locale, never duplicated here.
//
// itinerary/gallery entries line up positionally (index N here = index N
// in the English SafariPackage.itinerary/.gallery) -- this is already the
// existing convention every locale file follows today (same array length
// and order as the English source, only text swapped), not a new
// requirement introduced by this schema.

export interface TranslatedTierStay {
  name: string
  amenities: string[]
}

export interface TranslatedItineraryDay {
  title: string
  description: string
  accommodation: string
  meals: string
  insiderFact?: string
  location?: string
  accommodationByTier?: { trail?: TranslatedTierStay; reserve?: TranslatedTierStay; sovereign?: TranslatedTierStay }
  accommodationByFamilyTier?: { luxury?: TranslatedTierStay; ultraLuxury?: TranslatedTierStay }
}

export interface PackageTranslationPayload {
  name: string
  highlights: string[]
  itinerary: TranslatedItineraryDay[]
  included: string[]
  excluded: string[]
  heroImageAlt?: string
  gallery: { alt: string }[]
  bestFor: string[]
  includedCategorized?: { transfers?: string[]; accommodationMeals?: string[]; guidingGameDrives?: string[] }
  excludedCategorized?: string[]
  notes?: string[]
  faq?: { q: string; a: string }[]
  overview?: string[]
  tagline?: string
  bestTimeToTravel?: string
  whyDifferent?: { heading: string; paragraphs: string[] }
  destinationHighlights?: { heading: string; items: { title: string; text: string }[] }
  metaTitle?: string
  metaDescription?: string
}

function extractTierStayText(stay: TierStay): TranslatedTierStay {
  return { name: stay.name, amenities: stay.amenities }
}

function extractItineraryDay(day: ItineraryDay): TranslatedItineraryDay {
  const out: TranslatedItineraryDay = {
    title: day.title,
    description: day.description,
    accommodation: day.accommodation,
    meals: day.meals,
  }
  if (day.insiderFact !== undefined) out.insiderFact = day.insiderFact
  if (day.location !== undefined) out.location = day.location
  if (day.accommodationByTier) {
    out.accommodationByTier = {}
    if (day.accommodationByTier.trail) out.accommodationByTier.trail = extractTierStayText(day.accommodationByTier.trail)
    if (day.accommodationByTier.reserve) out.accommodationByTier.reserve = extractTierStayText(day.accommodationByTier.reserve)
    if (day.accommodationByTier.sovereign) out.accommodationByTier.sovereign = extractTierStayText(day.accommodationByTier.sovereign)
  }
  if (day.accommodationByFamilyTier) {
    out.accommodationByFamilyTier = {}
    if (day.accommodationByFamilyTier.luxury) out.accommodationByFamilyTier.luxury = extractTierStayText(day.accommodationByFamilyTier.luxury)
    if (day.accommodationByFamilyTier.ultraLuxury) out.accommodationByFamilyTier.ultraLuxury = extractTierStayText(day.accommodationByFamilyTier.ultraLuxury)
  }
  return out
}

// Takes one locale's full SafariPackage (the shape every packages.<locale>.ts
// file already exports today) and pulls out only the fields that actually
// differ from the English version -- see the module doc comment above for
// exactly which fields those are and why.
export function extractTranslationPayload(pkg: SafariPackage): PackageTranslationPayload {
  const payload: PackageTranslationPayload = {
    name: pkg.name,
    highlights: pkg.highlights,
    itinerary: pkg.itinerary.map(extractItineraryDay),
    included: pkg.included,
    excluded: pkg.excluded,
    gallery: pkg.gallery.map((g) => ({ alt: g.alt })),
    bestFor: pkg.bestFor,
  }
  if (pkg.heroImageAlt !== undefined) payload.heroImageAlt = pkg.heroImageAlt
  if (pkg.includedCategorized !== undefined) payload.includedCategorized = pkg.includedCategorized
  if (pkg.excludedCategorized !== undefined) payload.excludedCategorized = pkg.excludedCategorized
  if (pkg.notes !== undefined) payload.notes = pkg.notes
  if (pkg.faq !== undefined) payload.faq = pkg.faq
  if (pkg.overview !== undefined) payload.overview = pkg.overview
  if (pkg.tagline !== undefined) payload.tagline = pkg.tagline
  if (pkg.bestTimeToTravel !== undefined) payload.bestTimeToTravel = pkg.bestTimeToTravel
  if (pkg.whyDifferent !== undefined) payload.whyDifferent = pkg.whyDifferent
  if (pkg.destinationHighlights !== undefined) payload.destinationHighlights = pkg.destinationHighlights
  if (pkg.metaTitle !== undefined) payload.metaTitle = pkg.metaTitle
  if (pkg.metaDescription !== undefined) payload.metaDescription = pkg.metaDescription
  return payload
}

function mergeTierStayText(structural: TierStay, translated: TranslatedTierStay | undefined): TierStay {
  if (!translated) return structural
  return { name: translated.name, image: structural.image, amenities: translated.amenities }
}

function mergeItineraryDay(structural: ItineraryDay, translated: TranslatedItineraryDay | undefined): ItineraryDay {
  if (!translated) return structural
  const day: ItineraryDay = {
    day: structural.day,
    title: translated.title,
    description: translated.description,
    accommodation: translated.accommodation,
    meals: translated.meals,
  }
  if (translated.insiderFact !== undefined) day.insiderFact = translated.insiderFact
  if (translated.location !== undefined) day.location = translated.location
  else if (structural.location !== undefined) day.location = structural.location
  if (structural.accommodationByTier) {
    day.accommodationByTier = {}
    if (structural.accommodationByTier.trail) {
      day.accommodationByTier.trail = mergeTierStayText(structural.accommodationByTier.trail, translated.accommodationByTier?.trail)
    }
    if (structural.accommodationByTier.reserve) {
      day.accommodationByTier.reserve = mergeTierStayText(structural.accommodationByTier.reserve, translated.accommodationByTier?.reserve)
    }
    if (structural.accommodationByTier.sovereign) {
      day.accommodationByTier.sovereign = mergeTierStayText(structural.accommodationByTier.sovereign, translated.accommodationByTier?.sovereign)
    }
  }
  if (structural.accommodationByFamilyTier) {
    day.accommodationByFamilyTier = {}
    if (structural.accommodationByFamilyTier.luxury) {
      day.accommodationByFamilyTier.luxury = mergeTierStayText(structural.accommodationByFamilyTier.luxury, translated.accommodationByFamilyTier?.luxury)
    }
    if (structural.accommodationByFamilyTier.ultraLuxury) {
      day.accommodationByFamilyTier.ultraLuxury = mergeTierStayText(structural.accommodationByFamilyTier.ultraLuxury, translated.accommodationByFamilyTier?.ultraLuxury)
    }
  }
  return day
}

// Reconstructs one locale's full SafariPackage from the English structural
// package plus that locale's translation payload -- the function the
// eventual build-pipeline cutover (Stage 3) calls once per locale per
// package. Positional (itinerary/gallery line up by index with the English
// array), matching extractTranslationPayload()'s own assumption above.
export function mergeTranslation(en: SafariPackage, payload: PackageTranslationPayload): SafariPackage {
  const merged: SafariPackage = {
    ...en,
    name: payload.name,
    highlights: payload.highlights,
    itinerary: en.itinerary.map((day, i) => mergeItineraryDay(day, payload.itinerary[i])),
    included: payload.included,
    excluded: payload.excluded,
    gallery: en.gallery.map((g, i) => ({ src: g.src, alt: payload.gallery[i]?.alt ?? g.alt })),
    bestFor: payload.bestFor,
  }
  merged.heroImageAlt = payload.heroImageAlt ?? en.heroImageAlt
  merged.includedCategorized = payload.includedCategorized ?? en.includedCategorized
  merged.excludedCategorized = payload.excludedCategorized ?? en.excludedCategorized
  merged.notes = payload.notes ?? en.notes
  merged.faq = payload.faq ?? en.faq
  merged.overview = payload.overview ?? en.overview
  merged.tagline = payload.tagline ?? en.tagline
  merged.bestTimeToTravel = payload.bestTimeToTravel ?? en.bestTimeToTravel
  merged.whyDifferent = payload.whyDifferent ?? en.whyDifferent
  merged.destinationHighlights = payload.destinationHighlights ?? en.destinationHighlights
  merged.metaTitle = payload.metaTitle ?? en.metaTitle
  merged.metaDescription = payload.metaDescription ?? en.metaDescription

  // Strip keys that ended up `undefined` rather than leaving them on the
  // object -- keeps deep-equal comparisons (verification, tests) honest
  // against a locale file that simply omitted the optional key entirely.
  for (const key of Object.keys(merged) as (keyof SafariPackage)[]) {
    if (merged[key] === undefined) delete merged[key]
  }
  return merged
}
