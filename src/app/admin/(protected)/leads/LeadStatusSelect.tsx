'use client'

import type { LeadStatus } from '@/lib/leads'
import InlineStatusSelect from '@/components/admin/InlineStatusSelect'

const STATUSES: LeadStatus[] = ['new', 'contacted', 'converted', 'archived']

const STATUS_STYLES: Record<LeadStatus, string> = {
  new: 'bg-amber-100 text-amber-700',
  contacted: 'bg-blue-100 text-blue-700',
  converted: 'bg-green-100 text-green-700',
  archived: 'bg-gray-100 text-gray-500',
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
      statusStyles={STATUS_STYLES}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
