'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

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
      <Link href="/admin/vehicles" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Vehicles</Link>
      <h1 className="text-2xl font-bold text-brand mb-6">New Vehicle</h1>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
        <div>
          <label className={labelCls}>Plate Number *</label>
          <input required value={form.plateNumber} onChange={(e) => update('plateNumber', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Capacity (seats) *</label>
          <input type="number" min="1" step="1" required value={form.capacity} onChange={(e) => update('capacity', e.target.value)} className={`${inputCls} max-w-[140px]`} />
        </div>
        <div>
          <label className={labelCls}>Notes</label>
          <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className={inputCls} />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
          {loading ? 'Creating…' : 'Create Vehicle'}
        </button>
      </form>
    </div>
  )
}
