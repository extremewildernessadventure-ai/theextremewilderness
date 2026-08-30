import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, getLocale } from 'next-intl/server'
import { Check, X } from 'lucide-react'
import { getPackage } from '@/data/packages.i18n'
import { routing } from '@/i18n/routing'
import { buildAlternates } from '@/lib/site'
import { printCss, PdfCover, PdfRunningHeader, PdfSectionHeading, PdfDayBlock, PdfClosingCta, PdfFooter } from '@/components/pdf/PdfChrome'
import PrintPdfButton from '@/components/pdf/PrintPdfButton'
import PrintTrigger from '../../../trekking/[route]/pdf/PrintTrigger'

// Kept dynamic deliberately: the printed document shows today's date, which
// would otherwise freeze at build time.
export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  return {
    alternates: buildAlternates(locale, `/safaris/${slug}/itinerary-pdf`),
    robots: { index: false, follow: false },
  }
}

// Generated on demand rather than statically — this route exists primarily
// to be server-rendered into a real PDF by renderPageToPdf() (see
// api/pdf-lead/route.ts), not browsed directly, so pre-building every
// package × locale combination here is unnecessary build cost.
export async function generateStaticParams() {
  return []
}

export default async function ItineraryPdfPage({ params }: Props) {
  const { locale, slug } = await params
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound()

  const pkg = await getPackage(slug, locale)
  if (!pkg) notFound()

  const trd = await getTranslations({ locale, namespace: 'trekkingRouteDetail' })
  const tp = await getTranslations({ locale, namespace: 'pdfChrome' })
  const localeForDate = await getLocale()

  return (
    <>
      <style>{printCss('pdf-itinerary')}</style>

      <PrintTrigger />

      {/* Screen-only print button */}
      <div className="max-w-4xl mx-auto px-4 py-6 print:hidden flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-brand">{pkg.name}</h1>
        </div>
        <PrintPdfButton label={trd('labels.printSavePdf')} />
      </div>

      {/* ── Printable document ───────────────────────────────────────── */}
      <div id="pdf-itinerary" className="max-w-4xl mx-auto bg-white text-gray-900 font-sans print:max-w-none">
        <PdfCover
          image={pkg.heroImage}
          imageAlt={pkg.name}
          eyebrow={tp('itineraryEyebrow')}
          title={pkg.name}
          subtitle={`${pkg.duration} nights · from $${pkg.priceFrom.toLocaleString('en-US')}pp`}
          metaLeft={new Date().toLocaleDateString(localeForDate, { day: 'numeric', month: 'long', year: 'numeric' })}
        />

        <div className="px-10 py-6">
          <PdfRunningHeader documentType={pkg.name} />

          {pkg.highlights.length > 0 && (
            <div className="mb-6 no-break">
              <PdfSectionHeading>{tp('itineraryHighlightsHeading')}</PdfSectionHeading>
              <ul className="space-y-1">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-1.5 text-sm text-gray-700">
                    <Check className="w-3.5 h-3.5 text-brand mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Day-by-day itinerary */}
          <div className="mb-6">
            <PdfSectionHeading>{trd('labels.itinerary')}</PdfSectionHeading>
            {pkg.itinerary.map((day) => (
              <PdfDayBlock
                key={day.day}
                day={day.day}
                title={day.title}
                meta={day.accommodation ? `${trd('labels.accommodation')}: ${day.accommodation}` : undefined}
                dayLabel={trd('labels.dayLabel')}
              >
                <p className="mb-1">{day.description}</p>
                {day.meals && <p className="text-xs text-gray-500">{tp('itineraryMealsLabel')}: {day.meals}</p>}
              </PdfDayBlock>
            ))}
          </div>

          {/* Included / Excluded */}
          {(pkg.included.length > 0 || pkg.excluded.length > 0) && (
            <div className="grid grid-cols-2 gap-6 mb-6 no-break pdf-page-break-before">
              <div>
                <PdfSectionHeading>{trd('labels.included')}</PdfSectionHeading>
                <ul className="space-y-1">
                  {pkg.included.map((item) => (
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
                  {pkg.excluded.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-xs text-gray-700">
                      <X className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="mb-8">
            <PdfClosingCta heading={tp('bookCtaHeading')} body={tp('bookCtaBody')} />
          </div>

          <PdfFooter />
        </div>
      </div>
    </>
  )
}
