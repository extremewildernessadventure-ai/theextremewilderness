'use client'

import { useBooking } from '@/context/BookingContext'

export default function BookingModal() {
  const { openBooking } = useBooking()

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={() => openBooking({ packageType: 'Custom Safari' })}
        className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-base shadow-lg"
      >
        Plan My Safari →
      </button>
      <a
        href="/destinations"
        className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors text-base"
      >
        Explore Destinations
      </a>
    </div>
  )
}
