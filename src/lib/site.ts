import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import type { Accommodation } from '@/data/accommodations'

export const SITE_URL = 'https://www.theextremewilderness.com'

/**
 * Builds a canonical, locale-aware URL for a given path.
 * Matches routing.ts's `localePrefix: 'as-needed'` behaviour: the default
 * locale ('en') is never prefixed, every other locale is.
 */
export function localeUrl(locale: string, path: string): string {
  if (locale === 'en') return `${SITE_URL}${path || '/'}`
  return `${SITE_URL}/${locale}${path}`
}

/**
 * Builds canonical + hreflang alternates for a given unprefixed path
 * (e.g. '/destinations/serengeti'). Each page passes its own static path
 * here — deliberately not derived from headers() at the layout level,
 * since that Dynamic API forces the whole route to render per-request
 * instead of being statically generated.
 */
export function buildAlternates(locale: string, path: string): Metadata['alternates'] {
  return {
    canonical: localeUrl(locale, path),
    languages: {
      ...Object.fromEntries(routing.locales.map((l) => [l, localeUrl(l, path)])),
      'x-default': localeUrl(routing.defaultLocale, path),
    },
  }
}

interface BreadcrumbTrailItem {
  label: string
  href?: string
}

/**
 * Builds schema.org BreadcrumbList JSON-LD from the same {label, href?} trail
 * data already passed to the <Breadcrumb> UI component on every content page
 * (see @/components/ui/Breadcrumb) — reuses that trail instead of
 * recomputing it, so the two never drift apart.
 *
 * <Breadcrumb>'s own `href`s are already full locale-prefixed root paths
 * (e.g. `/de/safaris`, built by each page as `/${locale}/safaris`) since it
 * renders with plain next/link, not the locale-aware Link from
 * @/i18n/navigation — so those just get the site origin prepended. The last
 * item (the current page) has no href, so it needs `currentPath` (an
 * *unprefixed* path like `/safaris/${slug}`) run through localeUrl instead.
 */
export function buildBreadcrumbSchema(locale: string, items: BreadcrumbTrailItem[], currentPath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : localeUrl(locale, currentPath),
    })),
  }
}

/**
 * Builds schema.org FAQPage JSON-LD from a flat {q, a}[] list. Mirrors
 * buildBreadcrumbSchema's convention — a single shared helper instead of
 * each page hand-rolling the same mainEntity/acceptedAnswer shape.
 */
export function buildFaqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

/**
 * Builds schema.org ItemList JSON-LD wrapping every accommodation as a
 * LodgingBusiness entity, from the same (already-localized) accommodations
 * array the /accommodations page already renders cards from — reused
 * instead of recomputed, so the two never drift apart. Mirrors
 * buildBreadcrumbSchema/buildFaqSchema's single-shared-helper convention.
 *
 * Each item's `url` points at the page's own #<slug> anchor (bare slug —
 * matches AccommodationsExplorer's DOM ids and AmenityStay's internal
 * links) since there is no standalone per-lodge route.
 */
export function buildAccommodationsListSchema(locale: string, accommodations: Accommodation[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: accommodations.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'LodgingBusiness',
        name: a.name,
        description: a.description,
        image: a.images[0] ? `${SITE_URL}${a.images[0]}` : undefined,
        url: localeUrl(locale, `/accommodations#${a.slug}`),
        address: { '@type': 'PostalAddress', addressLocality: a.location },
      },
    })),
  }
}
