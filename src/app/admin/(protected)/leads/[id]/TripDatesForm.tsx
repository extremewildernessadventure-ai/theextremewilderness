'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function TripDatesForm({ leadId, initialStart, initialEnd }: {
  leadId: number
  initialStart: string | null
  initialEnd: string | null
}) {
  const router = useRouter()
  const [start, setStart] = useState(initialStart ?? '')
  const [end, setEnd] = useState(initialEnd ?? '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const dirty = start !== (initialStart ?? '') || end !== (initialEnd ?? '')

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    const res = await fetch(`/api/admin/leads/${leadId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tripStartDate: start, tripEndDate: end }),
    })
    setSaving(false)
    if (res.ok) {
      setSaved(true)
      router.refresh()
    }
  }

  return (
    <div className="panel">
      <h2 className="mb-4">Trip Dates</h2>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="field-label">Start</label>
          <input type="date" value={start} onChange={(e) => { setStart(e.target.value); setSaved(false) }} className="field-input" />
        </div>
        <div>
          <label className="field-label">End</label>
          <input type="date" value={end} onChange={(e) => { setEnd(e.target.value); setSaved(false) }} className="field-input" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={!dirty || saving} className="btn-primary" style={{ opacity: !dirty || saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save'}
        </button>
        {saved && !dirty && <span className="text-xs text-green-600 font-medium">Saved</span>}
      </div>
    </div>
  )
}
