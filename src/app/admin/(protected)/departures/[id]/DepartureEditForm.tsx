'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Departure } from '@/lib/departures'
import { todayIso } from '@/lib/dates'

const inputCls = 'field-input'
const labelCls = 'field-label'

export default function DepartureEditForm({ departure }: { departure: Departure }) {
  const router = useRouter()
  const [form, setForm] = useState({
    startDate: departure.start_date,
    endDate: departure.end_date,
    cancelled: departure.cancelled === 1,
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    await fetch(`/api/admin/departures/${departure.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-4">
      <h2 className="mb-1">Edit Departure</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Start Date</label>
          <input type="date" min={todayIso()} value={form.startDate} onChange={(e) => update('startDate', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>End Date</label>
          <input type="date" min={todayIso()} value={form.endDate} onChange={(e) => update('endDate', e.target.value)} className={inputCls} />
        </div>
      </div>
      <div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.cancelled} onChange={(e) => update('cancelled', e.target.checked)} />
          Cancelled
        </label>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
