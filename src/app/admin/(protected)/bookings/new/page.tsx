'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

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
        className="text-sm text-gray-500 hover:text-brand mb-4 inline-block"
      >
        ← Back
      </Link>
      <h1 className="text-2xl font-bold text-brand mb-6">New Booking</h1>

      {!departureId && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
          No departure selected. Open this page via the &quot;+ New Booking&quot; action on a departure&apos;s detail page.
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
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
        <button
          type="submit"
          disabled={loading || !departureId}
          className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm"
        >
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
