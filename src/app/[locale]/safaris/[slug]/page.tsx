import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Clock, Users, Check, X, ChevronDown, Calendar, ShieldCheck } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import BookNowButton from '@/components/booking/BookNowButton'
import TrustBar from '@/components/home/TrustBar'
import PriceTierSwitcher from '@/components/safaris/PriceTierSwitcher'
import FamilyPriceSwitcher from '@/components/safaris/FamilyPriceSwitcher'
import AmenityStay from '@/components/safaris/AmenityStay'
import RelatedSafaris from '@/components/safaris/RelatedSafaris'
import { packages } from '@/data/packages'
import { getPackage, getPackages } from '@/data/packages.i18n'
import { getBlogPostMeta } from '@/data/blog/index.i18n'
import BlogSuggestionCard from '@/components/trekking/BlogSuggestionCard'
import { routing } from '@/i18n/routing'
import { SITE_URL, localeUrl, buildAlternates } from '@/lib/site'
import Breadcrumb from '@/components/ui/Breadcrumb'


const SAFARI_KEYWORDS: Record<string, string[]> = {
  '7-day-serengeti-ngorongoro': [
    'Serengeti Ngorongoro safari', '7 day Tanzania safari', 'Tanzania safari 2026',
    'Great Migration safari', 'Ngorongoro Crater big five', 'Tanzania northern circuit',
    'Serengeti safari package', 'Africa wildlife safari', 'Tanzania safari holiday', 'book Tanzania safari',
  ],
  '10-day-northern-circuit': [
    '10 day Tanzania safari', 'northern circuit Tanzania', 'ultimate Tanzania safari',
    'Serengeti Ngorongoro Tarangire safari', 'Tanzania 10 days', 'Tanzania luxury safari',
    'East Africa safari itinerary', 'Tanzania safari holiday 2026', 'Africa safari 10 days', 'Tanzania wildlife tour',
  ],
  '10-day-safari-zanzibar': [
    'Tanzania safari and beach', 'Zanzibar safari combo', 'Tanzania and Zanzibar holiday',
    'safari beach package Tanzania', 'Zanzibar holiday 2026', 'Africa beach safari',
    'Tanzania Indian Ocean', '10 day Africa holiday', 'best Tanzania beach safari', 'safari Zanzibar combination',
  ],
  '5-day-serengeti-fly-in': [
    'Serengeti fly-in safari', 'flying safari Tanzania', 'Serengeti 5 days',
    'luxury flying safari Africa', 'Tanzania bush plane safari', 'Serengeti private safari',
    'short Tanzania safari', 'Tanzania safari 5 days', 'Africa flying safari', 'Serengeti air safari',
  ],
  'kilimanjaro-machame-7day': [
    'Kilimanjaro Machame route', 'Machame route 7 days', 'climb Kilimanjaro Machame',
    'Kilimanjaro trekking cost', 'Kilimanjaro guided trek', 'Africa mountain climbing',
    'Tanzania mountain trek', 'Kilimanjaro summit package', 'Machame whiskey route', 'Kilimanjaro 7 day trek',
  ],
  '7-day-southern-circuit': [
    'southern Tanzania safari', 'Ruaha National Park safari', 'Nyerere National Park',
    'Tanzania southern circuit', '7 day southern safari', 'off the beaten path Tanzania',
    'Tanzania hidden safari', 'Selous safari Tanzania', 'Tanzania remote safari', 'Ruaha safari package',
  ],
  '5-days-highlights-safari': [
    '5 day Tanzania safari', 'Tanzania safari highlights', 'short Africa safari',
    'Tanzania quick safari', 'Serengeti Ngorongoro 5 days', 'mini Tanzania safari',
    'Tanzania safari 5 nights', 'budget Tanzania safari', 'Africa safari 5 days', 'Tanzania safari short trip',
  ],
  '8-days-honeymoon-safari': [
    'honeymoon safari Tanzania', 'Tanzania romantic safari', 'Africa honeymoon package',
    'luxury honeymoon Tanzania', 'Tanzania bush honeymoon', 'romantic safari Africa',
    'Tanzania couples safari', 'honeymoon safari Africa 2026', 'Africa wedding anniversary safari', 'luxury safari honeymoon',
  ],
  '7-days-crown-jewels': [
    'crown jewels Tanzania safari', 'best Tanzania safari', 'Tanzania top safari',
    'Serengeti Zanzibar safari', 'Tanzania crown jewels', 'Africa bucket list safari',
    'Tanzania premium safari', 'best of Tanzania safari', 'luxury Tanzania 7 days', 'Africa best wildlife safari',
  ],
  '7-days-migration-southern': [
    'Great Migration southern Tanzania', 'wildebeest migration safari', 'Ndutu calving season safari',
    'Serengeti migration southern', 'Tanzania migration safari 2026', 'wildlife migration Tanzania',
    'best migration safari Africa', 'Serengeti wildebeest safari', 'calving season Ndutu', 'Africa migration safari',
  ],
  '10-days-luxury-family': [
    'family safari Tanzania', 'Tanzania luxury family safari', 'Africa safari with kids',
    'Tanzania family holiday', 'kids on safari Tanzania', '10 day family safari',
    'Africa family vacation', 'Tanzania family tour operator', 'child-friendly safari Africa', 'Tanzania school holiday safari',
  ],
  '12-days-wild-wilderness': [
    '12 day Tanzania safari', 'ultimate Africa wilderness', 'Tanzania extended safari',
    'Tanzania remote wilderness', 'Africa 12 days safari', 'Tanzania off-road safari',
    'wild Tanzania safari', 'Tanzania full safari', 'long haul Africa safari', 'Tanzania wilderness experience',
  ],
  '8-days-great-northern-migration': [
    'northern Serengeti migration', 'Great Migration northern', 'Mara River crossing safari',
    'Tanzania migration northern', 'Serengeti crossing wildebeest', '8 day Great Migration safari',
    'best Great Migration safari', 'Serengeti river crossing', 'Africa migration tourism', 'northern Serengeti safari',
  ],
  'ultimate-tanzania-safari': [
    'ultimate Tanzania safari', 'Tanzania grand safari', 'best of East Africa safari',
    'Tanzania complete safari', 'Africa dream safari', 'Tanzania top safari package',
    'East Africa ultimate tour', 'Tanzania luxury ultimate', 'African safari bucket list', 'Tanzania premium 12 days',
  ],
  '7-days-gems-of-north': [
    'Tanzania north gems safari', 'Tarangire Serengeti safari', 'Lake Manyara safari',
    'northern Tanzania gems', 'Tanzania 7 day gems', 'Africa hidden gems safari',
    'Tanzania safari 7 nights', 'Manyara Tarangire Serengeti', 'Tanzania northern highlights', 'Africa wildlife north',
  ],
  '7-days-flight-ndutu': [
    'Ndutu migration safari', 'fly-in Ndutu Tanzania', 'calving season Serengeti',
    'Serengeti south safari', 'Tanzania migration calving', 'Ndutu wildebeest calving',
    'Africa calving safari', 'Tanzania fly-in Ndutu', 'Serengeti Ndutu February', 'migration calving Tanzania',
  ],
  '8-days-flight-migration': [
    'fly-in migration safari Tanzania', 'Tanzania flying safari migration', '8 days Great Migration',
    'Serengeti migration flying', 'Africa luxury migration safari', 'Tanzania air safari 8 days',
    'migration safari bucket list', 'Tanzania fly-in wildlife', 'best Africa migration', 'Serengeti fly-in 8 days',
  ],
  '11-days-rwanda-tanzania': [
    'Rwanda Tanzania combined safari', 'Tanzania Rwanda gorilla trekking', 'gorilla trekking Tanzania safari',
    'East Africa combined tour', '11 day East Africa', 'Rwanda Tanzania 2026',
    'gorilla safari and Tanzania', 'Africa gorilla and wildlife', 'Rwanda Tanzania tour operator', 'East Africa safari combination',
  ],
  '12-days-rwanda-tanzania-zanzibar': [
    'Rwanda Tanzania Zanzibar safari', 'gorilla trekking safari beach', '12 day East Africa safari',
    'Rwanda gorilla Zanzibar beach', 'East Africa gorilla safari beach', 'Rwanda Tanzania Zanzibar 2026',
    'gorilla trek and beach holiday', 'ultimate East Africa safari', 'Africa gorilla safari honeymoon', 'three country East Africa tour',
  ],
  '12-days-rwanda-primates': [
    'Rwanda primate safari', 'gorilla chimpanzee trekking Rwanda', 'Rwanda 12 days',
    'mountain gorilla Rwanda', 'golden monkey Rwanda', 'chimpanzee Rwanda',
    'Rwanda primate experience', 'Africa gorilla holiday', 'Rwanda wildlife primates', 'Rwanda gorilla 12 days',
  ],
  '11-days-kenya-undisputed': [
    'Kenya safari 11 days', 'Masai Mara Amboseli safari', 'Kenya Tanzania safari',
    'Kenya undisputed safari', 'best Kenya safari', 'Kenya 11 day tour',
    'Masai Mara Great Migration 2026', 'Kenya wildlife safari', 'luxury Kenya safari package', 'Africa Kenya holiday',
  ],
  '10-days-southern-secrets': [
    'southern Tanzania secrets', 'Tanzania hidden south', 'Ruaha Nyerere safari',
    'Tanzania 10 days south', 'Tanzania remote south', 'off beaten path Tanzania',
    'Tanzania southern wildlife', 'southern Tanzania tour', 'Africa hidden safari', 'Tanzania south 10 days',
  ],
  '11-days-southern-spice': [
    'southern Tanzania Zanzibar safari', 'Tanzania safari and beach 11 days', 'Ruaha beach combo',
    'Tanzania south and Zanzibar', 'Africa wildlife and beach', 'Tanzania southern spice',
    'Tanzania Zanzibar 11 days', 'Africa beach wilderness', 'southern Tanzania holiday', 'Tanzania south spice islands',
  ],
  '12-days-tanzania-kenya': [
    'Tanzania Kenya safari 12 days', 'East Africa grand safari', 'Kenya Tanzania 12 days',
    'Serengeti Masai Mara safari', 'Kenya Tanzania tour 2026', 'Africa two countries safari',
    'East Africa 12 day tour', 'Tanzania Kenya comparison safari', 'best of Africa safari', 'dual country Africa safari',
  ],
  '12-days-grand-safari': [
    'Tanzania grand safari 12 days', 'ultimate Tanzania grand tour', 'Africa grand safari',
    'Tanzania best wildlife 12 days', 'Tanzania everything safari', 'Africa bucket list grand',
    'Tanzania grandest safari', '12 night Tanzania safari', 'Tanzania comprehensive safari', 'best Africa 12 day safari',
  ],
  '5-day-comfort-tanzania-safari': [
    '5 day Tanzania safari', 'Tanzania Northern Circuit safari', 'Tarangire Serengeti Ngorongoro safari',
    'comfort safari Tanzania', '5 day Tanzania safari price', 'Tanzania safari from Arusha',
    '5 day Africa safari', 'Tanzania 5 days itinerary', 'short Tanzania safari Northern Circuit', 'Tanzania safari 5 nights',
  ],
  '6-day-comfort-tanzania-safari': [
    '6 day Tanzania safari', 'Tanzania Northern Circuit 6 days', 'Serengeti safari 2 days',
    'Tanzania comfort safari', '6 day safari from Arusha', 'Tarangire Serengeti Ngorongoro Manyara safari price',
    '6 day Africa safari', 'Tanzania 6 days Northern Circuit', 'two full days Serengeti safari', 'Tanzania safari 6 nights',
  ],
  'kenya-tanzania-highlights-safari': [
    'Kenya Tanzania safari', 'Masai Mara Serengeti safari', 'Kenya Tanzania safari itinerary',
    'highlights Kenya Tanzania', 'East Africa safari 10 days', 'Ngorongoro Serengeti Masai Mara safari price',
    'cross border safari East Africa', 'Kenya Tanzania 10 day tour', 'Amboseli Masai Mara Serengeti safari', 'best East Africa safari',
  ],
  '10-day-kenya-tanzania-safari': [
    'Kenya Tanzania safari 10 days', 'Masai Mara Serengeti safari', 'East Africa combination safari',
    'Kenya Tanzania border crossing safari', 'Ngorongoro Crater Tarangire safari', 'best East Africa safari 10 days',
    'Masai Mara game drive', 'Tanzania Kenya wildlife safari', 'East Africa safari 2026',
  ],
  '2-day-selous-safari-from-zanzibar': [
    'Zanzibar safari 2 days', 'Nyerere safari from Zanzibar', 'Selous safari Zanzibar',
    'Rufiji River boat safari', 'Tanzania short safari', 'add safari to Zanzibar beach holiday',
    'fly-in safari Zanzibar', 'Nyerere National Park boat safari', 'Zanzibar safari package',
  ],
  '4-day-tarangire-ngorongoro-lake-eyasi': [
    'Tarangire Ngorongoro safari 4 days', 'Lake Eyasi Hadzabe experience', 'Tanzania cultural safari',
    'Ngorongoro Crater day trip', 'Tarangire elephant safari', 'Tanzania 4 day safari package',
    'Hadzabe hunter gatherer visit', 'Ngorongoro Tarangire wildlife', 'short Tanzania safari',
  ],
  '5-day-kenya-safari': [
    "Kenya safari 5 days", "Hell's Gate National Park cycling", 'Lake Nakuru flamingo safari',
    'Masai Mara Great Migration', 'Kenya safari package 2026', 'Lake Naivasha safari',
    "Hell's Gate bike safari Kenya", 'Kenya safari cost', 'best Kenya safari 5 days',
  ],
}

