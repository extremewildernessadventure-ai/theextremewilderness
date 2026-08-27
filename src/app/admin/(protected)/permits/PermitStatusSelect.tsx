'use client'

import { PERMIT_STATUSES, type PermitStatus } from '@/lib/compliance'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'

// pending = awaiting action; paid = in progress; confirmed = fully secured
// (complete); expired = a real compliance risk, needs urgent renewal.
const PILL_CLASS: Record<PermitStatus, PillClass> = {
  pending: 'few',
  paid: 'open',
  confirmed: 'full',
  expired: 'cancelled',
}

export default function PermitStatusSelect({ permitId, currentStatus, compact = false }: {
  permitId: number
  currentStatus: PermitStatus
  compact?: boolean
}) {
  return (
    <InlineStatusSelect
      endpoint={`/api/admin/permits/${permitId}`}
      statuses={PERMIT_STATUSES}
      pillClass={PILL_CLASS}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
