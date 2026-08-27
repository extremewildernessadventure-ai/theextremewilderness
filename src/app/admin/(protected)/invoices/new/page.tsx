'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Plus, Trash2 } from 'lucide-react'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

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

function NewInvoiceForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  // Pre-fill from a Quote's "Convert to Invoice" link (/admin/quotes/[id]) —
  // a plain query-param deep-link, not a fetch, so no extra round-trip.
  const [form, setForm] = useState({
    clientName: searchParams.get('clientName') ?? '',
    clientEmail: searchParams.get('clientEmail') ?? '',
    bookingReference: '',
    currency: searchParams.get('currency') || 'USD',
    dueDate: '',
    notes: '',
  })
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
      const res = await fetch('/api/admin/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, items: parsedItems }),
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
      <Link href="/admin/invoices" className="text-sm text-gray-500 hover:text-brand mb-4 inline-block">← Back to Invoices</Link>
      <h1 className="text-2xl font-bold text-brand mb-6">New Invoice</h1>
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
            <label className={labelCls}>Booking Reference</label>
            <input value={form.bookingReference} onChange={(e) => update('bookingReference', e.target.value)} className={inputCls} placeholder="Leave blank to auto-generate" />
          </div>
        </div>
        <div>
          <label className={labelCls}>Currency</label>
          <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={`${inputCls} max-w-[140px]`} />
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
                <span className="text-sm text-gray-600 text-end whitespace-nowrap">
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
          <div className="w-full max-w-[220px] flex justify-between items-baseline bg-brand/5 rounded-lg px-4 py-3">
            <span className="text-xs font-bold uppercase tracking-wide text-gold-label">Total</span>
            <span className="text-lg font-black text-brand">
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
        <button type="submit" disabled={loading} className="w-full py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
          {loading ? 'Creating…' : 'Create Invoice'}
        </button>
      </form>
    </div>
  )
}

export default function NewInvoicePage() {
  return (
    <Suspense fallback={null}>
      <NewInvoiceForm />
    </Suspense>
  )
}
