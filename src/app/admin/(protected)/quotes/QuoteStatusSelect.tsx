'use client'

import { QUOTE_STATUSES, type QuoteStatus } from '@/lib/quotes'
import InlineStatusSelect from '@/components/admin/InlineStatusSelect'

const STATUS_STYLES: Record<QuoteStatus, string> = {
  draft: 'bg-gray-100 text-gray-500',
  sent: 'bg-blue-100 text-blue-700',
  accepted: 'bg-green-100 text-green-700',
  declined: 'bg-red-100 text-red-700',
  expired: 'bg-amber-100 text-amber-700',
}

export default function QuoteStatusSelect({ quoteId, currentStatus, compact = false }: {
  quoteId: number
  currentStatus: QuoteStatus
  compact?: boolean
}) {
  return (
    <InlineStatusSelect
      endpoint={`/api/admin/quotes/${quoteId}`}
      statuses={QUOTE_STATUSES}
      statusStyles={STATUS_STYLES}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
