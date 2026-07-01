import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArrowRight, Layers, Moon, Mountain, Navigation2, Flashlight, Sun,
  Droplets, Pill, HeartPulse, Zap, Package, ShieldCheck } from 'lucide-react'
import KiliRouteMap from '@/components/trekking/KiliRouteMap'

export const metadata: Metadata = {
  title: 'Kilimanjaro Trekking & Mountain Climbing Tanzania',
  description:
    "Climb Africa's highest peak with Tanzania's most experienced local guides. Machame, Lemosho, Marangu and Rongai routes. TANAPA certified, full safety backup.",
}

const MONTH_CHIPS = [
  { name: 'Jan', type: 'good' }, { name: 'Feb', type: 'good' },
  { name: 'Mar', type: 'avoid' }, { name: 'Apr', type: 'avoid' }, { name: 'May', type: 'avoid' },
  { name: 'Jun', type: 'prime' }, { name: 'Jul', type: 'prime' }, { name: 'Aug', type: 'prime' },
  { name: 'Sep', type: 'prime' }, { name: 'Oct', type: 'prime' },
  { name: 'Nov', type: 'avoid' }, { name: 'Dec', type: 'good' },
]

const routes = [
  {
    name: 'Machame Route',
    nickname: 'The Whiskey Route',
    days: '6–7 days',
    difficulty: 'Hard',
    successRate: '85%',
    priceFrom: 1658,
    desc: 'The most scenic and popular route, nicknamed the "Whiskey Route" for its challenging terrain. Excellent acclimatisation profile with a high-camp, low-sleep approach.',
    href: '/trekking/machame',
    image: '/images/gallery/kilimanjaro.png',
    badge: 'Most Popular',
  },
  {
    name: 'Lemosho Route',
    nickname: 'The Scenic Route',
    days: '7–8 days',
    difficulty: 'Moderate',
    successRate: '90%',
    priceFrom: 1931,
    desc: 'Widely considered the best overall route. Starts remote on the western slope, crosses the Shira Plateau and delivers the highest summit success rate of all standard routes.',
    href: '/trekking/lemosho',
    image: '/images/gallery/kilimanjaro%20(4).png',
    badge: 'Recommended',
  },
  {
    name: 'Marangu Route',
    nickname: 'The Coca-Cola Route',
    days: '5–6 days',
    difficulty: 'Moderate',
    successRate: '65%',
    priceFrom: 1523,
    desc: 'The classic route and the only one with hut dormitory accommodation throughout. The most affordable option, though its rapid ascent reduces summit success rates.',
    href: '/trekking/marangu',
    image: '/images/gallery/kilimanjaro%20(1).png',
    badge: null,
  },
  {
    name: 'Rongai Route',
    nickname: 'The Northern Approach',
    days: '6–7 days',
    difficulty: 'Easy–Moderate',
    successRate: '80%',
    priceFrom: 1960,
    desc: 'The only route approaching from the north near the Kenyan border. Quieter, drier, and ideal during the rainy season. A true wilderness feel with gentle gradients.',
    href: '/trekking/rongai',
    image: '/images/gallery/kilimanjaro%20(2).png',
    badge: null,
  },
  {
    name: 'Umbwe Route',
    nickname: 'The Direct Route',
    days: '6–7 days',
    difficulty: 'Very Hard',
    successRate: '70%',
    priceFrom: 1880,
    desc: 'The steepest and most direct route — for experienced trekkers only. Gains elevation rapidly through dense forest and dramatic ridgelines before joining the Southern Circuit.',
    href: '/trekking/umbwe',
    image: '/images/gallery/kilimanjaro%20(3).png',
    badge: 'Advanced',
  },
  {
    name: 'Northern Circuit',
    nickname: 'The Longest Route',
    days: '9–10 days',
    difficulty: 'Moderate',
    successRate: '95%',
    priceFrom: 2237,
    desc: 'The newest and longest route, circumnavigating the entire mountain for a four-sided view. The extra days deliver the best acclimatisation and the highest summit success rate of any route.',
    href: '/trekking/northern-circuit',
    image: '/images/gallery/kilimanjaro%20(5).png',
    badge: 'Best Success Rate',
  },
]

