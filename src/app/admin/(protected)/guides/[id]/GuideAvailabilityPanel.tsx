'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GUIDE_AVAILABILITY_TYPES, type GuideAvailabilityType, type GuideAvailability } from '@/lib/hr'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1'

const TYPE_LABELS: Record<GuideAvailabilityType, string> = { leave: 'Leave', unavailable: 'Unavailable', booked: 'Booked' }

export default function GuideAvailabilityPanel({ guideId, availability }: { guideId: number; availability: GuideAvailability[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ startDate: '', endDate: '', type: 'leave' as GuideAvailabilityType, notes: '' })
  const [saving, setSaving] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleAdd() {
    if (!form.startDate || !form.endDate) return
    setSaving(true)
    const res = await fetch(`/api/admin/guides/${guideId}/availability`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSaving(false)
    if (res.ok) {
      setForm({ startDate: '', endDate: '', type: 'leave', notes: '' })
      setOpen(false)
      router.refresh()
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-7">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-brand">Availability</h2>
        <button type="button" onClick={() => setOpen((v) => !v)} className="text-xs font-semibold text-brand hover:underline">
          {open ? 'Cancel' : '+ Add Entry'}
        </button>
      </div>

      {availability.length > 0 ? (
        <ul className="space-y-2">
          {availability.map((a) => (
            <li key={a.id} className="flex items-center justify-between text-sm">
              <span className="text-gray-700">{a.start_date} → {a.end_date}</span>
              <span className="capitalize text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{TYPE_LABELS[a.type]}</span>
            </li>
          ))}
        </ul>
      ) : (
        !open && <p className="text-sm text-gray-400">No leave/unavailability recorded.</p>
      )}

      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          <div className="grid grid-cols-2 gap-3">
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
            <label className={labelCls}>Type</label>
            <select value={form.type} onChange={(e) => update('type', e.target.value as GuideAvailabilityType)} className={inputCls}>
              {GUIDE_AVAILABILITY_TYPES.map((t) => <option key={t} value={t}>{TYPE_LABELS[t]}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Notes</label>
            <input value={form.notes} onChange={(e) => update('notes', e.target.value)} className={inputCls} />
          </div>
          <button
            type="button"
            onClick={handleAdd}
            disabled={saving || !form.startDate || !form.endDate}
            className="px-4 py-2 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            {saving ? 'Adding…' : 'Add Entry'}
          </button>
        </div>
      )}
    </div>
  )
}
