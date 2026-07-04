import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request)
  // Lets server components (e.g. [locale]/layout.tsx) read the current
  // pathname via headers() to build page-aware hreflang/canonical URLs.
  response.headers.set('x-pathname', request.nextUrl.pathname)
  return response
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
