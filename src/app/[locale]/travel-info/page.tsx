import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import {
  ChevronRight, ArrowRight, Calendar, Heart, DollarSign,
  Shirt, ShieldCheck, Phone, Syringe, Sun,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tanzania Travel Information | Visas, Health, Currency & Packing | The Extreme Wilderness',
  description:
    'Essential Tanzania travel information — best time to visit, visa requirements, health and vaccinations, currency, dress code, and packing tips for your safari or Kilimanjaro trek.',
}

const sections = [
  {
    id: 'when-to-travel',
    icon: Calendar,
    title: 'When to Travel',
    content: [
      {
        heading: 'Year-Round Destination',
        body: "Tanzania is extraordinary in every month of the year — there is always somewhere remarkable to go and something unmissable to see. That said, the season you visit shapes your experience significantly, so choosing the right time for your priorities matters.",
      },
      {
        heading: 'June to October — Dry Season (Peak)',
        body: "The dry season from June to October is widely considered the best time for wildlife viewing. The vegetation thins, animals concentrate around permanent water sources, and roads are at their most accessible. The Great Migration river crossings in the northern Serengeti peak in July and August. Expect clear skies, comfortable daytime temperatures, and cooler evenings. Book well in advance — this is the most in-demand period.",
      },
      {
        heading: 'November to May — Wet Season (Green Season)',
        body: "The short rains (November) and long rains (March–May) bring lush, dramatically green landscapes and significantly fewer tourists. December to March is particularly rewarding: the calving season in the Ndutu area of the southern Serengeti delivers extraordinary predator-prey drama as 8,000 wildebeest calves are born every day. Accommodation prices are lower, parks are quieter, and birdlife is at its most spectacular. Some camps close in April and May, and roads in the southern parks can become impassable.",
      },
    ],
    table: {
      headers: ['Month', 'Season', 'Highlights'],
      rows: [
        ['Jan–Feb', 'Short dry', 'Calving season, Ndutu; fewer tourists; excellent predator action'],
        ['Mar–May', 'Long rains', 'Lush landscape; green season discounts; some camps closed'],
        ['Jun–Oct', 'Dry season', 'Peak wildlife; Mara River crossings (Jul–Oct); best visibility'],
        ['Nov', 'Short rains', 'Good value; excellent birding; landscape greening'],
        ['Dec', 'Transitional', 'Quiet parks; herds moving south; pleasant weather'],
      ],
    },
  },
  {
    id: 'health',
    icon: Syringe,
    content: [
      {
        heading: 'Vaccinations',
        body: "Under International Health Regulations, travellers arriving from yellow fever endemic countries must present a valid yellow fever vaccination certificate. We advise all clients to consult a travel health clinic or GP at least six to eight weeks before departure. Recommended vaccinations for Tanzania typically include hepatitis A, typhoid, and tetanus. Proof of COVID-19 status requirements should be checked against current government guidance close to your departure date.",
      },
      {
        heading: 'Malaria',
        body: "Tanzania is a malaria zone. Consult your doctor about an appropriate antimalarial medication before you travel — options include Malarone, Doxycycline, and Lariam, each with different profiles and suitability. In addition to medication, bring a DEET-based insect repellent and pack long-sleeved clothing for evenings. Mosquito nets are provided at all lodges and camps we use.",
      },
      {
        heading: 'Health Insurance',
        body: "Comprehensive travel health insurance is mandatory before travelling to Tanzania. We strongly recommend taking out a temporary AMREF Flying Doctor Service membership, which covers emergency medical evacuation from remote areas across East Africa — an important safeguard when you are in the wilderness, hours from the nearest hospital.",
      },
    ],
    title: 'Health & Vaccinations',
  },
  {
    id: 'currency',
    icon: DollarSign,
    title: 'Customs & Currency',
    content: [
      {
        heading: 'Currency',
        body: "Tanzania's official currency is the Tanzanian Shilling (TZS). US Dollars are widely accepted for safari expenses, tips, and major purchases. We recommend bringing a mix of USD cash (in clean, undamaged bills printed after 2009) and a Visa or Mastercard for city use. ATMs are available in Arusha, Dar es Salaam, and Zanzibar.",
      },
      {
        heading: 'Currency Exchange',
        body: "Currency exchange is available at Kilimanjaro and Julius Nyerere international airports, all major commercial banks, and licensed bureau de change offices in Arusha and other towns. Avoid exchanging money with unofficial street dealers.",
      },
      {
        heading: 'Customs',
        body: "Personal items such as cameras, binoculars, and laptops are imported duty-free. Professional or commercial filming equipment, musical instruments, and recording devices may require a customs bond guaranteeing re-export — check with the Tanzania Revenue Authority before travelling if you are bringing extensive gear. Firearms and hunting weapons require a special import permit obtained in advance. Retain receipts for all souvenir and handicraft purchases, and ensure any wildlife trophies are accompanied by proper CITES documentation for presentation at customs on departure.",
      },
    ],
  },
  {
    id: 'dress-code',
    icon: Shirt,
    title: 'What to Pack',
    content: [
      {
        heading: 'Luggage',
        body: "Safari vehicles, light aircraft, and bush camps all impose practical luggage limits. Soft-sided bags are strongly preferred over rigid suitcases — they compress into luggage compartments more easily. For fly-in safaris, most light aircraft operators enforce a 15 kg soft-bag limit per person. Pack efficiently and leave the wheeled suitcase at your Arusha or Nairobi hotel for days spent in the bush.",
      },
      {
        heading: 'Clothing for Safari',
        body: "Neutral, muted colours — khaki, olive, beige, tan, brown — are the safari standard. Bright colours and white attract insects and can startle wildlife; patterns are harder for animals to read than solid neutrals. Natural fibres such as cotton and linen breathe well in the heat. A light fleece or down jacket is essential for cold mornings and evenings, particularly in the Ngorongoro highlands and at altitude on Kilimanjaro. Long sleeves and trousers at dusk reduce mosquito exposure.",
      },
    ],
    list: [
      'Light, neutral-coloured shirts and trousers (cotton or linen)',
      'Fleece or lightweight down jacket for mornings and evenings',
      'Comfortable, broken-in walking shoes or light trail runners',
      'Wide-brimmed hat and UV-blocking sunglasses',
      'High-factor sunscreen (SPF 50+)',
      'DEET insect repellent',
      'Swimsuit — for lodges, beach extensions, and boat safaris',
      'Binoculars (8×42 is ideal for safari)',
      'Small daypack or camera bag',
      'Power bank — electricity in remote camps can be intermittent',
    ],
  },
  {
    id: 'safety',
    icon: ShieldCheck,
    title: 'Safety & Security',
    content: [
      {
        heading: 'General Safety',
        body: "Tanzania is one of the most stable and safe countries in sub-Saharan Africa, with a long record of peaceful tourism. The national parks are accessed in dedicated safari vehicles with certified guides — the risk profile inside the parks is extremely low. As in any country, exercise normal awareness in urban areas, avoid displaying expensive equipment in crowded places, and keep copies of your passport and travel documents.",
      },
      {
        heading: 'Wildlife Precautions',
        body: "Follow your guide's instructions at all times when in or near wildlife areas. Do not exit the vehicle except at designated areas or with a certified armed ranger escort. Never approach wildlife on foot without a guide. At night in camps and lodges, do not walk between tents alone if wildlife may be present — camp staff will escort you.",
      },
    ],
  },
]

