'use client'

import { PAYROLL_PERIOD_STATUSES, type PayrollPeriodStatus } from '@/lib/hr'
import InlineStatusSelect from '@/components/admin/InlineStatusSelect'

const STATUS_STYLES: Record<PayrollPeriodStatus, string> = {
  open: 'bg-amber-100 text-amber-700',
  processed: 'bg-blue-100 text-blue-700',
  paid: 'bg-green-100 text-green-700',
}

export default function PayrollPeriodStatusSelect({ periodId, currentStatus, compact = false }: {
  periodId: number
  currentStatus: PayrollPeriodStatus
  compact?: boolean
}) {
  return (
    <InlineStatusSelect
      endpoint={`/api/admin/payroll/${periodId}`}
      statuses={PAYROLL_PERIOD_STATUSES}
      statusStyles={STATUS_STYLES}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
