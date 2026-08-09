import type { SafariPackage } from '@/data/packages'
import type { Destination } from '@/data/destinations'

export interface CatalogPackage {
  slug: string
  name: string
  duration: number
  destinations: string[]
  type: SafariPackage['type']
  priceFrom: number
  tags: string[]
  bestFor: string[]
}

export interface CatalogDestination {
  slug: string
  name: string
  country: Destination['country']
  tagline: string
  highlights: string[]
}

export interface Catalog {
  packages: CatalogPackage[]
  destinations: CatalogDestination[]
}

export function buildCatalog(
  packages: SafariPackage[],
  destinations: Destination[],
  tags: Record<string, string[]>
): Catalog {
  return {
    packages: packages.map((p) => ({
      slug: p.slug,
      name: p.name,
      duration: p.duration,
      destinations: p.destinations,
      type: p.type,
      priceFrom: p.priceFrom,
      tags: tags[p.slug] ?? [],
      bestFor: p.bestFor.slice(0, 3),
    })),
    destinations: destinations.map((d) => ({
      slug: d.slug,
      name: d.name,
      country: d.country,
      tagline: d.tagline,
      highlights: d.highlights.slice(0, 3),
    })),
  }
}

const LOCALE_LANGUAGE: Record<string, string> = {
  en: 'English',
  de: 'German',
  es: 'Spanish',
  fr: 'French',
  ru: 'Russian',
  zh: 'Simplified Chinese',
  'zh-TW': 'Traditional Chinese',
  it: 'Italian',
  nl: 'Dutch',
}

export const RESULTS_SENTINEL = '<<<RESULTS>>>'

export function buildSystemPrompt(catalog: Catalog, locale: string): string {
  const language = LOCALE_LANGUAGE[locale] ?? 'English'

  return `You are the Safari AI Advisor for EWA Safari Outfitters, a safari operator selling real, bookable trips in exactly three countries: Tanzania, Kenya and Rwanda.

A visitor will describe what they're dreaming of in free text. Your job:
1. Write a warm, confident, 2-4 sentence answer recommending which real destinations/packages fit them best, in ${language}. In this prose, refer to packages and destinations only by their human-readable "name" field (e.g. "7 Days Serengeti & Ngorongoro") — never write out a "slug" value in the prose.
2. Only ever reference destinations or packages that are actually present in the CATALOG below, by name. Never invent lodges, itineraries, prices, or destinations that are not in the CATALOG.
3. If the visitor's question has nothing to do with safari travel in Tanzania, Kenya or Rwanda, politely redirect them back to safari planning in 1-2 sentences instead of answering off-topic.
4. After your narrative answer, on a new line, output exactly the sentinel "${RESULTS_SENTINEL}" followed immediately by a single-line, strictly valid JSON object (no markdown fences, no trailing text after it) with this shape:
   {"packageSlugs": string[], "reasoning": {"<slug>": "one short sentence"}}
   - Include at most 3 package slugs, chosen only from the CATALOG's package "slug" values.
   - If nothing in the CATALOG is a good fit, return an empty packageSlugs array.
   - Always include the sentinel and JSON, even when packageSlugs is empty.

CATALOG (JSON):
${JSON.stringify(catalog)}`
}

export function filterKnownSlugs(slugs: string[], valid: Set<string>): string[] {
  return slugs.filter((slug) => valid.has(slug))
}
