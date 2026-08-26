'use client'

import { useEffect } from 'react'
import { useLocale } from 'next-intl'
import { LazyMotion, domAnimation } from 'framer-motion'
import { BookingProvider } from '@/context/BookingContext'
import { SearchProvider } from '@/context/SearchContext'
import EnquiryModal from '@/components/booking/EnquiryModal'
import SearchModal from '@/components/shared/SearchModal'
import CopyProtection from '@/components/layout/CopyProtection'
import { isRtlLocale } from '@/lib/rtl'

export default function Providers({ children }: { children: React.ReactNode }) {
  const locale = useLocale()

  // The inline script in app/[locale]/layout.tsx only sets documentElement's
  // lang/dir once, as the initial SSR'd HTML is parsed — it never re-runs on
  // client-side locale switches (LanguageSwitcher's router.replace is a soft
  // navigation). This keeps both in sync reactively on every locale change,
  // complementing (not replacing) that one-shot script's FOUC-prevention role.
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = isRtlLocale(locale) ? 'rtl' : 'ltr'
  }, [locale])

  return (
    <LazyMotion features={domAnimation} strict>
      <BookingProvider>
        <SearchProvider>
          {children}
          <EnquiryModal />
          <SearchModal />
          <CopyProtection />
        </SearchProvider>
      </BookingProvider>
    </LazyMotion>
  )
}
