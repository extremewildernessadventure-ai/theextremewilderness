'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Client } from '@/lib/clients'

const inputCls = 'field-input'
const labelCls = 'field-label'

// For the rare case two different emails turn out to be the same person —
// dedupe elsewhere (resolveClientId) is email-only by design, so this is
// the manual escape hatch. This client (the page it's shown on) is always
// the survivor; the picked one is absorbed into it and deleted.
export default function MergeClientPanel({ clientId, clientName, otherClients }: {
  clientId: number
  clientName: string
  otherClients: Client[]
}) {
  const router = useRouter()
  const [duplicateId, setDuplicateId] = useState('')
  const [merging, setMerging] = useState(false)
  const [error, setError] = useState('')

  const duplicate = otherClients.find((c) => String(c.id) === duplicateId)

  async function handleMerge() {
    if (!duplicate) return
    if (!confirm(`Merge "${duplicate.name}" into "${clientName}"? All of their leads, bookings, invoices, documents, reviews, and newsletter subscription will move over, and "${duplicate.name}" will be deleted. This cannot be undone.`)) {
      return
    }
    setMerging(true)
    setError('')
    const res = await fetch(`/api/admin/clients/${clientId}/merge`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ duplicateId: Number(duplicateId) }),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to merge. Please try again.')
      setMerging(false)
      return
    }
    setDuplicateId('')
    setMerging(false)
    router.refresh()
  }

  if (otherClients.length === 0) return null

  return (
    <div className="panel">
      <h2 className="mb-1">Merge Duplicate</h2>
      <p className="text-xs text-gray-400 mb-3">If the same person ended up as two client records, pull the duplicate into this one.</p>
      <label className={labelCls}>Duplicate client</label>
      <select value={duplicateId} onChange={(e) => setDuplicateId(e.target.value)} className={inputCls}>
        <option value="">— Select —</option>
        {otherClients.map((c) => <option key={c.id} value={c.id}>{c.email ? `${c.name} (${c.email})` : c.name}</option>)}
      </select>
      {error && <p role="alert" className="text-red-500 text-xs mt-2">{error}</p>}
      <button
        type="button"
        onClick={handleMerge}
        disabled={!duplicateId || merging}
        className="btn-outline mt-3"
        style={{ opacity: !duplicateId || merging ? 0.5 : 1 }}
      >
        {merging ? 'Merging…' : 'Merge Into This Client'}
      </button>
    </div>
  )
}
