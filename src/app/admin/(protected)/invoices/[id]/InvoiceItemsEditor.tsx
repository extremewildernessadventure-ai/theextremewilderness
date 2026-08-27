'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Trash2 } from 'lucide-react'
import type { Invoice, InvoiceItem } from '@/lib/db'

const inputCls = 'field-input'
const labelCls = 'field-label'

type Row = { description: string; quantity: string; unitPrice: string }

function toRow(item: InvoiceItem): Row {
  return { description: item.description, quantity: String(item.quantity), unitPrice: String(item.unit_price) }
}

function lineTotal(row: Row): number {
  const qty = parseFloat(row.quantity)
  const price = parseFloat(row.unitPrice)
  if (!Number.isFinite(qty) || !Number.isFinite(price)) return 0
  return qty * price
}

export default function InvoiceItemsEditor({ invoice, items }: { invoice: Invoice; items: InvoiceItem[] }) {
  const router = useRouter()
  const [rows, setRows] = useState<Row[]>(items.length > 0 ? items.map(toRow) : [{ description: '', quantity: '1', unitPrice: '' }])
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  function updateRow(index: number, key: keyof Row, value: string) {
    setRows((r) => r.map((row, i) => (i === index ? { ...row, [key]: value } : row)))
    setSaved(false)
  }

  function addRow() {
    setRows((r) => [...r, { description: '', quantity: '1', unitPrice: '' }])
  }

  function removeRow(index: number) {
    setRows((r) => (r.length === 1 ? r : r.filter((_, i) => i !== index)))
  }

  const total = rows.reduce((sum, row) => sum + lineTotal(row), 0)

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    setError('')

    const parsed = rows
      .filter((row) => row.description.trim() !== '')
      .map((row) => ({
        description: row.description.trim(),
        quantity: parseFloat(row.quantity) || 0,
        unitPrice: parseFloat(row.unitPrice) || 0,
      }))

    if (parsed.length === 0) {
      setError('Add at least one line item.')
      setSaving(false)
      return
    }
    if (parsed.some((item) => item.quantity <= 0 || item.unitPrice < 0)) {
      setError('Each line item needs a quantity greater than 0 and a unit price of 0 or more.')
      setSaving(false)
      return
    }

    const res = await fetch(`/api/admin/invoices/${invoice.id}/items`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: parsed }),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to save line items.')
      return
    }
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-3">
      <h2 className="mb-1">Line Items</h2>
      <label className={labelCls}>Items</label>
      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-[1fr_64px_96px_90px_auto] gap-2 items-center">
            <input
              value={row.description}
              onChange={(e) => updateRow(i, 'description', e.target.value)}
              className={inputCls}
              placeholder="Description"
            />
            <input
              type="number" min="0" step="1" value={row.quantity}
              onChange={(e) => updateRow(i, 'quantity', e.target.value)}
              className={inputCls} placeholder="Qty"
            />
            <input
              type="number" min="0" step="0.01" value={row.unitPrice}
              onChange={(e) => updateRow(i, 'unitPrice', e.target.value)}
              className={inputCls} placeholder="Unit price"
            />
            <span className="text-sm text-gray-600 text-end whitespace-nowrap mono">
              {invoice.currency} {lineTotal(row).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <button
              type="button"
              onClick={() => removeRow(i)}
              disabled={rows.length === 1}
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
        onClick={addRow}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-secondary"
      >
        <Plus className="w-4 h-4" /> Add line item
      </button>

      <div className="flex justify-end pt-2 border-t border-gray-100">
        <div className="w-full max-w-[220px] flex justify-between items-baseline rounded-lg px-4 py-3" style={{ background: 'var(--green-bg)' }}>
          <span className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--pine)' }}>Total</span>
          <span className="text-lg font-black text-brand mono">
            {invoice.currency} {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>

      {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Items'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
