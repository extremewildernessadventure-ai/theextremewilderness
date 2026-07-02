'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Star, Users, Globe, Award, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import BookNowButton from '@/components/booking/BookNowButton'

const COUNTRY_KEYS: Record<string, 'countryUS' | 'countryCA' | 'countryUK' | 'countryFR' | 'countryIT' | 'countryCN'> = {
  'United States':  'countryUS',
  'Canada':         'countryCA',
  'United Kingdom': 'countryUK',
  'France':         'countryFR',
  'Italy':          'countryIT',
  'China':          'countryCN',
}

const PAGE_SIZE = 6

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitials(name: string) {
  const clean = name.replace(/\s*&\s*.*/, '').trim()
  const parts = clean.split(' ')
  return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase()
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const t = useTranslations('home')
  const tc = useTranslations('common')
  const [page, setPage]   = useState(0)

  const tCountry = (c: string) => {
    const key = COUNTRY_KEYS[c]
    return key ? t(key) : c
  }

  const testimonials = [
    { name: 'James Kowalski',          country: 'United States', rating: 5, text: t('rev0Text'),  trip: t('rev0Trip')  },
    { name: 'Erick Edwin',             country: 'United States', rating: 5, text: t('rev1Text'),  trip: t('rev1Trip')  },
    { name: 'Lauren',                  country: 'United States', rating: 5, text: t('rev2Text'),  trip: t('rev2Trip')  },
    { name: 'Renard',                  country: 'United States', rating: 5, text: t('rev3Text'),  trip: t('rev3Trip')  },
    { name: 'Abimbola',                country: 'United States', rating: 5, text: t('rev4Text'),  trip: t('rev4Trip')  },
    { name: 'Ruaika',                  country: 'Canada',        rating: 5, text: t('rev5Text'),  trip: t('rev5Trip')  },
    { name: 'Cindy',                   country: 'United States', rating: 5, text: t('rev6Text'),  trip: t('rev6Trip')  },
    { name: 'Sarah & Michael Thompson',country: 'United Kingdom',rating: 5, text: t('rev7Text'),  trip: t('rev7Trip')  },
    { name: 'Yangmeng',                country: 'China',         rating: 5, text: t('rev8Text'),  trip: t('rev8Trip')  },
    { name: 'Alessandra & Aimo',       country: 'Italy',         rating: 5, text: t('rev9Text'),  trip: t('rev9Trip')  },
    { name: 'Marie & François Dupont', country: 'France',        rating: 5, text: t('rev10Text'), trip: t('rev10Trip') },
    { name: 'Christina',               country: 'Italy',         rating: 4, text: t('rev11Text'), trip: t('rev11Trip') },
  ]

  const stats = [
    { value: '4.9 / 5', label: t('averageRating'),    Icon: Star,  iconClass: 'fill-gold text-gold' },
    { value: '200+',    label: t('happyGuests'),       Icon: Users, iconClass: 'text-brand' },
    { value: '40+',     label: t('countriesServed'),   Icon: Globe, iconClass: 'text-brand' },
    { value: '100%',    label: t('bigFiveSightings'),  Icon: Award, iconClass: 'text-brand' },
  ]
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
          <span className="inline-block text-gold-label font-semibold text-xs uppercase tracking-widest mb-3">
            {t('verifiedGuestReviews')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-2">
            {t('trustedByTravelers')}
          </h2>
          <p className="text-text-muted text-sm max-w-lg mx-auto">
            {t('realStories')}
          </p>
        </div>

        {/* Aggregate stat strip */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-100">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-6 px-4 text-center"
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
            {visible.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4"
              >
                {/* Stars + badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-green-50 text-green-700 font-semibold px-2 py-0.5 rounded-full border border-green-200 flex-shrink-0 whitespace-nowrap">
                    {t('verifiedGuest')}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="italic text-sm leading-relaxed text-text-muted line-clamp-5 flex-1">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {getInitials(review.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-brand text-sm truncate">{review.name}</div>
                    <div className="flex items-center gap-1 text-[11px] text-text-muted">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{tCountry(review.country)} · {review.trip}</span>
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
            aria-label="Previous reviews"
            className="w-10 h-10 rounded-full border border-gray-200 hover:border-brand hover:text-brand flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          </button>

          <div className="flex gap-0" role="group" aria-label="Review pages">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to review page ${i + 1}`}
                aria-current={i === page ? 'true' : undefined}
                className="p-3 flex items-center justify-center group"
              >
                <span className={`block w-2.5 h-2.5 rounded-full transition-colors pointer-events-none ${
                  i === page ? 'bg-brand' : 'bg-gray-300 group-hover:bg-brand/50'
                }`} />
              </button>
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={page === totalPages - 1}
            aria-label="Next reviews"
            className="w-10 h-10 rounded-full border border-gray-200 hover:border-brand hover:text-brand flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-text-muted text-sm mb-5">
            {t('joinTravelers')}
          </p>
          <BookNowButton label={tc('planMySafari')} arrow />
        </div>

      </div>
    </section>
  )
}
