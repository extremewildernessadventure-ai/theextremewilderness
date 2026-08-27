'use client'

import { BOOKING_STATUSES, type BookingStatus } from '@/lib/bookings'
import InlineStatusSelect from '@/components/admin/InlineStatusSelect'

const STATUS_STYLES: Record<BookingStatus, string> = {
  confirmed: 'bg-green-100 text-green-700',
  pending: 'bg-amber-100 text-amber-700',
  cancelled: 'bg-red-100 text-red-700',
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
      statusStyles={STATUS_STYLES}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
