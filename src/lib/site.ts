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
