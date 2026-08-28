'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const inputCls = 'field-input'
const labelCls = 'field-label'

// For anything that isn't a safari on a catalog departure — a venue rental,
// a pitch booking for a corporate tournament, an arena for a performance,
// research-trip facilities, a homestay with no departure attached, etc.
// No departure/package concept here at all; what's actually being booked is
// captured as free text (customDescription) rather than forced into a
// structured field that wouldn't fit every case. Dates and any
// accommodation/facility detail are added afterward via the booking's own
// Accommodation & Facilities panel, which already supports free-text
// entries and check-in/check-out dates.
export default function NewCustomBookingPage() {
  const router = useRouter()
  const [form, setForm] = useState({ clientName: '', clientEmail: '', clientPhone: '', guestsCount: '1', customDescription: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.customDescription.trim()) {
      setError('Describe what\'s being booked.')
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
        body: JSON.stringify({ ...form, guestsCount, bookingType: 'custom' }),
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
      <Link href="/admin/bookings" className="detail-back">← Back to Bookings</Link>
      <h1 className="mb-1">New Custom Booking</h1>
      <p className="text-sm text-gray-500 mb-6">For anything that isn&apos;t a safari on a departure — a venue, a pitch, an arena, a homestay, or any other one-off booking.</p>

      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div>
          <label className={labelCls}>What are you booking? *</label>
          <textarea
            required
            value={form.customDescription}
            onChange={(e) => update('customDescription', e.target.value)}
            rows={3}
            className={inputCls}
            placeholder="e.g. Private arena — cultural performance, 3 nights; or Football pitch — corporate tournament, 2 days"
          />
        </div>
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
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Booking'}
        </button>
      </form>
    </div>
  )
}
