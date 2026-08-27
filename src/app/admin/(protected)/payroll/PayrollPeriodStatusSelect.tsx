'use client'

import { PAYROLL_PERIOD_STATUSES, type PayrollPeriodStatus } from '@/lib/hr'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'

const PILL_CLASS: Record<PayrollPeriodStatus, PillClass> = {
  open: 'open',
  processed: 'few',
  paid: 'full',
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
      pillClass={PILL_CLASS}
      currentStatus={currentStatus}
      compact={compact}
    />
  )
}
