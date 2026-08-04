import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Calendar, MapPin, Ruler, ArrowRight, Check, Plane, Clock } from 'lucide-react'
import { destinations } from '@/data/destinations'
import { getDestination, getDestinations } from '@/data/destinations.i18n'
import { getPackages } from '@/data/packages.i18n'
import { getBlogPostMeta } from '@/data/blog/index.i18n'
import BookNowButton from '@/components/booking/BookNowButton'
import MobileEnquireBanner from '@/components/booking/MobileEnquireBanner'
import BlogSuggestionCard from '@/components/trekking/BlogSuggestionCard'
import FaqAccordion from '@/components/itineraries/FaqAccordion'
import { routing } from '@/i18n/routing'
import { SITE_URL, localeUrl, buildAlternates } from '@/lib/site'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'


const DEST_KEYWORDS: Record<string, string[]> = {
  'serengeti': [
    'Serengeti National Park safari',
    'Serengeti Great Migration',
    'Serengeti Tanzania',
    'visit Serengeti',
    'Serengeti wildlife safari',
    'Serengeti game reserve',
    'Serengeti Tanzania 2026',
    'Serengeti lions',
    'Serengeti tour',
    'Serengeti big five',
  ],
  'ngorongoro': [
    'Ngorongoro Crater safari',
    'Ngorongoro Conservation Area',
    'Ngorongoro big five',
    'Ngorongoro Tanzania',
    'visit Ngorongoro Crater',
    'Ngorongoro black rhino',
    'Ngorongoro safari tour',
    'Ngorongoro caldera',
    'Ngorongoro 2026',
    'world largest caldera safari',
  ],
  'tarangire': [
    'Tarangire National Park safari',
    'Tarangire elephants',
    'Tarangire baobab trees',
    'Tanzania elephant safari',
    'Tarangire safari tour',
    'Tarangire migration',
    'Tarangire dry season',
    'Tarangire 2026',
    'Tanzania baobab safari',
    'Tarangire birdwatching',
  ],
  'zanzibar': [
    'Zanzibar island holiday',
    'Zanzibar beaches',
    'Stone Town Zanzibar',
    'Zanzibar snorkeling',
    'Zanzibar safari beach combo',
    'Zanzibar 2026',
    'Zanzibar travel guide',
    'best beaches Zanzibar',
    'Zanzibar spice island',
    'Tanzania beach holiday',
  ],
  'masai-mara': [
    'Masai Mara safari',
    'Masai Mara Great Migration',
    'Kenya Masai Mara',
    'Mara River crossing',
    'Masai Mara 2026',
    'best time Masai Mara',
    'Masai Mara big five',
    'Kenya wildlife safari',
    'Masai Mara holiday',
    'Masai Mara tour',
  ],
  'ruaha': [
    'Ruaha National Park safari',
    'southern Tanzania safari',
    'Tanzania remote safari',
    'Ruaha big five',
    'Ruaha elephants lions',
    'Ruaha safari guide',
    'Tanzania off beaten path',
    'Ruaha National Park 2026',
    'Tanzania southern wildlife',
    'Ruaha luxury camp',
  ],
  'nyerere': [
    'Nyerere National Park',
    'Selous Game Reserve Tanzania',
    'boat safari Tanzania',
    'Tanzania walking safari',
    'Nyerere wildlife',
    'Selous safari 2026',
    'Tanzania water safari',
    'Nyerere boat game drive',
    'Tanzania Selous',
    'southern Tanzania safari',
  ],
  'volcanoes': [
    'Volcanoes National Park Rwanda',
    'gorilla trekking Rwanda',
    'mountain gorilla safari',
    'Rwanda gorilla permit 2026',
    'Volcanoes National Park safari',
    'Rwanda gorilla tracking',
    'golden monkey Rwanda',
    'Dian Fossey gorillas',
    'Africa gorilla safari',
    'Rwanda primate trekking',
  ],
  'kilimanjaro': [
    'Mount Kilimanjaro climb',
    'Kilimanjaro safari',
    'Kilimanjaro Tanzania',
    'Africa highest peak',
    'Kilimanjaro trek 2026',
    'Kilimanjaro Uhuru Peak',
    'Tanzania mountain climb',
    'Kilimanjaro guided trek',
    'Kilimanjaro tour operator',
    'climb Africa highest mountain',
  ],
}
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    destinations.map((d) => ({ locale, slug: d.slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const dest = await getDestination(slug, locale)
  if (!dest) return {}
  const t = await getTranslations({ locale, namespace: 'destination' })
  const title = t('metaTitle', { name: dest.name })
  const description = t('metaDescription', { name: dest.name, tagline: dest.tagline })
  return {
    alternates: buildAlternates(locale, `/destinations/${slug}`),
    title,
    description,
    keywords: DEST_KEYWORDS[slug] ?? [
      `${dest.name} safari`, `${dest.name} tour`, `${dest.name} Tanzania`,
      `visit ${dest.name}`, `${dest.name} wildlife`, `${dest.name} 2026`,
      'Tanzania safari', 'East Africa safari', 'Tanzania tour operator', 'Africa safari holiday',
    ],
    openGraph: {
      title,
      description,
      images: [{ url: dest.heroImage, width: 1200, height: 630, alt: dest.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      images: [dest.heroImage],
    },
  }
}

export default async function DestinationPage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const dest = await getDestination(slug, locale)
  if (!dest) notFound()

  const t = await getTranslations('destination')
  const tc = await getTranslations('common')

  const allPackages = await getPackages(locale)
  const allDestinations = await getDestinations(locale)
  const destPackages = allPackages.filter((p) => p.destinations.includes(dest.slug))
  const nearby = allDestinations
    .filter((d) => d.country === dest.country && d.slug !== dest.slug)
    .slice(0, 3)

  const attractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: dest.name,
    description: dest.tagline,
    image: `${SITE_URL}${dest.heroImage}`,
    url: localeUrl(locale, `/destinations/${dest.slug}`),
    touristType: ['Wildlife Enthusiasts', 'Nature Lovers', 'Adventure Travelers'],
    isAccessibleForFree: false,
    address: {
      '@type': 'PostalAddress',
      addressCountry: dest.country === 'tanzania' ? 'TZ' : dest.country === 'kenya' ? 'KE' : 'RW',
    },
  }

  const faqSchema = dest.faq && dest.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dest.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null

  const descriptionParagraphs = dest.description.split('\n\n')
  const guidePost = dest.guideSlug ? await getBlogPostMeta(dest.guideSlug, locale) : undefined

  const { lat, lng } = dest.coordinates
  const mapBbox = `${lng - 0.2},${lat - 0.15},${lng + 0.2},${lat + 0.15}`
  const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${mapBbox}&marker=${lat},${lng}`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* Hero */}
      <section className="relative h-[60vh] min-h-80 bg-brand flex items-end">
        <Image
          src={dest.heroImage}
          alt={dest.name}
          fill
          className={`object-cover ${dest.heroImagePosition === 'top' ? 'object-top' : 'object-center'}`}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <Breadcrumb items={[
            { label: 'EWA Safari Outfitters', href: `/${locale}` },
            { label: t('breadcrumbLabel'), href: `/${locale}/destinations` },
            { label: dest.name },
          ]} />
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-2">{dest.name}</h1>
          <p className="text-gold text-lg font-medium">{dest.tagline}</p>
        </div>
      </section>

      <MobileEnquireBanner
        eyebrow={dest.tagline}
        title={dest.name}
        label={t('getFreeQuote')}
        packageName={dest.name}
        packageType={tc('packageTypes.wildlifeSafari')}
      />

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Reveal className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-brand mb-4">{t('about', { name: dest.name })}</h2>
              <div className="space-y-4 mb-6">
                {descriptionParagraphs.map((para, i) => (
                  <p key={i} className="text-text-muted leading-relaxed">{para}</p>
                ))}
              </div>
              <h3 className="font-semibold text-brand mb-3">{t('highlights')}</h3>
              <ul className="space-y-2 mb-8">
                {dest.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-base text-text-muted">
                    <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold text-brand mb-3">{t('wildlifeYouMaySee')}</h3>
              <div className="flex flex-wrap gap-2">
                {dest.wildlife.map((w) => (
                  <span key={w} className="px-3 py-1 bg-light-green text-brand text-xs rounded-full font-medium">{w}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-light-green rounded-2xl p-6 space-y-5">
                <h3 className="font-semibold text-brand mb-4">{t('keyFacts')}</h3>
                {dest.parkSize && (
                  <div className="flex items-center gap-3 text-base">
                    <Ruler className="w-4 h-4 text-gold" />
                    <div>
                      <div className="font-medium text-brand">{t('parkSize')}</div>
                      <div className="text-text-muted">{dest.parkSize}</div>
                    </div>
                  </div>
                )}
                {dest.distanceFromArusha && (
                  <div className="flex items-center gap-3 text-base">
                    <MapPin className="w-4 h-4 text-gold" />
                    <div>
                      <div className="font-medium text-brand">{t('fromArusha')}</div>
                      <div className="text-text-muted">{dest.distanceFromArusha}</div>
                    </div>
                  </div>
                )}
                <div className="text-base">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-4 h-4 text-gold" />
                    <div className="font-medium text-brand">{t('bestMonths')}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {MONTH_NAMES.map((m, i) => (
                      <span
                        key={m}
                        className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                          dest.bestMonths.includes(i + 1)
                            ? 'bg-brand text-white'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {dest.gettingThere && (
                <div className="mt-5 bg-light-green rounded-2xl p-6 space-y-4">
                  <h3 className="font-semibold text-brand mb-1">{t('gettingThereHeading')}</h3>
                  <div className="flex items-center gap-3 text-base">
                    <Plane className="w-4 h-4 text-gold flex-shrink-0" />
                    <div>
                      <div className="font-medium text-brand">{t('nearestAirport')}</div>
                      <div className="text-text-muted">{dest.gettingThere.airport}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-base">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    <div>
                      <div className="font-medium text-brand">{t('transferLabel')}</div>
                      <div className="text-text-muted">{dest.gettingThere.transferTime}</div>
                    </div>
                  </div>
                  <p className="text-text-muted text-base leading-relaxed pt-1 border-t border-brand/10">
                    {dest.gettingThere.transferNotes}
                  </p>
                </div>
              )}

              <div className="mt-5 rounded-2xl overflow-hidden border border-gray-100">
                <div className="px-6 pt-5 pb-3">
                  <h3 className="font-semibold text-brand flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" /> {t('mapHeading')}
                  </h3>
                </div>
                <iframe
                  src={mapEmbedUrl}
                  className="w-full h-56 border-0"
                  loading="lazy"
                  title={`${dest.name} map`}
                />
              </div>

              <div className="mt-5">
                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">{t('featuredGuideHeading')}</p>
                {guidePost ? (
                  <BlogSuggestionCard
                    slug={guidePost.slug}
                    title={guidePost.title}
                    excerpt={guidePost.excerpt}
                    category={guidePost.category}
                    image={guidePost.heroImage}
                    readTime={guidePost.readTime}
                    readLabel={tc('readMore')}
                  />
                ) : (
                  <div className="bg-light-green rounded-2xl p-6 text-center">
                    <h3 className="font-semibold text-brand mb-2">{t('genericGuideHeading')}</h3>
                    <p className="text-text-muted text-base leading-relaxed mb-4">{t('genericGuideBody')}</p>
                    <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-brand font-semibold hover:text-gold transition-colors">
                      {t('exploreGuides')} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>

              <div className="mt-5 p-5 bg-brand rounded-2xl text-white text-center">
                <p className="font-semibold mb-3">{t('readyToVisit', { name: dest.name.split(' ')[0] })}</p>
                <BookNowButton
                  label={t('getFreeQuote')}
                  arrow={false}
                  packageName={dest.name}
                  packageType={tc('packageTypes.wildlifeSafari')}
                  className="block w-full py-2.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl text-sm transition-colors"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Available Packages */}
      {destPackages.length > 0 && (
        <section className="py-16 bg-light-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-8">
              <h2 className="text-2xl font-semibold text-brand">
                {t('safariPackagesIncluding', { name: dest.name.split(' ')[0] })}
              </h2>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {destPackages.map((pkg) => (
                <RevealItem key={pkg.slug}>
                  <Link href={`/safaris/${pkg.slug}`} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all group block">
                    <div className="relative h-44">
                      <Image src={pkg.heroImage} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-brand mb-1 text-sm">{pkg.name}</h3>
                      <p className="text-text-muted text-xs mb-3">{pkg.duration} {tc('nights')} · {t('nightsFrom')} ${pkg.priceFrom.toLocaleString('en-US')}/{tc('perPerson')}</p>
                      <span className="flex items-center gap-1 text-xs text-brand font-semibold">
                        {tc('viewPackage')} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* FAQ */}
      {dest.faq && dest.faq.length > 0 && (
        <section className="py-16 bg-light-green">
          <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-brand mb-8 text-center">{t('faqHeading')}</h2>
            <FaqAccordion faqs={dest.faq} />
          </Reveal>
        </section>
      )}

      {/* Nearby destinations */}
      {nearby.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-8">
              <h2 className="text-2xl font-semibold text-brand">{t('alsoConsider')}</h2>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {nearby.map((d) => (
                <RevealItem key={d.slug}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    className="group relative flex items-end rounded-2xl overflow-hidden min-h-[240px] block"
                  >
                    <Image
                      src={d.heroImage}
                      alt={d.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-brand/50 to-transparent" />
                    <div className="relative z-10 p-6 w-full">
                      <h3 className="font-bold text-white text-lg leading-snug mb-1">{d.name}</h3>
                      <p className="text-white/70 text-xs leading-relaxed mb-3">{d.tagline}</p>
                      <span className="flex items-center gap-1.5 text-white text-xs font-semibold group-hover:text-gold transition-colors">
                        {tc('details')} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-16 overflow-hidden" id="inquiry">
        <Image
          src={dest.heroImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/80" />
        <Reveal className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">{t('planSafari', { name: dest.name.split(' ')[0] })}</h2>
          <p className="text-white/70 text-base mb-8">{t('planDesc')}</p>
          <BookNowButton
            label={t('requestQuote')}
            packageName={dest.name}
            packageType={tc('packageTypes.wildlifeSafari')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
          />
          <p className="text-white/70 text-xs mt-4">{t('noPaymentNote')}</p>
        </Reveal>
      </section>
    </>
  )
}
