import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, MapPin, Users, Bird, CheckCircle2, Car, Headphones, Shield, Compass, Trophy } from 'lucide-react'
import BookNowButton from '@/components/booking/BookNowButton'
import DestinationCard from '@/components/destinations/DestinationCard'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getDestinations } from '@/data/destinations.i18n'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { buildAlternates } from '@/lib/site'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'

const KENYA_FEATURED_SLUG = 'masai-mara'

const KENYA_DEST_REGION_KEYS: Record<string, 'regionSouthernKenya' | 'regionNorthernKenya' | 'regionSouthWestKenya' | 'regionCentralKenya' | 'regionKenyanCoast'> = {
  'masai-mara': 'regionSouthernKenya',
  amboseli: 'regionSouthernKenya',
  samburu: 'regionNorthernKenya',
  tsavo: 'regionSouthWestKenya',
  'ol-pejeta': 'regionCentralKenya',
  'lake-nakuru': 'regionCentralKenya',
  'kenyan-coast': 'regionKenyanCoast',
}

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'kenya' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: t.raw('metaKeywords') as string[],
    alternates: buildAlternates(locale, '/kenya'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      images: [{ url: '/images/gallery/safari-119.jpg', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metaTitle'),
      images: ['/images/gallery/safari-119.jpg'],
    },
  }
}

const kenyaStats = [
  { icon: '🦁', stat: '90+' },
  { icon: '🐦', stat: '1,100+' },
  { icon: '🦏', stat: '2' },
  { icon: '🐘', stat: '35,000+' },
  { icon: '🌍', stat: '59' },
  { icon: '🏆', stat: '#1' },
]

const KENYA_DEST_BADGE_COLORS: Record<string, string> = {
  'masai-mara': 'bg-gold text-brand',
  amboseli: 'bg-brand text-white',
  samburu: 'bg-brand text-white',
  tsavo: 'bg-brand-secondary text-white',
  'ol-pejeta': 'bg-gold text-brand',
  'lake-nakuru': 'bg-brand text-white',
  'kenyan-coast': 'bg-brand-secondary text-white',
}

