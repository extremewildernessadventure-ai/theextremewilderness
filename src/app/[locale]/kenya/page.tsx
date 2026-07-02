import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, MapPin, Clock, Users, Star, Bird, CheckCircle2, Car, Headphones, Shield, Compass, Trophy } from 'lucide-react'
import BookNowButton from '@/components/booking/BookNowButton'
import { getTranslations } from 'next-intl/server'
import { getLocale } from 'next-intl/server'
import { getDestinations } from '@/data/destinations.i18n'

export const metadata: Metadata = {
  title: 'Kenya Safari Packages 2026 | Masai Mara, Amboseli & Great Migration',
  description:
    "Book Kenya safari packages — Masai Mara Great Migration, Amboseli elephant herds, Samburu rare species. Combined Kenya-Tanzania safaris from $1,200/person. TATO certified.",
  keywords: [
    'Kenya safari packages',
    'Masai Mara safari 2026',
    'Great Migration Masai Mara',
    'Kenya safari tour operator',
    'Amboseli National Park safari',
    'Samburu National Park',
    'Kenya Tanzania safari combo',
    'best time Masai Mara',
    'Kenyan safari holidays',
    'luxury Kenya safari',
  ],
}

const kenyaStats = [
  { icon: '🦁', stat: '90+' },
  { icon: '🐦', stat: '1,100+' },
  { icon: '🦏', stat: '2' },
  { icon: '🐘', stat: '35,000+' },
  { icon: '🌍', stat: '59' },
  { icon: '🏆', stat: '#1' },
]

const KENYA_DEST_EXTRA: Record<string, {
  badge: string
  badgeColor: string
  bestTime: string
  bestTimeLabel: string
  duration: string
  priceFrom: string
  activities: string[]
}> = {
  'masai-mara': {
    badge: 'Most Popular',
    badgeColor: 'bg-gold text-brand',
    bestTime: 'Jul – Oct',
    bestTimeLabel: 'Migration Season',
    duration: '3–5 days',
    priceFrom: '$320',
    activities: ['Game drives', 'Balloon safari', 'Cultural Maasai village', 'Bird watching', 'Bush walks', 'Night drives'],
  },
  amboseli: {
    badge: 'Iconic Views',
    badgeColor: 'bg-brand text-white',
    bestTime: 'Jun – Oct & Jan – Feb',
    bestTimeLabel: 'Dry Season',
    duration: '2–4 days',
    priceFrom: '$280',
    activities: ['Elephant tracking', 'Game drives', 'Maasai village visit', 'Bird watching', 'Photography safaris', 'Sundowner drives'],
  },
  samburu: {
    badge: 'Rare Species',
    badgeColor: 'bg-brand text-white',
    bestTime: 'Jun – Oct & Jan – Mar',
    bestTimeLabel: 'Dry Season',
    duration: '2–3 days',
    priceFrom: '$290',
    activities: ['Specialized game drives', 'Samburu cultural tours', 'Camel rides', 'River walks', 'Bird watching', 'Sundowner bush dinner'],
  },
  tsavo: {
    badge: 'Wild & Remote',
    badgeColor: 'bg-brand-secondary text-white',
    bestTime: 'Jun – Oct & Jan – Feb',
    bestTimeLabel: 'Dry Season',
    duration: '3–5 days',
    priceFrom: '$260',
    activities: ['Game drives', 'Mzima Springs walk', 'Lugard Falls visit', 'Night game drives', 'Bird watching', 'Luxury tented camps'],
  },
  'ol-pejeta': {
    badge: 'Conservation Icon',
    badgeColor: 'bg-gold text-brand',
    bestTime: 'Year-round',
    bestTimeLabel: 'Always Open',
    duration: '2–3 days',
    priceFrom: '$350',
    activities: ['Rhino tracking on foot', 'Lion tracking', 'Chimp sanctuary visit', 'Night game drives', 'Conservation talks', 'Bush dinners'],
  },
  'lake-nakuru': {
    badge: 'UNESCO Site',
    badgeColor: 'bg-brand text-white',
    bestTime: 'Jun – Mar',
    bestTimeLabel: 'Best Flamingo',
    duration: '1–2 days',
    priceFrom: '$220',
    activities: ['Flamingo viewing', 'Rhino tracking', 'Bird watching', 'Game drives', 'Escarpment viewpoints', 'Photography tours'],
  },
  'kenyan-coast': {
    badge: 'Beach & Marine',
    badgeColor: 'bg-brand-secondary text-white',
    bestTime: 'Dec – Mar & Jun – Oct',
    bestTimeLabel: 'Dry Season',
    duration: '3–7 days',
    priceFrom: '$190',
    activities: ['Snorkelling & diving', 'Dhow sailing', 'Kite surfing', 'Turtle monitoring', 'Lamu cultural tour', 'Deep sea fishing'],
  },
}

