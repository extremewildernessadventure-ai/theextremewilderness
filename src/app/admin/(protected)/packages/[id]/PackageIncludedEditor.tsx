'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { SafariPackage } from '@/data/packages'
import StringListEditor from '@/components/admin/StringListEditor'

// Covers included/excluded (the simple flat lists) plus includedCategorized
// (the 3 named sub-lists: transfers, accommodationMeals, guidingGameDrives)
// and excludedCategorized/notes -- all live on the same `packages` row as
// PackageEditForm's fields, so this panel PATCHes the same full-replace
// endpoint, spreading the received `pkg` prop and overriding only what
// this panel owns, same contract as every other panel on this page.
export default function PackageIncludedEditor({ id, pkg }: { id: number; pkg: SafariPackage }) {
  const router = useRouter()
  const [included, setIncluded] = useState(pkg.included)
  const [excluded, setExcluded] = useState(pkg.excluded)
  const [transfers, setTransfers] = useState(pkg.includedCategorized?.transfers ?? [])
  const [accommodationMeals, setAccommodationMeals] = useState(pkg.includedCategorized?.accommodationMeals ?? [])
  const [guidingGameDrives, setGuidingGameDrives] = useState(pkg.includedCategorized?.guidingGameDrives ?? [])
  const [excludedCategorized, setExcludedCategorized] = useState(pkg.excludedCategorized ?? [])
  const [notes, setNotes] = useState(pkg.notes ?? [])
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    setError('')

    const cleanIncluded = included.filter((v) => v.trim() !== '')
    const cleanExcluded = excluded.filter((v) => v.trim() !== '')
    if (cleanIncluded.length === 0) {
      setError('At least one "included" item is required.')
      setSaving(false)
      return
    }

    const updated: SafariPackage = {
      ...pkg,
      included: cleanIncluded,
      excluded: cleanExcluded,
    }
    const cleanTransfers = transfers.filter((v) => v.trim() !== '')
    const cleanAccommodationMeals = accommodationMeals.filter((v) => v.trim() !== '')
    const cleanGuidingGameDrives = guidingGameDrives.filter((v) => v.trim() !== '')
    if (cleanTransfers.length || cleanAccommodationMeals.length || cleanGuidingGameDrives.length) {
      updated.includedCategorized = {
        ...(cleanTransfers.length ? { transfers: cleanTransfers } : {}),
        ...(cleanAccommodationMeals.length ? { accommodationMeals: cleanAccommodationMeals } : {}),
        ...(cleanGuidingGameDrives.length ? { guidingGameDrives: cleanGuidingGameDrives } : {}),
      }
    } else {
      delete updated.includedCategorized
    }
    const cleanExcludedCategorized = excludedCategorized.filter((v) => v.trim() !== '')
    if (cleanExcludedCategorized.length > 0) updated.excludedCategorized = cleanExcludedCategorized
    else delete updated.excludedCategorized
    const cleanNotes = notes.filter((v) => v.trim() !== '')
    if (cleanNotes.length > 0) updated.notes = cleanNotes
    else delete updated.notes

    const res = await fetch(`/api/admin/packages/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to save changes.')
      return
    }
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-4">
      <h2 className="mb-1">Included / Excluded</h2>
      <StringListEditor label="Included" values={included} onChange={setIncluded} addLabel="Add included item" />
      <StringListEditor label="Excluded" values={excluded} onChange={setExcluded} addLabel="Add excluded item" />

      <div className="pt-2 border-t border-gray-100 space-y-4">
        <h3 className="text-sm font-semibold text-gray-500">Included — Categorized Breakdown (optional)</h3>
        <StringListEditor label="Transfers" values={transfers} onChange={setTransfers} addLabel="Add transfer item" />
        <StringListEditor label="Accommodation & Meals" values={accommodationMeals} onChange={setAccommodationMeals} addLabel="Add item" />
        <StringListEditor label="Guiding & Game Drives" values={guidingGameDrives} onChange={setGuidingGameDrives} addLabel="Add item" />
      </div>

      <div className="pt-2 border-t border-gray-100 space-y-4">
        <StringListEditor label="Excluded — Categorized (optional)" values={excludedCategorized} onChange={setExcludedCategorized} addLabel="Add item" />
        <StringListEditor label="Notes" values={notes} onChange={setNotes} addLabel="Add note" textarea />
      </div>

      {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
