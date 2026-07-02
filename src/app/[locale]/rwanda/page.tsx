import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, MapPin, Clock, Users, Star, Mountain, CheckCircle2, Car, Headphones, Shield, Compass, Trophy } from 'lucide-react'
import BookNowButton from '@/components/booking/BookNowButton'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Rwanda Gorilla Trekking 2026 | Volcanoes National Park Permits & Safaris',
  description:
    "Book gorilla trekking in Rwanda with certified guides. Volcanoes National Park gorilla permits, mountain gorilla tracking, chimpanzee trekking Nyungwe, Big Five Akagera. 2026 packages.",
  keywords: [
    'gorilla trekking Rwanda',
    'Rwanda gorilla permit',
    'Volcanoes National Park gorilla trekking',
    'mountain gorilla Rwanda 2026',
    'book gorilla permit Rwanda',
    'Rwanda safari packages',
    'chimpanzee trekking Nyungwe',
    'Rwanda gorilla tour operator',
    'gorilla trekking cost Rwanda',
    'East Africa gorilla safari',
  ],
}

const destinations = [
  {
    id: 'volcanoes',
    name: 'Volcanoes National Park',
    tagline: 'Home of the Mountain Gorilla',
    size: '160 km2 · 4,507 m elevation',
    image: '/images/gallery/volcanoes.webp',
    badge: 'Top Experience',
    badgeColor: 'bg-gold text-brand',
    highlights: [
      "Half the world's mountain gorillas live here",
      'Five dormant Virunga volcanoes to explore',
      'Karisimbi — highest peak at 4,507 m',
      'Rare golden monkeys in bamboo forest',
      'Dian Fossey gorilla research legacy',
      '90-minute gorilla tracking encounters',
    ],
    wildlife: ['Mountain Gorilla', 'Golden Monkey', 'Buffalo', 'Forest Elephant', 'Bushbuck', 'Leopard', 'Serval', 'Olive Baboon'],
    bestTime: 'Jun – Sep & Dec – Feb',
    duration: '1–3 days',
    overview:
      "Volcanoes National Park is one of the most extraordinary wildlife destinations on Earth and the centrepiece of any Rwanda itinerary. Situated within the Virunga massif at elevations reaching 15,000 feet, the park shelters roughly half of the world's remaining mountain gorilla population — a critically endangered species numbering fewer than 1,000 individuals. Gorilla tracking involves a guided forest trek of around 90 minutes through lush bamboo and rainforest before spending a magical hour with a habituated gorilla family. The park also protects the playful golden monkey, and its five dormant volcanoes — Karisimbi, Bisoke, Sabinyo, Gahinga, and Muhabura — offer spectacular high-altitude hiking. The late primatologist Dian Fossey conducted her famous gorilla research here, and her story adds a powerful conservation dimension to every visit.",
    activities: ['Gorilla tracking', 'Golden monkey trekking', 'Volcano hiking', 'Musanze cave exploration', 'Crater lake hike', "Iby'Iwacu cultural village"],
    priceFrom: '$1,500',
  },
  {
    id: 'nyungwe',
    name: 'Nyungwe National Park',
    tagline: "Africa's Most Diverse Primate Destination",
    size: '1,020 km2 · Ancient Rainforest',
    image: '/images/gallery/nyungwe.webp',
    badge: 'Primate Paradise',
    badgeColor: 'bg-brand text-white',
    highlights: [
      '12 primate species including chimpanzees',
      'Only canopy walkway in East Africa (60 m high)',
      '1,068 plant species & 140 orchid varieties',
      '322 bird species including Albertine endemics',
      '15 hiking trails through ancient forest',
      '400 habituated Ruwenzori colobus monkeys',
    ],
    wildlife: ['Chimpanzee', 'Ruwenzori Colobus', "L'Hoest's Monkey", 'Owl-Faced Monkey', 'Leopard', 'Serval', 'Clawless Otter', 'Mongoose'],
    bestTime: 'Jun – Sep & Dec – Feb',
    duration: '2–3 days',
    overview:
      "Nyungwe National Park is a phenomenon of nature — one of Africa's oldest and most biodiverse rainforests, draped across Rwanda's southwestern highlands. The park harbours 12 primate species, making it the most diverse primate destination on the continent. Chimpanzee trekking is the headline experience, but Nyungwe's signature attraction is its breathtaking canopy walkway — the only one in East Africa — suspended 60 metres above the forest floor. With 1,068 plant species, 140 orchid varieties, 322 bird species, and 15 marked hiking trails, Nyungwe rewards slow, thoughtful exploration. The park is also home to the owl-faced monkey, endemic to the Albertine Rift and found almost nowhere else.",
    activities: ['Chimpanzee trekking', 'Canopy walkway', 'Colobus monkey tracking', 'Bird watching', 'Lusomo Waterfall hike', 'Forest trail hiking'],
    priceFrom: '$200',
  },
  {
    id: 'akagera',
    name: 'Akagera National Park',
    tagline: "Rwanda's Big Five Savannah Safari",
    size: '1,122 km2 · Savannah & Wetlands',
    image: '/images/gallery/akagera.webp',
    badge: 'Big Five',
    badgeColor: 'bg-brand-secondary text-white',
    highlights: [
      'All Big Five including reintroduced lions',
      '18 black rhinos — restored from local extinction',
      "Africa's largest wetland national park",
      '500+ bird species including shoebill stork',
      'Lake Ihema boat safaris with hippo & crocodile',
      'Giraffe, elephant, zebra & topi on open plains',
    ],
    wildlife: ['Lion', 'Black Rhino', 'Elephant', 'Giraffe', 'Hippo', 'Crocodile', 'Shoebill Stork', 'Sitatunga'],
    bestTime: 'Jun – Sep & Dec – Feb',
    duration: '2–3 days',
    overview:
      "Akagera National Park in northeastern Rwanda is a triumph of conservation — a park that was once devastated by conflict and poaching, now fully restored to its former glory. The park spans 1,122 km2 of savannah, acacia woodland, papyrus swamps, rolling highlands, and a necklace of beautiful lakes, making it the largest wetland park on the continent. Akagera achieved a historic milestone in 2015 and 2017 when lions and black rhinos were reintroduced after decades of local extinction, completing the Big Five once more. Lake Ihema offers exceptional boat safaris where hippos, crocodiles, and over 500 bird species can be observed at close quarters, including the prehistoric-looking shoebill stork.",
    activities: ['Game drives', 'Boat safari on Lake Ihema', 'Rhino tracking', 'Bird watching', 'Night game drives', 'Self-drive safari'],
    priceFrom: '$180',
  },
  {
    id: 'lake-kivu',
    name: 'Lake Kivu',
    tagline: "Rwanda's Serene Inland Sea",
    size: '2,700 km2 · 485 m deep',
    image: '/images/gallery/safari-123.webp',
    badge: 'Scenic Escape',
    badgeColor: 'bg-gold text-brand',
    highlights: [
      "Africa's sixth largest lake by area",
      'Safe for swimming — no hippos or crocodiles',
      '220 km Congo Nile Trail along the shore',
      'Dramatic sunrise & sunset over the water',
      'Rubavu — charming colonial lakeside town',
      'Mountain biking, kayaking & boat rides',
    ],
    wildlife: ['Pelican', 'Crowned Crane', 'Kingfisher', 'Fish Eagle', 'Cormorant', 'Otter', 'Various waterbirds'],
    bestTime: 'Jun – Sep & Dec – Feb',
    duration: '2–4 days',
    overview:
      "Lake Kivu is one of Africa's Great Rift Valley lakes — and one of the most beautiful. Spanning 2,700 square kilometres along Rwanda's western border with the Democratic Republic of Congo, the lake sits at altitude in a landscape of rolling green hills tumbling dramatically into shimmering water. Unlike most East African rift lakes, Kivu is completely safe for swimming with no hippos or crocodiles. The lakeside town of Rubavu retains charming colonial architecture and offers some of Rwanda's finest restaurants and sundowner bars with panoramic lake views. The 220-kilometre Congo Nile Trail follows the shoreline south to Rusizi, offering world-class cycling and trekking through terraced hills and fishing villages.",
    activities: ['Boat tours', 'Kayaking & paddleboarding', 'Congo Nile Trail cycling', 'Swimming', 'Bird watching', 'Fishing'],
    priceFrom: '$120',
  },
  {
    id: 'kigali',
    name: 'Kigali',
    tagline: "Africa's Cleanest, Greenest Capital City",
    size: "Rwanda's Capital · Pop. 1.5 million",
    image: '/images/gallery/kigali-city.webp',
    badge: 'Cultural Hub',
    badgeColor: 'bg-brand text-white',
    highlights: [
      "Voted Africa's cleanest city multiple years",
      'Kigali Genocide Memorial — sobering & essential',
      'Vibrant arts scene & Kigali Cultural Village',
      'World-class restaurants with panoramic hill views',
      'Modern convention centres & boutique hotels',
      "Gateway to all Rwanda's safari destinations",
    ],
    wildlife: ['Nearby Gishwati-Mukura Forest', 'Urban birdlife', 'Short drive to gorilla country'],
    bestTime: 'Year-round',
    duration: '1–2 days',
    overview:
      "Kigali is one of Africa's great surprises — a spotlessly clean, green, and vibrant capital that defies every preconception about African cities. Surrounded by hills and mountains, the city's dramatic topography makes it one of the most photogenic capitals on the continent. Rwanda's extraordinary recovery after 1994 makes Kigali a city of profound emotional resonance: the Kigali Genocide Memorial is essential and moving. But the city also throbs with creative energy — a radiant arts scene, locally owned boutique hotels, rooftop restaurants serving Rwandan and international cuisine with panoramic hill views, and a modern spirit that has made it a hub for tech startups and pan-African business.",
    activities: ['Genocide Memorial visit', 'Kigali Cultural Village', 'Art gallery tours', 'Cooking classes', 'City walking tour', 'Craft market shopping'],
    priceFrom: '$80',
  },
]

