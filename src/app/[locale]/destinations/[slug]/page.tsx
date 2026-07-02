import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import { Calendar, MapPin, Ruler, ArrowRight, Check } from 'lucide-react'
import { destinations } from '@/data/destinations'
import { getDestination, getDestinations } from '@/data/destinations.i18n'
import { getPackages } from '@/data/packages.i18n'
import BookNowButton from '@/components/booking/BookNowButton'
import { routing } from '@/i18n/routing'


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
  const dest = getDestination(slug, locale)
  if (!dest) return {}
  return {
    title: `${dest.name} Safari | The Extreme Wilderness Tanzania`,
    description: `Plan your ${dest.name} safari with Tanzania's leading local operator. ${dest.tagline}.`,
    keywords: DEST_KEYWORDS[slug] ?? [
      `${dest.name} safari`, `${dest.name} tour`, `${dest.name} Tanzania`,
      `visit ${dest.name}`, `${dest.name} wildlife`, `${dest.name} 2026`,
      'Tanzania safari', 'East Africa safari', 'Tanzania tour operator', 'Africa safari holiday',
    ],
  }
}

export default async function DestinationPage({ params }: Props) {
  const { slug, locale } = await params
  const dest = getDestination(slug, locale)
  if (!dest) notFound()

  const t = await getTranslations('destination')
  const tc = await getTranslations('common')

  const allPackages = getPackages(locale)
  const allDestinations = getDestinations(locale)
  const destPackages = allPackages.filter((p) => p.destinations.includes(dest.slug))
  const nearby = allDestinations
    .filter((d) => d.country === dest.country && d.slug !== dest.slug)
    .slice(0, 3)

  const attractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: dest.name,
    description: dest.tagline,
    image: `https://theextremewilderness.com${dest.heroImage}`,
    url: `https://theextremewilderness.com/${locale}/destinations/${dest.slug}`,
    touristType: ['Wildlife Enthusiasts', 'Nature Lovers', 'Adventure Travelers'],
    isAccessibleForFree: false,
    address: {
      '@type': 'PostalAddress',
      addressCountry: dest.country === 'tanzania' ? 'TZ' : dest.country === 'kenya' ? 'KE' : 'RW',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema) }}
      />
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
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-2">{dest.name}</h1>
          <p className="text-gold text-lg font-medium">{dest.tagline}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-brand mb-4">{t('about', { name: dest.name })}</h2>
              <p className="text-text-muted leading-relaxed mb-6">{dest.description}</p>
              <h3 className="font-semibold text-brand mb-3">{t('highlights')}</h3>
              <ul className="space-y-2 mb-8">
                {dest.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
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
            </div>

            <div>
              <div className="bg-light-green rounded-2xl p-6 space-y-5">
                <h3 className="font-semibold text-brand mb-4">{t('keyFacts')}</h3>
                {dest.parkSize && (
                  <div className="flex items-center gap-3 text-sm">
                    <Ruler className="w-4 h-4 text-gold" />
                    <div>
                      <div className="font-medium text-brand">{t('parkSize')}</div>
                      <div className="text-text-muted">{dest.parkSize}</div>
                    </div>
                  </div>
                )}
                {dest.distanceFromArusha && (
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-gold" />
                    <div>
                      <div className="font-medium text-brand">{t('fromArusha')}</div>
                      <div className="text-text-muted">{dest.distanceFromArusha}</div>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-gold" />
                  <div>
                    <div className="font-medium text-brand">{t('bestMonths')}</div>
                    <div className="text-text-muted">
                      {dest.bestMonths.map((m) => MONTH_NAMES[m - 1]).join(', ')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-5 bg-brand rounded-2xl text-white text-center">
                <p className="font-semibold mb-3">{t('readyToVisit', { name: dest.name.split(' ')[0] })}</p>
                <BookNowButton
                  label={t('getFreeQuote')}
                  arrow={false}
                  packageName={dest.name}
                  packageType="Wildlife Safari"
                  className="block w-full py-2.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl text-sm transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Packages */}
      {destPackages.length > 0 && (
        <section className="py-16 bg-light-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-brand mb-8">
              {t('safariPackagesIncluding', { name: dest.name.split(' ')[0] })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {destPackages.map((pkg) => (
                <Link key={pkg.slug} href={`/safaris/${pkg.slug}`} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
                  <div className="relative h-44">
                    <Image src={pkg.heroImage} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-brand mb-1 text-sm">{pkg.name}</h3>
                    <p className="text-text-muted text-xs mb-3">{pkg.duration} {tc('nights')} · {t('nightsFrom')} ${pkg.priceFrom.toLocaleString()}/{tc('perPerson')}</p>
                    <span className="flex items-center gap-1 text-xs text-brand font-semibold">
                      {tc('viewPackage')} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nearby destinations */}
      {nearby.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-brand mb-8">{t('alsoConsider')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {nearby.map((d) => (
                <Link key={d.slug} href={`/destinations/${d.slug}`} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-brand hover:bg-light-green transition-all group">
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image src={d.heroImage} alt={d.name} fill className="object-cover" sizes="64px" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand text-sm">{d.name}</div>
                    <div className="text-text-muted text-xs mt-0.5">{d.tagline}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-brand" id="inquiry">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">{t('planSafari', { name: dest.name.split(' ')[0] })}</h2>
          <p className="text-white/70 text-sm mb-8">{t('planDesc')}</p>
          <BookNowButton
            label={t('requestQuote')}
            packageName={dest.name}
            packageType="Wildlife Safari"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
          />
          <p className="text-white/70 text-xs mt-4">{t('noPaymentNote')}</p>
        </div>
      </section>
    </>
  )
}