const seasons = [
  {
    months: 'Jan – Feb',
    color: 'bg-amber-50 border-amber-200',
    labelColor: 'text-amber-700',
    tip: 'Excellent game viewing — low grass, animals congregate at water. Great for Amboseli & Samburu.',
  },
  {
    months: 'Mar – May',
    color: 'bg-blue-50 border-blue-200',
    labelColor: 'text-blue-700',
    tip: 'Lush green landscapes and newborn animals. Fewer tourists and better rates. Mara still productive.',
  },
  {
    months: 'Jun – Oct',
    color: 'bg-green-50 border-green-200',
    labelColor: 'text-brand',
    tip: 'Great Migration river crossings (Jul–Sep). Best wildlife throughout Kenya. Book 6–12 months ahead.',
  },
  {
    months: 'Nov – Dec',
    color: 'bg-sky-50 border-sky-200',
    labelColor: 'text-sky-700',
    tip: 'Migratory birds arrive. Landscapes bloom. Good value and manageable crowds.',
  },
]

export default async function KenyaPage() {
  const t = await getTranslations('kenya')
  const tc = await getTranslations('common')
  const locale = await getLocale()
  const allDestinations = getDestinations(locale)
  const kenyaDestinations = allDestinations
    .filter(d => d.country === 'kenya')
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
      ...(KENYA_DEST_EXTRA[d.slug] ?? {
        badge: '',
        badgeColor: 'bg-brand text-white',
        bestTime: '',
        bestTimeLabel: '',
        duration: '',
        priceFrom: '',
        activities: [],
      }),
    }))

  const statLabels = [t('statMammalsMara'), t('statBirds'), t('statRhinos'), t('statElephants'), t('statParks'), t('statRanking')]
  const seasonLabels = [t('season1Label'), t('season2Label'), t('season3Label'), t('season4Label')]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/safari-119.webp"
            alt="Lions at sunset on the Masai Mara plains"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-gold-label font-semibold text-xs uppercase tracking-widest mb-4">{t('heroEyebrow')}</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t('heroTitle')}<br />
              <span className="text-gold">{t('heroTitleGold')}</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
              From the thundering hooves of the Great Migration to the gentle giants of Amboseli &mdash; Kenya offers
              Africa&apos;s most iconic wildlife spectacles, ancient cultures, and pristine Indian Ocean beaches.
            </p>
            <div className="flex flex-wrap gap-3">
              <BookNowButton
                packageName="Kenya Safari"
                packageType="Kenya Safari"
                label={t('planMyKenyaSafari')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-lg"
                arrow
              />
              <a
                href="#destinations"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
              >
                {t('exploreDestinations')} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-brand py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {kenyaStats.map((item, i) => (
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
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              {t('introEyebrow')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-5">
              {t('introHeading')}
            </h2>
            <p className="text-text-muted leading-relaxed">
              Kenya has inspired safari travellers for over a century &mdash; and for good reason. It is home to the
              planet&apos;s greatest wildlife spectacle (the Great Migration), the last two northern white rhinos on
              Earth, some of Africa&apos;s finest luxury lodges, and a coastline of extraordinary beauty. At The Extreme
              Wilderness, we design Kenya safaris that go beyond the obvious &mdash; combining iconic reserves with
              hidden gems, conservation experiences, and deep cultural encounters for a journey that resonates long after
              you return home.
            </p>
          </div>
        </div>
      </section>

      {/* 2×2 Overview Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Box 1 — Kenya Destinations */}
            <div className="bg-brand rounded-3xl p-8 flex flex-col">
              <p className="text-gold-label text-xs font-bold uppercase tracking-widest mb-2">{t('box1Eyebrow')}</p>
              <h3 className="text-2xl font-bold text-white mb-6">{t('box1Heading')}</h3>
              <div className="space-y-2.5 flex-1">
                {[
                  { icon: '🦁', label: 'Masai Mara', desc: 'Great Migration · Big Cats · Maasai Culture' },
                  { icon: '🐘', label: 'Amboseli', desc: 'Elephant Herds · Kilimanjaro Views' },
                  { icon: '🦒', label: 'Samburu', desc: 'Samburu Special Five · Remote North' },
                  { icon: '🌿', label: 'Tsavo East & West', desc: "Kenya's Largest Park · Red Elephants" },
                  { icon: '🦏', label: 'Ol Pejeta Conservancy', desc: "Last White Rhinos · Chimpanzees" },
                  { icon: '🦩', label: 'Lake Nakuru', desc: 'Flamingos · Rift Valley Escarpment' },
                  { icon: '🏝️', label: 'Kenyan Coast', desc: 'Indian Ocean · Swahili Culture' },
                ].map((d) => (
                  <a
                    key={d.label}
                    href="#destinations"
                    className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-2.5 hover:border-gold/50 hover:bg-white/5 transition-all group"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm">{d.label}</p>
                      <p className="text-white/70 text-xs truncate">{d.desc}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-white/60 group-hover:text-gold transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Box 2 — Why Book With Us */}
            <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100 flex flex-col">
              <p className="text-gold-label text-xs font-bold uppercase tracking-widest mb-2">{t('box2Eyebrow')}</p>
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

            {/* Box 3 — Kenya in Numbers */}
            <div className="bg-light-green rounded-3xl p-8 border border-brand/10 flex flex-col">
              <p className="text-gold-label text-xs font-bold uppercase tracking-widest mb-2">{t('box3Eyebrow')}</p>
              <h3 className="text-2xl font-bold text-brand mb-6">{t('box3Heading')}</h3>
              <div className="grid grid-cols-2 gap-5 flex-1">
                {[
                  { stat: '1.5M', label: 'Wildebeest in the Migration', sub: 'Largest land migration on Earth' },
                  { stat: '2', label: 'Last northern white rhinos', sub: 'Living at Ol Pejeta Conservancy' },
                  { stat: '22,000', label: "km² Tsavo Park Complex", sub: "Kenya's largest protected area" },
                  { stat: '1M+', label: 'Flamingos at Lake Nakuru', sub: 'Greatest ornithological spectacle' },
                  { stat: '90+', label: 'Mammal species in the Mara', sub: 'Highest big cat density in Africa' },
                  { stat: '1,100+', label: 'Bird species recorded', sub: "Africa's premier birding nation" },
                ].map((item) => (
                  <div key={item.stat} className="bg-white rounded-2xl px-4 py-3 border border-brand/5">
                    <p className="text-gold-label font-bold text-xl leading-none">{item.stat}</p>
                    <p className="text-brand font-semibold text-xs mt-1 leading-snug">{item.label}</p>
                    <p className="text-text-muted text-[11px] mt-0.5 leading-snug">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 4 — How It Works */}
            <div className="rounded-3xl p-8 flex flex-col" style={{ backgroundColor: '#0a2e1a' }}>
              <p className="text-gold-label text-xs font-bold uppercase tracking-widest mb-2">{t('box4Eyebrow')}</p>
              <h3 className="text-2xl font-bold text-white mb-6">{t('box4Heading')}</h3>
              <div className="space-y-5 flex-1">
                {[
                  { step: '01', title: tc('step1Title'), desc: tc('step1Desc') },
                  { step: '02', title: tc('step2Title'), desc: tc('step2Desc') },
                  { step: '03', title: tc('step3Title'), desc: tc('step3Desc') },
                  { step: '04', title: tc('step4Title'), desc: tc('step4DescKenya') },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <span className="text-brand font-bold text-xs">{s.step}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{s.title}</p>
                      <p className="text-white/70 text-xs leading-snug mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <BookNowButton
                  packageName="Kenya Safari"
                  packageType="Kenya Safari"
                  label={t('startPlanningFree')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                  arrow
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-20 bg-light-green scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              {t('destSectionEyebrow')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-4">
              {t('destSectionHeading')}
            </h2>
            <p className="text-text-muted max-w-xl mx-auto text-sm">
              {t('destSectionSubtitle')}
            </p>
          </div>

          <div className="space-y-10">
            {kenyaDestinations.map((dest, i) => (
              <div
                key={dest.id}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow`}
              >
                {/* Image */}
                <div className="relative lg:w-[45%] flex-shrink-0 h-64 lg:h-auto min-h-[320px]">
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

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col">
                  <div className="mb-4">
                    <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-1">{dest.tagline}</p>
                    <h3 className="text-xl lg:text-2xl font-bold text-brand mb-2">{dest.name}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-text-muted">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {dest.duration}</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-gold fill-gold" /> {t('bestTimePrefix')} {dest.bestTime}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-brand">{t('fromPrice', { price: dest.priceFrom })}</span>
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

                  <div className="mb-5">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">{t('wildlifeLabel')}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.wildlife.map((w) => (
                        <span key={w} className="text-xs bg-light-green text-brand px-2.5 py-1 rounded-full border border-brand/10 font-medium">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">{t('activitiesLabel')}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.activities.map((a) => (
                        <span key={a} className="text-xs bg-brand/5 text-brand/70 px-2.5 py-1 rounded-full border border-brand/10">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <BookNowButton
                      packageName={dest.name}
                      packageType="Kenya Safari"
                      priceFrom={dest.priceFrom}
                      duration={dest.duration}
                      label={`Book ${dest.name.split(' ')[0]} Safari`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-secondary text-white text-sm font-bold rounded-xl transition-colors"
                      arrow
                    />
                    <span className="text-xs text-text-muted">{t('freeConsultation')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              {t('seasonEyebrow')}
            </span>
            <h2 className="text-3xl font-semibold text-brand mb-3">{t('seasonHeading')}</h2>
            <p className="text-text-muted max-w-lg mx-auto text-sm">
              Kenya is a year-round destination, but timing your visit around the Great Migration crossing or the dry
              season maximises your wildlife encounters.
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

          {/* Great Migration callout */}
          <div className="bg-brand rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-2">
                {t('migrationCalloutHeading')}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Over 1.5 million wildebeest and 500,000 zebra make an epic clockwise loop between Tanzania&apos;s
                Serengeti and Kenya&apos;s Masai Mara, driven by rainfall and fresh grazing. The Mara River crossings
                &mdash; where thousands of animals plunge through crocodile-infested water &mdash; occur July to
                October. Combine Kenya and Tanzania for the full Migration experience year-round.
              </p>
            </div>
            <BookNowButton
              packageName="Great Migration Safari"
              packageType="Kenya & Tanzania Safari"
              label={t('planMigrationSafari')}
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors whitespace-nowrap"
              arrow
            />
          </div>
        </div>
      </section>

      {/* Kenya + Tanzania combo */}
      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
                {t('comboEyebrow')}
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-5">
                {t('comboHeading')}<br />
                <span className="text-gold">{t('comboHeadingGold')}</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                Kenya and Tanzania share the Great Rift Valley, the Serengeti&ndash;Mara ecosystem, and
                Kilimanjaro&apos;s shadow. Together they form the world&apos;s premier safari circuit. At The Extreme
                Wilderness, we specialise in cross-border itineraries that seamlessly combine the best of both countries
                &mdash; Masai Mara crossings, Serengeti plains, Ngorongoro Crater, Amboseli elephants, and Zanzibar
                beaches &mdash; in one unforgettable journey.
              </p>
              <div className="space-y-2.5 mb-7">
                {[
                  'Follow the Migration from Serengeti to Masai Mara',
                  'Summit Kilimanjaro then fly to Amboseli for elephant sightings',
                  'Combine Ngorongoro Crater with Samburu rare species',
                  'End on Zanzibar or Diani Beach for Indian Ocean relaxation',
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2 text-sm text-brand">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    {p}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <BookNowButton
                  packageName="Kenya & Tanzania Combined Safari"
                  packageType="Combined Safari"
                  label={t('designCombinedSafari')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-secondary text-white font-bold rounded-xl transition-colors"
                  arrow
                />
                <Link
                  href="/destinations"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-brand text-brand hover:bg-brand hover:text-white font-semibold rounded-xl transition-colors"
                >
                  {t('tanzaniaDestinations')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div
              className="relative rounded-3xl overflow-hidden shadow-xl bg-[#f5f0e8] border border-brand/10"
              style={{ aspectRatio: '14/10' }}
            >
              <Image
                src="/Maps/Kenya%20map%20of%20major%20destinations.png"
                alt="Kenya major destinations map"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="bg-brand/80 backdrop-blur-sm text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-gold" />
                  Kenya &mdash; Major Destinations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bird watching callout */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bird className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
            {t('birdingHeading')}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed mb-6">
            With over 1,100 recorded bird species &mdash; including the rare Shoebill, Jackson&apos;s Widowbird, and
            the Abyssinian Ground Hornbill &mdash; Kenya is a birder&apos;s paradise. Lake Nakuru&apos;s flamingos,
            Samburu&apos;s Somali ostrich, and the Masai Mara&apos;s raptors are just the beginning.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Lake Nakuru Flamingos',
              'Samburu Dry-Country Species',
              'Masai Mara Raptors',
              'Aberdare Forest Birds',
              'Rift Valley Specials',
              'Marine Birds on the Coast',
            ].map((b) => (
              <span key={b} className="text-xs text-white/70 border border-white/20 px-3 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'url(/images/gallery/safari-119.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="relative z-10">
              <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
                {t('ctaEyebrow')}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('ctaHeading')}
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
                Our expert team &mdash; born and based in East Africa &mdash; will design an itinerary tailored to your
                interests, timeline, and budget. No two safaris are alike.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookNowButton
                  packageName="Kenya Safari"
                  packageType="Kenya Safari"
                  label={t('startPlanningFree')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-base shadow-lg"
                  arrow
                />
                <Link
                  href="/destinations"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors text-base"
                >
                  {t('exploreTanzaniaToo')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-white/60 text-xs mt-6">
                <Users className="inline w-3 h-3 mr-1" />
                Private groups &middot; Solo travellers &middot; Honeymoons &middot; Family safaris &mdash; all welcome
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
