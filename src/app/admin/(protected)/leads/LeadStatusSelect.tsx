'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { LeadStatus } from '@/lib/leads'

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
  const router = useRouter()
  const [status, setStatus] = useState<LeadStatus>(currentStatus)
  const [saving, setSaving] = useState(false)

  async function handleChange(next: string) {
    const prev = status
    setStatus(next as LeadStatus)
    setSaving(true)
    const res = await fetch(`/api/admin/leads/${leadId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: next }),
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
      className={`capitalize font-semibold rounded-full border-0 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-brand/20 ${STATUS_STYLES[status]} ${compact ? 'text-xs px-2.5 py-1' : 'text-sm px-3 py-2.5 w-full'}`}
    >
      {STATUSES.map((s) => (
        <option key={s} value={s} className="bg-white text-gray-700">
          {s}
        </option>
      ))}
    </select>
  )
}
