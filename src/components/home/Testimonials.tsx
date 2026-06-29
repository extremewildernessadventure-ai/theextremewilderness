'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah & Michael Thompson',
    country: 'United Kingdom',
    flag: '🇬🇧',
    rating: 5,
    text: "The Extreme Wilderness gave us the most incredible experience of our lives. Our guide Samuel knew exactly where to find the leopard we'd been hoping to see — and delivered it on our last morning. Every detail was perfect. We'll be back for Kilimanjaro!",
    trip: '7-Day Serengeti & Ngorongoro',
  },
  {
    name: 'James Kowalski',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    text: "I've done safaris in Kenya and South Africa, but Tanzania with The Extreme Wilderness was on another level. No crowds, no cookie-cutter experiences — pure, authentic wilderness. The balloon over the Serengeti at sunrise was life-changing.",
    trip: '10-Day Northern Circuit',
  },
  {
    name: 'Marie & François Dupont',
    country: 'France',
    flag: '🇫🇷',
    rating: 5,
    text: "Notre lune de miel parfaite — safari au Serengeti puis Zanzibar. The team arranged everything flawlessly and our French-speaking guide was exceptional. We saw all the Big Five in three days. Magnifique!",
    trip: 'Safari & Zanzibar Honeymoon',
  },
  {
    name: 'Ruaika',
    country: 'Canada',
    flag: '🇨🇦',
    rating: 5,
    text: "It was my first time visiting Tanzania and experiencing the magical wilderness — I was so excited. I had heard so many wonderful things from friends about the magical plains and wildlife. A friend recommended Extreme Wilderness and I cannot thank him enough. They were amazingly quick to answer my inquiry and helped us get the best accommodations at the best prices. When we touched down in Arusha, they welcomed us like royals — a bottle of champagne and exotic Tanzanian fruits. We were all so pleasantly surprised!",
    trip: 'Wildlife Safari Tanzania',
  },
  {
    name: 'Erick Edwin',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    text: "Wow, just wow, what an experience! My girlfriend and I had a 5-day tour of Lake Manyara, Serengeti and Ngorongoro Crater for a much-needed couple's retreat and it was nothing short of spectacular. Our guide George's enthusiasm for Tanzania and the wildlife was so contagious. His eyes lit up whenever he talked about the flora, fauna and culture. We saw so many animals and managed to spot the Big 5!! George answered every one of our questions immaculately and always with a smile. He definitely went above and beyond.",
    trip: 'Lake Manyara, Serengeti & Ngorongoro',
  },
  {
    name: 'Yangmeng',
    country: 'China',
    flag: '🇨🇳',
    rating: 5,
    text: "A dream safari with Extreme Wilderness Adventure — and the perfect choice for families! Everything was so well organised, from the airport pick-up to the game drives. Our guide was incredibly knowledgeable and patient with the kids. The communication before and throughout the trip was excellent. I would highly recommend Extreme Wilderness to anyone looking for an unforgettable African safari experience.",
    trip: 'Family Safari Tanzania',
  },
  {
    name: 'Abimbola',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    text: "Professional and easy going — that perfectly sums up Extreme Wilderness. Our guide Mike was very friendly, easy to talk to, and deeply knowledgeable about the wildlife and ecosystems. He made every game drive exciting and informative. The whole team was responsive, efficient, and responsible throughout the entire trip. Cannot recommend them enough for anyone planning an East African safari.",
    trip: 'Tanzania Safari',
  },
  {
    name: 'Christina',
    country: 'Italy',
    flag: '🇮🇹',
    rating: 4,
    text: "So helpful! The team at Extreme Wilderness was incredibly supportive in planning our trip and answered all our questions promptly. Our guide was knowledgeable and enthusiastic throughout. It was a wonderful experience in Tanzania that I will cherish for years to come.",
    trip: 'Tanzania Safari',
  },
  {
    name: 'Cindy',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    text: "Great experience! We had an amazing time during this safari journey. Mike was always present and left a great impression — he was warm, professional, and made sure we saw as much wildlife as possible. It was one of the most extraordinary experiences we have ever had in Tanzania. I would not hesitate to book with Extreme Wilderness again.",
    trip: 'Tanzania Wildlife Safari',
  },
  {
    name: 'Alessandra & Aimo',
    country: 'Italy',
    flag: '🇮🇹',
    rating: 5,
    text: "Well organised and fun! Before leaving we were uncertain about what to expect, but our guide Peter was very efficient and always showed up on time. He was friendly, knowledgeable, and knew exactly where to take us to maximise our game-viewing. The routes were perfect and the tent camp was a lovely bonus surprise. We saw all the Big Five and had an absolute blast!",
    trip: 'Tanzania Safari',
  },
  {
    name: 'Lauren',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    text: "Phenomenal! Upon our arrival Mike called us up as soon as we landed. The trip he put together for us was more than we could have expected. From our very first game drive we were blown away by the wildlife we encountered. Mike showed incredible passion, professionalism, and people skills. Support for the trip, animals, and people of Tanzania was evident in every moment — we would go back in a heartbeat.",
    trip: 'Tanzania Safari',
  },
  {
    name: 'Renard',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    text: "Unforgettable! We completed a 5-day tour that was genuinely life-changing. The accommodations, transportation, and game drives were all top-notch. Our guide was extraordinary — deeply passionate about wildlife and conservation, and his knowledge made every drive educational and thrilling. The Big Five sightings were incredible. Extreme Wilderness truly delivered beyond our expectations.",
    trip: '5-Day Tanzania Safari',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const t = testimonials[idx]

  return (
    <section className="py-20 bg-light-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
            Traveller Reviews
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand">
            What Our Guests Say
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-8 lg:p-12 relative">
          {/* Stars */}
          <div className="flex gap-1 mb-5 justify-center">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>

          <blockquote className="text-lg lg:text-xl text-text-dark text-center leading-relaxed mb-8 italic">
            "{t.text}"
          </blockquote>

          <div className="text-center">
            <div className="font-semibold text-brand">{t.name}</div>
            <div className="text-text-muted text-sm mt-0.5">
              {t.country} — {t.trip}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-brand hover:text-brand flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm text-text-muted tabular-nums">
              {idx + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-brand hover:text-brand flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
