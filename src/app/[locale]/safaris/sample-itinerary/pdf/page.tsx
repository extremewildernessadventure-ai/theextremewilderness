import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import PrintTrigger from './PrintTrigger'
import { buildAlternates } from '@/lib/site'
import PrintPdfButton from '@/components/pdf/PrintPdfButton'
import { guideContentZoom } from '@/lib/guideZoom'
import { ITINERARY_GUIDE_HTML } from './content/en'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  return {
    alternates: buildAlternates(locale, '/safaris/sample-itinerary/pdf'),
    robots: { index: false, follow: false },
  }
}

interface Props {
  params: Promise<{ locale?: string }>
}

// Loads this locale's translated guide content, falling back to English for
// any locale not yet translated (see content/en.ts's own comment) — so a
// locale rolling out mid-translation-batch never serves a broken/partial
// page, just an English one until its file lands.
async function getGuideHtml(locale: string): Promise<string> {
  if (locale !== 'en') {
    try {
      const mod = await import(`./content/${locale}`)
      return mod.ITINERARY_GUIDE_HTML as string
    } catch {
      // No translated file yet for this locale — fall through to English.
    }
  }
  return ITINERARY_GUIDE_HTML
}

// Single generic sample day-by-day itinerary — not tied to any specific
// package ("it is a sample day to day itinerary not a real one, so it can
// go anywhere" — direct instruction), same "one file, used everywhere"
// model as the Kilimanjaro guide (see ../../../trekking/pdf/page.tsx for
// that sibling document, and src/lib/publicGuides.ts for the shared
// generation/serving plumbing both go through).
//
// Design source: authored externally in Claude Design (not this codebase)
// and handed over as a finished `.dc.html` export ("EWA Northern Tanzania
// Family Safari Proposal") — the markup in content/en.ts is a faithful,
// mechanically-converted copy of that source (its own asset paths
// repointed at /images/family-safari-guide/), not redesigned. This source
// used plain <img src="assets/...">  tags directly (unlike the
// Kilimanjaro design's <image-slot> custom element), so no image-slot/
// sc-if conversion was needed here. Other locales in content/ are
// translations of that same English source — see this project's PDF
// content-depth redesign memory for the translation pipeline.
//
// US Letter page size (not the site's usual A4), matching the Kilimanjaro
// guide's own deliberate choice.
export default async function SampleItineraryGuidePdfPage({ params }: Props) {
  const { locale = 'en' } = await params
  const html = await getGuideHtml(locale)
  const zoom = guideContentZoom(locale)

  return (
    <>
      <style>{`
        * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        @media print {
          @page { size: letter; margin: 0; }
        }
        #itinerary-guide-doc .page {
          width: calc(8.5in / ${zoom});
          height: calc(11in / ${zoom});
          zoom: ${zoom};
          page-break-after: always;
          break-after: page;
          overflow: hidden;
          box-sizing: border-box;
        }
        #itinerary-guide-doc .page:last-child {
          page-break-after: avoid;
          break-after: avoid;
        }
      `}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      <PrintTrigger />

      {/* Screen-only header bar. mt-16 lg:mt-20 clears the site's fixed
          Navbar (h-16/h-20) — without it, this bar (and the Print button
          inside it) renders underneath the nav, since a fixed-position
          element doesn't reserve document-flow space on its own. */}
      <div className="mt-16 lg:mt-20 max-w-4xl mx-auto px-4 py-6 print:hidden flex items-center justify-between border-b border-gray-100">
        <div>
          <h1 className="text-xl font-bold text-brand">Sample Family Safari Itinerary</h1>
          <p className="text-sm text-text-muted">EWA Safari Outfitters · 14-Day Northern Tanzania &amp; Zanzibar</p>
        </div>
        <PrintPdfButton label="Print / Save as PDF" />
      </div>

      <div
        id="itinerary-guide-doc"
        className="mx-auto bg-white"
        style={{ maxWidth: '8.5in' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}
