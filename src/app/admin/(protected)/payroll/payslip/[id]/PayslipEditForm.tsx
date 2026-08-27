'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PAYSLIP_STATUSES, type Payslip } from '@/lib/hr'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

export default function PayslipEditForm({ payslip }: { payslip: Payslip }) {
  const router = useRouter()
  const [form, setForm] = useState({
    bonuses: String(payslip.bonuses),
    deductions: String(payslip.deductions),
    status: payslip.status,
    paymentReference: payslip.payment_reference ?? '',
    notes: payslip.notes ?? '',
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    await fetch(`/api/admin/payslips/${payslip.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        bonuses: parseFloat(form.bonuses) || 0,
        deductions: parseFloat(form.deductions) || 0,
      }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
      <h2 className="text-sm font-bold text-brand mb-1">Edit Payslip</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Bonuses</label>
          <input type="number" min="0" step="0.01" value={form.bonuses} onChange={(e) => update('bonuses', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Deductions</label>
          <input type="number" min="0" step="0.01" value={form.deductions} onChange={(e) => update('deductions', e.target.value)} className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Status</label>
        <select value={form.status} onChange={(e) => update('status', e.target.value)} className={`${inputCls} capitalize`}>
          {PAYSLIP_STATUSES.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls}>Payment Reference</label>
        <input value={form.paymentReference} onChange={(e) => update('paymentReference', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Notes</label>
        <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className={inputCls} />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2.5 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
