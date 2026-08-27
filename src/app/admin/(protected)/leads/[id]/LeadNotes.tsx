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
        className="field-input"
        style={{ resize: 'vertical' }}
      />
      <div className="flex items-center gap-3 mt-2">
        <button type="button" onClick={handleSave} disabled={!dirty || saving} className="btn-primary" style={{ opacity: !dirty || saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save'}
        </button>
        {saved && !dirty && <span className="text-xs text-green-600 font-medium">Saved</span>}
      </div>
    </div>
  )
}
