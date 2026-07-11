import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'

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
