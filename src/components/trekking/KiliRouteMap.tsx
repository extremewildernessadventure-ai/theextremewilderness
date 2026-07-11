'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { MapPin, Clock, TrendingUp, Trophy, ArrowRight, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useBooking } from '@/context/BookingContext'
import KiliRouteMapSVG from '@/components/trekking/KiliRouteMapSVG'

const ROUTE_META: Record<string, { mapFile: string; difficultyColor: string; priceFrom: number; href: string }> = {
  machame:            { mapFile: 'machame.webp',           difficultyColor: 'text-orange-500', priceFrom: 2350, href: '/trekking/machame' },
  lemosho:             { mapFile: 'lemosho.webp',            difficultyColor: 'text-yellow-500', priceFrom: 2595, href: '/trekking/lemosho' },
  marangu:             { mapFile: 'marangu.webp',            difficultyColor: 'text-yellow-500', priceFrom: 1950, href: '/trekking/marangu' },
  rongai:              { mapFile: 'rongai.webp',             difficultyColor: 'text-green-500',  priceFrom: 2250, href: '/trekking/rongai' },
  umbwe:               { mapFile: 'umbwe.webp',              difficultyColor: 'text-red-500',    priceFrom: 1880, href: '/trekking/umbwe' },
  'northern-circuit':  { mapFile: 'northern-circuit.webp',   difficultyColor: 'text-yellow-500', priceFrom: 2237, href: '/trekking/northern-circuit' },
}
const ROUTE_IDS = ['machame', 'lemosho', 'marangu', 'rongai', 'umbwe', 'northern-circuit'] as const

export default function KiliRouteMap({ route }: { route?: string } = {}) {
  const isLocked = route !== undefined
  const t = useTranslations('trekking')
  const trd = useTranslations('trekkingRouteDetail')
  const tc = useTranslations('common')

  const routes = ROUTE_IDS.map((id, i) => {
    const n = i + 1
    return {
      id,
      name: t(`route${n}Name` as 'route1Name'),
      nickname: trd(`${id}.nickname` as 'machame.nickname'),
      difficulty: trd(`${id}.quickFacts.difficulty` as 'machame.quickFacts.difficulty'),
      days: trd(`${id}.quickFacts.duration` as 'machame.quickFacts.duration'),
      successRate: trd(`${id}.quickFacts.successRate` as 'machame.quickFacts.successRate'),
      description: trd(`${id}.intro.0` as 'machame.intro.0'),
      highlights: [
        t(`route${n}H1` as 'route1H1'), t(`route${n}H2` as 'route1H2'),
        t(`route${n}H3` as 'route1H3'), t(`route${n}H4` as 'route1H4'),
      ],
      ...ROUTE_META[id],
    }
  })

  // When locked to a single route, activeId always tracks the route prop
  // directly (not state) so client-side navigation between route pages
  // (e.g. clicking a route card link) can't leave a stale map on screen.
  const [selectedId, setSelectedId] = useState('machame')
  const activeId = isLocked ? route! : selectedId
  const active = routes.find((r) => r.id === activeId) ?? routes.find((r) => r.id === 'machame')!
  const { openBooking } = useBooking()

  return (
    <section className="relative py-24 overflow-hidden bg-brand-dark">
      <style>{`
        @keyframes kili-fade-in {
          from { opacity: 0; transform: scale(0.98); }
          to   { opacity: 1; transform: scale(1); }
        }
        .kili-map-enter { animation: kili-fade-in 0.35s ease-out both; }
      `}</style>
      {/* Kilimanjaro summit background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/gallery/safari-110.webp)' }}
      />
      {/* Gradient overlay — dark at top/bottom, lighter in centre so photo reads */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
            {isLocked ? t('routeMapEyebrowLocked') : t('chooseYourPath')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-3">
            {isLocked ? t('routeMapHeadingLocked', { routeName: active.name }) : t('routeMapHeading')}
          </h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto">
            {isLocked ? t('routeMapSubtitleLocked') : t('routeMapSubtitle')}
          </p>
        </div>

        {/* Main layout */}
        <div className={isLocked ? 'flex flex-col gap-5' : 'flex flex-col lg:flex-row gap-5'}>

          {/* Left — route selector list (only when not locked to a single route) */}
          {!isLocked && (
            <div className="lg:w-56 flex-shrink-0">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/15">
                {routes.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedId(r.id)}
                    className={`w-full flex items-center gap-2.5 px-4 py-3.5 text-left transition-all duration-200 border-b border-white/10 last:border-0 ${
                      activeId === r.id
                        ? 'bg-gold text-brand font-bold'
                        : 'text-white/80 hover:bg-white/15 hover:text-white'
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 flex-shrink-0 ${activeId === r.id ? 'text-brand' : 'text-gold'}`} />
                    <span className="text-sm leading-tight">{r.name}</span>
                    {activeId === r.id && (
                      <ChevronRight className="w-3.5 h-3.5 ml-auto flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Right — map + info */}
          <div className="flex-1 flex flex-col gap-4">
            {/* SVG route map */}
            <div className="w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <div key={activeId} className="kili-map-enter">
                <KiliRouteMapSVG routeId={active.id} />
              </div>
            </div>

            {/* Map caption */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-black/35 backdrop-blur-sm border border-gold/60 rounded-full px-4 py-1.5">
                <span className="text-white/70 text-[11px] tracking-wide">{t('topoMapLabel')}</span>
                <span className="text-white/25 text-[11px]">·</span>
                <span className="text-gold text-[11px] font-semibold tracking-wide">{active.name}</span>
                <span className="text-white/25 text-[11px]">·</span>
                <span className="text-white/70 text-[11px] tracking-wide">{t('tanapaApproved')}</span>
              </div>
            </div>

            {/* Route info card */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/15 p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-0.5">{active.name}</h3>
                  <p className="text-gold text-sm font-medium">{active.nickname}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 bg-black/30 rounded-lg px-3 py-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span className="text-white text-xs font-medium">{active.days}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/30 rounded-lg px-3 py-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-gold" />
                    <span className={`text-xs font-medium ${active.difficultyColor}`}>{active.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/30 rounded-lg px-3 py-1.5">
                    <Trophy className="w-3.5 h-3.5 text-gold" />
                    <span className="text-white text-xs font-medium">{t('successRateLabel', { rate: active.successRate })}</span>
                  </div>
                </div>
              </div>

              <p className="text-white/75 text-sm leading-relaxed mb-4">
                {active.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {active.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-1.5 text-xs text-white/70">
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    {h}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <span className="text-white/50 text-xs">{t('startingFrom')} </span>
                  <span className="text-gold font-bold text-lg">${active.priceFrom.toLocaleString()}</span>
                  <span className="text-white/50 text-xs"> {t('perPerson')}</span>
                </div>
                <button
                  type="button"
                  onClick={() => openBooking({
                    packageName: active.name,
                    packageType: tc('packageTypes.kiliTrek'),
                    priceFrom: `$${active.priceFrom.toLocaleString()}`,
                    duration: active.days,
                  })}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-dark text-brand font-bold text-sm rounded-xl transition-colors"
                >
                  {t('bookThisRoute')} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
