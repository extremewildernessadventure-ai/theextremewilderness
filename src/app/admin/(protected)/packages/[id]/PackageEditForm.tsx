'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { SafariPackage } from '@/data/packages'
import StringListEditor from '@/components/admin/StringListEditor'

const inputCls = 'field-input'
const labelCls = 'field-label'

const TYPE_OPTIONS: SafariPackage['type'][] = [
  'big_five_game_drives', 'migration', 'photographic', 'walking',
  'cultural', 'gorilla_trekking', 'beach_extension', 'mountain_trekking',
]
const TYPE_LABELS: Record<SafariPackage['type'], string> = {
  big_five_game_drives: 'Big Five Game Drives',
  migration: 'Great Migration',
  photographic: 'Photographic',
  walking: 'Walking Safari',
  cultural: 'Cultural',
  gorilla_trekking: 'Gorilla Trekking',
  beach_extension: 'Beach Extension',
  mountain_trekking: 'Mountain Trekking (Kilimanjaro)',
}
const BADGE_OPTIONS: Array<SafariPackage['badge'] | ''> = ['', 'bestseller', 'new', 'popular']

// Covers every "flat" SafariPackage field (identity, marketing, SEO) plus
// the simple string-list fields that have no internal structure
// (destinations, highlights, bestFor, overview) -- everything here shares
// one PATCH to the main package endpoint, since updatePackageFields() is a
// full-replace, not a column-map. Fields this form doesn't own (gallery,
// pricingTiers, familyPricing, itinerary, faq, included/excluded and their
// categorized variants, notes, whyDifferent, destinationHighlights) are
// carried through unchanged from the `pkg` prop this component received,
// never reset to empty by this form's own save.
export default function PackageEditForm({ id, pkg }: { id: number; pkg: SafariPackage }) {
  const router = useRouter()
  const [form, setForm] = useState({
    name: pkg.name,
    duration: String(pkg.duration),
    type: pkg.type,
    priceFrom: String(pkg.priceFrom),
    groupSizeMin: String(pkg.groupSize.min),
    groupSizeMax: String(pkg.groupSize.max),
    badge: pkg.badge ?? '',
    tagline: pkg.tagline ?? '',
    bestTimeToTravel: pkg.bestTimeToTravel ?? '',
    heroImage: pkg.heroImage,
    heroImageAlt: pkg.heroImageAlt ?? '',
    metaTitle: pkg.metaTitle ?? '',
    metaDescription: pkg.metaDescription ?? '',
  })
  const [destinations, setDestinations] = useState(pkg.destinations)
  const [highlights, setHighlights] = useState(pkg.highlights)
  const [bestFor, setBestFor] = useState(pkg.bestFor)
  const [overview, setOverview] = useState(pkg.overview ?? [])
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    setSaved(false)
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    setError('')

    const duration = parseInt(form.duration, 10)
    const priceFrom = parseFloat(form.priceFrom)
    const groupSizeMin = parseInt(form.groupSizeMin, 10)
    const groupSizeMax = parseInt(form.groupSizeMax, 10)

    if (!form.name.trim()) {
      setError('Name is required.')
      setSaving(false)
      return
    }
    if (!Number.isFinite(duration) || duration < 1) {
      setError('Duration must be at least 1 day.')
      setSaving(false)
      return
    }
    if (!Number.isFinite(priceFrom) || priceFrom <= 0) {
      setError('Price From must be greater than 0.')
      setSaving(false)
      return
    }
    if (!Number.isFinite(groupSizeMin) || !Number.isFinite(groupSizeMax) || groupSizeMin < 1 || groupSizeMin > groupSizeMax) {
      setError('Group size min/max must be set, with min ≤ max.')
      setSaving(false)
      return
    }
    if (!form.heroImage.trim()) {
      setError('Hero Image is required.')
      setSaving(false)
      return
    }

    const updated: SafariPackage = {
      ...pkg,
      name: form.name.trim(),
      duration,
      type: form.type,
      priceFrom,
      groupSize: { min: groupSizeMin, max: groupSizeMax },
      heroImage: form.heroImage.trim(),
      destinations: destinations.filter((d) => d.trim() !== ''),
      highlights: highlights.filter((h) => h.trim() !== ''),
      bestFor: bestFor.filter((b) => b.trim() !== ''),
    }
    if (form.badge) updated.badge = form.badge as NonNullable<SafariPackage['badge']>
    else delete updated.badge
    if (form.tagline.trim()) updated.tagline = form.tagline.trim()
    else delete updated.tagline
    if (form.bestTimeToTravel.trim()) updated.bestTimeToTravel = form.bestTimeToTravel.trim()
    else delete updated.bestTimeToTravel
    if (form.heroImageAlt.trim()) updated.heroImageAlt = form.heroImageAlt.trim()
    else delete updated.heroImageAlt
    if (form.metaTitle.trim()) updated.metaTitle = form.metaTitle.trim()
    else delete updated.metaTitle
    if (form.metaDescription.trim()) updated.metaDescription = form.metaDescription.trim()
    else delete updated.metaDescription
    const cleanOverview = overview.filter((o) => o.trim() !== '')
    if (cleanOverview.length > 0) updated.overview = cleanOverview
    else delete updated.overview

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
      <h2 className="mb-1">Package Details</h2>
      <div>
        <label className={labelCls}>Name</label>
        <input value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Duration (days)</label>
          <input type="number" min="1" value={form.duration} onChange={(e) => update('duration', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Type</label>
          <select value={form.type} onChange={(e) => update('type', e.target.value)} className={inputCls}>
            {TYPE_OPTIONS.map((t) => <option key={t} value={t}>{TYPE_LABELS[t]}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelCls}>Price From (USD)</label>
          <input type="number" min="0" step="1" value={form.priceFrom} onChange={(e) => update('priceFrom', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Group Size Min</label>
          <input type="number" min="1" value={form.groupSizeMin} onChange={(e) => update('groupSizeMin', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Group Size Max</label>
          <input type="number" min="1" value={form.groupSizeMax} onChange={(e) => update('groupSizeMax', e.target.value)} className={inputCls} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Badge</label>
          <select value={form.badge} onChange={(e) => update('badge', e.target.value)} className={inputCls}>
            {BADGE_OPTIONS.map((b) => <option key={b} value={b ?? ''}>{b || '— none —'}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Best Time to Travel</label>
          <input value={form.bestTimeToTravel} onChange={(e) => update('bestTimeToTravel', e.target.value)} className={inputCls} placeholder="e.g. Jun–Oct" />
        </div>
      </div>
      <div>
        <label className={labelCls}>Tagline</label>
        <input value={form.tagline} onChange={(e) => update('tagline', e.target.value)} className={inputCls} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Hero Image (path)</label>
          <input value={form.heroImage} onChange={(e) => update('heroImage', e.target.value)} className={inputCls} placeholder="/images/safaris/..." />
        </div>
        <div>
          <label className={labelCls}>Hero Image Alt Text</label>
          <input value={form.heroImageAlt} onChange={(e) => update('heroImageAlt', e.target.value)} className={inputCls} />
        </div>
      </div>

      <StringListEditor label="Destinations (slugs)" values={destinations} onChange={setDestinations} addLabel="Add destination" placeholder="e.g. serengeti" />
      <StringListEditor label="Highlights" values={highlights} onChange={setHighlights} addLabel="Add highlight" />
      <StringListEditor label="Best For" values={bestFor} onChange={setBestFor} addLabel="Add audience" placeholder="e.g. Honeymooners" />
      <StringListEditor label="Overview Paragraphs" values={overview} onChange={setOverview} addLabel="Add paragraph" textarea />

      <div className="pt-2 border-t border-gray-100 space-y-4">
        <h3 className="text-sm font-semibold text-gray-500">SEO</h3>
        <div>
          <label className={labelCls}>Meta Title</label>
          <input value={form.metaTitle} onChange={(e) => update('metaTitle', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Meta Description</label>
          <textarea value={form.metaDescription} onChange={(e) => update('metaDescription', e.target.value)} rows={2} className={inputCls} />
        </div>
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
