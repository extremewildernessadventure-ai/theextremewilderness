import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import PrintTrigger from './PrintTrigger'
import { buildAlternates } from '@/lib/site'
import PrintPdfButton from '@/components/pdf/PrintPdfButton'
import { KILIMANJARO_GUIDE_HTML } from './content/en'

// Kept dynamic deliberately: the printed document's "Edition" date reflects
// the actual render date, which would otherwise freeze at build time.
export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  return {
    alternates: buildAlternates(locale, '/trekking/pdf'),
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
      return mod.KILIMANJARO_GUIDE_HTML as string
    } catch {
      // No translated file yet for this locale — fall through to English.
    }
  }
  return KILIMANJARO_GUIDE_HTML
}

// Single consolidated Kilimanjaro trekking guide covering all 6 routes —
// replaces what used to be 7 separate documents (this general overview +
// one PDF per route). Every Kilimanjaro entry point on the site (the free-
// guide CTA on the trekking hub, and each individual route page's own
// download button) now links here instead of to a route-specific PDF.
//
// Design source: authored externally in Claude Design (not this codebase)
// and handed over as a finished `.dc.html` export — the markup in
// content/en.ts is a faithful, mechanically-converted copy of that source
// (image-slot/sc-if/doc-page custom elements — Claude Design's own
// editor-only runtime — swapped for plain <img>/CSS equivalents; asset
// paths repointed at /images/kilimanjaro-guide/), not redesigned. Other
// locales in content/ are translations of that same English source — see
// this project's PDF content-depth redesign memory for the translation
// pipeline.
//
// US Letter page size (not the site's usual A4) — an explicit, deliberate
// choice per direct instruction, not an oversight. renderPageToPdf() takes
// a format param specifically to support this per-document.
export default async function KilimanjaroGuidePdfPage({ params }: Props) {
  const { locale = 'en' } = await params
  const editionDate = new Date().toLocaleDateString(locale, { month: 'long', year: 'numeric' })
  const html = (await getGuideHtml(locale)).replace('__EDITION_DATE__', editionDate)

  return (
    <>
      <style>{`
        * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        @media print {
          @page { size: letter; margin: 0; }
        }
        #kili-guide-doc .page {
          width: 8.5in;
          height: 11in;
          page-break-after: always;
          break-after: page;
          overflow: hidden;
          box-sizing: border-box;
        }
        #kili-guide-doc .page:last-child {
          page-break-after: avoid;
          break-after: avoid;
        }
      `}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,400..500&family=Geist:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <PrintTrigger />

      {/* Screen-only header bar. mt-16 lg:mt-20 clears the site's fixed
          Navbar (h-16/h-20) — without it, this bar (and the Print button
          inside it) renders underneath the nav, since a fixed-position
          element doesn't reserve document-flow space on its own. */}
      <div className="mt-16 lg:mt-20 max-w-4xl mx-auto px-4 py-6 print:hidden flex items-center justify-between border-b border-gray-100">
        <div>
          <h1 className="text-xl font-bold text-brand">Kilimanjaro Trekking Guide</h1>
          <p className="text-sm text-text-muted">EWA Safari Outfitters · All 6 Routes</p>
        </div>
        <PrintPdfButton label="Print / Save as PDF" />
      </div>

      <div
        id="kili-guide-doc"
        className="mx-auto bg-white"
        style={{ maxWidth: '8.5in' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}
