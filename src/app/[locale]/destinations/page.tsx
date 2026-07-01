import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, MapPin, Clock, Star, CheckCircle2, Binoculars, Users, Car, Headphones, Shield, Compass, Trophy } from 'lucide-react'
import BookNowButton from '@/components/booking/BookNowButton'
import { getTranslations } from 'next-intl/server'
import { getLocale } from 'next-intl/server'
import { getDestinations } from '@/data/destinations.i18n'

export const metadata: Metadata = {
  title: 'Tanzania Safari Destinations | Serengeti, Ngorongoro & More',
  description:
    "Explore Tanzania's finest safari destinations across three circuits. Serengeti's Great Migration, Ngorongoro Crater's Big Five, Tarangire's elephant herds, southern wilderness, and western chimpanzee parks. Expert-guided from Arusha.",
  keywords: [
    'Tanzania safari destinations',
    'Serengeti National Park',
    'Ngorongoro Crater',
    'Tarangire National Park',
    'Ruaha National Park',
    'Nyerere National Park',
    'Zanzibar island',
    'Tanzania circuits',
    'northern circuit Tanzania',
    'southern circuit Tanzania',
  ],
}

const tanzaniaStats = [
  { icon: '🦁', stat: '26' },
  { icon: '🌍', stat: '28%' },
  { icon: '🐦', stat: '1,100+' },
  { icon: '🦒', stat: '70+' },
  { icon: '🏔️', stat: '5,895 m' },
  { icon: '🏆', stat: '#1' },
]

const DEST_EXTRA: Record<string, { badge: string; badgeColor: string; bestTime: string; duration: string; priceFrom: string }> = {
  serengeti:       { badge: 'Must-Visit',          badgeColor: 'bg-gold text-brand',           bestTime: 'Jul – Oct & Jan – Feb', duration: '3–7 days', priceFrom: '$280' },
  ngorongoro:      { badge: 'UNESCO World Heritage', badgeColor: 'bg-brand text-white',         bestTime: 'Jun – Oct & Jan – Mar', duration: '1–2 days', priceFrom: '$240' },
  tarangire:       { badge: 'Elephant Paradise',   badgeColor: 'bg-brand text-white',           bestTime: 'Jun – Oct',             duration: '2–3 days', priceFrom: '$200' },
  manyara:         { badge: 'Scenic Wonder',        badgeColor: 'bg-gold text-brand',            bestTime: 'Jun – Oct & Jan – Feb', duration: '1–2 days', priceFrom: '$180' },
  katavi:          { badge: 'Raw Wilderness',       badgeColor: 'bg-brand-secondary text-white', bestTime: 'Jul – Oct',             duration: '3–4 days', priceFrom: '$350' },
  gombe:           { badge: 'Conservation Icon',    badgeColor: 'bg-gold text-brand',            bestTime: 'Aug – Nov',             duration: '2–3 days', priceFrom: '$300' },
  'lake-victoria': { badge: 'Hidden Gem',           badgeColor: 'bg-brand text-white',           bestTime: 'Jun – Oct',             duration: '2–4 days', priceFrom: '$180' },
  ruaha:           { badge: 'Big Cat Country',      badgeColor: 'bg-brand text-white',           bestTime: 'May – Nov',             duration: '3–5 days', priceFrom: '$260' },
  nyerere:         { badge: 'UNESCO Heritage',      badgeColor: 'bg-gold text-brand',            bestTime: 'Jun – Oct',             duration: '3–5 days', priceFrom: '$240' },
}

const EXTRA_META: Record<string, { badge: string; priceFrom: string }> = {
  zanzibar: { badge: 'Beach & Culture', priceFrom: '$160' },
  arusha:   { badge: 'Gateway City',    priceFrom: '$80'  },
}

const CIRCUIT_META = [
  {
    id: 'northern',
    regions: ['northern', 'tarangire'],
    labelKey: 'circuitNorthernLabel' as const,
    taglineKey: 'circuitNorthernTagline' as const,
    box1DescKey: 'box1NorthernDesc' as const,
    icon: '🦁',
    color: 'bg-amber-50 border-amber-200',
    labelColor: 'text-amber-800',
    box1Color: 'bg-amber-400/20 border-amber-400/30',
  },
  {
    id: 'western',
    regions: ['western'],
    labelKey: 'circuitWesternLabel' as const,
    taglineKey: 'circuitWesternTagline' as const,
    box1DescKey: 'box1WesternDesc' as const,
    icon: '🐒',
    color: 'bg-green-50 border-green-200',
    labelColor: 'text-brand',
    box1Color: 'bg-green-400/20 border-green-400/30',
  },
  {
    id: 'southern',
    regions: ['southern'],
    labelKey: 'circuitSouthernLabel' as const,
    taglineKey: 'circuitSouthernTagline' as const,
    box1DescKey: 'box1SouthernDesc' as const,
    icon: '🐆',
    color: 'bg-sky-50 border-sky-200',
    labelColor: 'text-sky-800',
    box1Color: 'bg-sky-400/20 border-sky-400/30',
  },
]

