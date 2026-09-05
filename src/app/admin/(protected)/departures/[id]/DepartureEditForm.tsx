'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { computeDepartureTotalCost, type Departure } from '@/lib/departures'
import { todayIso } from '@/lib/dates'

const inputCls = 'field-input'
const labelCls = 'field-label'

export default function DepartureEditForm({ departure }: { departure: Departure }) {
  const router = useRouter()
  const [form, setForm] = useState({
    startDate: departure.start_date,
    endDate: departure.end_date,
    adults: String(departure.adults),
    children: String(departure.children),
    pricePerAdult: departure.price_per_adult == null ? '' : String(departure.price_per_adult),
    pricePerChild: departure.price_per_child == null ? '' : String(departure.price_per_child),
    cancelled: departure.cancelled === 1,
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  const adultsNum = parseInt(form.adults, 10) || 0
  const childrenNum = parseInt(form.children, 10) || 0
  const pricePerAdultNum = form.pricePerAdult.trim() === '' ? null : Number(form.pricePerAdult)
  const pricePerChildNum = form.pricePerChild.trim() === '' ? null : Number(form.pricePerChild)
  const totalCost = computeDepartureTotalCost({
    adults: adultsNum, children: childrenNum,
    price_per_adult: pricePerAdultNum, price_per_child: pricePerChildNum,
  })

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    await fetch(`/api/admin/departures/${departure.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        startDate: form.startDate,
        endDate: form.endDate,
        adults: adultsNum,
        children: childrenNum,
        pricePerAdult: pricePerAdultNum,
        pricePerChild: childrenNum > 0 ? pricePerChildNum : null,
        cancelled: form.cancelled,
      }),
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
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Adults</label>
          <input type="number" min="1" step="1" value={form.adults} onChange={(e) => update('adults', e.target.value)} className={`${inputCls} max-w-[140px]`} />
        </div>
        <div>
          <label className={labelCls}>Children</label>
          <input type="number" min="0" step="1" value={form.children} onChange={(e) => update('children', e.target.value)} className={`${inputCls} max-w-[140px]`} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Price per Adult (USD)</label>
          <input type="number" min="0" step="0.01" value={form.pricePerAdult} onChange={(e) => update('pricePerAdult', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Price per Child (USD)</label>
          <input type="number" min="0" step="0.01" disabled={childrenNum === 0} value={form.pricePerChild} onChange={(e) => update('pricePerChild', e.target.value)} className={inputCls} />
        </div>
      </div>
      {totalCost != null && (
        <p className="text-sm" style={{ color: 'var(--grey)' }}>
          Total cost: <span className="font-semibold mono" style={{ color: 'var(--pine)' }}>USD {totalCost.toLocaleString()}</span>
        </p>
      )}
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
