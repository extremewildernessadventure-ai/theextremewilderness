import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookNowButton from '@/components/booking/BookNowButton'
import AccommodationsExplorer from '@/components/accommodations/AccommodationsExplorer'
import NewsletterForm from '@/components/home/NewsletterForm'
import { buildAlternates, buildBreadcrumbSchema, buildAccommodationsListSchema, buildPageTitle } from '@/lib/site'
import { getAccommodations } from '@/data/accommodations.i18n'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'accommodationsHub' })
  const accommodations = await getAccommodations(locale)
  return {
    alternates: buildAlternates(locale, '/accommodations'),
    title: buildPageTitle(t('metaTitle')),
    description: t('metaDescription'),
    openGraph: {
      title: t('metaTitle'),
      description: t('ogDescription'),
      images: [{ url: '/images/lodges/four-seasons-safari-lodge-serengeti-villa-pool.webp', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      images: ['/images/lodges/four-seasons-safari-lodge-serengeti-villa-pool.webp'],
    },
    keywords: Array.from(new Set([...(t.raw('metaKeywords') as string[]), ...accommodations.map((a) => a.name)])),
  }
}

export default async function AccommodationsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('accommodationsHub')
  const tc = await getTranslations('common')
  const accommodations = await getAccommodations(locale)

  const breadcrumbItems = [
    { label: 'EWA Safari Outfitters', href: `/${locale}` },
    { label: t('breadcrumbLabel') },
  ]
  const breadcrumbSchema = buildBreadcrumbSchema(locale, breadcrumbItems, '/accommodations')
  const accommodationsListSchema = buildAccommodationsListSchema(locale, accommodations)

  const parksCount = new Set(accommodations.map((a) => a.location)).size
  const photosCount = accommodations.filter((a) => a.images.length > 0).length

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accommodationsListSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/lodges/four-seasons-safari-lodge-serengeti-villa-pool.webp"
            alt={t('heroImageAlt')}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-2xl">
            <p className="text-gold-label font-semibold text-xs uppercase tracking-widest mb-4">{t('heroEyebrow')}</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">{t('heroSubtitle')}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors shadow-lg"
              >
                {t('exploreCollection')}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-gold text-3xl lg:text-4xl font-bold">{accommodations.length}</span>
              <span className="text-white/60 text-xs uppercase tracking-wider">{t('statAccommodations')}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-gold text-3xl lg:text-4xl font-bold">3</span>
              <span className="text-white/60 text-xs uppercase tracking-wider">{t('statTiers')}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-gold text-3xl lg:text-4xl font-bold">{parksCount}</span>
              <span className="text-white/60 text-xs uppercase tracking-wider">{t('statParks')}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-gold text-3xl lg:text-4xl font-bold">{photosCount}</span>
              <span className="text-white/60 text-xs uppercase tracking-wider">{t('statPhotos')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold-label text-xs font-semibold uppercase tracking-widest mb-3">{t('sectionEyebrow')}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand mb-4">{t('sectionTitle')}</h2>
            <p className="text-text-muted leading-relaxed">{t('sectionSubtitle')}</p>
          </div>

          <AccommodationsExplorer accommodations={accommodations} />
        </div>
      </section>

      {/* Lead band */}
      <section className="bg-gold py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand mb-3">{t('leadBandHeading')}</h2>
          <p className="text-brand/80 leading-relaxed mb-8 max-w-xl mx-auto">{t('leadBandSubtitle')}</p>
          <Link
            href="/plan"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-secondary text-white font-bold rounded-xl transition-colors"
          >
            {t('leadBandButton')}
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <Image
          src="/images/lodges/elephant-springs-pool-deck.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/90" />
        <div className="relative z-10 max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{t('newsletterEyebrow')}</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">{t('newsletterHeading')}</h2>
          <p className="text-white/70 leading-relaxed mb-8">{t('newsletterText')}</p>
          <NewsletterForm dark />
        </div>
      </section>
    </main>
  )
}
