import { renderPageToPdf, type PdfPageFormat } from './browser'
import { getDocsBucket, publicKilimanjaroGuideKey, publicItineraryGuideKey } from './r2'
import { routing } from '@/i18n/routing'

// Shared by both the eager batch generator (src/app/api/cron/generate-guides/
// route.ts — the primary path, meant to have everything ready ahead of
// demand) and pdf-lead's own request-time call (a self-healing fallback for
// anything the batch job hasn't backfilled yet) — one function, one
// rendering/upload code path, so there's only ever one place that can get
// this wrong.
//
// Both guide types are now "one file per locale, used everywhere" — the
// Kilimanjaro guide covers all 6 routes in one document, and the itinerary
// guide is a generic sample day-by-day itinerary, not tied to any specific
// package ("it is a sample... so it can go anywhere" — direct instruction).
// Earlier revisions of this file had a per-package itinerary variant
// (720 combinations); that's been deliberately simplified away.

export type GuideDescriptor =
  | { type: 'kilimanjaro'; locale: string }
  | { type: 'itinerary'; locale: string }

// Both guide documents were authored externally (Claude Design) at US
// Letter size — a deliberate choice, not the site's usual A4. Admin
// documents (voucher/invoice/quote/payslip) stay A4, unaffected — this map
// only covers what this file generates.
const FORMAT_BY_TYPE: Record<GuideDescriptor['type'], PdfPageFormat> = {
  kilimanjaro: 'Letter',
  itinerary: 'Letter',
}

function guideKey(guide: GuideDescriptor): string {
  return guide.type === 'kilimanjaro'
    ? publicKilimanjaroGuideKey(guide.locale)
    : publicItineraryGuideKey(guide.locale)
}

// The public serving route for this guide — see src/app/api/guides/**/route.ts.
// Deliberately a structured path (not the raw R2 key), so the read side can
// validate its own params before ever touching R2, rather than accepting an
// arbitrary key string from a client.
export function guidePublicPath(guide: GuideDescriptor): string {
  return guide.type === 'kilimanjaro'
    ? `/api/guides/kilimanjaro/${guide.locale}`
    : `/api/guides/itinerary/${guide.locale}`
}

function guideSourcePath(guide: GuideDescriptor): string {
  const pdfPath = guide.type === 'kilimanjaro' ? '/trekking/pdf' : '/safaris/sample-itinerary/pdf'
  return guide.locale === 'en' ? pdfPath : `/${guide.locale}${pdfPath}`
}

export function isValidLocale(locale: string): boolean {
  return routing.locales.includes(locale as (typeof routing.locales)[number])
}

// Renders (if not already in R2, or if `force`) and returns the public
// download URL for one guide. `origin` is the caller's own request origin
// (e.g. `req.nextUrl.origin`) — renderPageToPdf needs a URL it can actually
// reach, which in local/preview environments isn't the live public domain.
export async function getOrGeneratePublicGuideUrl(
  guide: GuideDescriptor,
  origin: string,
  force = false
): Promise<{ url: string; generated: boolean }> {
  const bucket = await getDocsBucket()
  const key = guideKey(guide)

  if (!force) {
    const existing = await bucket.head(key)
    if (existing) {
      return { url: `${origin}${guidePublicPath(guide)}`, generated: false }
    }
  }

  const sourceUrl = new URL(guideSourcePath(guide), origin).toString()
  const pdf = await renderPageToPdf(sourceUrl, null, FORMAT_BY_TYPE[guide.type])
  await bucket.put(key, pdf, { httpMetadata: { contentType: 'application/pdf' } })

  return { url: `${origin}${guidePublicPath(guide)}`, generated: true }
}

// Every (type, locale) combination the batch generator eagerly pre-renders —
// 16 Kilimanjaro + 16 itinerary = 32 total, one per locale per type now that
// neither guide is per-package.
export function listAllGuideDescriptors(): GuideDescriptor[] {
  const descriptors: GuideDescriptor[] = []
  for (const locale of routing.locales) {
    descriptors.push({ type: 'kilimanjaro', locale })
  }
  for (const locale of routing.locales) {
    descriptors.push({ type: 'itinerary', locale })
  }
  return descriptors
}
