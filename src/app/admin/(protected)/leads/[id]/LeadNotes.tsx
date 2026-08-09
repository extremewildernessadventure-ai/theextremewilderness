'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LeadNotes({ leadId, initialNotes }: { leadId: number; initialNotes: string }) {
  const router = useRouter()
  const [value, setValue] = useState(initialNotes)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const dirty = value !== initialNotes

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    const res = await fetch(`/api/admin/leads/${leadId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ notes: value }),
    })
    setSaving(false)
    if (res.ok) {
      setSaved(true)
      router.refresh()
    }
  }

  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => { setValue(e.target.value); setSaved(false) }}
        rows={5}
        placeholder="Log what happened — e.g. called, no answer, follow up Monday…"
        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm resize-y focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
      />
      <div className="flex items-center gap-3 mt-2">
        <button
          type="button"
          onClick={handleSave}
          disabled={!dirty || saving}
          className="px-4 py-2 bg-brand hover:bg-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg transition-colors"
        >
          {saving ? 'Saving…' : 'Save'}
        </button>
        {saved && !dirty && <span className="text-xs text-green-600 font-medium">Saved</span>}
      </div>
    </div>
  )
}
