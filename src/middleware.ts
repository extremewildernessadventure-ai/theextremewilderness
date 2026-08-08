import { NextResponse, type NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

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
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|admin|_next|.*\\..*).*)'],
}
