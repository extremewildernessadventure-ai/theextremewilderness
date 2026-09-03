'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Trash2 } from 'lucide-react'
import type { FamilyPricingRow } from '@/data/packages'

const inputCls = 'field-input'

type Row = { season: 'high' | 'low'; familySize: string; luxury: string; ultraLuxury: string }

function toRow(r: FamilyPricingRow): Row {
  return { season: r.season, familySize: String(r.familySize), luxury: String(r.luxury), ultraLuxury: String(r.ultraLuxury) }
}
function emptyRow(): Row {
  return { season: 'high', familySize: '4', luxury: '', ultraLuxury: '' }
}

// The family-safari-line pricing grid (priced by family size, not raw pax)
// -- used by exactly one package today (10-days-luxury-family) but built
// as a general editor since any future package could adopt it. Same PUT-
// the-whole-list contract as the other list editors on this page.
export default function PackageFamilyPricingEditor({ id, familyPricing }: { id: number; familyPricing: FamilyPricingRow[] }) {
  const router = useRouter()
  const [rows, setRows] = useState<Row[]>(familyPricing.map(toRow))
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  function updateRow(index: number, key: keyof Row, value: string) {
    setRows((r) => r.map((row, i) => (i === index ? { ...row, [key]: value } : row)))
    setSaved(false)
  }
  function addRow() {
    setRows((r) => [...r, emptyRow()])
  }
  function removeRow(index: number) {
    setRows((r) => r.filter((_, i) => i !== index))
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    setError('')

    const parsed: FamilyPricingRow[] = []
    for (const row of rows) {
      const familySize = parseInt(row.familySize, 10)
      const luxury = parseFloat(row.luxury)
      const ultraLuxury = parseFloat(row.ultraLuxury)
      if (!Number.isFinite(familySize) || familySize < 1) {
        setError('Every family-pricing row needs a family size of at least 1.')
        setSaving(false)
        return
      }
      if (!Number.isFinite(luxury) || !Number.isFinite(ultraLuxury)) {
        setError('Every family-pricing row needs both a Luxury and Ultra-Luxury price.')
        setSaving(false)
        return
      }
      parsed.push({ season: row.season, familySize, luxury, ultraLuxury })
    }

    const res = await fetch(`/api/admin/packages/${id}/family-pricing`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rows: parsed }),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to save family pricing.')
      return
    }
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-3">
      <h2 className="mb-1">Family Pricing (optional)</h2>
      <p className="text-xs text-gray-400 -mt-2">Only used by the Luxury/Ultra-Luxury family-tier line, priced by family size instead of raw pax count.</p>
      {rows.length > 0 && (
        <div className="grid grid-cols-[100px_100px_1fr_1fr_auto] gap-2 text-[10px] font-bold uppercase tracking-wide text-gray-400">
          <span>Season</span><span>Family Size</span><span>Luxury</span><span>Ultra-Luxury</span><span />
        </div>
      )}
      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-[100px_100px_1fr_1fr_auto] gap-2 items-center">
            <select value={row.season} onChange={(e) => updateRow(i, 'season', e.target.value)} className={inputCls}>
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
            <input type="number" min="1" value={row.familySize} onChange={(e) => updateRow(i, 'familySize', e.target.value)} className={inputCls} />
            <input type="number" min="0" value={row.luxury} onChange={(e) => updateRow(i, 'luxury', e.target.value)} className={inputCls} />
            <input type="number" min="0" value={row.ultraLuxury} onChange={(e) => updateRow(i, 'ultraLuxury', e.target.value)} className={inputCls} />
            <button type="button" onClick={() => removeRow(i)} className="p-2 text-gray-400 hover:text-red-500" aria-label="Remove family-pricing row">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addRow} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-secondary">
        <Plus className="w-4 h-4" /> Add family-pricing row
      </button>

      {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Family Pricing'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
