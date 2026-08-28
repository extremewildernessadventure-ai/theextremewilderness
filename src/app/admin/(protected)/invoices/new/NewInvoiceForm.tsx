'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Plus, Trash2 } from 'lucide-react'
import type { Departure } from '@/lib/departures'
import { packages } from '@/data/packages'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

const inputCls = 'field-input'
const labelCls = 'field-label'

type ItemRow = { description: string; quantity: string; unitPrice: string }

function emptyRow(): ItemRow {
  return { description: '', quantity: '1', unitPrice: '' }
}

function lineTotal(row: ItemRow): number {
  const qty = parseFloat(row.quantity)
  const price = parseFloat(row.unitPrice)
  if (!Number.isFinite(qty) || !Number.isFinite(price)) return 0
  return qty * price
}

function departureLabel(d: Departure): string {
  const pkg = packages.find((p) => p.slug === d.package_slug)
  return `${pkg?.name ?? d.package_slug} (${d.start_date})`
}

export default function NewInvoiceForm({ departures }: { departures: Departure[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  // Pre-fill from a Quote's "Convert to Invoice" link (/admin/quotes/[id]) —
  // a plain query-param deep-link, not a fetch, so no extra round-trip.
  const [form, setForm] = useState({
    clientName: searchParams.get('clientName') ?? '',
    clientEmail: searchParams.get('clientEmail') ?? '',
    bookingReference: '',
    currency: searchParams.get('currency') || 'USD',
    departureId: '',
    dueDate: '',
    notes: '',
  })
  const [departureNotesOther, setDepartureNotesOther] = useState('')
  const [items, setItems] = useState<ItemRow[]>(() => {
    const description = searchParams.get('itemDescription')
    const price = searchParams.get('itemPrice')
    if (description && price) {
      return [{ description, quantity: '1', unitPrice: price }]
    }
    return [emptyRow()]
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function updateItem(index: number, key: keyof ItemRow, value: string) {
    setItems((rows) => rows.map((row, i) => (i === index ? { ...row, [key]: value } : row)))
  }

  function addItem() {
    setItems((rows) => [...rows, emptyRow()])
  }

  function removeItem(index: number) {
    setItems((rows) => (rows.length === 1 ? rows : rows.filter((_, i) => i !== index)))
  }

  const total = items.reduce((sum, row) => sum + lineTotal(row), 0)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const parsedItems = items
      .filter((row) => row.description.trim() !== '')
      .map((row) => ({
        description: row.description.trim(),
        quantity: parseFloat(row.quantity) || 0,
        unitPrice: parseFloat(row.unitPrice) || 0,
      }))

    if (parsedItems.length === 0) {
      setError('Add at least one line item.')
      setLoading(false)
      return
    }
    if (parsedItems.some((item) => item.quantity <= 0 || item.unitPrice < 0)) {
      setError('Each line item needs a quantity greater than 0 and a unit price of 0 or more.')
      setLoading(false)
      return
    }

    try {
      const isCustomDeparture = form.departureId === CUSTOM_OPTION_VALUE
      const res = await fetch('/api/admin/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          departureId: isCustomDeparture || !form.departureId ? undefined : Number(form.departureId),
          departureNotesOther: isCustomDeparture ? departureNotesOther.trim() : undefined,
          items: parsedItems,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Failed to create invoice.')
        setLoading(false)
        return
      }
      router.push('/admin/invoices')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/invoices" className="detail-back">← Back to Invoices</Link>
      <h1 className="mb-6">New Invoice</h1>
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
            <label className={labelCls}>Booking Reference</label>
            <input value={form.bookingReference} onChange={(e) => update('bookingReference', e.target.value)} className={inputCls} placeholder="Leave blank to auto-generate" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Currency</label>
            <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Departure (optional)</label>
            <SelectWithCustom
              options={departures}
              getOptionValue={(d) => String(d.id)}
              getOptionLabel={departureLabel}
              value={form.departureId}
              onChange={(v) => update('departureId', v)}
              customValue={departureNotesOther}
              onCustomChange={setDepartureNotesOther}
              placeholder="—"
              customPlaceholder="Enter departure details…"
            />
          </div>
        </div>

        <div className="pt-2">
          <label className={labelCls}>Line Items *</label>
          <div className="space-y-2">
            {items.map((row, i) => (
              <div key={i} className="grid grid-cols-[1fr_72px_100px_90px_auto] gap-2 items-center">
                <input
                  value={row.description}
                  onChange={(e) => updateItem(i, 'description', e.target.value)}
                  className={inputCls}
                  placeholder="e.g. Deposit — 7 Day Serengeti & Ngorongoro Safari"
                />
                <input
                  type="number" min="0" step="1" value={row.quantity}
                  onChange={(e) => updateItem(i, 'quantity', e.target.value)}
                  className={inputCls} placeholder="Qty"
                />
                <input
                  type="number" min="0" step="0.01" value={row.unitPrice}
                  onChange={(e) => updateItem(i, 'unitPrice', e.target.value)}
                  className={inputCls} placeholder="Unit price"
                />
                <span className="text-sm text-gray-600 text-end whitespace-nowrap mono">
                  {form.currency} {lineTotal(row).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <button
                  type="button"
                  onClick={() => removeItem(i)}
                  disabled={items.length === 1}
                  className="p-2 text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:hover:text-gray-400"
                  aria-label="Remove line item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addItem}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-secondary"
          >
            <Plus className="w-4 h-4" /> Add line item
          </button>
        </div>

        <div className="flex justify-end pt-2 border-t border-gray-100">
          <div className="w-full max-w-[220px] flex justify-between items-baseline rounded-lg px-4 py-3" style={{ background: 'var(--green-bg)' }}>
            <span className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--pine)' }}>Total</span>
            <span className="text-lg font-black text-brand mono">
              {form.currency} {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        <div>
          <label className={labelCls}>Due Date</label>
          <input type="date" value={form.dueDate} onChange={(e) => update('dueDate', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Internal Notes</label>
          <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} className={inputCls} rows={3} />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Invoice'}
        </button>
      </form>
    </div>
  )
}
