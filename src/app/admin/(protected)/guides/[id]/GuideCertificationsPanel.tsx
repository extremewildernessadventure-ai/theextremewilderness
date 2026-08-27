'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { GuideCertification } from '@/lib/hr'

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1'

function certificationStatus(expiresAt: string | null): { label: string; className: string } | null {
  if (!expiresAt) return null
  const daysLeft = (new Date(expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  if (daysLeft < 0) return { label: 'Expired', className: 'bg-red-100 text-red-700' }
  if (daysLeft < 60) return { label: 'Expiring soon', className: 'bg-amber-100 text-amber-700' }
  return { label: 'Valid', className: 'bg-green-100 text-green-700' }
}

export default function GuideCertificationsPanel({ guideId, certifications }: { guideId: number; certifications: GuideCertification[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ type: '', issuingBody: '', certNumber: '', issuedAt: '', expiresAt: '' })
  const [saving, setSaving] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleAdd() {
    if (!form.type.trim()) return
    setSaving(true)
    const res = await fetch(`/api/admin/guides/${guideId}/certifications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSaving(false)
    if (res.ok) {
      setForm({ type: '', issuingBody: '', certNumber: '', issuedAt: '', expiresAt: '' })
      setOpen(false)
      router.refresh()
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-7">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-brand">Certifications</h2>
        <button type="button" onClick={() => setOpen((v) => !v)} className="text-xs font-semibold text-brand hover:underline">
          {open ? 'Cancel' : '+ Add Certification'}
        </button>
      </div>

      {certifications.length > 0 ? (
        <ul className="space-y-3">
          {certifications.map((c) => {
            const status = certificationStatus(c.expires_at)
            return (
              <li key={c.id} className="flex items-center justify-between text-sm border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                <div>
                  <span className="font-semibold text-gray-700">{c.type}</span>
                  {c.issuing_body && <span className="text-gray-500"> — {c.issuing_body}</span>}
                  {c.expires_at && <p className="text-xs text-gray-400 mt-0.5">Expires {c.expires_at}</p>}
                </div>
                {status && (
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${status.className}`}>
                    {status.label}
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      ) : (
        !open && <p className="text-sm text-gray-400">No certifications on file.</p>
      )}

      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Type *</label>
              <input value={form.type} onChange={(e) => update('type', e.target.value)} placeholder="e.g. First Aid, Driving Guide License" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Issuing Body</label>
              <input value={form.issuingBody} onChange={(e) => update('issuingBody', e.target.value)} className={inputCls} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Certificate Number</label>
            <input value={form.certNumber} onChange={(e) => update('certNumber', e.target.value)} className={inputCls} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Issued</label>
              <input type="date" value={form.issuedAt} onChange={(e) => update('issuedAt', e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Expires</label>
              <input type="date" value={form.expiresAt} onChange={(e) => update('expiresAt', e.target.value)} className={inputCls} />
            </div>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            disabled={saving || !form.type.trim()}
            className="px-4 py-2 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            {saving ? 'Adding…' : 'Add Certification'}
          </button>
        </div>
      )}
    </div>
  )
}
