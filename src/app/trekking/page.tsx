import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import KiliRouteMap from '@/components/trekking/KiliRouteMap'

export const metadata: Metadata = {
  title: 'Kilimanjaro Trekking & Mountain Climbing Tanzania',
  description:
    "Climb Africa's highest peak with Tanzania's most experienced local guides. Machame, Lemosho, Marangu and Rongai routes. TANAPA certified, full safety backup.",
}

const routes = [
  {
    name: 'Machame Route',
    nickname: 'The Whiskey Route',
    days: '6–7 days',
    difficulty: 'Hard',
    successRate: '85%',
    priceFrom: 1658,
    desc: 'The most scenic and popular route, nicknamed the "Whiskey Route" for its challenging terrain. Excellent acclimatisation profile with a high-camp, low-sleep approach.',
    href: '/trekking/machame',
    image: '/images/gallery/kilimanjaro.png',
    badge: 'Most Popular',
  },
  {
    name: 'Lemosho Route',
    nickname: 'The Scenic Route',
    days: '7–8 days',
    difficulty: 'Moderate',
    successRate: '90%',
    priceFrom: 1931,
    desc: 'Widely considered the best overall route. Starts remote on the western slope, crosses the Shira Plateau and delivers the highest summit success rate of all standard routes.',
    href: '/trekking/lemosho',
    image: '/images/gallery/kilimanjaro%20(4).png',
    badge: 'Recommended',
  },
  {
    name: 'Marangu Route',
    nickname: 'The Coca-Cola Route',
    days: '5–6 days',
    difficulty: 'Moderate',
    successRate: '65%',
    priceFrom: 1523,
    desc: 'The classic route and the only one with hut dormitory accommodation throughout. The most affordable option, though its rapid ascent reduces summit success rates.',
    href: '/trekking/marangu',
    image: '/images/gallery/kilimanjaro%20(1).png',
    badge: null,
  },
  {
    name: 'Rongai Route',
    nickname: 'The Northern Approach',
    days: '6–7 days',
    difficulty: 'Easy–Moderate',
    successRate: '80%',
    priceFrom: 1960,
    desc: 'The only route approaching from the north near the Kenyan border. Quieter, drier, and ideal during the rainy season. A true wilderness feel with gentle gradients.',
    href: '/trekking/rongai',
    image: '/images/gallery/kilimanjaro%20(2).png',
    badge: null,
  },
  {
    name: 'Umbwe Route',
    nickname: 'The Direct Route',
    days: '6–7 days',
    difficulty: 'Very Hard',
    successRate: '70%',
    priceFrom: 1880,
    desc: 'The steepest and most direct route — for experienced trekkers only. Gains elevation rapidly through dense forest and dramatic ridgelines before joining the Southern Circuit.',
    href: '/trekking/umbwe',
    image: '/images/gallery/kilimanjaro%20(3).png',
    badge: 'Advanced',
  },
  {
    name: 'Northern Circuit',
    nickname: 'The Longest Route',
    days: '9–10 days',
    difficulty: 'Moderate',
    successRate: '95%',
    priceFrom: 2237,
    desc: 'The newest and longest route, circumnavigating the entire mountain for a four-sided view. The extra days deliver the best acclimatisation and the highest summit success rate of any route.',
    href: '/trekking/northern-circuit',
    image: '/images/gallery/kilimanjaro%20(5).png',
    badge: 'Best Success Rate',
  },
]

export default function TrekkingPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-0 top-0 w-96 h-96 bg-gold rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Trekking</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-4">
              Summit Africa
            </span>
            <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-5">
              Kilimanjaro<br />
              <span className="text-gold">5,895m</span>
            </h1>
            <p className="text-white/70 text-lg">
              Africa's highest peak. The world's tallest free-standing mountain. Guided by Tanzania-born experts who have stood on the summit hundreds of times.
            </p>
          </div>
        </div>
      </section>

      {/* Why Kilimanjaro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
            {[
              { value: '5,895m', label: 'Summit altitude', sub: 'Uhuru Peak' },
              { value: '7–9 days', label: 'Trek duration', sub: 'Depending on route' },
              { value: '90%+', label: 'Our success rate', sub: 'With proper acclimatization' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="p-6 bg-light-green rounded-2xl">
                <div className="text-3xl font-bold text-brand mb-1">{value}</div>
                <div className="font-medium text-brand text-sm">{label}</div>
                <div className="text-text-muted text-xs">{sub}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-brand mb-8">Choose Your Route</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-0.5 flex flex-col"
              >
                <div className="relative h-44">
                  <Image src={route.image} alt={route.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  {route.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-gold text-brand text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {route.badge}
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="font-semibold text-brand text-lg leading-tight">{route.name}</h3>
                    <p className="text-gold text-xs font-medium mt-0.5">{route.nickname}</p>
                  </div>
                  <p className="text-text-muted text-sm mb-4 leading-relaxed flex-1">{route.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-4">
                    <span>{route.days}</span>
                    <span>{route.difficulty}</span>
                    <span>{route.successRate} success</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-text-muted">From </span>
                      <span className="font-bold text-brand">${route.priceFrom.toLocaleString()}</span>
                      <span className="text-xs text-text-muted">/person</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-gold transition-colors">
                      View route <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <KiliRouteMap />

      {/* CTA */}
      <section className="py-16 bg-brand text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-white mb-4">Ready for the Summit?</h2>
          <p className="text-white/70 mb-8">Tell us your fitness level, dates, and budget — we'll match you with the perfect Kilimanjaro route.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors">
            Plan My Kilimanjaro Trek <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
