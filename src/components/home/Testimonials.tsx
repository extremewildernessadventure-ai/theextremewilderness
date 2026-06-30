'use client'

import { useState } from 'react'
import { Star, Users, Globe, Award, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import BookNowButton from '@/components/booking/BookNowButton'

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: 'James Kowalski',
    country: 'United States',
    rating: 5,
    text: "I've done safaris in Kenya and South Africa, but Tanzania with The Extreme Wilderness was on another level. No crowds, no cookie-cutter experiences — pure, authentic wilderness. The balloon over the Serengeti at sunrise was life-changing.",
    trip: '10-Day Northern Circuit',
  },
  {
    name: 'Erick Edwin',
    country: 'United States',
    rating: 5,
    text: "Wow, just wow, what an experience! My girlfriend and I had a 5-day tour of Lake Manyara, Serengeti and Ngorongoro Crater and it was nothing short of spectacular. Our guide George's enthusiasm for Tanzania and the wildlife was so contagious. We saw so many animals and managed to spot the Big 5!! He definitely went above and beyond.",
    trip: 'Lake Manyara, Serengeti & Ngorongoro',
  },
  {
    name: 'Lauren',
    country: 'United States',
    rating: 5,
    text: "Phenomenal! Upon our arrival Mike called us up as soon as we landed. The trip he put together for us was more than we could have expected. From our very first game drive we were blown away by the wildlife we encountered. Mike showed incredible passion, professionalism, and people skills. We would go back in a heartbeat.",
    trip: 'Tanzania Safari',
  },
  {
    name: 'Renard',
    country: 'United States',
    rating: 5,
    text: "Unforgettable! We completed a 5-day tour that was genuinely life-changing. The accommodations, transportation, and game drives were all top-notch. Our guide was extraordinary — deeply passionate about wildlife and conservation, and his knowledge made every drive educational and thrilling. Extreme Wilderness truly delivered beyond our expectations.",
    trip: '5-Day Tanzania Safari',
  },
  {
    name: 'Abimbola',
    country: 'United States',
    rating: 5,
    text: "Professional and easy going — that perfectly sums up Extreme Wilderness. Our guide Mike was very friendly, easy to talk to, and deeply knowledgeable about the wildlife and ecosystems. He made every game drive exciting and informative. The whole team was responsive, efficient, and responsible throughout the entire trip. Cannot recommend them enough.",
    trip: 'Tanzania Safari',
  },
  {
    name: 'Ruaika',
    country: 'Canada',
    rating: 5,
    text: "It was my first time visiting Tanzania and experiencing the magical wilderness — I was so excited. A friend recommended Extreme Wilderness and I cannot thank him enough. They were amazingly quick to answer my inquiry and helped us get the best accommodations. When we touched down in Arusha, they welcomed us like royals — a bottle of champagne and exotic Tanzanian fruits. We were all so pleasantly surprised!",
    trip: 'Wildlife Safari Tanzania',
  },
  {
    name: 'Cindy',
    country: 'United States',
    rating: 5,
    text: "Great experience! We had an amazing time during this safari journey. Mike was always present and left a great impression — he was warm, professional, and made sure we saw as much wildlife as possible. It was one of the most extraordinary experiences we have ever had in Tanzania. I would not hesitate to book with Extreme Wilderness again.",
    trip: 'Tanzania Wildlife Safari',
  },
  {
    name: 'Sarah & Michael Thompson',
    country: 'United Kingdom',
    rating: 5,
    text: "The Extreme Wilderness gave us the most incredible experience of our lives. Our guide Samuel knew exactly where to find the leopard we'd been hoping to see — and delivered it on our last morning. Every detail was perfect. We'll be back for Kilimanjaro!",
    trip: '7-Day Serengeti & Ngorongoro',
  },
  {
    name: 'Yangmeng',
    country: 'China',
    rating: 5,
    text: "A dream safari with Extreme Wilderness Adventure — and the perfect choice for families! Everything was so well organised, from the airport pick-up to the game drives. Our guide was incredibly knowledgeable and patient with the kids. I would highly recommend Extreme Wilderness to anyone looking for an unforgettable African safari experience.",
    trip: 'Family Safari Tanzania',
  },
  {
    name: 'Alessandra & Aimo',
    country: 'Italy',
    rating: 5,
    text: "Well organised and fun! Before leaving we were uncertain about what to expect, but our guide Peter was very efficient and always showed up on time. He was friendly, knowledgeable, and knew exactly where to take us to maximise our game-viewing. The routes were perfect and the tent camp was a lovely bonus surprise. We saw all the Big Five and had an absolute blast!",
    trip: 'Tanzania Safari',
  },
  {
    name: 'Marie & François Dupont',
    country: 'France',
    rating: 5,
    text: "Notre lune de miel parfaite — safari au Serengeti puis Zanzibar. The team arranged everything flawlessly and our French-speaking guide was exceptional. We saw all the Big Five in three days. Magnifique!",
    trip: 'Safari & Zanzibar Honeymoon',
  },
  {
    name: 'Christina',
    country: 'Italy',
    rating: 4,
    text: "So helpful! The team at Extreme Wilderness was incredibly supportive in planning our trip and answered all our questions promptly. Our guide was knowledgeable and enthusiastic throughout. It was a wonderful experience in Tanzania that I will cherish for years to come.",
    trip: 'Tanzania Safari',
  },
]

