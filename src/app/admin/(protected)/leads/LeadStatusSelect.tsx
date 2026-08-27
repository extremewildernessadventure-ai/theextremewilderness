'use client'

import type { LeadStatus } from '@/lib/leads'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'

const STATUSES: LeadStatus[] = ['new', 'contacted', 'converted', 'archived']

// new = unactioned, most urgent; contacted = actively worked; converted =
// closed out successfully; archived = no longer pursued (historical).
const PILL_CLASS: Record<LeadStatus, PillClass> = {
  new: 'few',
  contacted: 'open',
  converted: 'full',
  archived: 'departed',
}

export default function LeadStatusSelect({ leadId, currentStatus, compact = false }: {
  leadId: number
  currentStatus: LeadStatus
  compact?: boolean
}) {
  return (
    <InlineStatusSelect
      endpoint={`/api/admin/leads/${leadId}`}
      statuses={STATUSES}
      pillClass={PILL_CLASS}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
