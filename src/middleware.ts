import { NextResponse, type NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

// Crawlers must always reach every locale's URL directly, unredirected —
// that's what lets Google discover and index each hreflang alternate in the
// first place. Excluding bots here is what keeps the geo-redirect below from
// ever affecting SEO discovery.
const BOT_UA_PATTERN = /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegrambot|slackbot|linkedinbot|twitterbot|semrush|ahrefs|mj12bot/i

// Cloudflare's cf-ipcountry header -> best-match site locale. Not exhaustive
// of every country that speaks a given language — just the markets where
// auto-routing meaningfully helps a first-time, unprefixed visitor land on
// the right locale (bookmarks/ads/shares, not fresh Google search traffic,
// which is already routed correctly via hreflang regardless of this).
const COUNTRY_TO_LOCALE: Record<string, string> = {
  FR: 'fr', BE: 'fr', MC: 'fr', LU: 'fr',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es', EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es', PY: 'es', CR: 'es', PA: 'es', UY: 'es',
  DE: 'de', AT: 'de', CH: 'de', LI: 'de',
  RU: 'ru', BY: 'ru', KZ: 'ru',
  CN: 'zh',
  TW: 'zh-TW', HK: 'zh-TW', MO: 'zh-TW',
  IT: 'it', SM: 'it', VA: 'it',
  NL: 'nl',
  PT: 'pt', AO: 'pt', MZ: 'pt',
  JP: 'ja',
  KR: 'ko',
  SA: 'ar', AE: 'ar', EG: 'ar', QA: 'ar', KW: 'ar', BH: 'ar', OM: 'ar', JO: 'ar', LB: 'ar', IQ: 'ar', MA: 'ar', DZ: 'ar', TN: 'ar',
  IL: 'he',
  IN: 'hi',
  TH: 'th',
}

const GEO_REDIRECT_COOKIE = 'geo-locale-decided'

function isUnprefixed(pathname: string): boolean {
  return !routing.locales.some((l) => l !== 'en' && (pathname === `/${l}` || pathname.startsWith(`/${l}/`)))
}

// The bare apex domain is also routed to this Worker (see wrangler.jsonc),
// but www.theextremewilderness.com is the canonical host used everywhere
// (sitemap, hreflang, metadata) — redirect the apex to www rather than
// serving identical content on two hostnames.
export default function middleware(request: NextRequest) {
  const { hostname } = request.nextUrl
  if (hostname === 'theextremewilderness.com') {
    const url = request.nextUrl.clone()
    url.hostname = 'www.theextremewilderness.com'
    return NextResponse.redirect(url, 308)
  }

  // /admin never goes through next-intl or the geo-redirect below (it isn't
  // locale-prefixed) -- it's in the matcher solely so the (protected) layout
  // can recover the current pathname for its ?redirect= support after an
  // auth bounce. App Router layouts have no other way to see the request
  // URL (searchParams isn't passed to layouts, and there's no pathname API
  // for Server Components), so this header is the standard workaround.
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const res = NextResponse.next()
    res.headers.set('x-pathname', request.nextUrl.pathname)
    return res
  }

  // SEO-safe geo-redirect: only fires for non-bot, unprefixed, first-time
  // visitors. 302 (not 301) because this is a personalized, per-visit
  // routing decision, not a permanent URL move — the unprefixed English URL
  // is still the canonical page for anyone/anything not covered by this
  // redirect (bots, already-locale-prefixed navigation, repeat visitors).
  const ua = request.headers.get('user-agent') ?? ''
  if (
    !BOT_UA_PATTERN.test(ua) &&
    isUnprefixed(request.nextUrl.pathname) &&
    !request.cookies.get(GEO_REDIRECT_COOKIE)
  ) {
    const country = request.headers.get('cf-ipcountry')
    const targetLocale = country ? COUNTRY_TO_LOCALE[country] : undefined
    if (targetLocale) {
      const url = request.nextUrl.clone()
      url.pathname = `/${targetLocale}${request.nextUrl.pathname}`
      const res = NextResponse.redirect(url, 302)
      res.cookies.set(GEO_REDIRECT_COOKIE, '1', { maxAge: 60 * 60 * 24 * 365, path: '/' })
      return res
    }
    // No matching locale for this country (e.g. US, or unmapped) — still
    // mark the decision as made so we don't repeat this lookup on every
    // request for the rest of the visit; just don't redirect.
    const res = intlMiddleware(request)
    res.cookies.set(GEO_REDIRECT_COOKIE, '1', { maxAge: 60 * 60 * 24 * 365, path: '/' })
    return res
  }

  return intlMiddleware(request)
}

export const config = {
  // payments/ (with the trailing slash — NOT bare /payments, which is the
  // legitimate localized payments-info page under [locale] and still needs
  // next-intl's middleware) excludes only /payments/return, the standalone
  // non-localized Pesapal return page (see app/payments/). Without this it
  // gets handed to next-intl's middleware, which 404s it trying to resolve
  // it as if it lived under a locale.
  matcher: ['/((?!api|payments/|_next|.*\\..*).*)'],
}
