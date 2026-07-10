'use client'

import { BookingProvider } from '@/context/BookingContext'
import EnquiryModal from '@/components/booking/EnquiryModal'
import CopyProtection from '@/components/layout/CopyProtection'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      {children}
      <EnquiryModal />
      <CopyProtection />
    </BookingProvider>
  )
}
