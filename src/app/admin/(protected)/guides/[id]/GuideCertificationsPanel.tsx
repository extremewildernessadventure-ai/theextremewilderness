'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { GuideCertification } from '@/lib/hr'
import { todayIso } from '@/lib/dates'

function certificationStatus(expiresAt: string | null): { label: string; pillClass: string } | null {
  if (!expiresAt) return null
  const daysLeft = (new Date(expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  if (daysLeft < 0) return { label: 'Expired', pillClass: 'cancelled' }
  if (daysLeft < 60) return { label: 'Expiring soon', pillClass: 'few' }
  return { label: 'Valid', pillClass: 'open' }
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
    <div className="panel">
      <div className="flex items-center justify-between mb-4">
        <h2>Certifications</h2>
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
                {status && <span className={`pill ${status.pillClass}`}><i />{status.label}</span>}
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
              <label className="field-label">Type *</label>
              <input value={form.type} onChange={(e) => update('type', e.target.value)} placeholder="e.g. First Aid, Driving Guide License" className="field-input" />
            </div>
            <div>
              <label className="field-label">Issuing Body</label>
              <input value={form.issuingBody} onChange={(e) => update('issuingBody', e.target.value)} className="field-input" />
            </div>
          </div>
          <div>
            <label className="field-label">Certificate Number</label>
            <input value={form.certNumber} onChange={(e) => update('certNumber', e.target.value)} className="field-input" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="field-label">Issued</label>
              <input type="date" value={form.issuedAt} onChange={(e) => update('issuedAt', e.target.value)} className="field-input" />
            </div>
            <div>
              <label className="field-label">Expires</label>
              <input type="date" min={todayIso()} value={form.expiresAt} onChange={(e) => update('expiresAt', e.target.value)} className="field-input" />
            </div>
          </div>
          <button type="button" onClick={handleAdd} disabled={saving || !form.type.trim()} className="btn-primary" style={{ opacity: saving || !form.type.trim() ? 0.5 : 1 }}>
            {saving ? 'Adding…' : 'Add Certification'}
          </button>
        </div>
      )}
    </div>
  )
}
