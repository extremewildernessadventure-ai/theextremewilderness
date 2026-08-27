'use client'

import { REFUND_STATUSES, type RefundStatus } from '@/lib/finance'
import InlineStatusSelect from '@/components/admin/InlineStatusSelect'

const STATUS_STYLES: Record<RefundStatus, string> = {
  requested: 'bg-amber-100 text-amber-700',
  approved: 'bg-blue-100 text-blue-700',
  processed: 'bg-green-100 text-green-700',
  denied: 'bg-red-100 text-red-700',
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
      statusStyles={STATUS_STYLES}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
