'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { SupplierPayment } from '@/lib/ops'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'

const inputCls = 'field-input'
const labelCls = 'field-label'

const PILL_CLASS: Record<'owed' | 'paid', PillClass> = { owed: 'few', paid: 'full' }

export default function SupplierPaymentPanel({ supplierId, payments }: { supplierId: number; payments: SupplierPayment[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ amount: '', currency: 'USD', dueDate: '', notes: '' })
  const [saving, setSaving] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleAdd() {
    const amount = parseFloat(form.amount)
    if (!Number.isFinite(amount) || amount <= 0) return
    setSaving(true)
    const res = await fetch(`/api/admin/suppliers/${supplierId}/payments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, amount }),
    })
    setSaving(false)
    if (res.ok) {
      setForm({ amount: '', currency: 'USD', dueDate: '', notes: '' })
      setOpen(false)
      router.refresh()
    }
  }

  return (
    <div className="panel">
      <div className="flex items-center justify-between mb-4">
        <h2>Payments Owed</h2>
        <button type="button" onClick={() => setOpen((v) => !v)} className="text-xs font-semibold hover:underline" style={{ color: 'var(--pine)' }}>
          {open ? 'Cancel' : '+ Add Payment'}
        </button>
      </div>

      {payments.length > 0 ? (
        <ul className="space-y-3">
          {payments.map((p) => (
            <li key={p.id} className="flex items-center justify-between text-sm border-b border-gray-100 last:border-0 pb-3 last:pb-0">
              <div>
                <span className="font-semibold text-gray-700">{p.currency} {p.amount.toLocaleString()}</span>
                {p.due_date && <span className="text-xs text-gray-400 ms-2">due {p.due_date}</span>}
                {p.notes && <p className="text-gray-500 text-xs mt-0.5">{p.notes}</p>}
              </div>
              <InlineStatusSelect
                endpoint={`/api/admin/suppliers/${supplierId}/payments/${p.id}`}
                statuses={['owed', 'paid']}
                pillClass={PILL_CLASS}
                currentStatus={p.status}
                compact
              />
            </li>
          ))}
        </ul>
      ) : (
        !open && <p className="text-sm text-gray-400">No payments recorded.</p>
      )}

      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Amount</label>
              <input type="number" min="0" step="0.01" value={form.amount} onChange={(e) => update('amount', e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Currency</label>
              <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={inputCls} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Due Date</label>
            <input type="date" value={form.dueDate} onChange={(e) => update('dueDate', e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Notes</label>
            <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={2} className={inputCls} />
          </div>
          <button type="button" onClick={handleAdd} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
            {saving ? 'Adding…' : 'Add Payment'}
          </button>
        </div>
      )}
    </div>
  )
}
