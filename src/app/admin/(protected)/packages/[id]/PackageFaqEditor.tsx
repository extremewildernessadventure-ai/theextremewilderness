'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Trash2 } from 'lucide-react'
import type { SafariPackage } from '@/data/packages'

const inputCls = 'field-input'

type FaqRow = { q: string; a: string }

export default function PackageFaqEditor({ id, faq }: { id: number; faq: NonNullable<SafariPackage['faq']> }) {
  const router = useRouter()
  const [rows, setRows] = useState<FaqRow[]>(faq)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  function updateRow(index: number, key: keyof FaqRow, value: string) {
    setRows((r) => r.map((row, i) => (i === index ? { ...row, [key]: value } : row)))
    setSaved(false)
  }
  function addRow() {
    setRows((r) => [...r, { q: '', a: '' }])
  }
  function removeRow(index: number) {
    setRows((r) => r.filter((_, i) => i !== index))
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    setError('')

    const parsed = rows.filter((r) => r.q.trim() !== '' || r.a.trim() !== '').map((r) => ({ q: r.q.trim(), a: r.a.trim() }))
    if (parsed.some((r) => !r.q || !r.a)) {
      setError('Every FAQ entry needs both a question and an answer.')
      setSaving(false)
      return
    }

    const res = await fetch(`/api/admin/packages/${id}/faq`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ faq: parsed }),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to save FAQ.')
      return
    }
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-3">
      <h2 className="mb-1">FAQ (optional)</h2>
      <div className="space-y-3">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-2 items-start">
            <div className="flex-1 space-y-1.5">
              <input value={row.q} onChange={(e) => updateRow(i, 'q', e.target.value)} className={inputCls} placeholder="Question" />
              <textarea value={row.a} onChange={(e) => updateRow(i, 'a', e.target.value)} className={inputCls} rows={2} placeholder="Answer" />
            </div>
            <button type="button" onClick={() => removeRow(i)} className="p-2 text-gray-400 hover:text-red-500 shrink-0" aria-label="Remove FAQ entry">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addRow} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-secondary">
        <Plus className="w-4 h-4" /> Add FAQ entry
      </button>

      {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save FAQ'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
