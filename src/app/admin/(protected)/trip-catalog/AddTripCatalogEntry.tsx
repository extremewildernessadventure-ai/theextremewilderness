'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddTripCatalogEntry() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) {
      setError('Enter a name.')
      return
    }
    setSaving(true)
    setError('')
    const res = await fetch('/api/admin/trip-catalog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim(), notes: notes.trim() || undefined }),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to add.')
      return
    }
    setName('')
    setNotes('')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="panel flex items-end gap-3 flex-wrap">
      <div className="flex-1 min-w-[200px]">
        <label className="field-label">Trip Name *</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="field-input" placeholder="e.g. Smith Family Private Safari" />
      </div>
      <div className="flex-1 min-w-[200px]">
        <label className="field-label">Notes (optional)</label>
        <input value={notes} onChange={(e) => setNotes(e.target.value)} className="field-input" placeholder="Internal note" />
      </div>
      <button type="submit" disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
        {saving ? 'Adding…' : '+ Add'}
      </button>
      {error && <p role="alert" className="text-red-500 text-xs w-full">{error}</p>}
    </form>
  )
}
