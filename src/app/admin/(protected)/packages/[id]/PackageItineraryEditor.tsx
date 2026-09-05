'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown, Plus, Trash2 } from 'lucide-react'
import type { ItineraryDay, TierStay } from '@/data/packages'

const inputCls = 'field-input'

type TierKey = 'trail' | 'reserve' | 'sovereign' | 'luxury' | 'ultraLuxury'
const CORE_TIERS: { key: 'trail' | 'reserve' | 'sovereign'; label: string }[] = [
  { key: 'trail', label: 'Trail' },
  { key: 'reserve', label: 'Reserve' },
  { key: 'sovereign', label: 'Sovereign' },
]
const FAMILY_TIERS: { key: 'luxury' | 'ultraLuxury'; label: string }[] = [
  { key: 'luxury', label: 'Luxury' },
  { key: 'ultraLuxury', label: 'Ultra-Luxury' },
]

type StayForm = { name: string; image: string; amenities: string }
const emptyStay = (): StayForm => ({ name: '', image: '', amenities: '' })

function stayToForm(stay?: TierStay): StayForm {
  if (!stay) return emptyStay()
  return { name: stay.name, image: stay.image, amenities: stay.amenities.join(', ') }
}

type DayForm = {
  day: string
  title: string
  description: string
  accommodation: string
  meals: string
  insiderFact: string
  location: string
  trail: StayForm
  reserve: StayForm
  sovereign: StayForm
  luxury: StayForm
  ultraLuxury: StayForm
}

function dayToForm(d: ItineraryDay): DayForm {
  return {
    day: String(d.day),
    title: d.title,
    description: d.description,
    accommodation: d.accommodation,
    meals: d.meals,
    insiderFact: d.insiderFact ?? '',
    location: d.location ?? '',
    trail: stayToForm(d.accommodationByTier?.trail),
    reserve: stayToForm(d.accommodationByTier?.reserve),
    sovereign: stayToForm(d.accommodationByTier?.sovereign),
    luxury: stayToForm(d.accommodationByFamilyTier?.luxury),
    ultraLuxury: stayToForm(d.accommodationByFamilyTier?.ultraLuxury),
  }
}

function emptyDay(dayNumber: number): DayForm {
  return {
    day: String(dayNumber), title: '', description: '', accommodation: '', meals: '',
    insiderFact: '', location: '',
    trail: emptyStay(), reserve: emptyStay(), sovereign: emptyStay(), luxury: emptyStay(), ultraLuxury: emptyStay(),
  }
}

// The real per-tier "lodge roster" the plan calls for -- no schema change
// needed (package_itinerary_tier_stays already stores one row per day/tier;
// this just derives a pick-list from whatever the admin has already typed
// elsewhere in the same itinerary, client-side, the same way the public
// detail page's buildCampsRoster() derives its roster from the saved rows).
// Deduped by lodge name; first occurrence's image/amenities win.
function buildRoster(days: DayForm[], tier: TierKey): StayForm[] {
  const seen = new Map<string, StayForm>()
  for (const d of days) {
    const stay = d[tier]
    const name = stay.name.trim()
    if (name && !seen.has(name)) seen.set(name, stay)
  }
  return Array.from(seen.values())
}

