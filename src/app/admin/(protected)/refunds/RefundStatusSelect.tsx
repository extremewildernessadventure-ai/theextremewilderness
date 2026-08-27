'use client'

import { REFUND_STATUSES, type RefundStatus } from '@/lib/finance'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'

// requested = awaiting action; approved = on track; processed = complete;
// denied = declined/failed.
const PILL_CLASS: Record<RefundStatus, PillClass> = {
  requested: 'few',
  approved: 'open',
  processed: 'full',
  denied: 'cancelled',
}

export default function RefundStatusSelect({ refundId, currentStatus, compact = false }: {
  refundId: number
  currentStatus: RefundStatus
  compact?: boolean
}) {
  return (
    <InlineStatusSelect
      endpoint={`/api/admin/refunds/${refundId}`}
      statuses={REFUND_STATUSES}
      pillClass={PILL_CLASS}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
