'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { TripCatalogEntry } from '@/lib/tripCatalog'
import { todayIso } from '@/lib/dates'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

export default function NewDepartureForm({ tripCatalog }: { tripCatalog: TripCatalogEntry[] }) {
  const router = useRouter()
  const [form, setForm] = useState({ packageSlug: '', customPackageName: '', startDate: '', endDate: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

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
            options={tripCatalog}
            getOptionValue={(p) => p.name}
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
          <p className="text-xs text-gray-400 mt-1">
            Not listed? Choose &quot;Custom / Bespoke Package&quot; below, or add it to the <Link href="/admin/trip-catalog" className="text-brand hover:underline">Trip Catalog</Link> first to reuse it later.
          </p>
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
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Departure'}
        </button>
      </form>
    </div>
  )
}
