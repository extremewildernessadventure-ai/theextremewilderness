'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Trash2 } from 'lucide-react'
import type { SafariPackage } from '@/data/packages'

const inputCls = 'field-input'

type Chance = NonNullable<SafariPackage['wildlifeTargets']>[number]['chance']
const CHANCE_OPTIONS: Chance[] = ['Guaranteed', 'High', 'Seasonal', 'Rare']

type Row = { name: string; chance: Chance; note: string }

// Feeds the public detail page's Wildlife Radar tab -- only ever real,
// verifiable sighting likelihood for this itinerary's actual parks/route
// (see src/lib safariCamps-adjacent wildlifeTargets backfill), never a
// generic or fabricated claim. This editor has no client-side way to
// enforce that beyond the copy below; it's a content-authoring discipline,
// same as the rest of the site's real-data-only conventions.
export default function PackageWildlifeTargetsEditor({ id, wildlifeTargets }: { id: number; wildlifeTargets: NonNullable<SafariPackage['wildlifeTargets']> }) {
  const router = useRouter()
  const [rows, setRows] = useState<Row[]>(wildlifeTargets.map((w) => ({ name: w.name, chance: w.chance, note: w.note ?? '' })))
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  function updateRow<K extends keyof Row>(index: number, key: K, value: Row[K]) {
    setRows((r) => r.map((row, i) => (i === index ? { ...row, [key]: value } : row)))
    setSaved(false)
  }
  function addRow() {
    setRows((r) => [...r, { name: '', chance: 'High', note: '' }])
  }
  function removeRow(index: number) {
    setRows((r) => r.filter((_, i) => i !== index))
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    setError('')

    // A row with only a note and no name is almost certainly a mistake, not
    // an intentional blank row -- same "don't silently drop partial input"
    // instinct as the FAQ editor's q/a pairing check.
    if (rows.some((r) => r.name.trim() === '' && r.note.trim() !== '')) {
      setError('Every wildlife target needs a species name.')
      setSaving(false)
      return
    }
    const parsed = rows.filter((r) => r.name.trim() !== '')

    const res = await fetch(`/api/admin/packages/${id}/wildlife-targets`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        targets: parsed.map((r) => ({ name: r.name.trim(), chance: r.chance, ...(r.note.trim() ? { note: r.note.trim() } : {}) })),
      }),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to save wildlife targets.')
      return
    }
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-3">
      <h2 className="mb-1">Wildlife Radar (optional)</h2>
      <p className="text-xs text-gray-400 -mt-2">
        Only list real, verifiable sighting likelihood for this itinerary&apos;s actual parks and route — never a generic or fabricated claim.
      </p>
      {rows.length > 0 && (
        <div className="grid grid-cols-[1fr_140px_1fr_auto] gap-2 text-[10px] font-bold uppercase tracking-wide text-gray-400">
          <span>Species</span><span>Chance</span><span>Note</span><span />
        </div>
      )}
      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-[1fr_140px_1fr_auto] gap-2 items-center">
            <input value={row.name} onChange={(e) => updateRow(i, 'name', e.target.value)} className={inputCls} placeholder="e.g. African Lion" />
            <select value={row.chance} onChange={(e) => updateRow(i, 'chance', e.target.value as Chance)} className={inputCls}>
              {CHANCE_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <input value={row.note} onChange={(e) => updateRow(i, 'note', e.target.value)} className={inputCls} placeholder="Note (optional)" />
            <button type="button" onClick={() => removeRow(i)} className="p-2 text-gray-400 hover:text-red-500" aria-label="Remove wildlife target">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addRow} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-secondary">
        <Plus className="w-4 h-4" /> Add wildlife target
      </button>

      {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Wildlife Radar'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