export default async function KenyaPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('kenya')
  const tc = await getTranslations('common')
  const allDestinations = getDestinations(locale)

  const destExtra = t.raw('destExtra') as Record<string, { badge: string; bestTime: string; bestTimeLabel: string; duration: string; priceFrom: string; activities: string[] }>
  const box1ChipDesc = t.raw('box1ChipDesc') as Record<string, string>
  const box3Stats = t.raw('box3Stats') as { label: string; sub: string }[]

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
      firstParagraph: d.description.split('\n\n')[0],
      regionLabel: KENYA_DEST_REGION_KEYS[d.slug] ? t(KENYA_DEST_REGION_KEYS[d.slug]) : t('regionFallback'),
      packagesCount: d.packages.length,
      highlights: d.highlights,
      wildlife: d.wildlife,
      badgeColor: KENYA_DEST_BADGE_COLORS[d.slug] ?? 'bg-brand text-white',
      ...(destExtra[d.slug] ?? { badge: '', bestTime: '', bestTimeLabel: '', duration: '', priceFrom: '', activities: [] }),
    }))

  const statLabels = [t('statMammalsMara'), t('statBirds'), t('statRhinos'), t('statElephants'), t('statParks'), t('statRanking')]
  const seasonLabels = [t('season1Label'), t('season2Label'), t('season3Label'), t('season4Label')]

  const seasons = [
    { months: t('season1Months'), color: 'bg-amber-50 border-amber-200', labelColor: 'text-amber-700', tip: t('season1Tip') },
    { months: t('season2Months'), color: 'bg-blue-50 border-blue-200', labelColor: 'text-blue-700', tip: t('season2Tip') },
    { months: t('season3Months'), color: 'bg-green-50 border-green-200', labelColor: 'text-brand', tip: t('season3Tip') },
    { months: t('season4Months'), color: 'bg-sky-50 border-sky-200', labelColor: 'text-sky-700', tip: t('season4Tip') },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/safari-119.webp"
            alt={t('heroImageAlt')}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumb items={[
            { label: 'EWA Safari Outfitters', href: `/${locale}` },
            { label: 'Kenya' },
          ]} />
          <div className="max-w-2xl">
            <p className="text-gold-label font-semibold text-xs uppercase tracking-widest mb-4">{t('heroEyebrow')}</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t('heroTitle')}<br />
              <span className="text-gold">{t('heroTitleGold')}</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
              {t('heroSubtitleBody')}
            </p>
            <div className="flex flex-wrap gap-3">
              <BookNowButton
                packageName="Kenya Safari"
                packageType={tc('packageTypes.kenyaSafari')}
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
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {kenyaStats.map((item, i) => (
              <div key={item.stat} className="flex flex-col items-center gap-1">
                <span className="text-gold font-bold text-xl">{item.stat}</span>
                <span className="text-white/60 text-xs leading-tight">{statLabels[i]}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Intro */}
      <section className="py-16">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              {t('introEyebrow')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-5">
              {t('introHeading')}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {t('introBody')}
            </p>
          </div>
        </Reveal>
      </section>

      {/* 2×2 Overview Grid */}
      <section className="py-16">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Box 1 — Kenya Destinations */}
            <div className="bg-brand rounded-3xl p-8 flex flex-col">
              <p className="text-gold-label text-xs font-bold uppercase tracking-widest mb-2">{t('box1Eyebrow')}</p>
              <h3 className="text-2xl font-bold text-white mb-6">{t('box1Heading')}</h3>
              <div className="space-y-2.5 flex-1">
                {[
                  { icon: '🦁', slug: 'masai-mara' },
                  { icon: '🐘', slug: 'amboseli' },
                  { icon: '🦒', slug: 'samburu' },
                  { icon: '🌿', slug: 'tsavo' },
                  { icon: '🦏', slug: 'ol-pejeta' },
                  { icon: '🦩', slug: 'lake-nakuru' },
                  { icon: '🏝️', slug: 'kenyan-coast' },
                ].map(({ icon, slug }) => ({
                  icon,
                  label: kenyaDestinations.find((d) => d.slug === slug)?.name ?? slug,
                  desc: box1ChipDesc[slug],
                })).map((d) => (
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
                  { stat: '1.5M', ...box3Stats[0] },
                  { stat: '2', ...box3Stats[1] },
                  { stat: '22,000', ...box3Stats[2] },
                  { stat: '1M+', ...box3Stats[3] },
                  { stat: '90+', ...box3Stats[4] },
                  { stat: '1,100+', ...box3Stats[5] },
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
                  packageType={tc('packageTypes.kenyaSafari')}
                  label={t('startPlanningFree')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                  arrow
                />
              </div>
            </div>

          </div>
        </Reveal>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-20 bg-light-green scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              {t('destSectionEyebrow')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-4">
              {t('destSectionHeading')}
            </h2>
            <p className="text-text-muted max-w-xl mx-auto text-sm">
              {t('destSectionSubtitle')}
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {kenyaDestinations.map((dest) => {
              const isFeatured = dest.slug === KENYA_FEATURED_SLUG
              return (
                <RevealItem key={dest.id} className={isFeatured ? 'sm:col-span-2' : ''}>
                  <DestinationCard
                    slug={dest.slug}
                    name={dest.name}
                    regionLabel={dest.regionLabel}
                    description={dest.firstParagraph}
                    image={dest.image}
                    wildlife={dest.wildlife}
                    bestTime={dest.bestTime}
                    experiencesLabel={tc('experiencesCount', { count: dest.packagesCount })}
                    priceFrom={dest.priceFrom}
                    featured={isFeatured}
                    labels={{ from: tc('from'), featuredBadge: tc('featuredDestination') }}
                  />
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              {t('seasonEyebrow')}
            </span>
            <h2 className="text-3xl font-semibold text-brand mb-3">{t('seasonHeading')}</h2>
            <p className="text-text-muted max-w-lg mx-auto text-sm">
              {t('seasonSubtitle')}
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {seasons.map((s, i) => (
              <RevealItem key={s.months} className={`rounded-2xl border p-5 ${s.color}`}>
                <p className="font-bold text-brand text-base mb-1">{s.months}</p>
                <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${s.labelColor}`}>{seasonLabels[i]}</p>
                <p className="text-xs text-text-muted leading-relaxed">{s.tip}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Great Migration callout */}
          <Reveal className="bg-brand rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-2">
                {t('migrationCalloutHeading')}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t('migrationCalloutBody')}
              </p>
            </div>
            <BookNowButton
              packageName="Great Migration Safari"
              packageType={tc('packageTypes.kenyaTanzaniaSafari')}
              label={t('planMigrationSafari')}
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors whitespace-nowrap"
              arrow
            />
          </Reveal>
        </div>
      </section>

      {/* Kenya + Tanzania combo */}
      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
                {t('comboEyebrow')}
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-5">
                {t('comboHeading')}<br />
                <span className="text-gold">{t('comboHeadingGold')}</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                {t('comboBody')}
              </p>
              <div className="space-y-2.5 mb-7">
                {[
                  t('comboBullet1'),
                  t('comboBullet2'),
                  t('comboBullet3'),
                  t('comboBullet4'),
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
                  packageType={tc('packageTypes.combinedSafari')}
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
            </Reveal>

            <Reveal delay={0.15} className="relative rounded-3xl overflow-hidden shadow-xl bg-[#f5f0e8] border border-brand/10 aspect-[14/10]">
              <Image
                src="/Maps/Kenya%20map%20of%20major%20destinations.png"
                alt={t('mapImageAlt')}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="bg-brand/80 backdrop-blur-sm text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-gold" />
                  {t('mapCaption')}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bird watching callout */}
      <section className="py-16 bg-brand-dark">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bird className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
            {t('birdingHeading')}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed mb-6">
            {t('birdingBody')}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              t('birdingBadge1'),
              t('birdingBadge2'),
              t('birdingBadge3'),
              t('birdingBadge4'),
              t('birdingBadge5'),
              t('birdingBadge6'),
            ].map((b) => (
              <span key={b} className="text-xs text-white/70 border border-white/20 px-3 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'url(/images/gallery/safari-119.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <Reveal className="relative z-10">
              <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
                {t('ctaEyebrow')}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('ctaHeading')}
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
                {t('ctaBody')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookNowButton
                  packageName="Kenya Safari"
                  packageType={tc('packageTypes.kenyaSafari')}
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
                {t('footerDisclaimer')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
