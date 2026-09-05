'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { TripCatalogEntry } from '@/lib/tripCatalog'

export default function TripCatalogRow({ entry }: { entry: TripCatalogEntry }) {
  const router = useRouter()
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(entry.name)
  const [notes, setNotes] = useState(entry.notes ?? '')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function patch(body: Record<string, unknown>) {
    setSaving(true)
    setError('')
    const res = await fetch(`/api/admin/trip-catalog/${entry.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to save.')
      return false
    }
    router.refresh()
    return true
  }

  async function handleSave() {
    if (!name.trim()) {
      setError('Name cannot be empty.')
      return
    }
    const ok = await patch({ name: name.trim(), notes: notes.trim() || null })
    if (ok) setEditing(false)
  }

  async function handleToggleArchive() {
    await patch({ archived: entry.archived === 0 })
  }

  async function handleDelete() {
    if (!confirm(`Remove "${entry.name}" from the trip catalog? Existing departures/quotes that already used this name keep showing it fine.`)) return
    setSaving(true)
    const res = await fetch(`/api/admin/trip-catalog/${entry.id}`, { method: 'DELETE' })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to delete.')
      return
    }
    router.refresh()
  }

  if (editing) {
    return (
      <tr>
        <td colSpan={4}>
          <div className="flex items-end gap-3 flex-wrap py-2">
            <div className="flex-1 min-w-[180px]">
              <label className="field-label">Trip Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="field-input" />
            </div>
            <div className="flex-1 min-w-[180px]">
              <label className="field-label">Notes</label>
              <input value={notes} onChange={(e) => setNotes(e.target.value)} className="field-input" />
            </div>
            <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
              {saving ? 'Saving…' : 'Save'}
            </button>
            <button type="button" onClick={() => { setEditing(false); setName(entry.name); setNotes(entry.notes ?? ''); setError('') }} className="btn-outline">
              Cancel
            </button>
            {error && <p role="alert" className="text-red-500 text-xs w-full">{error}</p>}
          </div>
        </td>
      </tr>
    )
  }

  return (
    <tr className={entry.archived ? 'cancelled' : undefined}>
      <td><span className="font-medium">{entry.name}</span></td>
      <td className="text-gray-500">{entry.notes ?? '—'}</td>
      <td>
        {entry.archived ? <span className="pill cancelled"><i />archived</span> : <span className="pill open"><i />active</span>}
      </td>
      <td>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setEditing(true)} className="text-xs font-semibold text-brand hover:underline">Edit</button>
          <button type="button" onClick={handleToggleArchive} disabled={saving} className="text-xs font-semibold text-gray-500 hover:underline">
            {entry.archived ? 'Reinstate' : 'Archive'}
          </button>
          <button type="button" onClick={handleDelete} disabled={saving} className="text-xs font-semibold text-red-500 hover:underline">Delete</button>
        </div>
        {error && <p role="alert" className="text-red-500 text-xs mt-1">{error}</p>}
      </td>
    </tr>
  )
}
