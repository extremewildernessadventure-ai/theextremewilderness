'use client'

import { QUOTE_STATUSES, type QuoteStatus } from '@/lib/quotes'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'

// draft = not yet active; sent = awaiting response (needs follow-up);
// accepted = best outcome; declined = failed; expired = historical.
const PILL_CLASS: Record<QuoteStatus, PillClass> = {
  draft: 'full',
  sent: 'few',
  accepted: 'open',
  declined: 'cancelled',
  expired: 'departed',
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
      pillClass={PILL_CLASS}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
