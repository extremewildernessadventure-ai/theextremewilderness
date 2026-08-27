'use client'

import { DEPARTURE_STATUSES, type DepartureStatus } from '@/lib/departures'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'

// Maps 1:1 onto the design system's own reference names.
const PILL_CLASS: Record<DepartureStatus, PillClass> = {
  open: 'open',
  few_left: 'few',
  full: 'full',
  departed: 'departed',
  cancelled: 'cancelled',
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
      pillClass={PILL_CLASS}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
