'use client'

import { BookingProvider } from '@/context/BookingContext'
import EnquiryModal from '@/components/booking/EnquiryModal'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      {children}
      <EnquiryModal />
    </BookingProvider>
  )
}
