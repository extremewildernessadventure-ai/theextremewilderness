'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PAY_TYPES, type PayType, type StaffMember } from '@/lib/hr'
import type { Guide } from '@/lib/ops'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5'

const PAY_TYPE_LABELS: Record<PayType, string> = { salary: 'Salary', daily_rate: 'Daily Rate', per_trip: 'Per Trip' }

export default function StaffEditForm({ staffMember, guides }: { staffMember: StaffMember; guides: Guide[] }) {
  const router = useRouter()
  const [form, setForm] = useState({
    name: staffMember.name,
    roleTitle: staffMember.role_title ?? '',
    guideId: staffMember.guide_id ? String(staffMember.guide_id) : '',
    payType: staffMember.pay_type,
    baseRate: String(staffMember.base_rate),
    currency: staffMember.currency,
    active: staffMember.active === 1,
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    await fetch(`/api/admin/staff/${staffMember.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        baseRate: parseFloat(form.baseRate) || 0,
        guideId: form.guideId ? Number(form.guideId) : null,
      }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-7 space-y-4">
      <h2 className="text-sm font-bold text-brand mb-1">Edit Staff Member</h2>
      <div>
        <label className={labelCls}>Name</label>
        <input value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Role Title</label>
          <input value={form.roleTitle} onChange={(e) => update('roleTitle', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Linked Guide</label>
          <select value={form.guideId} onChange={(e) => update('guideId', e.target.value)} className={inputCls}>
            <option value="">—</option>
            {guides.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelCls}>Pay Type</label>
          <select value={form.payType} onChange={(e) => update('payType', e.target.value as PayType)} className={inputCls}>
            {PAY_TYPES.map((t) => <option key={t} value={t}>{PAY_TYPE_LABELS[t]}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Base Rate</label>
          <input type="number" min="0" step="0.01" value={form.baseRate} onChange={(e) => update('baseRate', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Currency</label>
          <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className={inputCls} />
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" checked={form.active} onChange={(e) => update('active', e.target.checked)} className="rounded border-gray-300 text-brand focus:ring-brand/20" />
        Active
      </label>
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
