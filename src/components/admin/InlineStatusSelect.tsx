'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function InlineStatusSelect<S extends string>({
  endpoint,
  field = 'status',
  statuses,
  statusStyles,
  currentStatus,
  compact = false,
}: {
  endpoint: string
  field?: string
  statuses: readonly S[]
  statusStyles: Record<S, string>
  currentStatus: S
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
      className={`capitalize font-semibold rounded-full border-0 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-brand/20 ${statusStyles[status]} ${compact ? 'text-xs px-2.5 py-1' : 'text-sm px-3 py-2.5 w-full'}`}
    >
      {statuses.map((s) => (
        <option key={s} value={s} className="bg-white text-gray-700">
          {s}
        </option>
      ))}
    </select>
  )
}
