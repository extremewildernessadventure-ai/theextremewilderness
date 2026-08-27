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

const inputCls = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10'

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
    <div className="bg-white border border-gray-200 rounded-xl p-7">
      <h2 className="text-sm font-bold text-brand mb-4">Communication Log</h2>
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
          className={`${inputCls} sm:w-36`}
        >
          {COMMUNICATION_CHANNELS.map((c) => <option key={c} value={c}>{CHANNEL_LABELS[c]}</option>)}
        </select>
        <input
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="e.g. Called, no answer, will try again Monday"
          className={inputCls}
        />
        <button
          type="button"
          onClick={handleAdd}
          disabled={saving || !summary.trim()}
          className="px-4 py-2 bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
        >
          {saving ? 'Adding…' : 'Log'}
        </button>
      </div>
    </div>
  )
}
