'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const inputCls = 'field-input'
const labelCls = 'field-label'

function NewBookingForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const departureId = searchParams.get('departureId')

  const [form, setForm] = useState({ clientName: '', clientEmail: '', clientPhone: '', guestsCount: '1' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!departureId) {
      setError('No departure selected — open this page from a departure\'s detail page.')
      return
    }
    const guestsCount = parseInt(form.guestsCount, 10)
    if (!Number.isFinite(guestsCount) || guestsCount <= 0) {
      setError('Guests must be a positive whole number.')
      return
    }

    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, departureId: Number(departureId), guestsCount }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create booking.')
        setLoading(false)
        return
      }
      const data = await res.json() as { id: number }
      router.push(`/admin/bookings/${data.id}`)
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link
        href={departureId ? `/admin/departures/${departureId}` : '/admin/bookings'}
        className="detail-back"
      >
        ← Back
      </Link>
      <h1 className="mb-6">New Booking</h1>

      {!departureId && (
        <div className="panel mb-6 text-sm" style={{ borderLeft: '4px solid var(--gold)', color: 'var(--ink)' }}>
          No departure selected. Open this page via the &quot;+ New Booking&quot; action on a departure&apos;s detail page.
        </div>
      )}

      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div>
          <label className={labelCls}>Client Name *</label>
          <input required value={form.clientName} onChange={(e) => update('clientName', e.target.value)} className={inputCls} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Client Email</label>
            <input type="email" value={form.clientEmail} onChange={(e) => update('clientEmail', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Client Phone</label>
            <input value={form.clientPhone} onChange={(e) => update('clientPhone', e.target.value)} className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Guests *</label>
          <input type="number" min="1" step="1" required value={form.guestsCount} onChange={(e) => update('guestsCount', e.target.value)} className={`${inputCls} max-w-[140px]`} />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading || !departureId} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading || !departureId ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Booking'}
        </button>
      </form>
    </div>
  )
}

export default function NewBookingPage() {
  return (
    <Suspense fallback={null}>
      <NewBookingForm />
    </Suspense>
  )
}
