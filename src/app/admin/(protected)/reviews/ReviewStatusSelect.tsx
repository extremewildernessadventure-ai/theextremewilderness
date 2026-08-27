'use client'

import { REVIEW_STATUSES, type ReviewStatus } from '@/lib/reviews'
import InlineStatusSelect from '@/components/admin/InlineStatusSelect'

const STATUS_STYLES: Record<ReviewStatus, string> = {
  pending: 'bg-amber-100 text-amber-700',
  approved: 'bg-blue-100 text-blue-700',
  published: 'bg-green-100 text-green-700',
}

export default function ReviewStatusSelect({ reviewId, currentStatus, compact = false }: {
  reviewId: number
  currentStatus: ReviewStatus
  compact?: boolean
}) {
  return (
    <InlineStatusSelect
      endpoint={`/api/admin/reviews/${reviewId}`}
      statuses={REVIEW_STATUSES}
      statusStyles={STATUS_STYLES}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