const whyRwanda = [
  { icon: '🦍', stat: '~1,000', label: 'Mountain Gorillas on Earth' },
  { icon: '🐒', stat: '12', label: 'Primate Species in Nyungwe' },
  { icon: '🐦', stat: '700+', label: 'Bird Species Recorded' },
  { icon: '🌿', stat: '1,068', label: 'Plant Species in Nyungwe' },
  { icon: '🏔️', stat: '4,507 m', label: "Mt Karisimbi Summit" },
  { icon: '🌍', stat: '#1', label: "Africa's Cleanest Capital" },
]

const permitFacts = [
  { label: 'Permit Cost', value: '$1,500 USD per person' },
  { label: 'Groups Limited To', value: '8 people per family' },
  { label: 'Time With Gorillas', value: '1 hour maximum' },
  { label: 'Families Available', value: '12 habituated families' },
  { label: 'Minimum Age', value: '15 years old' },
  { label: 'Trek Duration', value: '30 min – 6 hours' },
]

const seasons = [
  {
    months: 'Jun – Sep',
    label: 'Long Dry Season',
    color: 'bg-amber-50 border-amber-200',
    labelColor: 'text-amber-700',
    tip: 'Best gorilla tracking — dry trails, less rain in forests. Peak season: book permits 6+ months ahead.',
  },
  {
    months: 'Oct – Nov',
    label: 'Short Rains',
    color: 'bg-blue-50 border-blue-200',
    labelColor: 'text-blue-700',
    tip: 'Lush green landscapes. Gorilla tracking still possible. Good birding. Fewer tourists.',
  },
  {
    months: 'Dec – Feb',
    label: 'Short Dry Season',
    color: 'bg-green-50 border-green-200',
    labelColor: 'text-brand',
    tip: 'Excellent second-best season. Comfortable temperatures. Great for all Rwanda activities.',
  },
  {
    months: 'Mar – May',
    label: 'Long Rains',
    color: 'bg-sky-50 border-sky-200',
    labelColor: 'text-sky-700',
    tip: 'Heaviest rainfall. Trails can be muddy. Lower permit demand — better availability. Lush scenery.',
  },
]

