'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { SupplierContract } from '@/lib/ops'

export default function SupplierContractPanel({ supplierId, contracts }: { supplierId: number; contracts: SupplierContract[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ negotiatedRate: '', currency: 'USD', validFrom: '', validTo: '', notes: '' })
  const [saving, setSaving] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleAdd() {
    setSaving(true)
    const res = await fetch(`/api/admin/suppliers/${supplierId}/contracts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        negotiatedRate: form.negotiatedRate ? parseFloat(form.negotiatedRate) : undefined,
      }),
    })
    setSaving(false)
    if (res.ok) {
      setForm({ negotiatedRate: '', currency: 'USD', validFrom: '', validTo: '', notes: '' })
      setOpen(false)
      router.refresh()
    }
  }

  return (
    <div className="panel">
      <div className="flex items-center justify-between mb-4">
        <h2>Contracts</h2>
        <button type="button" onClick={() => setOpen((v) => !v)} className="text-xs font-semibold text-brand hover:underline">
          {open ? 'Cancel' : '+ Add Contract'}
        </button>
      </div>

      {contracts.length > 0 ? (
        <ul className="space-y-3">
          {contracts.map((c) => (
            <li key={c.id} className="text-sm border-b border-gray-100 last:border-0 pb-3 last:pb-0">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">
                  {c.negotiated_rate != null ? `${c.currency} ${c.negotiated_rate.toLocaleString()}` : 'Rate not set'}
                </span>
                {(c.valid_from || c.valid_to) && (
                  <span className="text-xs text-gray-400">{c.valid_from ?? '…'} → {c.valid_to ?? '…'}</span>
                )}
              </div>
              {c.notes && <p className="text-gray-600 mt-0.5">{c.notes}</p>}
            </li>
          ))}
        </ul>
      ) : (
        !open && <p className="text-sm text-gray-400">No contracts on file.</p>
      )}

      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="field-label">Negotiated Rate</label>
              <input type="number" min="0" step="0.01" value={form.negotiatedRate} onChange={(e) => update('negotiatedRate', e.target.value)} className="field-input" />
            </div>
            <div>
              <label className="field-label">Currency</label>
              <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className="field-input" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="field-label">Valid From</label>
              <input type="date" value={form.validFrom} onChange={(e) => update('validFrom', e.target.value)} className="field-input" />
            </div>
            <div>
              <label className="field-label">Valid To</label>
              <input type="date" value={form.validTo} onChange={(e) => update('validTo', e.target.value)} className="field-input" />
            </div>
          </div>
          <div>
            <label className="field-label">Notes</label>
            <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={2} className="field-input" />
          </div>
          <button type="button" onClick={handleAdd} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
            {saving ? 'Adding…' : 'Add Contract'}
          </button>
        </div>
      )}
    </div>
  )
}
