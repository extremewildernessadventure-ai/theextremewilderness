'use client'

import { LazyMotion, domAnimation } from 'framer-motion'
import { BookingProvider } from '@/context/BookingContext'
import { SearchProvider } from '@/context/SearchContext'
import EnquiryModal from '@/components/booking/EnquiryModal'
import SearchModal from '@/components/shared/SearchModal'
import CopyProtection from '@/components/layout/CopyProtection'

export default function Providers({ children }: { children: React.ReactNode }) {
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
