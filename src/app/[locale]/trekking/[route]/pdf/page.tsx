import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'
import { Check, X } from 'lucide-react'
import PrintTrigger from './PrintTrigger'
import { buildAlternates } from '@/lib/site'
import { printCss, PdfCover, PdfRunningHeader, PdfSectionHeading, PdfDayBlock, PdfClosingCta, PdfFooter } from '@/components/pdf/PdfChrome'
import PrintPdfButton from '@/components/pdf/PrintPdfButton'

const ROUTE_IMAGES: Record<string, string> = {
  machame: '/images/gallery/kilimanjaro-card-machame.webp',
  lemosho: '/images/gallery/kilimanjaro-card-lemosho.webp',
  marangu: '/images/gallery/kilimanjaro-card-marangu.webp',
  rongai: '/images/gallery/kilimanjaro-card-rongai.webp',
  umbwe: '/images/gallery/kilimanjaro-card-umbwe.webp',
  'northern-circuit': '/images/gallery/kilimanjaro-card-northern-circuit.webp',
}

// Kept dynamic deliberately: the printed document shows today's date
// (new Date() below), which would otherwise freeze at build time.
export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ locale?: string; route: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { route } = await params
  const locale = await getLocale()
  return {
    alternates: buildAlternates(locale, `/trekking/${route}/pdf`),
    robots: { index: false, follow: false },
  }
}

const ROUTES_WITH_DETAIL_CONTENT = ['machame', 'lemosho', 'rongai', 'marangu', 'umbwe', 'northern-circuit'] as const
type RouteWithDetailContent = (typeof ROUTES_WITH_DETAIL_CONTENT)[number]

const QUICK_FACT_KEYS = [
  'routeName', 'duration', 'distance', 'startGate', 'finishGate', 'summit',
  'difficulty', 'trailTraffic', 'successRate', 'bestSeason', 'accommodation', 'priceFrom',
] as const

function isRouteWithDetailContent(route: string): route is RouteWithDetailContent {
  return (ROUTES_WITH_DETAIL_CONTENT as readonly string[]).includes(route)
}

export default async function PdfPage({ params }: Props) {
  const { route, locale = 'en' } = await params
  const trd = await getTranslations({ locale, namespace: 'trekkingRouteDetail' })

  if (!isRouteWithDetailContent(route)) {
    return <p className="p-8 text-center text-text-muted">{trd('labels.routeNotFound')}</p>
  }

  const routeContent = {
    nickname:   trd(`${route}.nickname`),
    intro:      trd.raw(`${route}.intro`) as string[],
    quickFacts: trd.raw(`${route}.quickFacts`) as Record<(typeof QUICK_FACT_KEYS)[number], string>,
    whyChoose:  trd.raw(`${route}.whyChoose`) as { title: string; body: string }[],
    arrivalDay: trd(`${route}.arrivalDay`),
    itinerary:  trd.raw(`${route}.itinerary`) as { day: number; title: string; meta: string; body: string; expect: string }[],
    included:   trd.raw(`${route}.included`) as string[],
    excluded:   trd.raw(`${route}.excluded`) as string[],
    pricing:    trd.raw(`${route}.pricing`) as { solo: number; small: number; group: number },
  }

  return (
    <>
      <style>{printCss('pdf-route-guide')}</style>

      <PrintTrigger />

      {/* Screen-only print button */}
      <div className="max-w-4xl mx-auto px-4 py-6 print:hidden flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-brand">{routeContent.quickFacts.routeName}</h1>
          <p className="text-sm text-text-muted">{trd('labels.downloadRouteGuide')}</p>
        </div>
        <PrintPdfButton label={trd('labels.printSavePdf')} />
      </div>

      {/* ── Printable document ───────────────────────────────────────── */}
      <div id="pdf-route-guide" className="max-w-4xl mx-auto bg-white text-gray-900 font-sans print:max-w-none">
        <PdfCover
          image={ROUTE_IMAGES[route] ?? '/images/gallery/kilimanjaro-hero.webp'}
          imageAlt={routeContent.quickFacts.routeName}
          eyebrow="Kilimanjaro Route Guide"
          title={routeContent.quickFacts.routeName}
          subtitle={routeContent.nickname}
          metaLeft={new Date().toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })}
        />

        <div className="px-10 py-6">
        <PdfRunningHeader documentType={routeContent.quickFacts.routeName} />

        {/* Overview */}
        <div className="mb-6 no-break">
          <PdfSectionHeading>{trd('labels.overview')}</PdfSectionHeading>
          {routeContent.intro.map((p, i) => (
            <p key={i} className="text-sm text-gray-700 leading-relaxed mb-2 last:mb-0">{p}</p>
          ))}
        </div>

        {/* Quick Facts */}
        <div className="mb-6 no-break">
          <PdfSectionHeading>{trd('labels.quickFacts')}</PdfSectionHeading>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 bg-gray-50 rounded-lg p-4">
            {QUICK_FACT_KEYS.map((key) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">{trd(`labels.${key}`)}</span>
                <span className="text-gray-900 font-semibold text-end max-w-[55%]">{routeContent.quickFacts[key]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary */}
        <div className="mb-6">
          <PdfSectionHeading>{trd('labels.itinerary')}</PdfSectionHeading>

          <PdfDayBlock day={0} title={trd('labels.arrivalDay')}>
            <p>{routeContent.arrivalDay}</p>
          </PdfDayBlock>

          {routeContent.itinerary.map((day) => (
            <PdfDayBlock key={day.day} day={day.day} title={day.title} meta={day.meta}>
              <p className="mb-1">{day.body}</p>
              <p className="text-xs text-gray-500 italic">{trd('labels.whatToExpect')} {day.expect}</p>
            </PdfDayBlock>
          ))}
        </div>

        {/* Included / Excluded */}
        <div className="grid grid-cols-2 gap-6 mb-6 no-break pdf-page-break-before">
          <div>
            <PdfSectionHeading>{trd('labels.included')}</PdfSectionHeading>
            <ul className="space-y-1">
              {routeContent.included.map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-xs text-gray-700">
                  <Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <PdfSectionHeading>{trd('labels.notIncluded')}</PdfSectionHeading>
            <ul className="space-y-1">
              {routeContent.excluded.map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-xs text-gray-700">
                  <X className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-8 no-break">
          <PdfSectionHeading>{trd('labels.pricing')}</PdfSectionHeading>
          <div className="grid grid-cols-3 gap-4">
            {([
              { label: trd('labels.solo'),  price: routeContent.pricing.solo  },
              { label: trd('labels.small'), price: routeContent.pricing.small },
              { label: trd('labels.group'), price: routeContent.pricing.group },
            ]).map((tier) => (
              <div key={tier.label} className="rounded-lg p-4 text-center" style={{ background: 'var(--color-brand)' }}>
                <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--color-gold)' }}>{tier.label}</p>
                <p className="text-white text-xl font-bold">${tier.price.toLocaleString('en-US')}</p>
                <p className="text-white/60 text-xs mt-0.5">{trd('labels.perPerson')}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <PdfClosingCta heading="Ready To Climb?" body="Get in touch to book your Kilimanjaro trek — our team will help you pick the right route." />
        </div>

        <PdfFooter />
        </div>
      </div>
    </>
  )
}