export default async function TrekkingPage() {
  const t = await getTranslations('trekking')

  const gearCategories = [
    { label: t('gear1Cat'), items: [
      { icon: Layers,      name: t('gear1item1Name'), desc: t('gear1item1Desc') },
      { icon: Moon,        name: t('gear1item2Name'), desc: t('gear1item2Desc') },
      { icon: Mountain,    name: t('gear1item3Name'), desc: t('gear1item3Desc') },
      { icon: ShieldCheck, name: t('gear1item4Name'), desc: t('gear1item4Desc') },
    ]},
    { label: t('gear2Cat'), items: [
      { icon: Navigation2, name: t('gear2item1Name'), desc: t('gear2item1Desc') },
      { icon: Flashlight,  name: t('gear2item2Name'), desc: t('gear2item2Desc') },
      { icon: Package,     name: t('gear2item3Name'), desc: t('gear2item3Desc') },
    ]},
    { label: t('gear3Cat'), items: [
      { icon: Pill,        name: t('gear3item1Name'), desc: t('gear3item1Desc') },
      { icon: HeartPulse,  name: t('gear3item2Name'), desc: t('gear3item2Desc') },
      { icon: Sun,         name: t('gear3item3Name'), desc: t('gear3item3Desc') },
    ]},
    { label: t('gear4Cat'), items: [
      { icon: Droplets,    name: t('gear4item1Name'), desc: t('gear4item1Desc') },
      { icon: Zap,         name: t('gear4item2Name'), desc: t('gear4item2Desc') },
    ]},
  ]

  const seasons = [
    {
      label: t('season1Label'),
      months: t('season1Months'),
      desc: t('season1Desc'),
      bullets: [t('season1b1'), t('season1b2'), t('season1b3'), t('season1b4')],
      chips: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      style: 'prime' as const,
      warning: null as string | null,
    },
    {
      label: t('season2Label'),
      months: t('season2Months'),
      desc: t('season2Desc'),
      bullets: [t('season2b1'), t('season2b2'), t('season2b3')],
      chips: ['Dec', 'Jan', 'Feb'],
      style: 'good' as const,
      warning: null as string | null,
    },
    {
      label: t('season3Label'),
      months: t('season3Months'),
      desc: t('season3Desc'),
      bullets: [t('season3b1'), t('season3b2'), t('season3b3')],
      chips: ['Mar', 'Apr', 'May', 'Nov'],
      style: 'avoid' as const,
      warning: t('season3Warning') as string | null,
    },
  ]

  const articles = [
    { category: t('article1Cat'), title: t('article1Title'), desc: t('article1Desc'), readTime: t('article1Time'), href: '/blog', image: '/images/gallery/kilimanjaro.png' },
    { category: t('article2Cat'), title: t('article2Title'), desc: t('article2Desc'), readTime: t('article2Time'), href: '/blog', image: '/images/gallery/kilimanjaro%20(4).png' },
    { category: t('article3Cat'), title: t('article3Title'), desc: t('article3Desc'), readTime: t('article3Time'), href: '/blog', image: '/images/gallery/kilimanjaro%20(2).png' },
    { category: t('article4Cat'), title: t('article4Title'), desc: t('article4Desc'), readTime: t('article4Time'), href: '/blog', image: '/images/gallery/kilimanjaro%20(3).png' },
  ]

  const badgeMap: Record<string, string> = {
    'Most Popular': t('badgeMostPopular'),
    'Recommended': t('badgeRecommended'),
    'Advanced': t('badgeAdvanced'),
    'Best Success Rate': t('badgeBestRate'),
  }

  return (
    <>
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/kilimanjaro%20(5).png"
            alt="Kilimanjaro summit at dawn"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand/70 via-brand/50 to-brand/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-4">
              {t('heroEyebrow')}
            </span>
            <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-5">
              {t('heroTitle')}<br />
              <span className="text-gold">{t('stat1Value')}</span>
            </h1>
            <p className="text-white/70 text-lg">
              {t('heroTagline')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Kilimanjaro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
            {[
              { value: t('stat1Value'), label: t('stat1Label'), sub: t('stat1Sub') },
              { value: t('stat2Value'), label: t('stat2Label'), sub: t('stat2Sub') },
              { value: t('stat3Value'), label: t('stat3Label'), sub: t('stat3Sub') },
            ].map(({ value, label, sub }) => (
              <div key={label} className="p-6 bg-light-green rounded-2xl">
                <div className="text-3xl font-bold text-brand mb-1">{value}</div>
                <div className="font-medium text-brand text-sm">{label}</div>
                <div className="text-text-muted text-xs">{sub}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-brand mb-8">{t('chooseRouteHeading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-0.5 flex flex-col"
              >
                <div className="relative h-44">
                  <Image src={route.image} alt={route.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  {route.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-gold text-brand text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {badgeMap[route.badge] ?? route.badge}
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="font-semibold text-brand text-lg leading-tight">{route.name}</h3>
                    <p className="text-gold text-xs font-medium mt-0.5">{route.nickname}</p>
                  </div>
                  <p className="text-text-muted text-sm mb-4 leading-relaxed flex-1">{route.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-4">
                    <span>{route.days}</span>
                    <span>{route.difficulty}</span>
                    <span>{route.successRate}{t('successSuffix')}</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-text-muted">{t('fromLabel')}</span>
                      <span className="font-bold text-brand">${route.priceFrom.toLocaleString()}</span>
                      <span className="text-xs text-text-muted">{t('personLabel')}</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-gold transition-colors">
                      {t('viewRoute')} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <KiliRouteMap />

      {/* Your Summit Kit */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">{t('summitKitEyebrow')}</span>
            <h2 className="text-3xl font-semibold text-white">{t('packHeading')}</h2>
            <p className="text-white/50 text-sm mt-2">
              {t('packSubtitle')}
            </p>
          </div>

          {/* Category rows */}
          <div className="space-y-8">
            {gearCategories.map(({ label, items }) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                {/* Category label */}
                <div className="sm:w-44 flex-shrink-0 border-l-2 border-gold pl-3">
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-tight">{label}</p>
                </div>
                {/* Items */}
                <div className="flex flex-wrap gap-3">
                  {items.map(({ icon: Icon, name, desc }) => (
                    <div
                      key={name}
                      className="flex items-start gap-3 bg-white/8 border border-white/15 rounded-xl px-4 py-3 hover:bg-white/[0.12] hover:border-white/25 transition-all"
                    >
                      <Icon className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-semibold leading-tight">{name}</p>
                        <p className="text-white/45 text-xs mt-0.5 leading-snug max-w-[180px]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pro tip */}
          <div className="mt-12 bg-white/8 border border-white/15 rounded-2xl p-6 flex items-start gap-4">
            <span className="text-xl flex-shrink-0">💡</span>
            <div>
              <p className="text-white font-semibold text-sm mb-1">{t('proTipLabel')}</p>
              <p className="text-white/55 text-sm leading-relaxed">
                {t('proTipText')}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* When to Summit */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">{t('sumIntelEyebrow')}</span>
            <h2 className="text-3xl font-semibold text-brand">{t('whenToSummitHeading')}</h2>
            <p className="text-text-muted text-sm mt-3 max-w-lg mx-auto">
              {t('whenToSummitSubtitle')}
            </p>
          </div>

          {/* Three season cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {seasons.map(({ label, months, desc, bullets, chips, style, warning }) => (
              <div
                key={label}
                className={`rounded-3xl p-8 flex flex-col ${
                  style === 'prime'
                    ? 'bg-brand border-2 border-gold shadow-xl'
                    : style === 'good'
                    ? 'bg-light-green border border-brand/20'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                  style === 'prime' ? 'text-gold' : style === 'good' ? 'text-brand' : 'text-text-muted'
                }`}>{label}</p>

                <p className={`text-2xl font-bold mb-3 ${
                  style === 'prime' ? 'text-white' : 'text-brand'
                }`}>{months}</p>

                <p className={`text-sm leading-relaxed mb-6 ${
                  style === 'prime' ? 'text-white/70' : 'text-text-muted'
                }`}>{desc}</p>

                <ul className="space-y-2.5 flex-1">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        style === 'prime' ? 'bg-gold' : style === 'good' ? 'bg-brand' : 'bg-gray-400'
                      }`} />
                      <span className={style === 'prime' ? 'text-white/80' : 'text-text-muted'}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Month chips */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {chips.map((c) => (
                    <span key={c} className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      style === 'prime'
                        ? 'bg-gold/20 text-gold border border-gold/30'
                        : style === 'good'
                        ? 'bg-brand/10 text-brand border border-brand/15'
                        : 'bg-gray-100 text-text-muted border border-gray-300'
                    }`}>{c}</span>
                  ))}
                </div>

                {/* Warning note for rain season */}
                {warning && (
                  <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <p className="text-xs text-amber-800 leading-relaxed">{warning}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick-reference month strip */}
          <div className="flex flex-wrap justify-center gap-2">
            {MONTH_CHIPS.map(({ name, type }) => (
              <span key={name} className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                type === 'prime'
                  ? 'bg-gold/15 text-brand border-gold/40'
                  : type === 'good'
                  ? 'bg-brand/10 text-brand border-brand/20'
                  : 'bg-gray-100 text-text-muted border-gray-200'
              }`}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Expedition Notes */}
      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">{t('expeditionEyebrow')}</span>
              <h2 className="text-3xl font-semibold text-brand">{t('beforeClimbHeading')}</h2>
              <p className="text-text-muted text-sm mt-2 max-w-md">
                {t('beforeClimbSubtitle')}
              </p>
            </div>
            <Link href="/blog" className="flex-shrink-0 flex items-center gap-1.5 text-brand font-semibold text-sm hover:text-gold transition-colors">
              {t('browseAllArticles')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured article — full-width hero card */}
          <Link
            href={articles[0].href}
            className="group relative rounded-3xl overflow-hidden flex items-end mb-6 block"
            style={{ minHeight: 360 }}
          >
            <Image
              src={articles[0].image}
              alt={articles[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-transparent" />
            <div className="relative z-10 p-8 md:p-10">
              <span className="inline-block px-3 py-1 bg-gold text-brand text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                {articles[0].category}
              </span>
              <h3 className="text-white font-bold text-2xl md:text-3xl leading-tight mb-3 max-w-2xl">
                {articles[0].title}
              </h3>
              <p className="text-white/65 text-sm mb-5 max-w-xl hidden sm:block">{articles[0].desc}</p>
              <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                {t('readTheGuide')} <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Three supporting cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {articles.slice(1).map(({ category, title, readTime, href, image }) => (
              <Link
                key={title}
                href={href}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-brand/20 transition-all flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="inline-block px-2.5 py-0.5 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 self-start">
                    {category}
                  </span>
                  <h3 className="font-bold text-brand text-sm leading-snug mb-auto">{title}</h3>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <span className="text-xs text-text-muted">{readTime}</span>
                    <span className="flex items-center gap-1 text-brand text-xs font-semibold group-hover:text-gold transition-colors">
                      {t('readLabel')} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-white mb-4">{t('ctaHeading')}</h2>
          <p className="text-white/70 mb-8">{t('ctaSubtitle')}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors">
            {t('ctaButton')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
