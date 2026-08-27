'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewVehiclePage() {
  const router = useRouter()
  const [form, setForm] = useState({ plateNumber: '', capacity: '', notes: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const capacity = parseInt(form.capacity, 10)
    if (!Number.isFinite(capacity) || capacity <= 0) {
      setError('Capacity must be a positive whole number.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/vehicles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, capacity }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create vehicle.')
        setLoading(false)
        return
      }
      router.push('/admin/vehicles')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/vehicles" className="detail-back">← Back to Vehicles</Link>
      <h1 className="mb-6">New Vehicle</h1>
      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div>
          <label className="field-label">Plate Number *</label>
          <input required value={form.plateNumber} onChange={(e) => update('plateNumber', e.target.value)} className="field-input" />
        </div>
        <div>
          <label className="field-label">Capacity (seats) *</label>
          <input type="number" min="1" step="1" required value={form.capacity} onChange={(e) => update('capacity', e.target.value)} className="field-input" style={{ maxWidth: 140 }} />
        </div>
        <div>
          <label className="field-label">Notes</label>
          <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className="field-input" />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Vehicle'}
        </button>
      </form>
    </div>
  )
}
