import type { Metadata } from 'next'
import Image from 'next/image'
import { Quote, Star } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import BookNowButton from '@/components/booking/BookNowButton'
import NewsletterForm from '@/components/home/NewsletterForm'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'
import DestinationsExplorer, { type CountryAreaData } from '@/components/destinations/DestinationsExplorer'
import { getDestinations } from '@/data/destinations.i18n'
import type { Destination } from '@/data/destinations'
import { buildAlternates, buildBreadcrumbSchema, buildPageTitle } from '@/lib/site'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'destinationsHub' })
  const title = t('metaTitle')
  const description = t('metaDescription')
  return {
    alternates: buildAlternates(locale, '/destinations'),
    title: buildPageTitle(title),
    description,
    keywords: t.raw('metaKeywords') as string[],
    openGraph: { title, description, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

function bySlug(list: Destination[], slugs: string[]) {
  return slugs.map((s) => list.find((d) => d.slug === s)).filter((d): d is Destination => Boolean(d))
}

function toRow(d: Destination) {
  return { slug: d.slug, name: d.name, teaser: d.tagline }
}

export default async function DestinationsHubPage({ params }: Props) {
  const { locale } = await params

  const t = await getTranslations('destinationsHub')
  const tc = await getTranslations('common')
  const tTz = await getTranslations('destinations')
  const tKe = await getTranslations('kenya')
  const tRw = await getTranslations('rwanda')

  const allDestinations = await getDestinations(locale)

  // Tanzania — grouped by the real circuit `region` enum already used on
  // /destinations/tanzania; Tarangire/Manyara merge into "Northern Circuit"
  // and Zanzibar/Arusha merge into one card, matching that page's own
  // coarser circuit framing.
  const tz = allDestinations.filter((d) => d.country === 'tanzania')
  const tzNorthern = tz.filter((d) => d.region === 'northern' || d.region === 'tarangire')
  const tzWestern = tz.filter((d) => d.region === 'western')
  const tzSouthern = tz.filter((d) => d.region === 'southern')
  const tzZanzibarArusha = tz.filter((d) => d.region === 'zanzibar' || d.region === 'arusha')

  // Kenya/Rwanda — the `region` field on Destination is Tanzania-circuit-
  // specific and meaningless here; group using the same slug->area mapping
  // already used on the live /kenya and /rwanda pages.
  const ke = allDestinations.filter((d) => d.country === 'kenya')
  const rw = allDestinations.filter((d) => d.country === 'rwanda')

  const areaData: Record<'tanzania' | 'kenya' | 'rwanda', CountryAreaData> = {
    tanzania: {
      introHeading: t('tzIntroHeading'),
      introBody: t('tzIntroBody'),
      areas: [
        { kicker: tTz('circuitNorthernLabel'), heading: tTz('circuitNorthernTagline'), destinations: tzNorthern.map(toRow) },
        { kicker: tTz('circuitWesternLabel'), heading: tTz('circuitWesternTagline'), destinations: tzWestern.map(toRow) },
        { kicker: tTz('circuitSouthernLabel'), heading: tTz('circuitSouthernTagline'), destinations: tzSouthern.map(toRow) },
        { kicker: t('tzAreaZanzibarArusha'), heading: t('tzAreaZanzibarArushaTagline'), destinations: tzZanzibarArusha.map(toRow) },
      ],
      seeAllHref: '/destinations/tanzania',
      seeAllLabel: t('seeAllTanzania'),
    },
    kenya: {
      introHeading: t('keIntroHeading'),
      introBody: t('keIntroBody'),
      areas: [
        { kicker: tKe('regionSouthernKenya'), destinations: bySlug(ke, ['masai-mara', 'amboseli']).map(toRow) },
        { kicker: tKe('regionNorthernKenya'), destinations: bySlug(ke, ['samburu']).map(toRow) },
        { kicker: tKe('regionSouthWestKenya'), destinations: bySlug(ke, ['tsavo']).map(toRow) },
        { kicker: tKe('regionCentralKenya'), destinations: bySlug(ke, ['ol-pejeta', 'lake-nakuru']).map(toRow) },
        { kicker: tKe('regionKenyanCoast'), destinations: bySlug(ke, ['kenyan-coast']).map(toRow) },
      ],
      seeAllHref: '/kenya',
      seeAllLabel: t('seeAllKenya'),
    },
    rwanda: {
      introHeading: t('rwIntroHeading'),
      introBody: t('rwIntroBody'),
      areas: [
        { kicker: tRw('regionNorthernRwanda'), destinations: bySlug(rw, ['volcanoes']).map(toRow) },
        { kicker: tRw('regionSouthWestRwanda'), destinations: bySlug(rw, ['nyungwe']).map(toRow) },
        { kicker: tRw('regionEasternRwanda'), destinations: bySlug(rw, ['akagera']).map(toRow) },
        { kicker: tRw('regionWesternRwanda'), destinations: bySlug(rw, ['lake-kivu']).map(toRow) },
        { kicker: tRw('regionCapital'), destinations: bySlug(rw, ['kigali']).map(toRow) },
      ],
      seeAllHref: '/rwanda',
      seeAllLabel: t('seeAllRwanda'),
    },
  }

  const stats = [
    { value: String(allDestinations.length), label: t('statDestinations') },
    { value: '3', label: t('statCountries') },
    { value: '3', label: t('statCircuits') },
    { value: t('statMammalsValue'), label: t('statMammals') },
    { value: t('statBirdsValue'), label: t('statBirds') },
    { value: t('statHqValue'), label: t('statHq') },
  ]

  const stories = [
    { kicker: t('story1Kicker'), heading: t('story1Heading'), body: t('story1Body'), link: t('story1Link'), href: '/destinations/serengeti' },
    { kicker: t('story2Kicker'), heading: t('story2Heading'), body: t('story2Body'), link: t('story2Link'), href: '/destinations/ngorongoro' },
    { kicker: t('story3Kicker'), heading: t('story3Heading'), body: t('story3Body'), link: t('story3Link'), href: '/destinations/masai-mara' },
    { kicker: t('story4Kicker'), heading: t('story4Heading'), body: t('story4Body'), link: t('story4Link'), href: '/destinations/volcanoes' },
  ]

  const breadcrumbItems = [
    { label: 'EWA Safari Outfitters', href: `/${locale}` },
    { label: t('breadcrumbLabel') },
  ]
  const breadcrumbSchema = buildBreadcrumbSchema(locale, breadcrumbItems, '/destinations')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/elephants.webp"
            alt={t('heroImageAlt')}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumb items={breadcrumbItems} locale={locale} />
          <div className="max-w-2xl">
            <p className="text-gold-label font-semibold text-xs uppercase tracking-widest mb-4">{t('heroEyebrow')}</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t('heroTitle')} <span className="text-gold">{t('heroTitleGold')}</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
              {t('heroLede')}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-lg"
              >
                {t('exploreMap')}
              </a>
              <BookNowButton
                packageType={tc('packageTypes.customSafari')}
                label={tc('planMySafari')}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="bg-brand py-8 border-t border-white/10">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <span className="text-gold font-bold text-xl">{s.value}</span>
                <span className="text-white/60 text-xs leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Map + Browse by Area */}
      <section id="areas" className="py-16 lg:py-24">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('areasEyebrow')}</span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand mt-3 mb-4">{t('areasHeading')}</h2>
            <p className="text-text-muted leading-relaxed">{t('areasBody')}</p>
          </div>
          <DestinationsExplorer data={areaData} />
        </Reveal>
      </section>

      {/* Lead capture band */}
      <section className="bg-gold py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-brand mb-3">{t('leadBandHeading')}</h2>
          <p className="text-brand/80 mb-7">{t('leadBandBody')}</p>
          <BookNowButton
            packageType={tc('packageTypes.customSafari')}
            label={t('leadBandCta')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-secondary text-white font-bold rounded-xl transition-colors"
          />
        </div>
      </section>

      {/* Field Notes */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('storiesEyebrow')}</span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand mt-3 mb-4">{t('storiesHeading')}</h2>
            <p className="text-text-muted leading-relaxed">{t('storiesBody')}</p>
          </div>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {stories.map((s) => (
              <RevealItem key={s.kicker} className="border-t border-brand/10 pt-6">
                <p className="text-gold-label text-[11px] font-bold uppercase tracking-widest mb-3">{s.kicker}</p>
                <h3 className="text-2xl font-semibold text-brand mb-3">{s.heading}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{s.body}</p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold text-brand text-xs font-semibold uppercase tracking-wide hover:bg-gold transition-colors"
                >
                  {s.link} →
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Compare grid */}
      <section className="bg-brand py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('compareEyebrow')}</span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mt-3">{t('compareHeading')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/40 border-y border-gold/40">
            {[
              { name: tc('packageTypes.tanzaniaSafari'), facts: [t('tzFact1'), t('tzFact2'), t('tzFact3')], href: '/destinations/tanzania', cta: t('tzExplore') },
              { name: tc('packageTypes.kenyaSafari'), facts: [t('keFact1'), t('keFact2'), t('keFact3')], href: '/kenya', cta: t('keExplore') },
              { name: tc('packageTypes.rwandaSafari'), facts: [t('rwFact1'), t('rwFact2'), t('rwFact3')], href: '/rwanda', cta: t('rwExplore') },
            ].map((col) => (
              <div key={col.name} className="p-8">
                <p className="text-gold text-[11px] font-bold uppercase tracking-widest mb-2">{t('compareBestFor')}</p>
                <h3 className="text-2xl font-semibold text-white mb-4">{col.name}</h3>
                <ul className="space-y-2 mb-6">
                  {col.facts.map((f) => (
                    <li key={f} className="text-white/70 text-sm border-t border-gold/30 pt-2 first:border-0 first:pt-0">{f}</li>
                  ))}
                </ul>
                <Link
                  href={col.href}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold text-white hover:bg-gold hover:text-brand font-semibold rounded-xl transition-colors"
                >
                  {col.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial + trust stats */}
      <section className="py-16 lg:py-24 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative bg-transparent rounded-3xl border border-gold p-10 lg:p-14 text-center">
            <Quote className="w-10 h-10 text-gold/30 mx-auto mb-4" fill="currentColor" strokeWidth={0} />
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-medium text-brand italic leading-snug mb-6">
              &ldquo;{t('testimonialQuote')}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-11 h-11 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                ST
              </div>
              <cite className="text-brand font-semibold text-sm not-italic">{t('testimonialCite')}</cite>
            </div>
          </div>

          <div className="bg-transparent rounded-2xl border border-gold mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gold/30">
              {[
                { num: t('trustRating'), label: t('trustRatingLabel') },
                { num: t('trustReviews'), label: t('trustReviewsLabel') },
                { num: t('trustCountries'), label: t('trustCountriesLabel') },
                { num: t('trustBigFive'), label: t('trustBigFiveLabel') },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center justify-center py-6 px-4 text-center">
                  <span className="text-2xl font-bold text-gold leading-none">{item.num}</span>
                  <span className="text-text-muted text-xs uppercase tracking-wide mt-2">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA + newsletter */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <Image
          src="/images/gallery/serengeti-hot-air-balloon.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-start">
            <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">{t('finalCtaEyebrow')}</span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mt-3 mb-4">{t('finalCtaHeading')}</h2>
            <p className="text-white/70 mb-8">{t('finalCtaBody')}</p>
            <BookNowButton
              packageType={tc('packageTypes.customSafari')}
              label={t('finalCtaButton')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
            />
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <NewsletterForm dark />
          </div>
        </div>
      </section>
    </>
  )
}
