'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { Client } from '@/lib/clients'
import type { Booking } from '@/lib/bookings'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

const inputCls = 'field-input'
const labelCls = 'field-label'

export default function NewReviewForm({ clients, bookings }: { clients: Client[]; bookings: Booking[] }) {
  const router = useRouter()
  const [form, setForm] = useState({
    clientId: '', clientNameOther: '', bookingId: '', bookingRefOther: '', rating: '5', quoteText: '', source: '', parkTag: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.quoteText.trim()) {
      setError('The quote text is required — paste it verbatim from the original review.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const isCustomClient = form.clientId === CUSTOM_OPTION_VALUE
      const isCustomBooking = form.bookingId === CUSTOM_OPTION_VALUE
      const res = await fetch('/api/admin/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          rating: Number(form.rating),
          clientId: isCustomClient || !form.clientId ? undefined : Number(form.clientId),
          clientNameOther: isCustomClient ? form.clientNameOther.trim() : undefined,
          bookingId: isCustomBooking || !form.bookingId ? undefined : Number(form.bookingId),
          bookingRefOther: isCustomBooking ? form.bookingRefOther.trim() : undefined,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create review.')
        setLoading(false)
        return
      }
      router.push('/admin/reviews')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/reviews" className="detail-back">← Back to Reviews</Link>
      <h1 className="mb-2">New Review</h1>
      <p className="text-sm mb-6" style={{ color: 'var(--grey)' }}>
        Paste the quote verbatim from a verified external review — never invent or paraphrase it.
      </p>
      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Client (optional)</label>
            <SelectWithCustom
              options={clients}
              getOptionValue={(c) => String(c.id)}
              getOptionLabel={(c) => c.name}
              value={form.clientId}
              onChange={(v) => update('clientId', v)}
              customValue={form.clientNameOther}
              onCustomChange={(v) => update('clientNameOther', v)}
              placeholder="—"
              customPlaceholder="Enter client name…"
            />
          </div>
          <div>
            <label className={labelCls}>Booking (optional)</label>
            <SelectWithCustom
              options={bookings}
              getOptionValue={(b) => String(b.id)}
              getOptionLabel={(b) => b.client_name}
              value={form.bookingId}
              onChange={(v) => update('bookingId', v)}
              customValue={form.bookingRefOther}
              onCustomChange={(v) => update('bookingRefOther', v)}
              placeholder="—"
              customPlaceholder="Enter booking reference…"
            />
          </div>
        </div>
        <div>
          <label className={labelCls}>Rating</label>
          <select value={form.rating} onChange={(e) => update('rating', e.target.value)} className={`${inputCls} max-w-[140px]`}>
            {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} star{n !== 1 ? 's' : ''}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Quote (verbatim) *</label>
          <textarea required value={form.quoteText} onChange={(e) => update('quoteText', e.target.value)} rows={4} className={inputCls} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Source</label>
            <input value={form.source} onChange={(e) => update('source', e.target.value)} placeholder="e.g. TripAdvisor, Google" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Park Tag</label>
            <input value={form.parkTag} onChange={(e) => update('parkTag', e.target.value)} placeholder="e.g. Serengeti" className={inputCls} />
          </div>
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Review'}
        </button>
      </form>
    </div>
  )
}
