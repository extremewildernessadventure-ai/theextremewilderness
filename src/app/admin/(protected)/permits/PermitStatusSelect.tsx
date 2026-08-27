'use client'

import { PERMIT_STATUSES, type PermitStatus } from '@/lib/compliance'
import InlineStatusSelect from '@/components/admin/InlineStatusSelect'

const STATUS_STYLES: Record<PermitStatus, string> = {
  pending: 'bg-amber-100 text-amber-700',
  paid: 'bg-blue-100 text-blue-700',
  confirmed: 'bg-green-100 text-green-700',
  expired: 'bg-red-100 text-red-700',
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
      statusStyles={STATUS_STYLES}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
