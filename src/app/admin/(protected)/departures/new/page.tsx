'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { packages } from '@/data/packages'
import { todayIso } from '@/lib/dates'
import { computeDepartureTotalCost } from '@/lib/departures'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

export default function NewDeparturePage() {
  const router = useRouter()
  const [form, setForm] = useState({
    packageSlug: '', customPackageName: '', startDate: '', endDate: '',
    adults: '1', children: '0', pricePerAdult: '', pricePerChild: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  const adultsNum = parseInt(form.adults, 10)
  const childrenNum = parseInt(form.children, 10) || 0
  const pricePerAdultNum = form.pricePerAdult.trim() === '' ? null : Number(form.pricePerAdult)
  const pricePerChildNum = form.pricePerChild.trim() === '' ? null : Number(form.pricePerChild)
  const totalCost = computeDepartureTotalCost({
    adults: Number.isFinite(adultsNum) ? adultsNum : 0,
    children: childrenNum,
    price_per_adult: pricePerAdultNum,
    price_per_child: pricePerChildNum,
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const isCustom = form.packageSlug === CUSTOM_OPTION_VALUE
    if (!form.packageSlug) {
      setError('Select a package.')
      return
    }
    if (isCustom && !form.customPackageName.trim()) {
      setError('Enter a name for the custom package.')
      return
    }
    if (!Number.isFinite(adultsNum) || adultsNum <= 0) {
      setError('Adults must be a positive whole number.')
      return
    }
    if (!Number.isInteger(childrenNum) || childrenNum < 0) {
      setError('Children must be a whole number (0 or more).')
      return
    }
    if (pricePerAdultNum == null || !Number.isFinite(pricePerAdultNum) || pricePerAdultNum < 0) {
      setError('Price per adult is required.')
      return
    }
    if (childrenNum > 0 && (pricePerChildNum == null || !Number.isFinite(pricePerChildNum) || pricePerChildNum < 0)) {
      setError('Price per child is required when children > 0.')
      return
    }

    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/departures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageSlug: isCustom ? form.customPackageName.trim() : form.packageSlug,
          startDate: form.startDate,
          endDate: form.endDate,
          adults: adultsNum,
          children: childrenNum,
          pricePerAdult: pricePerAdultNum,
          pricePerChild: childrenNum > 0 ? pricePerChildNum : null,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create departure.')
        setLoading(false)
        return
      }
      router.push('/admin/departures')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/departures" className="detail-back">← Back to Departures</Link>
      <h1 className="mb-6">New Departure</h1>
      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div>
          <label className="field-label">Package *</label>
          <SelectWithCustom
            required
            options={packages}
            getOptionValue={(p) => p.slug}
            getOptionLabel={(p) => p.name}
            value={form.packageSlug}
            onChange={(v) => update('packageSlug', v)}
            customValue={form.customPackageName}
            onCustomChange={(v) => update('customPackageName', v)}
            placeholder="— Select a package —"
            customOptionLabel="— Custom / Bespoke Package —"
            customLabel="Custom Package Name *"
            customPlaceholder="e.g. Private Family Safari — Smith Family"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="field-label">Start Date *</label>
            <input type="date" required min={todayIso()} value={form.startDate} onChange={(e) => update('startDate', e.target.value)} className="field-input" />
          </div>
          <div>
            <label className="field-label">End Date *</label>
            <input type="date" required min={todayIso()} value={form.endDate} onChange={(e) => update('endDate', e.target.value)} className="field-input" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="field-label">Adults *</label>
            <input type="number" min="1" step="1" required value={form.adults} onChange={(e) => update('adults', e.target.value)} className="field-input" />
          </div>
          <div>
            <label className="field-label">Children</label>
            <input type="number" min="0" step="1" value={form.children} onChange={(e) => update('children', e.target.value)} className="field-input" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="field-label">Price per Adult (USD) *</label>
            <input type="number" min="0" step="0.01" required value={form.pricePerAdult} onChange={(e) => update('pricePerAdult', e.target.value)} className="field-input" />
          </div>
          <div>
            <label className="field-label">Price per Child (USD){childrenNum > 0 ? ' *' : ''}</label>
            <input type="number" min="0" step="0.01" required={childrenNum > 0} disabled={childrenNum === 0} value={form.pricePerChild} onChange={(e) => update('pricePerChild', e.target.value)} className="field-input" />
          </div>
        </div>
        {totalCost != null && (
          <p className="text-sm" style={{ color: 'var(--grey)' }}>
            Total cost: <span className="font-semibold mono" style={{ color: 'var(--pine)' }}>USD {totalCost.toLocaleString()}</span>
          </p>
        )}
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Departure'}
        </button>
      </form>
    </div>
  )
}
