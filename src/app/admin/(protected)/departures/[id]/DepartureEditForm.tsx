'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DEPARTURE_STATUSES, type Departure } from '@/lib/departures'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

export default function DepartureEditForm({ departure }: { departure: Departure }) {
  const router = useRouter()
  const [form, setForm] = useState({
    startDate: departure.start_date,
    endDate: departure.end_date,
    capacity: String(departure.capacity),
    status: departure.status,
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    await fetch(`/api/admin/departures/${departure.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, capacity: parseInt(form.capacity, 10) }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
      <h2 className="text-sm font-bold text-brand mb-1">Edit Departure</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Start Date</label>
          <input type="date" value={form.startDate} onChange={(e) => update('startDate', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>End Date</label>
          <input type="date" value={form.endDate} onChange={(e) => update('endDate', e.target.value)} className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Capacity</label>
        <input type="number" min="1" step="1" value={form.capacity} onChange={(e) => update('capacity', e.target.value)} className={`${inputCls} max-w-[140px]`} />
      </div>
      <div>
        <label className={labelCls}>Status</label>
        <select value={form.status} onChange={(e) => update('status', e.target.value)} className={`${inputCls} capitalize`}>
          {DEPARTURE_STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s.replace('_', ' ')}</option>)}
        </select>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
