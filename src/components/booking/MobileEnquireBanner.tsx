'use client'

import { useEffect } from 'react'
import BookNowButton from './BookNowButton'
import { useBooking, type BookingInfo } from '@/context/BookingContext'

interface Props extends BookingInfo {
  eyebrow: string
  title: string
  label: string
  className?: string
}

export default function MobileEnquireBanner({ eyebrow, title, label, className, ...bookingInfo }: Props) {
  const { setPageBookingInfo } = useBooking()

  useEffect(() => {
    setPageBookingInfo(bookingInfo)
    return () => setPageBookingInfo(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- register once per mount; page data is static for the component's lifetime
  }, [])

  return (
    <div className={className ?? 'lg:hidden max-w-7xl mx-auto px-4 sm:px-6 pt-5'}>
      <div className="bg-brand rounded-xl px-4 py-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-gold text-[10px] font-bold uppercase tracking-widest truncate">{eyebrow}</p>
          <p className="text-white text-sm font-semibold truncate">{title}</p>
        </div>
        <BookNowButton
          {...bookingInfo}
          label={label}
          arrow={false}
          className="flex-shrink-0 inline-flex items-center justify-center px-4 py-2.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-lg text-sm whitespace-nowrap"
        />
      </div>
    </div>
  )
}