const quickFacts = [
  { label: 'Capital', value: 'Dodoma (political); Dar es Salaam (commercial)' },
  { label: 'Language', value: 'Swahili (official) and English widely spoken' },
  { label: 'Time Zone', value: 'EAT — UTC+3 (no daylight saving)' },
  { label: 'Electricity', value: '230V / 50Hz — UK-style 3-pin plugs' },
  { label: 'Visa', value: 'Required for most nationalities — available on arrival or e-visa online ($50 USD)' },
  { label: 'Tipping', value: 'Expected: $10–20/day for guides; $5–10/day for camp staff' },
]

export default function TravelInfoPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative bg-brand py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/gallery/safari-118.jpg')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Before You Go</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Tanzania Travel <span className="text-gold">Information</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            Everything you need to know before your Tanzania safari or Kilimanjaro trek — from the best time to visit and health requirements to packing essentials and currency.
          </p>
        </div>
      </section>

      {/* Quick Facts Band */}
      <section className="bg-brand border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickFacts.map(({ label, value }) => (
              <div key={label} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jump Nav */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <nav className="flex gap-1 py-3 min-w-max">
            {sections.map(({ id, title, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-brand hover:bg-brand/5 transition-colors whitespace-nowrap"
              >
                <Icon className="w-4 h-4" />
                {title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Sections */}
      {sections.map(({ id, icon: Icon, title, content, table, list }, idx) => (
        <section
          key={id}
          id={id}
          className={`py-20 lg:py-28 ${idx % 2 === 0 ? 'bg-white' : 'bg-light-green'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto lg:mx-0">

              {/* Section header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">Travel Info</p>
                  <h2 className="text-3xl font-bold text-brand">{title}</h2>
                </div>
              </div>

              {/* Content blocks */}
              <div className="space-y-8">
                {content.map(({ heading, body }) => (
                  <div key={heading}>
                    <h3 className="text-brand font-semibold text-lg mb-2">{heading}</h3>
                    <p className="text-text-muted leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              {/* Optional table */}
              {table && (
                <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-brand text-white">
                        {table.headers.map((h) => (
                          <th key={h} className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-wide">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-5 py-3 text-text-muted border-t border-gray-100">
                              {j === 0 ? <span className="font-semibold text-brand">{cell}</span> : cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Optional list */}
              {list && (
                <ul className="mt-8 space-y-2">
                  {list.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-text-muted text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Sun + Best Time callout */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center shrink-0">
              <Sun className="w-7 h-7 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Our Advice</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                Not sure which month is right for you?
              </h2>
              <p className="text-white/70 leading-relaxed max-w-2xl">
                The best time to visit Tanzania depends entirely on what you want to see and do. Tell us your priorities — Mara River crossings, calving season, Kilimanjaro weather windows, Zanzibar conditions — and we will recommend the ideal travel window for your specific trip.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors whitespace-nowrap shrink-0"
            >
              Ask Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency contact */}
      <section className="bg-light-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-5">
              <Phone className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-2xl font-bold text-brand mb-3">Have More Questions?</h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              Our team in Arusha is available seven days a week to answer pre-travel questions about health requirements, visa applications, what to pack, and anything else you need to know before your trip.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand/90 text-white font-bold rounded-xl transition-colors"
              >
                <Heart className="w-4 h-4" />
                Contact Us
              </Link>
              <Link
                href="/safaris"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-brand/20 hover:bg-brand/5 text-brand font-semibold rounded-xl transition-colors"
              >
                View Safaris
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
