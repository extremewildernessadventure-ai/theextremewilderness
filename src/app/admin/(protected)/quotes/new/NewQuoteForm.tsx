'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import type { TripCatalogEntry } from '@/lib/tripCatalog'
import { computeQuoteTotalCost } from '@/lib/quotes'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'
import { todayIso } from '@/lib/dates'

const inputCls = 'field-input'
const labelCls = 'field-label'

export default function NewQuoteForm({ tripCatalog }: { tripCatalog: TripCatalogEntry[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const leadId = searchParams.get('leadId')
  const clientId = searchParams.get('clientId')
  const hasOwner = !!leadId || !!clientId

  const [form, setForm] = useState({
    packageSlug: '', customPackageName: '', currency: 'USD', validUntil: '', notes: '',
    adults: '1', children: '0', pricePerAdult: '', pricePerChild: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  const adultsNum = parseInt(form.adults, 10)
  const childrenNum = parseInt(form.children, 10) || 0
  const pricePerAdultNum = form.pricePerAdult.trim() === '' ? null : Number(form.pricePerAdult)
  const pricePerChildNum = form.pricePerChild.trim() === '' ? null : Number(form.pricePerChild)
  const totalCost = computeQuoteTotalCost({
    adults: Number.isFinite(adultsNum) ? adultsNum : 0,
    children: childrenNum,
    price_per_adult: pricePerAdultNum,
    price_per_child: pricePerChildNum,
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!hasOwner) {
      setError('No lead or client selected — open this page from a lead\'s or client\'s detail page.')
      return
    }
    const isCustom = form.packageSlug === CUSTOM_OPTION_VALUE
    if (isCustom && !form.customPackageName.trim()) {
      setError('Enter a name for the custom package.')
      return
    }
    if (!Number.isFinite(adultsNum) || adultsNum <= 0) {
      setError('Adults must be a positive whole number.')
      return
    }
    if (!Number.isInteger(childrenNum) || childrenNum < 0) {
      setError('Children must be a whole number (0 or more).')
      return
    }
    if (pricePerAdultNum == null || !Number.isFinite(pricePerAdultNum) || pricePerAdultNum < 0) {
      setError('Price per adult is required.')
      return
    }
    if (childrenNum > 0 && (pricePerChildNum == null || !Number.isFinite(pricePerChildNum) || pricePerChildNum < 0)) {
      setError('Price per child is required when children > 0.')
      return
    }

    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId: leadId ? Number(leadId) : undefined,
          clientId: clientId ? Number(clientId) : undefined,
          packageSlug: (isCustom ? form.customPackageName.trim() : form.packageSlug) || undefined,
          adults: adultsNum,
          children: childrenNum,
          pricePerAdult: pricePerAdultNum,
          pricePerChild: childrenNum > 0 ? pricePerChildNum : null,
          currency: form.currency,
          validUntil: form.validUntil || undefined,
          notes: form.notes || undefined,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create quote.')
        setLoading(false)
        return
      }
      const data = await res.json() as { id: number }
      router.push(`/admin/quotes/${data.id}`)
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  const backHref = leadId ? `/admin/leads/${leadId}` : clientId ? `/admin/clients/${clientId}` : '/admin/quotes'

  return (
    <div className="max-w-2xl">
      <Link href={backHref} className="detail-back">← Back</Link>
      <h1 className="mb-6">New Quote</h1>

      {!hasOwner && (
        <div className="panel mb-6 text-sm" style={{ borderLeft: '4px solid var(--gold)' }}>
          No lead or client selected. Open this page via the &quot;New Quote&quot; action on a lead&apos;s or client&apos;s detail page.
        </div>
      )}

      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div>
          <label className={labelCls}>Package (optional)</label>
          <SelectWithCustom
            options={tripCatalog}
            getOptionValue={(p) => p.name}
            getOptionLabel={(p) => p.name}
            value={form.packageSlug}
            onChange={(v) => update('packageSlug', v)}
            customValue={form.customPackageName}
            onCustomChange={(v) => update('customPackageName', v)}
            placeholder="— No specific package —"
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
            <label className={labelCls}>Adults *</label>
            <input type="number" min="1" step="1" required value={form.adults} onChange={(e) => update('adults', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Children</label>
            <input type="number" min="0" step="1" value={form.children} onChange={(e) => update('children', e.target.value)} className={inputCls} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Price per Adult *</label>
            <input type="number" min="0" step="0.01" required value={form.pricePerAdult} onChange={(e) => update('pricePerAdult', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Price per Child{childrenNum > 0 ? ' *' : ''}</label>
            <input type="number" min="0" step="0.01" required={childrenNum > 0} disabled={childrenNum === 0} value={form.pricePerChild} onChange={(e) => update('pricePerChild', e.target.value)} className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Currency</label>
          <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={inputCls} style={{ maxWidth: 140 }} />
        </div>
        {totalCost != null && (
          <p className="text-sm" style={{ color: 'var(--grey)' }}>
            Total: <span className="font-semibold mono" style={{ color: 'var(--pine)' }}>{form.currency} {totalCost.toLocaleString()}</span>
          </p>
        )}
        <div>
          <label className={labelCls}>Valid Until</label>
          <input type="date" min={todayIso()} value={form.validUntil} onChange={(e) => update('validUntil', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Internal Notes</label>
          <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className={inputCls} />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading || !hasOwner} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading || !hasOwner ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Quote'}
        </button>
      </form>
    </div>
  )
}
