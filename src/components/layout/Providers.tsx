'use client'

import { LazyMotion, domAnimation } from 'framer-motion'
import { BookingProvider } from '@/context/BookingContext'
import EnquiryModal from '@/components/booking/EnquiryModal'
import CopyProtection from '@/components/layout/CopyProtection'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <BookingProvider>
        {children}
        <EnquiryModal />
        <CopyProtection />
      </BookingProvider>
    </LazyMotion>
  )
}
