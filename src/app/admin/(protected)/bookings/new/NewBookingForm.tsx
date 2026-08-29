'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import type { Departure } from '@/lib/departures'
import type { Client } from '@/lib/clients'
import { packages } from '@/data/packages'

const inputCls = 'field-input'
const labelCls = 'field-label'

function departureLabel(d: Departure): string {
  const pkg = packages.find((p) => p.slug === d.package_slug)
  return `${pkg?.name ?? d.package_slug} (${d.start_date})`
}

function clientLabel(c: Client): string {
  return c.email ? `${c.name} (${c.email})` : c.name
}

// Departure is optional here on purpose — a booking with no departure at
// all (a venue rental, a one-off facility booking) is valid. What's
// actually being booked is recorded afterward via Accommodation &
// Facilities / Custom Bookings on the booking's own detail page, not asked
// for at creation time.
function NewBookingFormInner({ departures, clients }: { departures: Departure[]; clients: Client[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialDepartureId = searchParams.get('departureId') ?? ''

  const [form, setForm] = useState({ clientId: '', clientName: '', clientEmail: '', clientPhone: '', guestsCount: '1', departureId: initialDepartureId })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  // Picking an existing client fills in Name/Email/Phone from their record
  // — same "same one client, read everywhere else" idea as picking a guide
  // — but only where the field is still empty, so it never clobbers
  // something staff already typed (same rule already used for lodge
  // provider-contact prefill).
  function handleClientSelect(value: string) {
    update('clientId', value)
    const client = clients.find((c) => String(c.id) === value)
    if (!client) return
    setForm((f) => ({
      ...f,
      clientId: value,
      clientName: f.clientName || client.name,
      clientEmail: f.clientEmail || (client.email ?? ''),
      clientPhone: f.clientPhone || (client.phone ?? ''),
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
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
        body: JSON.stringify({
          ...form,
          clientId: form.clientId ? Number(form.clientId) : undefined,
          departureId: form.departureId ? Number(form.departureId) : undefined,
          guestsCount,
        }),
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
        href={form.departureId ? `/admin/departures/${form.departureId}` : '/admin/bookings'}
        className="detail-back"
      >
        ← Back
      </Link>
      <h1 className="mb-6">New Booking</h1>

      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div>
          <label className={labelCls}>Existing Client (optional)</label>
          <select value={form.clientId} onChange={(e) => handleClientSelect(e.target.value)} className={inputCls}>
            <option value="">— New / not listed —</option>
            {clients.map((c) => <option key={c.id} value={c.id}>{clientLabel(c)}</option>)}
          </select>
          <p className="text-xs text-gray-400 mt-1">Picking a client fills in the fields below — leave this on &quot;New&quot; and just type their details to add them to Clients &amp; Reviews.</p>
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
        <div>
          <label className={labelCls}>Departure (optional)</label>
          <select value={form.departureId} onChange={(e) => update('departureId', e.target.value)} className={inputCls}>
            <option value="">— No departure (venue/facility booking) —</option>
            {departures.map((d) => <option key={d.id} value={d.id}>{departureLabel(d)}</option>)}
          </select>
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Booking'}
        </button>
      </form>
    </div>
  )
}

export default function NewBookingForm({ departures, clients }: { departures: Departure[]; clients: Client[] }) {
  return (
    <Suspense fallback={null}>
      <NewBookingFormInner departures={departures} clients={clients} />
    </Suspense>
  )
}