export default async function RwandaPage() {
  const t = await getTranslations('rwanda')
  const tc = await getTranslations('common')
  const statLabels = [t('statGorillas'), t('statPrimates'), t('statBirds'), t('statPlants'), t('statPeak'), t('statCapital')]
  const seasonLabels = [t('season1Label'), t('season2Label'), t('season3Label'), t('season4Label')]
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/gorilla.webp"
            alt="Volcanic mountain peaks with lush green heathland — Rwanda Virunga massif"
            fill
            className="object-cover object-bottom"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-gold-label font-semibold text-xs uppercase tracking-widest mb-4">{t('heroEyebrow')}</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t('heroTitle')}<br />
              <span className="text-gold">{t('heroTitleGold')}</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
              Meet the mountain gorillas. Trek ancient rainforests with chimpanzees. Safari the savannahs.
              Rwanda is small in size but extraordinary in depth &mdash; one of Africa&apos;s most intimate
              and transformative destinations.
            </p>
            <div className="flex flex-wrap gap-3">
              <BookNowButton
                packageName="Rwanda Gorilla Safari"
                packageType="Rwanda Safari"
                label={t('planMyRwandaSafari')}
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

      <section className="bg-brand py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {whyRwanda.map((item, i) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <span className="text-gold font-bold text-xl">{item.stat}</span>
                <span className="text-white/60 text-xs leading-tight">{statLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Rwanda has undergone one of the most extraordinary transformations in modern history &mdash; from tragedy
              to triumph, it is today one of Africa&apos;s safest, cleanest, and most forward-thinking nations. For
              wildlife lovers, Rwanda offers something no other country can match: the intimate experience of sitting
              with a family of mountain gorillas in ancient volcanic forest. Combined with chimpanzee trekking, Big
              Five safaris, pristine lakes, and the remarkable warmth of the Rwandan people, it is a destination that
              leaves every visitor changed.
            </p>
          </div>
        </div>
      </section>

      {/* 2×2 Overview Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Box 1 — Rwanda Destinations */}
            <div className="bg-brand rounded-3xl p-8 flex flex-col">
              <p className="text-gold-label text-xs font-bold uppercase tracking-widest mb-2">{t('box1Eyebrow')}</p>
              <h3 className="text-2xl font-bold text-white mb-6">{t('box1Heading')}</h3>
              <div className="space-y-3 flex-1">
                {[
                  { icon: '🦍', label: 'Volcanoes National Park', desc: 'Mountain Gorillas · Virunga Volcanoes' },
                  { icon: '🐒', label: 'Nyungwe Forest', desc: 'Chimpanzees · Only Canopy Walkway in E. Africa' },
                  { icon: '🦁', label: 'Akagera National Park', desc: 'Big Five · Lake Ihema Boat Safaris' },
                  { icon: '🌊', label: 'Lake Kivu', desc: 'Scenic Inland Sea · Congo Nile Trail' },
                  { icon: '🏙️', label: 'Kigali', desc: "Africa's Cleanest Capital · Cultural Hub" },
                ].map((d) => (
                  <a
                    key={d.label}
                    href="#destinations"
                    className="flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 hover:border-gold/50 hover:bg-white/5 transition-all group"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm">{d.label}</p>
                      <p className="text-white/70 text-xs mt-0.5 truncate">{d.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-white/70 text-xs">{t('gorillaPermitNotice')}</p>
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

            {/* Box 3 — Rwanda in Numbers */}
            <div className="bg-light-green rounded-3xl p-8 border border-brand/10 flex flex-col">
              <p className="text-gold-label text-xs font-bold uppercase tracking-widest mb-2">{t('box3Eyebrow')}</p>
              <h3 className="text-2xl font-bold text-brand mb-6">{t('box3Heading')}</h3>
              <div className="grid grid-cols-2 gap-5 flex-1">
                {[
                  { stat: '~1,000', label: 'Mountain gorillas on Earth', sub: 'Only great ape population growing' },
                  { stat: '12', label: 'Primate species in Nyungwe', sub: "Africa's most diverse primate forest" },
                  { stat: '$1,500', label: 'Gorilla permit cost', sub: 'Funds conservation & communities' },
                  { stat: '4,507m', label: 'Mt Karisimbi summit', sub: 'Highest Virunga volcano' },
                  { stat: '700+', label: 'Bird species recorded', sub: '29 Albertine Rift endemics' },
                  { stat: '1 hour', label: 'With a gorilla family', sub: 'Most intimate wildlife encounter on Earth' },
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
                  { step: '04', title: tc('step4Title'), desc: tc('step4DescRwanda') },
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
                  packageName="Rwanda Gorilla Safari"
                  packageType="Rwanda Safari"
                  label={t('startPlanningFree')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
                  arrow
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-light-green py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">
                  {t('permitHeading')}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Rwanda issues just 96 gorilla permits per day (8 per habituated family, 12 families). Permits are
                  in high demand year-round and sell out months ahead for peak season. We handle all permit bookings
                  as part of your itinerary &mdash; contact us early for the best availability.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {permitFacts.map((f) => (
                    <div key={f.label} className="bg-white/10 rounded-xl p-3">
                      <p className="text-white/60 text-xs mb-0.5">{f.label}</p>
                      <p className="text-gold font-bold text-sm">{f.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <BookNowButton
                packageName="Rwanda Gorilla Trek"
                packageType="Rwanda Gorilla Safari"
                priceFrom="$1,500"
                label={t('secureMyPermit')}
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors whitespace-nowrap"
                arrow
              />
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-20 scroll-mt-20">
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
            {destinations.map((dest, i) => (
              <div
                key={dest.id}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100`}
              >
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
                      packageType="Rwanda Safari"
                      priceFrom={dest.priceFrom}
                      duration={dest.duration}
                      label={`Book ${dest.name.split(' ')[0]} Trip`}
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

      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
              {t('seasonEyebrow')}
            </span>
            <h2 className="text-3xl font-semibold text-brand mb-3">{t('seasonHeading')}</h2>
            <p className="text-text-muted max-w-lg mx-auto text-sm">
              Rwanda is a year-round destination. Gorilla trekking is possible every day, but dry seasons bring
              easier trails and more comfortable conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seasons.map((s, i) => (
              <div key={s.months} className={`rounded-2xl border p-5 ${s.color}`}>
                <p className="font-bold text-brand text-base mb-1">{s.months}</p>
                <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${s.labelColor}`}>{seasonLabels[i]}</p>
                <p className="text-xs text-text-muted leading-relaxed">{s.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
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
                Rwanda&apos;s gorillas and Tanzania&apos;s Serengeti plains are the two most iconic wildlife
                experiences in Africa. Combining them in a single itinerary gives you the complete East African
                picture &mdash; ancient rainforests, volcanic mountains, sweeping savannahs, and the world&apos;s
                greatest wildlife spectacle.
              </p>
              <div className="space-y-2.5 mb-7">
                {[
                  'Start with gorilla trekking in Volcanoes NP',
                  'Fly or drive to Akagera for a classic Big Five safari',
                  'Connect to Tanzania for the Serengeti Migration',
                  'Finish on Zanzibar or Ngorongoro Crater',
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2 text-sm text-brand">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    {p}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <BookNowButton
                  packageName="Rwanda & Tanzania Safari"
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
                src="/Maps/Rwanda%20major%20destinations%20travel%20map.png"
                alt="Rwanda major destinations map"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="bg-brand/80 backdrop-blur-sm text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-gold" />
                  Rwanda &mdash; Major Destinations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mountain className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
            {t('conservationHeading')}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed mb-6">
            Rwanda&apos;s gorilla permit fees directly fund conservation programmes and benefit local communities.
            Since tourism resumed, mountain gorilla numbers have grown from around 620 in 2008 to nearly 1,000
            today &mdash; the only great ape population that is increasing. Every visitor plays a real role in
            keeping these animals alive.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Mountain Gorilla Protection',
              'Anti-Poaching Patrols',
              'Community Revenue Sharing',
              'Habitat Restoration',
              'Veterinary Care Programmes',
              'Research & Monitoring',
            ].map((b) => (
              <span key={b} className="text-xs text-white/70 border border-white/20 px-3 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "url('/images/gallery/rwanda.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="relative z-10">
              <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
                {t('ctaEyebrow')}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('ctaHeading')}
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
                Gorilla permits are the most sought-after wildlife permits in Africa. Reach out now and our team
                will secure your dates, design your itinerary, and handle every detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookNowButton
                  packageName="Rwanda Gorilla Safari"
                  packageType="Rwanda Safari"
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
                Solo travellers &middot; Couples &middot; Families &middot; Private groups &mdash; all welcome
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
