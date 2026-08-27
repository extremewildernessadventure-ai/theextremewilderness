'use client'

import { DEPARTURE_STATUSES, type DepartureStatus } from '@/lib/departures'
import InlineStatusSelect from '@/components/admin/InlineStatusSelect'

const STATUS_STYLES: Record<DepartureStatus, string> = {
  open: 'bg-green-100 text-green-700',
  few_left: 'bg-amber-100 text-amber-700',
  full: 'bg-blue-100 text-blue-700',
  departed: 'bg-gray-100 text-gray-500',
  cancelled: 'bg-red-100 text-red-700',
}

export default function DepartureStatusSelect({ departureId, currentStatus, compact = false }: {
  departureId: number
  currentStatus: DepartureStatus
  compact?: boolean
}) {
  return (
    <InlineStatusSelect
      endpoint={`/api/admin/departures/${departureId}`}
      statuses={DEPARTURE_STATUSES}
      statusStyles={STATUS_STYLES}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
