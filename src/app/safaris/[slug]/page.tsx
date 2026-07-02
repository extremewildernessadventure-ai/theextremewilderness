import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, Check, X, ChevronDown } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import BookNowButton from '@/components/booking/BookNowButton'
import { packages } from '@/data/packages'


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
}

const DEFAULT_SAFARI_KEYWORDS = [
  'Tanzania safari', 'East Africa safari', 'Africa wildlife safari', 'book Tanzania safari',
  'Tanzania safari package', 'Tanzania tour operator', 'Africa safari holiday',
  'Tanzania wildlife tour', 'safari Tanzania 2026', 'Africa safari vacation',
]

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pkg = packages.find((p) => p.slug === slug)
  if (!pkg) return {}
  return {
    title: `${pkg.name} | Tanzania Safari`,
    description: `${pkg.name} — ${pkg.duration} nights starting from $${pkg.priceFrom.toLocaleString()}/person. ${pkg.highlights[0]}.`,
    keywords: SAFARI_KEYWORDS[slug] ?? DEFAULT_SAFARI_KEYWORDS,
  }
}

export default async function SafariPackagePage({ params }: Props) {
  const { slug } = await params
  const pkg = packages.find((p) => p.slug === slug)
  if (!pkg) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-80 bg-brand flex items-end">
        <Image src={pkg.heroImage} alt={pkg.name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">

          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              {pkg.badge && (
                <div className="mb-2">
                  <Badge label={pkg.badge === 'bestseller' ? 'Bestseller' : pkg.badge === 'new' ? 'New' : 'Popular'} />
                </div>
              )}
              <h1 className="text-3xl lg:text-4xl font-semibold text-white">{pkg.name}</h1>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center border border-white/20">
              <div className="text-white/70 text-xs uppercase tracking-wide">From</div>
              <div className="text-white font-bold text-2xl">${pkg.priceFrom.toLocaleString()}</div>
              <div className="text-white/60 text-xs">per person</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Quick info */}
            <div className="flex flex-wrap gap-5 text-sm">
              <div className="flex items-center gap-2 text-text-muted">
                <Clock className="w-4 h-4 text-gold" />
                <span><strong className="text-brand">{pkg.duration} nights</strong> duration</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Users className="w-4 h-4 text-gold" />
                <span>Groups of <strong className="text-brand">{pkg.groupSize.min}–{pkg.groupSize.max}</strong></span>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-semibold text-brand mb-4">Package Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
                    <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            {pkg.itinerary.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-brand mb-5">Day-by-Day Itinerary</h2>
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
                  <Check className="w-4 h-4 text-green-500" /> Included
                </h3>
                <ul className="space-y-1.5">
                  {pkg.included.map((item) => (
                    <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> Not Included
                </h3>
                <ul className="space-y-1.5">
                  {pkg.excluded.map((item) => (
                    <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar — CTA */}
          <div>
            <div className="sticky top-24 space-y-4">
              <div className="bg-light-green rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-brand">${pkg.priceFrom.toLocaleString()}</div>
                <div className="text-text-muted text-xs mt-1">per person · {pkg.duration} nights</div>
              </div>
              <div className="bg-brand rounded-2xl p-6 text-center space-y-4">
                <div>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">Free & No Commitment</p>
                  <h3 className="text-white font-bold text-lg">Book This Package</h3>
                  <p className="text-white/60 text-xs mt-1">We respond within 2 hours with a personalised itinerary</p>
                </div>
                <BookNowButton
                  label="Send an Enquiry"
                  packageName={pkg.name}
                  packageType={pkg.type}
                  priceFrom={`$${pkg.priceFrom.toLocaleString()}`}
                  duration={`${pkg.duration} nights`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                />
                <p className="text-white/60 text-xs">No payment required · Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