export default async function DestinationsPage() {
  const t = await getTranslations('destinations')
  const tc = await getTranslations('common')
  const locale = await getLocale()
  const allDestinations = getDestinations(locale)
  const tanzaniaDestinations = allDestinations.filter(d => d.country === 'tanzania')

  const circuits = CIRCUIT_META.map(meta => ({
    ...meta,
    label: t(meta.labelKey),
    tagline: t(meta.taglineKey),
    box1Desc: t(meta.box1DescKey),
    destinations: tanzaniaDestinations
      .filter(d => meta.regions.includes(d.region))
      .map(d => ({
        id: d.slug,
        slug: d.slug,
        name: d.name,
        tagline: d.tagline,
        size: d.parkSize,
        image: d.heroImage,
        overview: d.description,
        highlights: d.highlights,
        wildlife: d.wildlife,
        ...(DEST_EXTRA[d.slug] ?? { badge: '', badgeColor: 'bg-brand text-white', bestTime: '', duration: '', priceFrom: '' }),
      })),
  }))

  const extras = (['zanzibar', 'arusha'] as const).map(slug => {
    const dest = allDestinations.find(d => d.slug === slug)
    return {
      id: slug,
      slug,
      name: dest?.name ?? slug,
      tagline: dest?.tagline ?? '',
      image: dest?.heroImage ?? '',
      desc: dest?.description ?? '',
      badge: EXTRA_META[slug].badge,
      priceFrom: EXTRA_META[slug].priceFrom,
    }
  })

  const seasons = [
    { months: t('season1Months'), color: 'bg-amber-50 border-amber-200', labelColor: 'text-amber-700', tip: t('season1Tip') },
    { months: t('season2Months'), color: 'bg-sky-50 border-sky-200',     labelColor: 'text-sky-700',   tip: t('season2Tip') },
    { months: t('season3Months'), color: 'bg-green-50 border-green-200', labelColor: 'text-brand',     tip: t('season3Tip') },
    { months: t('season4Months'), color: 'bg-blue-50 border-blue-200',   labelColor: 'text-blue-700',  tip: t('season4Tip') },
  ]

  const statLabels = [
    t('statParks'), t('statLand'), t('statBirds'),
    t('statMammals'), t('statSummit'), t('statRanking'),
  ]
  const seasonLabels = [
    t('season1Label'), t('season2Label'), t('season3Label'), t('season4Label'),
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/safari-119.jpg"
            alt="Lions at golden sunset on the Tanzania Serengeti plains"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-4">{t('heroEyebrow')}</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t('heroTitle')}<br />
              <span className="text-gold">{t('heroTitleGold')}</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-3">
              <BookNowButton
                packageName="Tanzania Safari"
                packageType="Tanzania Safari"
                label={t('planMyTanzaniaSafari')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-lg"
                arrow
              />
              <a
                href="#northern"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
              >
                {t('exploreCircuits')} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-brand py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {tanzaniaStats.map((item, i) => (
              <div key={item.stat} className="flex flex-col items-center gap-1">
                <span className="text-gold font-bold text-xl">{item.stat}</span>
                <span className="text-white/60 text-xs leading-tight">{statLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              {t('introEyebrow')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-5">
              {t('introHeading')}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {t('introBody')}
            </p>
          </div>
        </div>
      </section>

      {/* 2×2 Overview Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Box 1 — Three Circuits */}
            <div className="bg-brand rounded-3xl p-8 flex flex-col">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{t('box1Eyebrow')}</p>
              <h3 className="text-2xl font-bold text-white mb-6">{t('box1Heading')}</h3>
              <div className="space-y-4 flex-1">
                {circuits.map((c) => (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    className={`flex items-center gap-4 rounded-2xl border px-5 py-4 hover:opacity-90 transition-opacity group ${c.box1Color}`}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm">{c.label}</p>
                      <p className="text-white/60 text-xs mt-0.5 truncate">{c.box1Desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-white/50 text-xs">Also: <span className="text-white/70 font-medium">Zanzibar Beach</span> &amp; <span className="text-white/70 font-medium">Arusha Gateway</span></p>
              </div>
            </div>

            {/* Box 2 — Why Book With Us */}
            <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100 flex flex-col">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{t('box2Eyebrow')}</p>
              <h3 className="text-2xl font-bold text-brand mb-6">{t('box2Heading')}</h3>
              <div className="grid grid-cols-2 gap-4 flex-1">
                {[
                  { icon: Compass, title: tc('whyBorn'), desc: tc('whyBornDesc') },
                  { icon: Car, title: tc('whyVehicles'), desc: tc('whyVehiclesDesc') },
                  { icon: Users, title: tc('whyGroups'), desc: tc('whyGroupsDesc') },
                  { icon: Shield, title: tc('whyLicensed'), desc: tc('whyLicensedDesc') },
                  { icon: Headphones, title: tc('whySupport'), desc: tc('whySupportDesc') },
                  { icon: Trophy, title: tc('whyYears'), desc: tc('whyYearsDesc') },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-brand" />
                    </div>
                    <div>
                      <p className="text-brand font-bold text-xs">{item.title}</p>
                      <p className="text-text-muted text-xs leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 3 — Tanzania in Numbers */}
            <div className="bg-light-green rounded-3xl p-8 border border-brand/10 flex flex-col">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{t('box3Eyebrow')}</p>
              <h3 className="text-2xl font-bold text-brand mb-6">{t('box3Heading')}</h3>
              <div className="grid grid-cols-2 gap-5 flex-1">
                {[
                  { stat: '1.5M', label: 'Wildebeest in the Great Migration', sub: 'Largest land migration on Earth' },
                  { stat: '10%', label: "World's lion population", sub: 'Concentrated in Ruaha & Serengeti' },
                  { stat: '54,600', label: 'km² Nyerere NP', sub: "Africa's largest protected area" },
                  { stat: '25,000+', label: 'Animals in Ngorongoro Crater', sub: 'Highest density in Africa' },
                  { stat: '60 yrs', label: 'Of chimp research at Gombe', sub: "Jane Goodall's ongoing legacy" },
                  { stat: '1,100+', label: 'Bird species recorded', sub: "Africa's premier birding nation" },
                ].map((item) => (
                  <div key={item.stat} className="bg-white rounded-2xl px-4 py-3 border border-brand/5">
                    <p className="text-gold font-bold text-xl leading-none">{item.stat}</p>
                    <p className="text-brand font-semibold text-xs mt-1 leading-snug">{item.label}</p>
                    <p className="text-text-muted text-[11px] mt-0.5 leading-snug">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 4 — How It Works */}
            <div className="bg-brand-dark rounded-3xl p-8 flex flex-col" style={{ backgroundColor: '#0a2e1a' }}>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{t('box4Eyebrow')}</p>
              <h3 className="text-2xl font-bold text-white mb-6">{t('box4Heading')}</h3>
              <div className="space-y-5 flex-1">
                {[
                  { step: '01', title: tc('step1Title'), desc: tc('step1Desc') },
                  { step: '02', title: tc('step2Title'), desc: tc('step2Desc') },
                  { step: '03', title: tc('step3Title'), desc: tc('step3Desc') },
                  { step: '04', title: tc('step4Title'), desc: tc('step4DescTanzania') },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <span className="text-brand font-bold text-xs">{s.step}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{s.title}</p>
                      <p className="text-white/50 text-xs leading-snug mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <BookNowButton
                  packageName="Tanzania Safari"
                  packageType="Tanzania Safari"
                  label={t('startPlanningFree')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                  arrow
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Three circuits */}
      {circuits.map((circuit) => (
        <section key={circuit.id} id={circuit.id} className="py-20 bg-light-green scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Circuit header badge */}
            <div className={`inline-flex items-center gap-3 rounded-2xl border px-5 py-3 mb-10 ${circuit.color}`}>
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${circuit.labelColor}`}>{circuit.label}</p>
                <p className="text-brand/70 text-sm">{circuit.tagline}</p>
              </div>
            </div>

            <div className="space-y-10">
              {circuit.destinations.map((dest, i) => (
                <div
                  key={dest.id}
                  className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow`}
                >
                  {/* Image panel */}
                  <div className="relative lg:w-[45%] flex-shrink-0 h-64 lg:h-auto min-h-[300px]">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full shadow ${dest.badgeColor}`}>
                        {dest.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <MapPin className="w-3 h-3 text-gold" />
                      <span className="text-white text-xs font-medium">{dest.size}</span>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <div className="mb-4">
                      <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">{dest.tagline}</p>
                      <h3 className="text-xl lg:text-2xl font-bold text-brand mb-2">{dest.name}</h3>
                      <div className="flex flex-wrap gap-3 text-xs text-text-muted">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {dest.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-gold fill-gold" /> {t('bestTimePrefix')} {dest.bestTime}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-brand">
                          {t('fromPrice', { price: dest.priceFrom })}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">{dest.overview}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                      {dest.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-brand">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <p className="text-xs font-semibold text-brand/50 uppercase tracking-wider mb-2">{t('wildlifeLabel')}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.wildlife.map((w) => (
                          <span
                            key={w}
                            className="text-xs bg-light-green text-brand px-2.5 py-1 rounded-full border border-brand/10 font-medium"
                          >
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 flex-wrap">
                      <BookNowButton
                        packageName={dest.name}
                        packageType="Tanzania Safari"
                        priceFrom={dest.priceFrom}
                        duration={dest.duration}
                        label={t('bookThisSafari')}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-bold rounded-xl transition-colors"
                        arrow
                      />
                      <Link
                        href={`/destinations/${dest.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm text-brand font-semibold hover:text-gold transition-colors"
                      >
                        <Binoculars className="w-3.5 h-3.5" /> {t('fullDetails')}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Zanzibar + Arusha extras */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              {t('extrasEyebrow')}
            </span>
            <h2 className="text-3xl font-semibold text-brand mb-3">{t('extrasHeading')}</h2>
            <p className="text-text-muted max-w-lg mx-auto text-sm">
              {t('extrasSubtitle')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {extras.map((extra) => (
              <div
                key={extra.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
              >
                <div className="relative h-52">
                  <Image
                    src={extra.image}
                    alt={extra.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full shadow bg-gold text-brand">
                      {extra.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">{extra.tagline}</p>
                  <h3 className="text-xl font-bold text-brand mb-3">{extra.name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">{extra.desc}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 flex-wrap">
                    <BookNowButton
                      packageName={extra.name}
                      packageType="Tanzania Safari"
                      priceFrom={extra.priceFrom}
                      label={t('enquireNow')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-bold rounded-xl transition-colors"
                      arrow
                    />
                    <Link
                      href={`/destinations/${extra.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm text-brand font-semibold hover:text-gold transition-colors"
                    >
                      <Binoculars className="w-3.5 h-3.5" /> {t('fullDetails')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal guide */}
      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              {t('seasonEyebrow')}
            </span>
            <h2 className="text-3xl font-semibold text-brand mb-3">{t('seasonHeading')}</h2>
            <p className="text-text-muted max-w-lg mx-auto text-sm">
              {t('seasonSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {seasons.map((s, i) => (
              <div key={s.months} className={`rounded-2xl border p-5 ${s.color}`}>
                <p className="font-bold text-brand text-base mb-1">{s.months}</p>
                <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${s.labelColor}`}>{seasonLabels[i]}</p>
                <p className="text-xs text-text-muted leading-relaxed">{s.tip}</p>
              </div>
            ))}
          </div>

          {/* Migration callout */}
          <div className="bg-brand rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-2">
                {t('migrationHeading')}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t('migrationDesc')}
              </p>
            </div>
            <BookNowButton
              packageName="Great Migration Safari"
              packageType="Tanzania Migration Safari"
              label={t('planMigrationSafari')}
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors whitespace-nowrap"
              arrow
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "url('/images/gallery/safari-119.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="relative z-10">
              <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
                {t('ctaEyebrow')}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('ctaHeading')}
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
                Our team is born and based in Arusha &mdash; these are our home parks. We know every road,
                every season, every camp. Let us design an itinerary built around what you want to see.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookNowButton
                  packageName="Tanzania Safari"
                  packageType="Tanzania Safari"
                  label={t('startPlanningFree')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-base shadow-lg"
                  arrow
                />
                <Link
                  href="/kenya"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors text-base"
                >
                  {t('exploreKenyaToo')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
