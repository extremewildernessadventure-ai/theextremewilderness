'use client'

import { REVIEW_STATUSES, type ReviewStatus } from '@/lib/reviews'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'

const PILL_CLASS: Record<ReviewStatus, PillClass> = {
  pending: 'few',
  approved: 'open',
  published: 'full',
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
      pillClass={PILL_CLASS}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
