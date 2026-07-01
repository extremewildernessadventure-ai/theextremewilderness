'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { MapPin, Clock, TrendingUp, Trophy, ArrowRight, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useBooking } from '@/context/BookingContext'
import KiliRouteMapSVG from '@/components/trekking/KiliRouteMapSVG'

const routes = [
  {
    id: 'machame',
    name: 'Machame Route',
    nickname: 'The Whiskey Route',
    mapFile: 'machame.webp',
    difficulty: 'Hard',
    difficultyColor: 'text-orange-500',
    days: '6–7 days',
    successRate: '85%',
    priceFrom: 1658,
    description:
      'The most scenic and popular route on Kilimanjaro, nicknamed the "Whiskey Route" for its challenging terrain. Beginning at Machame Gate on the southern slope, the trail winds through magnificent rainforest before ascending to the Shira Plateau. The route offers an excellent acclimatization profile with its high-camp, low-sleep approach. Descent is via the Mweka trail.',
    highlights: ['Barranco Wall scramble', 'Lava Tower acclimatisation', 'Diverse ecosystems', 'Mweka descent'],
    href: '/trekking/machame',
  },
  {
    id: 'lemosho',
    name: 'Lemosho Route',
    nickname: 'The Scenic Route',
    mapFile: 'lemosho.webp',
    difficulty: 'Moderate',
    difficultyColor: 'text-yellow-500',
    days: '7–8 days',
    successRate: '90%',
    priceFrom: 1931,
    description:
      'Widely considered the best overall route on Kilimanjaro. Starting from Londorossi Gate in the west, Lemosho traverses the remote Shira Plateau and joins the Southern Circuit. Its longer duration gives superior acclimatisation and the highest summit success rate of the standard routes. The route is less crowded on the lower slopes and armed rangers accompany groups on the first day.',
    highlights: ['Remote Shira Plateau', 'Best acclimatisation profile', 'Forest & moorland diversity', 'Highest success rate'],
    href: '/trekking/lemosho',
  },
  {
    id: 'marangu',
    name: 'Marangu Route',
    nickname: 'The Coca-Cola Route',
    mapFile: 'marangu.webp',
    difficulty: 'Moderate',
    difficultyColor: 'text-yellow-500',
    days: '5–6 days',
    successRate: '65%',
    priceFrom: 1523,
    description:
      'The classic Kilimanjaro route and the only one offering dormitory hut accommodation at every campsite, making it the most comfortable option. Known as the "Coca-Cola Route," it is the most direct path to the summit and the most affordable. However, its shorter duration and rapid ascent means lower acclimatisation time and a reduced summit success rate.',
    highlights: ['Hut accommodation throughout', 'Most affordable route', 'Gradual ascent on rainforest trail', 'Same ascent & descent path'],
    href: '/trekking/marangu',
  },
  {
    id: 'rongai',
    name: 'Rongai Route',
    nickname: 'The Northern Approach',
    mapFile: 'rongai.webp',
    difficulty: 'Easy–Moderate',
    difficultyColor: 'text-green-500',
    days: '6–7 days',
    successRate: '80%',
    priceFrom: 1960,
    description:
      'The only route approaching Kilimanjaro from the north, starting near the Kenyan border. Rongai is one of the quieter and least-trafficked routes, offering a true wilderness feel. The northern slopes receive less rainfall, making this a good option during the rainy season. The route is considered one of the easiest with a gentle gradient throughout.',
    highlights: ['North side approach', 'Less crowded trails', 'Good in rainy season', 'Wilderness atmosphere'],
    href: '/trekking/rongai',
  },
  {
    id: 'umbwe',
    name: 'Umbwe Route',
    nickname: 'The Direct Route',
    mapFile: 'umbwe.webp',
    difficulty: 'Very Hard',
    difficultyColor: 'text-red-500',
    days: '6–7 days',
    successRate: '70%',
    priceFrom: 1880,
    description:
      'The steepest and most direct route to the summit, recommended only for experienced trekkers with high altitude experience. Umbwe gains elevation rapidly through dense forest and dramatic ridgelines before joining the Southern Circuit at Barranco Camp. Due to the rapid ascent, acclimatisation is challenging and summit success rates are lower. Not recommended for first-time Kilimanjaro climbers.',
    highlights: ['Most direct route', 'Dense forest ridgeline', 'Joins Machame at Barranco', 'For experienced trekkers only'],
    href: '/trekking/umbwe',
  },
  {
    id: 'northern-circuit',
    name: 'Northern Circuit',
    nickname: 'The Longest Route',
    mapFile: 'northern-circuit.webp',
    difficulty: 'Moderate',
    difficultyColor: 'text-yellow-500',
    days: '9–10 days',
    successRate: '95%',
    priceFrom: 2237,
    description:
      'The newest and longest route on Kilimanjaro, offering the best acclimatisation of any route and the highest summit success rate at 95%+. Beginning on the western slope, the Northern Circuit circumnavigates the entire mountain — giving trekkers breathtaking views from all four sides — before summiting from the west. The extra days make a real difference in altitude adaptation.',
    highlights: ['Highest success rate 95%+', '360° views of the mountain', 'Best acclimatisation', 'Most remote & scenic'],
    href: '/trekking/northern-circuit',
  },
]

export default function KiliRouteMap() {
  const [activeId, setActiveId] = useState('machame')
  const active = routes.find((r) => r.id === activeId)!
  const { openBooking } = useBooking()
  const t = useTranslations('trekking')

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
        style={{ backgroundImage: 'url(/images/gallery/safari-110.jpg)' }}
      />
      {/* Gradient overlay — dark at top/bottom, lighter in centre so photo reads */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
            {t('chooseYourPath')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-3">
            {t('routeMapHeading')}
          </h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto">
            {t('routeMapSubtitle')}
          </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-5">

          {/* Left — route selector list */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/15">
              {routes.map((route) => (
                <button
                  key={route.id}
                  onClick={() => setActiveId(route.id)}
                  className={`w-full flex items-center gap-2.5 px-4 py-3.5 text-left transition-all duration-200 border-b border-white/10 last:border-0 ${
                    activeId === route.id
                      ? 'bg-gold text-brand font-bold'
                      : 'text-white/80 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 flex-shrink-0 ${activeId === route.id ? 'text-brand' : 'text-gold'}`} />
                  <span className="text-sm leading-tight">{route.name}</span>
                  {activeId === route.id && (
                    <ChevronRight className="w-3.5 h-3.5 ml-auto flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

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
                <span className="text-white/45 text-[11px] tracking-wide">{t('topoMapLabel')}</span>
                <span className="text-white/25 text-[11px]">·</span>
                <span className="text-gold text-[11px] font-semibold tracking-wide">{active.name}</span>
                <span className="text-white/25 text-[11px]">·</span>
                <span className="text-white/45 text-[11px] tracking-wide">{t('tanapaApproved')}</span>
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
                    packageType: 'Kilimanjaro Trek',
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
