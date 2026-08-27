'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { COMMUNICATION_CHANNELS, type CommunicationChannel, type CommunicationLogEntry } from '@/lib/leads'

const CHANNEL_LABELS: Record<CommunicationChannel, string> = {
  whatsapp: 'WhatsApp',
  email: 'Email',
  call: 'Call',
  in_person: 'In Person',
}

export default function CommunicationLogPanel({ leadId, entries }: { leadId: number; entries: CommunicationLogEntry[] }) {
  const router = useRouter()
  const [channel, setChannel] = useState<CommunicationChannel>('whatsapp')
  const [summary, setSummary] = useState('')
  const [saving, setSaving] = useState(false)

  async function handleAdd() {
    if (!summary.trim()) return
    setSaving(true)
    const res = await fetch(`/api/admin/leads/${leadId}/communication`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ channel, summary }),
    })
    setSaving(false)
    if (res.ok) {
      setSummary('')
      router.refresh()
    }
  }

  return (
    <div className="panel">
      <h2 className="mb-1">Communication Log</h2>
      <p className="text-xs text-gray-400 mb-4">Internal-only — never shown to the client.</p>

      {entries.length > 0 && (
        <ul className="space-y-3 mb-5">
          {entries.map((entry) => (
            <li key={entry.id} className="text-sm border-b border-gray-100 last:border-0 pb-3 last:pb-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-semibold text-gray-700">{CHANNEL_LABELS[entry.channel]}</span>
                <span className="text-xs text-gray-400">{new Date(entry.created_at).toLocaleString()}</span>
              </div>
              <p className="text-gray-600 whitespace-pre-wrap">{entry.summary}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-col sm:flex-row gap-2">
        <select
          value={channel}
          onChange={(e) => setChannel(e.target.value as CommunicationChannel)}
          className="field-input sm:w-36"
        >
          {COMMUNICATION_CHANNELS.map((c) => <option key={c} value={c}>{CHANNEL_LABELS[c]}</option>)}
        </select>
        <input
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="e.g. Called, no answer, will try again Monday"
          className="field-input"
        />
        <button type="button" onClick={handleAdd} disabled={saving || !summary.trim()} className="btn-primary" style={{ whiteSpace: 'nowrap', opacity: saving || !summary.trim() ? 0.5 : 1 }}>
          {saving ? 'Adding…' : 'Log'}
        </button>
      </div>
    </div>
  )
}
