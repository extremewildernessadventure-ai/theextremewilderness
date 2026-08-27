'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { packages } from '@/data/packages'

export default function NewDeparturePage() {
  const router = useRouter()
  const [form, setForm] = useState({ packageSlug: '', startDate: '', endDate: '', capacity: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const capacity = parseInt(form.capacity, 10)
    if (!form.packageSlug) {
      setError('Select a package.')
      return
    }
    if (!Number.isFinite(capacity) || capacity <= 0) {
      setError('Capacity must be a positive whole number.')
      return
    }

    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/departures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, capacity }),
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
          <select required value={form.packageSlug} onChange={(e) => update('packageSlug', e.target.value)} className="field-input">
            <option value="">— Select a package —</option>
            {packages.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="field-label">Start Date *</label>
            <input type="date" required value={form.startDate} onChange={(e) => update('startDate', e.target.value)} className="field-input" />
          </div>
          <div>
            <label className="field-label">End Date *</label>
            <input type="date" required value={form.endDate} onChange={(e) => update('endDate', e.target.value)} className="field-input" />
          </div>
        </div>
        <div>
          <label className="field-label">Capacity (seats) *</label>
          <input type="number" min="1" step="1" required value={form.capacity} onChange={(e) => update('capacity', e.target.value)} className="field-input" style={{ maxWidth: 140 }} />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Departure'}
        </button>
      </form>
    </div>
  )
}
