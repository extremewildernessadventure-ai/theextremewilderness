import { NextRequest, NextResponse } from 'next/server'
import { getDocsBucket, publicItineraryGuideKey } from '@/lib/r2'
import { isValidLocale } from '@/lib/publicGuides'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ locale: string }> }

// Public, unauthenticated by design — see the kilimanjaro sibling route for
// the full reasoning on why this is safe (narrow, validated, public-guides/
// prefix only). One generic sample itinerary per locale, not per package —
// see src/lib/publicGuides.ts's own comment for why.
export async function GET(_req: NextRequest, { params }: Params) {
  const { locale } = await params
  if (!isValidLocale(locale)) {
    return NextResponse.json({ error: 'Unknown locale' }, { status: 404 })
  }

  const bucket = await getDocsBucket()
  const object = await bucket.get(publicItineraryGuideKey(locale))
  if (!object) {
    return NextResponse.json({ error: 'Guide not found — try again shortly' }, { status: 404 })
  }

  return new Response(object.body, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="EWA-Sample-Itinerary-${locale}.pdf"`,
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
