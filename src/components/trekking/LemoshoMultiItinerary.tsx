'use client'

import { useState } from 'react'
import { ChevronDown, Check, X } from 'lucide-react'
import { type ReactNode } from 'react'
import RoutePricingButton from '@/components/trekking/RoutePricingButton'

type DayItem = { day: number; title: string; meta: string; body: string; expect: string }
type QuickFacts = Record<string, string>
type Pricing = { solo: number; small: number; group: number }

interface Variant {
  quickFacts: QuickFacts
  arrivalDay: string
  itinerary: DayItem[]
  pricing: Pricing
}

interface ChoosingItem { label: string; successRate: string; desc: string }
interface Highlight { title: string; body: string }
interface FAQ { q: string; a: string }

interface Labels {
  quickFacts: string
  itinerary: string
  arrivalDay: string
  whatToExpect: string
  included: string
  notIncluded: string
  pricing: string
  solo: string
  small: string
  group: string
  perPerson: string
  from: string
  bookThisRoute: string
  [k: string]: string
}

const QUICK_FACT_KEYS = [
  'routeName', 'duration', 'distance', 'startGate', 'finishGate', 'summit',
  'difficulty', 'trailTraffic', 'successRate', 'bestSeason', 'accommodation', 'priceFrom',
] as const

type TabKey = '6' | '7' | '8'

interface Props {
  variants: { '6': Variant; '7': Variant; '8': Variant }
  included: string[]
  excluded: string[]
  choosing: { intro: string; items: ChoosingItem[]; footer: string }
  highlights: Highlight[]
  faq: FAQ[]
  labels: Labels
  bookThisRouteLabel: string
  pdfCard: ReactNode
  tabLabels: Record<TabKey, string>
  tabBadges: Partial<Record<TabKey, string>>
  routeNames: Record<TabKey, string>
  headings: { choosing: string; highlights: string; faq: string }
}

const TAB_KEYS: TabKey[] = ['6', '7', '8']

export default function LemoshoMultiItinerary({
  variants,
  included,
  excluded,
  choosing,
  highlights,
  faq,
  labels,
  pdfCard,
  tabLabels,
  tabBadges,
  routeNames,
  headings,
}: Props) {
  const [active, setActive] = useState<TabKey>('7')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const v = variants[active]

  return (
    <div className="space-y-12">

      {/* ── Tab switcher ─────────────────────────────────────── */}
      <div>
        <div className="flex gap-2 flex-wrap mb-8">
          {TAB_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`relative flex flex-col items-start px-5 py-3 rounded-xl border text-sm font-semibold transition-all ${
                active === key
                  ? 'bg-brand text-white border-brand shadow-md'
                  : 'bg-white text-brand border-gray-200 hover:border-brand/40'
              }`}
            >
              <span>{tabLabels[key]}</span>
              {tabBadges[key] && (
                <span className={`text-[10px] font-bold uppercase tracking-wide mt-0.5 ${
                  active === key ? 'text-gold' : 'text-text-muted'
                }`}>{tabBadges[key]}</span>
              )}
            </button>
          ))}
        </div>

        {/* ── Quick Facts ──────────────────────────────────────── */}
        <h2 className="text-2xl font-semibold text-brand mb-5">{labels.quickFacts}</h2>
        <div className="bg-light-green rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
          {QUICK_FACT_KEYS.map((key) => (
            <div key={key} className="flex justify-between gap-3 text-sm">
              <span className="text-text-muted font-medium">{labels[key] ?? key}</span>
              <span className="text-brand font-semibold text-end">{v.quickFacts[key] ?? '—'}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Day-by-Day ───────────────────────────────────────── */}
      <div>
        <h2 className="text-2xl font-semibold text-brand mb-5">{labels.itinerary}</h2>
        <div className="space-y-3">
          <details className="group border border-gray-100 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-light-green transition-colors list-none">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand/60 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">0</span>
                <span className="font-medium text-brand text-sm">{labels.arrivalDay}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
              <p className="text-sm text-text-muted leading-relaxed">{v.arrivalDay}</p>
            </div>
          </details>

          {v.itinerary.map((day) => (
            <details key={`${active}-${day.day}`} className="group border border-gray-100 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-light-green transition-colors list-none">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {day.day}
                  </span>
                  <span className="font-medium text-brand text-sm">{day.title}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
                <p className="text-xs text-gold-label font-semibold uppercase tracking-wide mb-2">{day.meta}</p>
                <p className="text-sm text-text-muted leading-relaxed mb-3">{day.body}</p>
                <p className="text-xs text-text-muted italic">{labels.whatToExpect} {day.expect}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* ── Included / Excluded ──────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" /> {labels.included}
          </h3>
          <ul className="space-y-1.5">
            {included.map((item) => (
              <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
            <X className="w-4 h-4 text-red-400" /> {labels.notIncluded}
          </h3>
          <ul className="space-y-1.5">
            {excluded.map((item) => (
              <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── PDF guide card ───────────────────────────────────── */}
      {pdfCard}

      {/* ── Pricing ──────────────────────────────────────────── */}
      <div>
        <h2 className="text-2xl font-semibold text-brand mb-5">{labels.pricing}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {([
            { label: labels.solo,  key: 'solo',  price: v.pricing.solo  },
            { label: labels.small, key: 'small', price: v.pricing.small },
            { label: labels.group, key: 'group', price: v.pricing.group },
          ] as const).map((tier) => (
            <div key={tier.key} className="bg-brand rounded-2xl p-6 text-center">
              <p className="text-white/70 text-xs uppercase tracking-wide mb-2">{tier.label}</p>
              <p className="text-gold text-2xl font-bold">${tier.price.toLocaleString('en-US')}</p>
              <p className="text-white/50 text-xs mt-1">{labels.perPerson}</p>
              <RoutePricingButton
                routeName={routeNames[active]}
                tier={tier.key}
                price={tier.price}
                duration={v.quickFacts.duration}
                label={labels.bookThisRoute}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Choosing section ─────────────────────────────────── */}
      <div className="bg-light-green rounded-2xl p-7">
        <h2 className="text-2xl font-semibold text-brand mb-4">{headings.choosing}</h2>
        <p className="text-text-muted text-sm leading-relaxed mb-6">{choosing.intro}</p>
        <div className="space-y-4 mb-6">
          {choosing.items.map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-5 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-brand font-bold text-sm">{item.label}</span>
                <span className="text-xs font-semibold text-gold-label bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-full">
                  {item.successRate}
                </span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm italic leading-relaxed">{choosing.footer}</p>
      </div>

      {/* ── Highlights ───────────────────────────────────────── */}
      <div>
        <h2 className="text-2xl font-semibold text-brand mb-5">{headings.highlights}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((h) => (
            <div key={h.title} className="bg-white border border-gray-100 rounded-xl p-5">
              <p className="font-semibold text-brand text-sm mb-1.5">{h.title}</p>
              <p className="text-text-muted text-sm leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <div>
        <h2 className="text-2xl font-semibold text-brand mb-5">{headings.faq}</h2>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex items-center justify-between w-full p-4 bg-white hover:bg-light-green transition-colors text-start"
              >
                <span className="font-medium text-brand text-sm pe-4">{item.q}</span>
                <ChevronDown className={`w-4 h-4 text-text-muted flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
                  <p className="text-sm text-text-muted leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