const DEFAULT_SAFARI_KEYWORDS = [
  'Tanzania safari', 'East Africa safari', 'Africa wildlife safari', 'book Tanzania safari',
  'Tanzania safari package', 'Tanzania tour operator', 'Africa safari holiday',
  'Tanzania wildlife tour', 'safari Tanzania 2026', 'Africa safari vacation',
]

const SAFARI_BLOG_MAP: Record<string, string> = {
  '7-day-serengeti-ngorongoro':          'best-time-to-visit-serengeti',
  '10-day-northern-circuit':             'great-migration-guide',
  '10-day-safari-zanzibar':              'zanzibar-travel-guide',
  '5-day-serengeti-fly-in':              'best-time-to-visit-serengeti',
  '5-days-highlights-safari':            'great-migration-guide',
  '7-days-crown-jewels':                 'zanzibar-travel-guide',
  '7-days-migration-southern':           'great-migration-guide',
  '7-day-southern-circuit':              'big-five-africa-tanzania',
  '8-days-honeymoon-safari':             'safari-honeymoon-tanzania',
  '10-days-luxury-family':               'family-safari-africa',
  '12-days-wild-wilderness':             'big-five-africa-tanzania',
  '12-days-tanzania-kenya':              'tanzania-vs-kenya-safari',
  '11-days-kenya-undisputed':            'serengeti-vs-masai-mara',
  '12-days-rwanda-primates':             'gorilla-trekking-rwanda',
  '11-days-rwanda-tanzania':             'gorilla-trekking-rwanda',
  '12-days-rwanda-tanzania-zanzibar':    'gorilla-trekking-rwanda',
  'kilimanjaro-machame-7day':            'kilimanjaro-climbing-guide',
  '7-days-gems-of-north':               'ngorongoro-crater-guide',
  '7-days-flight-ndutu':                'great-migration-guide',
  '8-days-flight-migration':             'great-migration-guide',
  '10-days-southern-secrets':            'big-five-africa-tanzania',
  '11-days-southern-spice':              'zanzibar-travel-guide',
  '5-day-comfort-tanzania-safari':       'tanzania-safari-cost',
  '6-day-comfort-tanzania-safari':       'tanzania-safari-cost',
  'kenya-tanzania-highlights-safari':    'tanzania-vs-kenya-safari',
  '10-day-kenya-tanzania-safari':        'serengeti-vs-masai-mara',
  '5-day-kenya-safari':                  'serengeti-vs-masai-mara',
  '2-day-selous-safari-from-zanzibar':   'zanzibar-travel-guide',
  '4-day-tarangire-ngorongoro-lake-eyasi': 'ngorongoro-crater-guide',
}
const DEFAULT_BLOG_SLUG = 'tanzania-safari-cost'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    packages.map((p) => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const pkg = getPackage(slug, locale)
  if (!pkg) return {}
  const title = pkg.metaTitle ?? `${pkg.name} | Tanzania Safari`
  const description = pkg.metaDescription ?? `${pkg.name} — ${pkg.duration} nights starting from $${pkg.priceFrom.toLocaleString()}/person. ${pkg.highlights[0]}.`
  return {
    alternates: buildAlternates(locale, `/safaris/${slug}`),
    title,
    description,
    keywords: SAFARI_KEYWORDS[slug] ?? DEFAULT_SAFARI_KEYWORDS,
    openGraph: {
      title: pkg.metaTitle ?? pkg.name,
      description,
      images: [{ url: pkg.heroImage, width: 1200, height: 630, alt: pkg.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pkg.metaTitle ?? pkg.name,
      images: [pkg.heroImage],
    },
  }
}

export default async function SafariPackagePage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const pkg = getPackage(slug, locale)
  if (!pkg) notFound()

  const t = await getTranslations('safari')
  const tc = await getTranslations('common')

  const featuredPost = getBlogPostMeta(
    SAFARI_BLOG_MAP[pkg.slug] ?? DEFAULT_BLOG_SLUG,
    locale
  )

  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'Trip',
    name: pkg.name,
    description: pkg.metaDescription ?? `${pkg.name} — ${pkg.duration} nights, starting from $${pkg.priceFrom.toLocaleString()} per person. ${pkg.highlights[0]}.`,
    image: `${SITE_URL}${pkg.heroImage}`,
    provider: {
      '@type': 'Organization',
      name: 'EWA Safari Outfitters',
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      price: pkg.priceFrom,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: localeUrl(locale, `/safaris/${pkg.slug}`),
    },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: pkg.duration,
    },
  }

  const faqSchema = pkg.faq && pkg.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pkg.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* Hero */}
      <section className="relative h-[55vh] min-h-80 bg-brand flex items-end">
        <Image src={pkg.heroImage} alt={pkg.name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <Breadcrumb items={[
            { label: 'EWA Safari Outfitters', href: `/${locale}` },
            { label: 'Safari Packages', href: `/${locale}/safaris` },
            { label: pkg.name },
          ]} />
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              {pkg.badge && (
                <div className="mb-2">
                  <Badge label={pkg.badge === 'bestseller' ? tc('bestseller') : pkg.badge === 'new' ? tc('new') : tc('popular')} />
                </div>
              )}
              <h1 className="text-3xl lg:text-4xl font-semibold text-white">{pkg.name}</h1>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center border border-white/20">
              <div className="text-white/70 text-xs uppercase tracking-wide">{tc('from')}</div>
              <div className="text-white font-bold text-2xl">${pkg.priceFrom.toLocaleString()}</div>
              <div className="text-white/60 text-xs">{tc('perPerson')}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            {pkg.overview && pkg.overview.length > 0 && (
              <div className="space-y-3">
                {pkg.overview.map((para, i) => (
                  <p key={i} className="text-sm text-text-muted leading-relaxed">{para}</p>
                ))}
              </div>
            )}

            {/* Quick info */}
            <div className="flex flex-wrap gap-5 text-sm">
              <div className="flex items-center gap-2 text-text-muted">
                <Clock className="w-4 h-4 text-gold" />
                <span><strong className="text-brand">{pkg.duration} {tc('nights')}</strong> {t('duration')}</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Users className="w-4 h-4 text-gold" />
                <span>{t('groupsOf')} <strong className="text-brand">{pkg.groupSize.min}–{pkg.groupSize.max}</strong></span>
              </div>
              {pkg.bestTimeToTravel && (
                <div className="flex items-center gap-2 text-text-muted">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span><strong className="text-brand">{t('bestTimeToTravel')}:</strong> {pkg.bestTimeToTravel}</span>
                </div>
              )}
              {pkg.tagline && (
                <div className="flex items-center gap-2 text-text-muted">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>{pkg.tagline}</span>
                </div>
              )}
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-semibold text-brand mb-4">{t('packageHighlights')}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
                    <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why This Itinerary Is Different */}
            {pkg.whyDifferent && (
              <div>
                <h2 className="text-xl font-semibold text-brand mb-4">{pkg.whyDifferent.heading}</h2>
                <div className="space-y-3">
                  {pkg.whyDifferent.paragraphs.map((para, i) => (
                    <p key={i} className="text-sm text-text-muted leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Destination / Photography Highlights */}
            {pkg.destinationHighlights && pkg.destinationHighlights.items.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-brand mb-4">{pkg.destinationHighlights.heading}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.destinationHighlights.items.map((item) => (
                    <div key={item.title} className="bg-light-green rounded-xl p-4">
                      <p className="font-semibold text-brand text-sm mb-1.5">{item.title}</p>
                      <p className="text-sm text-text-muted leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary */}
            {pkg.itinerary.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-brand mb-5">{t('dayByDayItinerary')}</h2>

                {pkg.itinerary.some((d) => d.location) && (
                  <div className="mb-6">
                    <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-2">{t('itineraryAtAGlance')}</p>
                    <div className="overflow-x-auto rounded-xl border border-gray-100">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-light-green text-left text-text-muted text-xs uppercase tracking-wide">
                            <th className="px-4 py-2.5 font-semibold">{t('day')}</th>
                            <th className="px-4 py-2.5 font-semibold">{t('location')}</th>
                            <th className="px-4 py-2.5 font-semibold">{t('focus')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pkg.itinerary.map((day) => (
                            <tr key={day.day} className="border-t border-gray-100">
                              <td className="px-4 py-2.5 text-brand font-semibold whitespace-nowrap">{day.day}</td>
                              <td className="px-4 py-2.5 text-text-muted">{day.location ?? '—'}</td>
                              <td className="px-4 py-2.5 text-text-muted">{day.title}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {pkg.itinerary.map((day) => (
                    <details key={day.day} className="group border border-gray-100 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-light-green transition-colors list-none">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {day.day}
                          </span>
                          <span className="font-medium text-brand text-sm">{day.title}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
                        <p className="text-sm text-text-muted leading-relaxed mb-3">{day.description}</p>

                        {day.insiderFact && (
                          <div className="border-l-2 border-gold pl-3 mb-3">
                            <p className="text-[10px] font-bold uppercase tracking-wide text-gold-label mb-0.5">
                              {t('insiderFact')}
                            </p>
                            <p className="text-xs text-text-muted leading-relaxed">{day.insiderFact}</p>
                          </div>
                        )}

                        {day.accommodationByTier ? (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                            {day.accommodationByTier.trail && (
                              <AmenityStay label={t('tierTrail')} stay={day.accommodationByTier.trail} />
                            )}
                            {day.accommodationByTier.reserve && (
                              <AmenityStay label={t('tierReserve')} stay={day.accommodationByTier.reserve} />
                            )}
                            {day.accommodationByTier.sovereign && (
                              <AmenityStay label={t('tierSovereign')} stay={day.accommodationByTier.sovereign} />
                            )}
                          </div>
                        ) : null}

                        {day.accommodationByFamilyTier ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                            {day.accommodationByFamilyTier.luxury && (
                              <AmenityStay label={t('familyTierLuxury')} stay={day.accommodationByFamilyTier.luxury} />
                            )}
                            {day.accommodationByFamilyTier.ultraLuxury && (
                              <AmenityStay label={t('familyTierUltraLuxury')} stay={day.accommodationByFamilyTier.ultraLuxury} />
                            )}
                          </div>
                        ) : null}

                        <div className="flex flex-wrap gap-4 text-xs text-text-muted">
                          <span>{day.accommodation}</span>
                          <span>{day.meals}</span>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Included / Excluded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> {t('included')}
                </h3>
                {pkg.includedCategorized ? (
                  <div className="space-y-4">
                    {pkg.includedCategorized.transfers && pkg.includedCategorized.transfers.length > 0 && (
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wide text-text-muted mb-1.5">{t('transfers')}</p>
                        <ul className="space-y-1.5">
                          {pkg.includedCategorized.transfers.map((item) => (
                            <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {pkg.includedCategorized.accommodationMeals && pkg.includedCategorized.accommodationMeals.length > 0 && (
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wide text-text-muted mb-1.5">{t('accommodationMeals')}</p>
                        <ul className="space-y-1.5">
                          {pkg.includedCategorized.accommodationMeals.map((item) => (
                            <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {pkg.includedCategorized.guidingGameDrives && pkg.includedCategorized.guidingGameDrives.length > 0 && (
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wide text-text-muted mb-1.5">{t('guidingGameDrives')}</p>
                        <ul className="space-y-1.5">
                          {pkg.includedCategorized.guidingGameDrives.map((item) => (
                            <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <ul className="space-y-1.5">
                    {pkg.included.map((item) => (
                      <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> {t('notIncluded')}
                </h3>
                <ul className="space-y-1.5">
                  {(pkg.excludedCategorized ?? pkg.excluded).map((item) => (
                    <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {pkg.notes && pkg.notes.length > 0 && (
              <div className="bg-light-green rounded-xl p-5">
                <h3 className="font-semibold text-brand text-sm mb-2">{t('pleaseNote')}</h3>
                <ul className="space-y-1">
                  {pkg.notes.map((note) => (
                    <li key={note} className="text-xs text-text-muted leading-relaxed">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQ */}
            {pkg.faq && pkg.faq.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-brand mb-5">{t('faq')}</h2>
                <div className="space-y-3">
                  {pkg.faq.map((item, i) => (
                    <details key={i} className="group border border-gray-100 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-light-green transition-colors list-none">
                        <span className="font-medium text-brand text-sm pr-4">{item.q}</span>
                        <ChevronDown className="w-4 h-4 text-text-muted flex-shrink-0 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
                        <p className="text-sm text-text-muted leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 space-y-4">
              {pkg.familyPricing && pkg.familyPricing.length > 0 ? (
                <FamilyPriceSwitcher rows={pkg.familyPricing} />
              ) : pkg.pricingTiers && pkg.pricingTiers.length > 0 ? (
                <PriceTierSwitcher rows={pkg.pricingTiers} provisional={pkg.pricingTiersProvisional} />
              ) : (
                <div className="bg-light-green rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-brand">${pkg.priceFrom.toLocaleString()}</div>
                  <div className="text-text-muted text-xs mt-1">{tc('perPerson')} · {pkg.duration} {tc('nights')}</div>
                </div>
              )}
              <div className="bg-brand rounded-2xl p-6 text-center space-y-4">
                <div>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">{t('freeNoCommitment')}</p>
                  <h3 className="text-white font-bold text-lg">{t('bookThisPackage')}</h3>
                  <p className="text-white/60 text-xs mt-1">{t('responseNote')}</p>
                </div>
                <BookNowButton
                  label={t('sendEnquiry')}
                  packageName={pkg.name}
                  packageType={pkg.type}
                  priceFrom={`$${pkg.priceFrom.toLocaleString()}`}
                  duration={`${pkg.duration} ${tc('nights')}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                />
                <p className="text-white/60 text-xs">{t('noPayment')}</p>
              </div>

              {/* Featured blog post */}
              {featuredPost && (
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">
                    {t('featuredGuide')}
                  </p>
                  <BlogSuggestionCard
                    slug={featuredPost.slug}
                    title={featuredPost.title}
                    excerpt={featuredPost.excerpt}
                    category={featuredPost.category}
                    image={featuredPost.heroImage}
                    readTime={featuredPost.readTime}
                    readLabel={tc('readMore')}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <RelatedSafaris current={pkg} all={getPackages(locale)} />
      <TrustBar />
    </>
  )
}
