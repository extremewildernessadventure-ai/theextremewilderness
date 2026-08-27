'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  LEAD_UPDATE_CATEGORIES, COMMUNICATION_CHANNELS,
  type LeadUpdateCategory, type CommunicationChannel, type LeadUpdate,
} from '@/lib/leads'

const CATEGORY_LABELS: Record<LeadUpdateCategory, string> = {
  accommodation: 'Accommodation',
  flight: 'Flight',
  payment: 'Payment',
  document: 'Document',
  general: 'General',
}

const CHANNEL_LABELS: Record<CommunicationChannel, string> = {
  whatsapp: 'WhatsApp',
  email: 'Email',
  call: 'Call',
  in_person: 'In Person',
}

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'
const labelCls = 'block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1'

export default function TripProgressPanel({ leadId, updates }: { leadId: number; updates: LeadUpdate[] }) {
  const router = useRouter()
  const [category, setCategory] = useState<LeadUpdateCategory>('general')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [proofChannel, setProofChannel] = useState<CommunicationChannel | ''>('')
  const [proofNote, setProofNote] = useState('')
  const [saving, setSaving] = useState(false)
  const [open, setOpen] = useState(false)

  async function handleAdd() {
    if (!title.trim()) return
    setSaving(true)
    const res = await fetch(`/api/admin/leads/${leadId}/trip-updates`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category, title, body: body || undefined,
        proofChannel: proofChannel || undefined, proofNote: proofNote || undefined,
      }),
    })
    setSaving(false)
    if (res.ok) {
      setTitle(''); setBody(''); setProofChannel(''); setProofNote(''); setOpen(false)
      router.refresh()
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-7">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-brand">Trip Progress</h2>
        <button type="button" onClick={() => setOpen((v) => !v)} className="text-xs font-semibold text-brand hover:underline">
          {open ? 'Cancel' : '+ Add Update'}
        </button>
      </div>

      {updates.length > 0 ? (
        <ul className="space-y-4 mb-2">
          {updates.map((u) => (
            <li key={u.id} className="text-sm border-s-2 border-brand/20 ps-4">
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-semibold text-gray-700">
                  <span className="uppercase text-[10px] tracking-wide text-gold-label me-2">{CATEGORY_LABELS[u.category]}</span>
                  {u.title}
                </span>
                <span className="text-xs text-gray-400 whitespace-nowrap">{new Date(u.created_at).toLocaleDateString()}</span>
              </div>
              {u.body && <p className="text-gray-600 whitespace-pre-wrap">{u.body}</p>}
              {u.proof_channel && (
                <p className="text-xs text-gray-400 mt-1">
                  Confirmed via {CHANNEL_LABELS[u.proof_channel]}{u.proof_note ? ` — ${u.proof_note}` : ''}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        !open && <p className="text-sm text-gray-400">No updates logged yet.</p>
      )}

      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value as LeadUpdateCategory)} className={inputCls}>
                {LEAD_UPDATE_CATEGORIES.map((c) => <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Proof Channel (optional)</label>
              <select value={proofChannel} onChange={(e) => setProofChannel(e.target.value as CommunicationChannel | '')} className={inputCls}>
                <option value="">—</option>
                {COMMUNICATION_CHANNELS.map((c) => <option key={c} value={c}>{CHANNEL_LABELS[c]}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className={labelCls}>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Flight confirmed" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Details (optional)</label>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={2} className={inputCls} />
          </div>
          {proofChannel && (
            <div>
              <label className={labelCls}>Proof Note (optional)</label>
              <input value={proofNote} onChange={(e) => setProofNote(e.target.value)} placeholder="e.g. Confirmed by client 8/26" className={inputCls} />
            </div>
          )}
          <button
            type="button"
            onClick={handleAdd}
            disabled={saving || !title.trim()}
            className="px-4 py-2 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            {saving ? 'Adding…' : 'Add Update'}
          </button>
        </div>
      )}
    </div>
  )
}
