'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { PERMIT_TYPES, type PermitType } from '@/lib/compliance'
import type { Departure } from '@/lib/departures'
import { packages } from '@/data/packages'

const inputCls = 'field-input'
const labelCls = 'field-label'

const TYPE_LABELS: Record<PermitType, string> = { tanapa: 'TANAPA', ncaa: 'NCAA', other: 'Other' }

function departureLabel(d: Departure): string {
  const pkg = packages.find((p) => p.slug === d.package_slug)
  return `${pkg?.name ?? d.package_slug} (${d.start_date})`
}

export default function NewPermitForm({ departures }: { departures: Departure[] }) {
  const router = useRouter()
  const [form, setForm] = useState({
    departureId: '', type: 'tanapa' as PermitType, park: '', permitNumber: '',
    amountPaid: '', currency: 'USD', confirmationRef: '', validFrom: '', validTo: '', notes: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/permits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          departureId: form.departureId ? Number(form.departureId) : undefined,
          amountPaid: form.amountPaid ? parseFloat(form.amountPaid) : undefined,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create permit.')
        setLoading(false)
        return
      }
      router.push('/admin/permits')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/permits" className="detail-back">← Back to Permits</Link>
      <h1 className="mb-6">New Permit</h1>
      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Type</label>
            <select value={form.type} onChange={(e) => update('type', e.target.value)} className={inputCls}>
              {PERMIT_TYPES.map((t) => <option key={t} value={t}>{TYPE_LABELS[t]}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Departure (optional)</label>
            <select value={form.departureId} onChange={(e) => update('departureId', e.target.value)} className={inputCls}>
              <option value="">—</option>
              {departures.map((d) => <option key={d.id} value={d.id}>{departureLabel(d)}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Park</label>
            <input value={form.park} onChange={(e) => update('park', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Permit Number</label>
            <input value={form.permitNumber} onChange={(e) => update('permitNumber', e.target.value)} className={inputCls} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Amount Paid</label>
            <input type="number" min="0" step="0.01" value={form.amountPaid} onChange={(e) => update('amountPaid', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Currency</label>
            <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Confirmation Ref</label>
          <input value={form.confirmationRef} onChange={(e) => update('confirmationRef', e.target.value)} className={inputCls} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Valid From</label>
            <input type="date" value={form.validFrom} onChange={(e) => update('validFrom', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Valid To</label>
            <input type="date" value={form.validTo} onChange={(e) => update('validTo', e.target.value)} className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Notes</label>
          <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className={inputCls} />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Permit'}
        </button>
      </form>
    </div>
  )
}
