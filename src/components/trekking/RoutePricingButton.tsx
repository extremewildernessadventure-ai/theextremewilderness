'use client'

import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useBooking } from '@/context/BookingContext'

interface Props {
  routeName: string
  tier: string
  price: number
  duration: string
  label?: string
}

export default function RoutePricingButton({ routeName, tier: _tier, price, duration, label = 'Book at this price' }: Props) {
  const { openBooking } = useBooking()
  const tc = useTranslations('common')

  return (
    <button
      onClick={() =>
        openBooking({
          packageName: routeName,
          packageType: tc('packageTypes.kiliTrek'),
          priceFrom: `$${price.toLocaleString()}`,
          duration,
        })
      }
      className="mt-4 w-full flex items-center justify-center gap-1.5 py-2.5 px-4 bg-gold hover:bg-gold-dark text-brand text-xs font-bold rounded-lg transition-colors"
    >
      {label} <ArrowRight className="w-3 h-3" />
    </button>
  )
}
