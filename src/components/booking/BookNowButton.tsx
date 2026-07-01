'use client'

import { useBooking, type BookingInfo } from '@/context/BookingContext'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'

interface Props extends BookingInfo {
  label?: string
  className?: string
  arrow?: boolean
}

export default function BookNowButton({
  label,
  className,
  arrow = true,
  packageName,
  packageType,
  priceFrom,
  duration,
  route,
}: Props) {
  const t = useTranslations('common')
  const { openBooking } = useBooking()
  const buttonLabel = label ?? t('bookNow')

  return (
    <button
      type="button"
      onClick={() => openBooking({ packageName, packageType, priceFrom, duration, route })}
      className={
        className ??
        'inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm'
      }
    >
      {buttonLabel}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </button>
  )
}
