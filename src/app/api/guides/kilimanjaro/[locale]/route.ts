import { NextRequest, NextResponse } from 'next/server'
import { getDocsBucket, publicKilimanjaroGuideKey } from '@/lib/r2'
import { isValidLocale } from '@/lib/publicGuides'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ locale: string }> }

// Public, unauthenticated by design — this is the free marketing guide, not
// a personal document. Deliberately narrow: the only R2 prefix this route
// (or its itinerary sibling) will ever read is `public-guides/`, validated
// via a structured param rather than accepting a raw key — every other
// prefix in the DOCS bucket holds per-customer data and must stay behind
// admin auth (see the other routes under src/app/api/admin/**).
export async function GET(_req: NextRequest, { params }: Params) {
  const { locale } = await params
  if (!isValidLocale(locale)) {
    return NextResponse.json({ error: 'Unknown locale' }, { status: 404 })
  }

  const bucket = await getDocsBucket()
  const object = await bucket.get(publicKilimanjaroGuideKey(locale))
  if (!object) {
    return NextResponse.json({ error: 'Guide not found — try again shortly' }, { status: 404 })
  }

  return new Response(object.body, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="EWA-Kilimanjaro-Guide-${locale}.pdf"`,
      // Content is regenerated in place (same key) rather than versioned, so
      // this can't be a fully immutable cache — a moderate max-age still
      // meaningfully cuts repeat R2 reads for a popular guide.
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