const stats = [
  { value: '4.9 / 5', label: 'Average Rating',    Icon: Star,  iconClass: 'fill-gold text-gold' },
  { value: '200+',    label: 'Happy Guests',       Icon: Users, iconClass: 'text-brand' },
  { value: '40+',     label: 'Countries Served',   Icon: Globe, iconClass: 'text-brand' },
  { value: '100%',    label: 'Big Five Sightings', Icon: Award, iconClass: 'text-brand' },
]

const PAGE_SIZE = 6

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitials(name: string) {
  const clean = name.replace(/\s*&\s*.*/, '').trim()
  const parts = clean.split(' ')
  return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase()
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const [page, setPage]   = useState(0)
  const [dir, setDir]     = useState<'next' | 'prev'>('next')

  const totalPages = Math.ceil(testimonials.length / PAGE_SIZE)
  const visible    = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  const goNext = () => {
    if (page >= totalPages - 1) return
    setDir('next')
    setPage((p) => p + 1)
  }

  const goPrev = () => {
    if (page <= 0) return
    setDir('prev')
    setPage((p) => p - 1)
  }

  const goTo = (i: number) => {
    setDir(i > page ? 'next' : 'prev')
    setPage(i)
  }

  return (
    <section className="py-20 bg-light-green">
      {/* Slide-in keyframes */}
      <style>{`
        @keyframes tew-slide-right {
          from { transform: translateX(56px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes tew-slide-left {
          from { transform: translateX(-56px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        .tew-slide-next { animation: tew-slide-right 0.38s ease-out both; }
        .tew-slide-prev { animation: tew-slide-left  0.38s ease-out both; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
            Verified Guest Reviews
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-2">
            Trusted by Travelers from 40+ Countries
          </h2>
          <p className="text-text-muted text-sm max-w-lg mx-auto">
            Real stories from real guests — unedited, unsponsored, unforgettable.
          </p>
        </div>

        {/* Aggregate stat strip */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={[
                  'flex flex-col items-center justify-center py-6 px-4 text-center',
                  i < 3    ? 'lg:border-r border-gray-100' : '',
                  i < 2    ? 'border-b lg:border-b-0 border-gray-100' : '',
                  i % 2 === 0 ? 'border-r border-gray-100 lg:border-r-0' : '',
                ].join(' ')}
              >
                <s.Icon className={`w-6 h-6 mb-2 ${s.iconClass}`} />
                <span className="text-2xl font-bold text-brand leading-none">{s.value}</span>
                <span className="text-xs text-text-muted mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews grid — keyed so React remounts it on page change, triggering the animation */}
        <div className="overflow-hidden">
          <div
            key={page}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 ${
              dir === 'next' ? 'tew-slide-next' : 'tew-slide-prev'
            }`}
          >
            {visible.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4"
              >
                {/* Stars + badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-green-50 text-green-700 font-semibold px-2 py-0.5 rounded-full border border-green-200 flex-shrink-0 whitespace-nowrap">
                    Verified Guest
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="italic text-sm leading-relaxed text-text-muted line-clamp-5 flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {getInitials(t.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-brand text-sm truncate">{t.name}</div>
                    <div className="flex items-center gap-1 text-[11px] text-text-muted">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{t.country} · {t.trip}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination controls */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={goPrev}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-gray-200 hover:border-brand hover:text-brand flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === page ? 'bg-brand' : 'bg-gray-300 hover:bg-brand/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-gray-200 hover:border-brand hover:text-brand flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-text-muted text-sm mb-5">
            Join 200+ travelers who&rsquo;ve explored Africa with us — and came back for more.
          </p>
          <BookNowButton label="Plan My Safari" arrow />
        </div>

      </div>
    </section>
  )
}