export default function PackageItineraryEditor({ id, itinerary }: { id: number; itinerary: ItineraryDay[] }) {
  const router = useRouter()
  const [days, setDays] = useState<DayForm[]>(itinerary.map(dayToForm))
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  const rosters = useMemo(() => ({
    trail: buildRoster(days, 'trail'),
    reserve: buildRoster(days, 'reserve'),
    sovereign: buildRoster(days, 'sovereign'),
    luxury: buildRoster(days, 'luxury'),
    ultraLuxury: buildRoster(days, 'ultraLuxury'),
  }), [days])

  function updateDay<K extends keyof DayForm>(index: number, key: K, value: DayForm[K]) {
    setDays((ds) => ds.map((d, i) => (i === index ? { ...d, [key]: value } : d)))
    setSaved(false)
  }
  function updateStay(index: number, tier: TierKey, key: keyof StayForm, value: string) {
    setDays((ds) => ds.map((d, i) => (i === index ? { ...d, [tier]: { ...d[tier], [key]: value } } : d)))
    setSaved(false)
  }
  function applyRosterPick(index: number, tier: TierKey, name: string) {
    if (!name) return
    const picked = rosters[tier].find((s) => s.name === name)
    if (!picked) return
    setDays((ds) => ds.map((d, i) => (i === index ? { ...d, [tier]: { ...picked } } : d)))
    setSaved(false)
  }
  function addDay() {
    setDays((ds) => [...ds, emptyDay(ds.length + 1)])
  }
  function removeDay(index: number) {
    setDays((ds) => ds.filter((_, i) => i !== index))
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    setError('')

    const parsed: ItineraryDay[] = []
    for (const d of days) {
      const dayNumber = parseInt(d.day, 10)
      if (!Number.isFinite(dayNumber) || dayNumber < 1) {
        setError('Every itinerary day needs a valid day number.')
        setSaving(false)
        return
      }
      if (!d.title.trim() || !d.description.trim() || !d.accommodation.trim() || !d.meals.trim()) {
        setError(`Day ${d.day || dayNumber}: title, description, accommodation, and meals are all required.`)
        setSaving(false)
        return
      }

      const day: ItineraryDay = {
        day: dayNumber,
        title: d.title.trim(),
        description: d.description.trim(),
        accommodation: d.accommodation.trim(),
        meals: d.meals.trim(),
      }
      if (d.insiderFact.trim()) day.insiderFact = d.insiderFact.trim()
      if (d.location.trim()) day.location = d.location.trim()

      const byTier: NonNullable<ItineraryDay['accommodationByTier']> = {}
      for (const { key } of CORE_TIERS) {
        const stay = d[key]
        if (stay.name.trim()) {
          byTier[key] = { name: stay.name.trim(), image: stay.image.trim(), amenities: stay.amenities.split(',').map((a) => a.trim()).filter(Boolean) }
        }
      }
      if (Object.keys(byTier).length > 0) day.accommodationByTier = byTier

      const byFamilyTier: NonNullable<ItineraryDay['accommodationByFamilyTier']> = {}
      for (const { key } of FAMILY_TIERS) {
        const stay = d[key]
        if (stay.name.trim()) {
          byFamilyTier[key] = { name: stay.name.trim(), image: stay.image.trim(), amenities: stay.amenities.split(',').map((a) => a.trim()).filter(Boolean) }
        }
      }
      if (Object.keys(byFamilyTier).length > 0) day.accommodationByFamilyTier = byFamilyTier

      parsed.push(day)
    }

    const res = await fetch(`/api/admin/packages/${id}/itinerary`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ days: parsed }),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to save itinerary.')
      return
    }
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-3">
      <h2 className="mb-1">Day-by-Day Itinerary</h2>
      <p className="text-xs text-gray-400 -mt-2">
        For any tier a day offers, pick a lodge already used elsewhere in this itinerary from the dropdown instead of retyping it, or type a new one directly.
      </p>

      {days.length === 0 && <p className="text-sm text-gray-400">No days yet — add the first one below.</p>}

      <div className="space-y-3">
        {days.map((d, i) => (
          <details key={i} className="border border-gray-100 rounded-lg" open={days.length <= 3}>
            <summary className="flex items-center justify-between p-3 cursor-pointer list-none bg-gray-50 rounded-lg">
              <span className="font-medium text-sm">Day {d.day || i + 1}{d.title ? ` — ${d.title}` : ''}</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </summary>
            <div className="p-3 space-y-3 border-t border-gray-100">
              <div className="grid grid-cols-[80px_1fr] gap-3">
                <div>
                  <label className="field-label">Day #</label>
                  <input type="number" min="1" value={d.day} onChange={(e) => updateDay(i, 'day', e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className="field-label">Title</label>
                  <input value={d.title} onChange={(e) => updateDay(i, 'title', e.target.value)} className={inputCls} />
                </div>
              </div>
              <div>
                <label className="field-label">Description</label>
                <textarea value={d.description} onChange={(e) => updateDay(i, 'description', e.target.value)} rows={2} className={inputCls} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="field-label">Accommodation (summary)</label>
                  <input value={d.accommodation} onChange={(e) => updateDay(i, 'accommodation', e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className="field-label">Meals</label>
                  <input value={d.meals} onChange={(e) => updateDay(i, 'meals', e.target.value)} className={inputCls} placeholder="e.g. Breakfast, Lunch, Dinner" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="field-label">Location (optional)</label>
                  <input value={d.location} onChange={(e) => updateDay(i, 'location', e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className="field-label">Insider Fact (optional)</label>
                  <input value={d.insiderFact} onChange={(e) => updateDay(i, 'insiderFact', e.target.value)} className={inputCls} />
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400 mb-2">Per-Tier Accommodation (optional)</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CORE_TIERS.map(({ key, label }) => (
                    <TierStayFields
                      key={key}
                      label={label}
                      value={d[key]}
                      roster={rosters[key]}
                      onPick={(name) => applyRosterPick(i, key, name)}
                      onChange={(field, value) => updateStay(i, key, field, value)}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400 mb-2">Family-Tier Accommodation (optional)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FAMILY_TIERS.map(({ key, label }) => (
                    <TierStayFields
                      key={key}
                      label={label}
                      value={d[key]}
                      roster={rosters[key]}
                      onPick={(name) => applyRosterPick(i, key, name)}
                      onChange={(field, value) => updateStay(i, key, field, value)}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button type="button" onClick={() => removeDay(i)} className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-600">
                  <Trash2 className="w-3.5 h-3.5" /> Remove Day
                </button>
              </div>
            </div>
          </details>
        ))}
      </div>

      <button type="button" onClick={addDay} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-secondary">
        <Plus className="w-4 h-4" /> Add Day
      </button>

      {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Itinerary'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}

function TierStayFields({ label, value, roster, onPick, onChange }: {
  label: string
  value: StayForm
  roster: StayForm[]
  onPick: (name: string) => void
  onChange: (field: keyof StayForm, value: string) => void
}) {
  return (
    <div className="border border-gray-100 rounded-lg p-2.5 space-y-1.5">
      <p className="text-xs font-semibold text-gray-600">{label}</p>
      {roster.length > 0 && (
        <select value="" onChange={(e) => onPick(e.target.value)} className={`${inputCls} text-xs`}>
          <option value="">— reuse existing lodge —</option>
          {roster.map((r) => <option key={r.name} value={r.name}>{r.name}</option>)}
        </select>
      )}
      <input value={value.name} onChange={(e) => onChange('name', e.target.value)} className={`${inputCls} text-xs`} placeholder="Lodge name" />
      <input value={value.image} onChange={(e) => onChange('image', e.target.value)} className={`${inputCls} text-xs`} placeholder="/images/lodges/..." />
      <input value={value.amenities} onChange={(e) => onChange('amenities', e.target.value)} className={`${inputCls} text-xs`} placeholder="Amenities, comma-separated" />
    </div>
  )
}
