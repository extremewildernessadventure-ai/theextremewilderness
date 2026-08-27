'use client'

import { BOOKING_STATUSES, type BookingStatus } from '@/lib/bookings'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'

const PILL_CLASS: Record<BookingStatus, PillClass> = {
  confirmed: 'open',
  pending: 'few',
  cancelled: 'cancelled',
}

export default function BookingStatusSelect({ bookingId, currentStatus, compact = false }: {
  bookingId: number
  currentStatus: BookingStatus
  compact?: boolean
}) {
  return (
    <InlineStatusSelect
      endpoint={`/api/admin/bookings/${bookingId}`}
      statuses={BOOKING_STATUSES}
      pillClass={PILL_CLASS}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
