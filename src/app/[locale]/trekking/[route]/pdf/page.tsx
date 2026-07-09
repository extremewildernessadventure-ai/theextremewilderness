import { getTranslations } from 'next-intl/server'
import { Check, X, Printer } from 'lucide-react'
import PrintTrigger from './PrintTrigger'

interface Props {
  params: Promise<{ locale?: string; route: string }>
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
    return <p className="p-8 text-center text-text-muted">Route not found.</p>
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
      {/* Print CSS — hides everything except #pdf-route-guide when printing */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #pdf-route-guide, #pdf-route-guide * { visibility: visible !important; }
          #pdf-route-guide {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: white;
            padding: 24px 32px;
          }
          @page { size: A4; margin: 15mm 12mm; }
          .no-break { page-break-inside: avoid; }
          .page-break { page-break-before: always; }
        }
      `}</style>

      <PrintTrigger />

      {/* Screen-only print button */}
      <div className="max-w-4xl mx-auto px-4 py-6 print:hidden flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-brand">{routeContent.quickFacts.routeName}</h1>
          <p className="text-sm text-text-muted">{trd('labels.downloadRouteGuide')}</p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-2.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand/90 transition-colors text-sm"
        >
          <Printer className="w-4 h-4" />
          Print / Save as PDF
        </button>
      </div>

      {/* ── Printable document ───────────────────────────────────────── */}
      <div id="pdf-route-guide" className="max-w-4xl mx-auto px-8 py-6 bg-white text-gray-900 font-sans print:max-w-none print:px-0">

        {/* Header */}
        <div className="flex items-start justify-between pb-5 mb-6 border-b-2 border-gray-900 no-break">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Extreme Wilderness Adventure</p>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">{routeContent.quickFacts.routeName}</h1>
            <p className="text-base text-gray-600 mt-1 italic">{routeContent.nickname}</p>
          </div>
          <div className="text-right text-xs text-gray-400">
            <p className="font-semibold text-gray-600">{trd('labels.downloadRouteGuide')}</p>
            <p className="mt-1">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-6 no-break">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide border-l-4 border-gray-900 pl-3">Overview</h2>
          {routeContent.intro.map((p, i) => (
            <p key={i} className="text-sm text-gray-700 leading-relaxed mb-2 last:mb-0">{p}</p>
          ))}
        </div>

        {/* Quick Facts */}
        <div className="mb-6 no-break">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide border-l-4 border-gray-900 pl-3">{trd('labels.quickFacts')}</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 bg-gray-50 rounded-lg p-4">
            {QUICK_FACT_KEYS.map((key) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">{trd(`labels.${key}`)}</span>
                <span className="text-gray-900 font-semibold text-right max-w-[55%]">{routeContent.quickFacts[key]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide border-l-4 border-gray-900 pl-3">{trd('labels.itinerary')}</h2>

          {/* Arrival day */}
          <div className="mb-3 no-break">
            <p className="text-sm font-bold text-gray-800">Day 0 — {trd('labels.arrivalDay')}</p>
            <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{routeContent.arrivalDay}</p>
          </div>

          {routeContent.itinerary.map((day) => (
            <div key={day.day} className="mb-3 no-break">
              <p className="text-sm font-bold text-gray-800">Day {day.day} — {day.title}</p>
              <p className="text-xs text-gray-500 mb-0.5 italic">{day.meta}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{day.body}</p>
              <p className="text-xs text-gray-500 italic mt-0.5">{trd('labels.whatToExpect')} {day.expect}</p>
            </div>
          ))}
        </div>

        {/* Included / Excluded */}
        <div className="grid grid-cols-2 gap-6 mb-6 no-break page-break">
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide border-l-4 border-gray-900 pl-3">{trd('labels.included')}</h2>
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
            <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide border-l-4 border-gray-900 pl-3">{trd('labels.notIncluded')}</h2>
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
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide border-l-4 border-gray-900 pl-3">{trd('labels.pricing')}</h2>
          <div className="grid grid-cols-3 gap-4">
            {([
              { label: trd('labels.solo'),  price: routeContent.pricing.solo  },
              { label: trd('labels.small'), price: routeContent.pricing.small },
              { label: trd('labels.group'), price: routeContent.pricing.group },
            ]).map((tier) => (
              <div key={tier.label} className="bg-gray-900 rounded-lg p-4 text-center">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">{tier.label}</p>
                <p className="text-white text-xl font-bold">${tier.price.toLocaleString()}</p>
                <p className="text-gray-500 text-xs mt-0.5">{trd('labels.perPerson')}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-4 flex items-center justify-between no-break">
          <div>
            <p className="text-xs font-bold text-gray-900">Extreme Wilderness Adventure</p>
            <p className="text-xs text-gray-500">info@theextremewilderness.com · www.theextremewilderness.com</p>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Extreme Wilderness Adventure</p>
        </div>
      </div>
    </>
  )
}
