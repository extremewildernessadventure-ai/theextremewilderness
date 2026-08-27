'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// The 5 semantic pill classes from ewa-admin-design-system.md — every
// status enum in this app maps onto one of these by MEANING, not name:
//   open      pine/green  — active, healthy, on track
//   few       gold        — needs attention soon, not urgent yet
//   full      khaki/grey  — complete, at capacity, closed out normally
//   departed  blue-grey   — historical/completed record
//   cancelled rust        — cancelled, declined, failed, overdue
export type PillClass = 'open' | 'few' | 'full' | 'departed' | 'cancelled'

export default function InlineStatusSelect<S extends string>({
  endpoint,
  field = 'status',
  statuses,
  pillClass,
  currentStatus,
  compact = false,
}: {
  endpoint: string
  field?: string
  statuses: readonly S[]
  pillClass: Record<S, PillClass>
  currentStatus: S
  // true: small pill (table rows). false: full-width field-styled select
  // (detail-page edit forms, next to other .field-input controls).
  compact?: boolean
}) {
  const router = useRouter()
  const [status, setStatus] = useState<S>(currentStatus)
  const [saving, setSaving] = useState(false)

  async function handleChange(next: string) {
    const prev = status
    setStatus(next as S)
    setSaving(true)
    const res = await fetch(endpoint, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [field]: next }),
    })
    setSaving(false)
    if (!res.ok) {
      setStatus(prev)
      return
    }
    router.refresh()
  }

  return (
    <select
      value={status}
      onChange={(e) => handleChange(e.target.value)}
      disabled={saving}
      onClick={(e) => e.stopPropagation()}
      className={compact ? `pill ${pillClass[status]}` : 'field-input'}
      style={compact ? { opacity: saving ? 0.5 : 1 } : undefined}
    >
      {statuses.map((s) => (
        <option key={s} value={s}>{s}</option>
      ))}
    </select>
  )
}
