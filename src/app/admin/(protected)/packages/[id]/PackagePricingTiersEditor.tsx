'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Trash2 } from 'lucide-react'
import type { PricingTierRow } from '@/data/packages'

const inputCls = 'field-input'

type Row = { pax: string; season: '' | 'high' | 'low'; trail: string; reserve: string; sovereign: string }

function toRow(t: PricingTierRow): Row {
  return { pax: String(t.pax), season: t.season ?? '', trail: t.trail !== undefined ? String(t.trail) : '', reserve: t.reserve !== undefined ? String(t.reserve) : '', sovereign: t.sovereign !== undefined ? String(t.sovereign) : '' }
}
function emptyRow(): Row {
  return { pax: '2', season: '', trail: '', reserve: '', sovereign: '' }
}

// The per-pax x season x tier pricing grid -- most packages have none of
// these rows at all (the detail page falls back to flat priceFrom), so
// this editor is allowed to save an empty list. Same PUT-the-whole-list
// contract as InvoiceItemsEditor.
export default function PackagePricingTiersEditor({ id, pricingTiers }: { id: number; pricingTiers: PricingTierRow[] }) {
  const router = useRouter()
  const [rows, setRows] = useState<Row[]>(pricingTiers.map(toRow))
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

    const parsed: PricingTierRow[] = []
    for (const row of rows) {
      const pax = parseInt(row.pax, 10)
      if (!Number.isFinite(pax) || pax < 1) {
        setError('Every pricing row needs a pax count of at least 1.')
        setSaving(false)
        return
      }
      const tier: PricingTierRow = { pax }
      if (row.season) tier.season = row.season
      if (row.trail.trim() !== '') tier.trail = parseFloat(row.trail)
      if (row.reserve.trim() !== '') tier.reserve = parseFloat(row.reserve)
      if (row.sovereign.trim() !== '') tier.sovereign = parseFloat(row.sovereign)
      parsed.push(tier)
    }

    const res = await fetch(`/api/admin/packages/${id}/pricing-tiers`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tiers: parsed }),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to save pricing tiers.')
      return
    }
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-3">
      <h2 className="mb-1">Pricing Tiers (optional)</h2>
      <p className="text-xs text-gray-400 -mt-2">Leave empty to use the flat &quot;Price From&quot; on the main details panel instead.</p>
      {rows.length > 0 && (
        <div className="grid grid-cols-[70px_100px_1fr_1fr_1fr_auto] gap-2 text-[10px] font-bold uppercase tracking-wide text-gray-400">
          <span>Pax</span><span>Season</span><span>Trail</span><span>Reserve</span><span>Sovereign</span><span />
        </div>
      )}
      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-[70px_100px_1fr_1fr_1fr_auto] gap-2 items-center">
            <input type="number" min="1" value={row.pax} onChange={(e) => updateRow(i, 'pax', e.target.value)} className={inputCls} />
            <select value={row.season} onChange={(e) => updateRow(i, 'season', e.target.value)} className={inputCls}>
              <option value="">— any —</option>
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
            <input type="number" min="0" value={row.trail} onChange={(e) => updateRow(i, 'trail', e.target.value)} className={inputCls} placeholder="—" />
            <input type="number" min="0" value={row.reserve} onChange={(e) => updateRow(i, 'reserve', e.target.value)} className={inputCls} placeholder="—" />
            <input type="number" min="0" value={row.sovereign} onChange={(e) => updateRow(i, 'sovereign', e.target.value)} className={inputCls} placeholder="—" />
            <button type="button" onClick={() => removeRow(i)} className="p-2 text-gray-400 hover:text-red-500" aria-label="Remove pricing row">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addRow} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-secondary">
        <Plus className="w-4 h-4" /> Add pricing row
      </button>

      {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Pricing'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
