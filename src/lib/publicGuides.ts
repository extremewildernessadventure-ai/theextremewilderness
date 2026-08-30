import { renderPageToPdf } from './browser'
import { getDocsBucket, publicKilimanjaroGuideKey, publicItineraryGuideKey } from './r2'
import { routing } from '@/i18n/routing'
import { getPackage } from '@/data/packages.i18n'

// Shared by both the eager batch generator (src/app/api/cron/generate-guides/
// route.ts — the primary path, meant to have everything ready ahead of
// demand) and pdf-lead's own request-time call (a self-healing fallback for
// anything the batch job hasn't backfilled yet, e.g. a package added between
// deploys) — one function, one rendering/upload code path, so there's only
// ever one place that can get this wrong.

export type GuideDescriptor =
  | { type: 'kilimanjaro'; locale: string }
  | { type: 'itinerary'; locale: string; slug: string }

function guideKey(guide: GuideDescriptor): string {
  return guide.type === 'kilimanjaro'
    ? publicKilimanjaroGuideKey(guide.locale)
    : publicItineraryGuideKey(guide.slug, guide.locale)
}

// The public serving route for this guide — see src/app/api/guides/**/route.ts.
// Deliberately a structured path (not the raw R2 key), so the read side can
// validate its own params before ever touching R2, rather than accepting an
// arbitrary key string from a client.
export function guidePublicPath(guide: GuideDescriptor): string {
  return guide.type === 'kilimanjaro'
    ? `/api/guides/kilimanjaro/${guide.locale}`
    : `/api/guides/itinerary/${guide.slug}/${guide.locale}`
}

function guideSourcePath(guide: GuideDescriptor): string {
  const pdfPath = guide.type === 'kilimanjaro' ? '/trekking/pdf' : `/safaris/${guide.slug}/itinerary-pdf`
  return guide.locale === 'en' ? pdfPath : `/${guide.locale}${pdfPath}`
}

export function isValidLocale(locale: string): boolean {
  return routing.locales.includes(locale as (typeof routing.locales)[number])
}

export async function guideSlugExists(slug: string, locale: string): Promise<boolean> {
  return Boolean(await getPackage(slug, locale))
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
  const pdf = await renderPageToPdf(sourceUrl, null)
  await bucket.put(key, pdf, { httpMetadata: { contentType: 'application/pdf' } })

  return { url: `${origin}${guidePublicPath(guide)}`, generated: true }
}

// Every (type, locale[, slug]) combination the batch generator eagerly
// pre-renders. Built fresh per call (packages can change between deploys)
// rather than cached, since this only runs from the low-traffic batch route.
export async function listAllGuideDescriptors(): Promise<GuideDescriptor[]> {
  const { packages } = await import('@/data/packages')
  const descriptors: GuideDescriptor[] = []
  for (const locale of routing.locales) {
    descriptors.push({ type: 'kilimanjaro', locale })
  }
  for (const pkg of packages) {
    for (const locale of routing.locales) {
      descriptors.push({ type: 'itinerary', locale, slug: pkg.slug })
    }
  }
  return descriptors
}
