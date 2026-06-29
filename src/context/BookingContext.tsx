'use client'

import { createContext, useContext, useState } from 'react'

export interface BookingInfo {
  packageName?: string
  packageType?: string
  priceFrom?: string
  duration?: string
  route?: string
}

interface BookingContextValue {
  isOpen: boolean
  bookingInfo: BookingInfo | null
  openBooking: (info?: BookingInfo) => void
  closeBooking: () => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [bookingInfo, setBookingInfo] = useState<BookingInfo | null>(null)

  const openBooking = (info?: BookingInfo) => {
    setBookingInfo(info ?? null)
    setIsOpen(true)
  }

  const closeBooking = () => setIsOpen(false)

  return (
    <BookingContext.Provider value={{ isOpen, bookingInfo, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used inside <BookingProvider>')
  return ctx
}
