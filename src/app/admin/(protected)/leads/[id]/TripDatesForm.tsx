'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1'

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
    <div className="bg-white border border-gray-200 rounded-xl p-7">
      <h2 className="text-sm font-bold text-brand mb-4">Trip Dates</h2>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className={labelCls}>Start</label>
          <input type="date" value={start} onChange={(e) => { setStart(e.target.value); setSaved(false) }} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>End</label>
          <input type="date" value={end} onChange={(e) => { setEnd(e.target.value); setSaved(false) }} className={inputCls} />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={!dirty || saving}
          className="px-4 py-2 bg-brand hover:bg-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg transition-colors"
        >
          {saving ? 'Saving…' : 'Save'}
        </button>
        {saved && !dirty && <span className="text-xs text-green-600 font-medium">Saved</span>}
      </div>
    </div>
  )
}
