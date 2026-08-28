'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PAY_TYPES, type PayType, type StaffMember } from '@/lib/hr'
import type { Guide } from '@/lib/ops'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'

const PAY_TYPE_LABELS: Record<PayType, string> = { salary: 'Salary', daily_rate: 'Daily Rate', per_trip: 'Per Trip' }

export default function StaffEditForm({ staffMember, guides }: { staffMember: StaffMember; guides: Guide[] }) {
  const router = useRouter()
  const [form, setForm] = useState({
    name: staffMember.name,
    roleTitle: staffMember.role_title ?? '',
    guideId: staffMember.guide_id ? String(staffMember.guide_id) : staffMember.guide_name_other ? CUSTOM_OPTION_VALUE : '',
    guideNameOther: staffMember.guide_name_other ?? '',
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
    const isCustomGuide = form.guideId === CUSTOM_OPTION_VALUE
    await fetch(`/api/admin/staff/${staffMember.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        baseRate: parseFloat(form.baseRate) || 0,
        guideId: isCustomGuide || !form.guideId ? null : Number(form.guideId),
        guideNameOther: isCustomGuide ? form.guideNameOther.trim() : null,
      }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-4">
      <h2 className="mb-1">Edit Staff Member</h2>
      <div>
        <label className="field-label">Name</label>
        <input value={form.name} onChange={(e) => update('name', e.target.value)} className="field-input" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="field-label">Role Title</label>
          <input value={form.roleTitle} onChange={(e) => update('roleTitle', e.target.value)} className="field-input" />
        </div>
        <div>
          <label className="field-label">Linked Guide</label>
          <SelectWithCustom
            options={guides}
            getOptionValue={(g) => String(g.id)}
            getOptionLabel={(g) => g.name}
            value={form.guideId}
            onChange={(v) => update('guideId', v)}
            customValue={form.guideNameOther}
            onCustomChange={(v) => update('guideNameOther', v)}
            placeholder="—"
            customPlaceholder="Enter guide name…"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="field-label">Pay Type</label>
          <select value={form.payType} onChange={(e) => update('payType', e.target.value as PayType)} className="field-input">
            {PAY_TYPES.map((t) => <option key={t} value={t}>{PAY_TYPE_LABELS[t]}</option>)}
          </select>
        </div>
        <div>
          <label className="field-label">Base Rate</label>
          <input type="number" min="0" step="0.01" value={form.baseRate} onChange={(e) => update('baseRate', e.target.value)} className="field-input" />
        </div>
        <div>
          <label className="field-label">Currency</label>
          <input value={form.currency} onChange={(e) => update('currency', e.target.value)} className="field-input" />
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm" style={{ color: 'var(--ink)' }}>
        <input type="checkbox" checked={form.active} onChange={(e) => update('active', e.target.checked)} className="rounded border-gray-300 text-brand focus:ring-brand/20" />
        Active
      </label>
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
