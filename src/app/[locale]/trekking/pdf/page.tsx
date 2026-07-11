import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'
import { Printer } from 'lucide-react'
import PrintTrigger from './PrintTrigger'
import { buildAlternates } from '@/lib/site'

// Kept dynamic deliberately: the printed document shows today's date
// (new Date() below), which would otherwise freeze at build time.
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

const ROUTE_SLUGS = ['machame', 'lemosho', 'marangu', 'rongai', 'umbwe', 'northern-circuit'] as const

const QUICK_SUMMARY_KEYS = ['duration', 'difficulty', 'successRate'] as const

export default async function KilimanjaroGuidePdfPage({ params }: Props) {
  const { locale = 'en' } = await params
  const t = await getTranslations({ locale, namespace: 'trekking' })
  const trd = await getTranslations({ locale, namespace: 'trekkingRouteDetail' })

  const routes = ROUTE_SLUGS.map((slug, i) => ({
    name: t(`route${i + 1}Name` as 'route1Name'),
    duration:     trd(`${slug}.quickFacts.duration`     as 'machame.quickFacts.duration'),
    difficulty:   trd(`${slug}.quickFacts.difficulty`   as 'machame.quickFacts.difficulty'),
    successRate:  trd(`${slug}.quickFacts.successRate`  as 'machame.quickFacts.successRate'),
    priceGroup:   Number(trd.raw(`${slug}.pricing.group` as 'machame.pricing.group')),
  }))

  const included = Array.from({ length: 9 }, (_, i) => t(`included${i + 1}` as 'included1'))
  const excluded = Array.from({ length: 6 }, (_, i) => t(`excluded${i + 1}` as 'excluded1'))

  const gearCategories = [
    { label: t('gear1Cat'), items: [t('gear1item1Name'), t('gear1item2Name'), t('gear1item3Name'), t('gear1item4Name')] },
    { label: t('gear2Cat'), items: [t('gear2item1Name'), t('gear2item2Name'), t('gear2item3Name')] },
    { label: t('gear3Cat'), items: [t('gear3item1Name'), t('gear3item2Name'), t('gear3item3Name')] },
    { label: t('gear4Cat'), items: [t('gear4item1Name'), t('gear4item2Name')] },
  ]

  const seasons = [
    { label: t('season1Label'), months: t('season1Months'), desc: t('season1Desc') },
    { label: t('season2Label'), months: t('season2Months'), desc: t('season2Desc') },
    { label: t('season3Label'), months: t('season3Months'), desc: t('season3Desc') },
  ]

  return (
    <>
      {/* Print CSS */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #pdf-kili-guide, #pdf-kili-guide * { visibility: visible !important; }
          #pdf-kili-guide {
            position: fixed;
            top: 0; left: 0;
            width: 100%;
            background: white;
            padding: 20px 28px;
          }
          @page { size: A4; margin: 14mm 12mm; }
          .no-break { page-break-inside: avoid; }
          .page-break { page-break-before: always; }
        }
      `}</style>

      <PrintTrigger />

      {/* Screen-only header bar */}
      <div className="max-w-4xl mx-auto px-4 py-6 print:hidden flex items-center justify-between border-b border-gray-100">
        <div>
          <h1 className="text-xl font-bold text-brand">{t('pdfCardTitle')}</h1>
          <p className="text-sm text-text-muted">Extreme Wilderness Adventure · Kilimanjaro</p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-2.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand/90 transition-colors text-sm"
        >
          <Printer className="w-4 h-4" />
          {trd('labels.printSavePdf')}
        </button>
      </div>

      {/* ── Printable document ─────────────────────────────────── */}
      <div id="pdf-kili-guide" className="max-w-4xl mx-auto px-8 py-6 bg-white font-sans print:max-w-none print:px-0">

        {/* ── Header ── */}
        <div className="flex items-start justify-between pb-5 mb-6 border-b-[3px] border-gray-900 no-break">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
              Extreme Wilderness Adventure · Arusha, Tanzania
            </p>
            <h1 className="text-3xl font-black text-gray-900 leading-tight">
              Kilimanjaro Trekking Guide
            </h1>
            <p className="text-sm text-gray-500 mt-1">{t('pdfCardEyebrow')} · 5,895 m / 19,341 ft</p>
          </div>
          <div className="text-right text-xs text-gray-400">
            <p className="font-bold text-gray-600 text-sm">{t('pdfCardBadge')}</p>
            <p className="mt-0.5">info@theextremewilderness.com</p>
            <p>{new Date().toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        {/* ── Introduction ── */}
        <div className="mb-7 no-break">
          <p className="text-sm text-gray-700 leading-relaxed">{t('pdfGuideIntro')}</p>
        </div>

        {/* ── Routes at a glance ── */}
        <div className="mb-7 no-break">
          <h2 className="text-base font-black text-gray-900 mb-3 uppercase tracking-wide border-l-4 border-gray-900 pl-3">
            {t('pdfGuideSectionRoutes')}
          </h2>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="text-left px-3 py-2 font-bold">{trd('labels.routeTableHeader')}</th>
                <th className="text-left px-3 py-2 font-bold">{trd('labels.duration')}</th>
                <th className="text-left px-3 py-2 font-bold">{trd('labels.difficulty')}</th>
                <th className="text-left px-3 py-2 font-bold">{trd('labels.successRate')}</th>
                <th className="text-right px-3 py-2 font-bold">{trd('labels.from')}</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((r, i) => (
                <tr key={r.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-3 py-2 font-semibold text-gray-900">{r.name}</td>
                  <td className="px-3 py-2 text-gray-700">{r.duration}</td>
                  <td className="px-3 py-2 text-gray-700">{r.difficulty}</td>
                  <td className="px-3 py-2 text-gray-700">{r.successRate}</td>
                  <td className="px-3 py-2 text-right font-semibold text-gray-900">${r.priceGroup.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[10px] text-gray-400 mt-1">{trd('labels.priceNote')}</p>
        </div>

        {/* ── What's included / excluded ── */}
        <div className="grid grid-cols-2 gap-6 mb-7 no-break">
          <div>
            <h2 className="text-base font-black text-gray-900 mb-2 uppercase tracking-wide border-l-4 border-gray-900 pl-3">
              {trd('labels.included')}
            </h2>
            <ul className="space-y-0.5">
              {included.map((item) => (
                <li key={item} className="text-xs text-gray-700 flex items-start gap-1.5">
                  <span className="text-gray-900 font-bold mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-base font-black text-gray-900 mb-2 uppercase tracking-wide border-l-4 border-gray-900 pl-3">
              {trd('labels.notIncluded')}
            </h2>
            <ul className="space-y-0.5">
              {excluded.map((item) => (
                <li key={item} className="text-xs text-gray-700 flex items-start gap-1.5">
                  <span className="text-gray-500 font-bold mt-0.5 flex-shrink-0">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Gear / Packing list ── */}
        <div className="mb-7 page-break no-break">
          <h2 className="text-base font-black text-gray-900 mb-3 uppercase tracking-wide border-l-4 border-gray-900 pl-3">
            {t('pdfGuideSectionGear')}
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {gearCategories.map(({ label, items }) => (
              <div key={label}>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{label}</p>
                <ul className="space-y-0.5">
                  {items.map((item) => (
                    <li key={item} className="text-xs text-gray-700 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-400 mt-3 italic">{t('proTipLabel')}: {t('proTipText')}</p>
        </div>

        {/* ── Best seasons ── */}
        <div className="mb-7 no-break">
          <h2 className="text-base font-black text-gray-900 mb-3 uppercase tracking-wide border-l-4 border-gray-900 pl-3">
            {t('pdfGuideSectionSeasons')}
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {seasons.map((s, i) => (
              <div key={s.label} className={`rounded-lg p-3 ${i === 0 ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${i === 0 ? 'text-yellow-300' : 'text-gray-500'}`}>{s.label}</p>
                <p className={`text-sm font-bold mb-1 ${i === 0 ? 'text-white' : 'text-gray-900'}`}>{s.months}</p>
                <p className={`text-xs leading-relaxed ${i === 0 ? 'text-gray-300' : 'text-gray-600'}`}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="border-t-2 border-gray-900 pt-4 flex items-center justify-between no-break">
          <div>
            <p className="text-sm font-black text-gray-900">Extreme Wilderness Adventure</p>
            <p className="text-xs text-gray-500">info@theextremewilderness.com · www.theextremewilderness.com · Arusha, Tanzania</p>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} EWA · {t('pdfCardBadge')}</p>
        </div>
      </div>
    </>
  )
}
