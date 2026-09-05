'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { PackageType } from '@/lib/packages'

const TYPE_OPTIONS: PackageType[] = [
  'big_five_game_drives', 'migration', 'photographic', 'walking',
  'cultural', 'gorilla_trekking', 'beach_extension', 'mountain_trekking',
]
const TYPE_LABELS: Record<PackageType, string> = {
  big_five_game_drives: 'Big Five Game Drives',
  migration: 'Great Migration',
  photographic: 'Photographic',
  walking: 'Walking Safari',
  cultural: 'Cultural',
  gorilla_trekking: 'Gorilla Trekking',
  beach_extension: 'Beach Extension',
  mountain_trekking: 'Mountain Trekking (Kilimanjaro)',
}

// Only the fields the POST endpoint actually requires -- every other real
// field (gallery, itinerary, pricing, wildlife targets, etc.) is filled in
// afterwards on the detail page's own editors, matching every other admin
// module's "create the bare minimum, flesh it out on the detail page"
// convention (see Suppliers' new/page.tsx).
export default function NewPackagePage() {
  const router = useRouter()
  const [form, setForm] = useState({
    slug: '', name: '', duration: '7', type: 'big_five_game_drives' as PackageType,
    priceFrom: '', groupSizeMin: '2', groupSizeMax: '12', heroImage: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const duration = parseInt(form.duration, 10)
    const priceFrom = parseFloat(form.priceFrom)
    const groupSizeMin = parseInt(form.groupSizeMin, 10)
    const groupSizeMax = parseInt(form.groupSizeMax, 10)

    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(form.slug)) {
      setError('Slug must be lowercase-kebab-case, e.g. "7-day-serengeti-safari".')
      setLoading(false)
      return
    }
    if (!form.name.trim()) {
      setError('Name is required.')
      setLoading(false)
      return
    }
    if (!Number.isFinite(duration) || duration < 1) {
      setError('Duration must be at least 1 day.')
      setLoading(false)
      return
    }
    if (!Number.isFinite(priceFrom) || priceFrom <= 0) {
      setError('Price From must be greater than 0.')
      setLoading(false)
      return
    }
    if (!Number.isFinite(groupSizeMin) || !Number.isFinite(groupSizeMax) || groupSizeMin < 1 || groupSizeMin > groupSizeMax) {
      setError('Group size min/max must be set, with min ≤ max.')
      setLoading(false)
      return
    }
    if (!form.heroImage.trim()) {
      setError('Hero Image is required.')
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/admin/packages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: form.slug, name: form.name.trim(), duration, type: form.type,
          priceFrom, groupSizeMin, groupSizeMax, heroImage: form.heroImage.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error ?? 'Failed to create package.')
        setLoading(false)
        return
      }
      router.push(`/admin/packages/${data.id}`)
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/packages" className="detail-back">← Back to Packages</Link>
      <h1 className="mb-6">New Safari Package</h1>
      <form onSubmit={handleSubmit} className="panel space-y-4">
        <div>
          <label className="field-label">Slug *</label>
          <input required value={form.slug} onChange={(e) => update('slug', e.target.value)} className="field-input" placeholder="7-day-serengeti-safari" />
          <p className="text-[11px] text-gray-400 mt-1">Lowercase, kebab-case, permanent once created.</p>
        </div>
        <div>
          <label className="field-label">Name *</label>
          <input required value={form.name} onChange={(e) => update('name', e.target.value)} className="field-input" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="field-label">Duration (days) *</label>
            <input required type="number" min="1" value={form.duration} onChange={(e) => update('duration', e.target.value)} className="field-input" />
          </div>
          <div>
            <label className="field-label">Type *</label>
            <select value={form.type} onChange={(e) => update('type', e.target.value as PackageType)} className="field-input">
              {TYPE_OPTIONS.map((t) => <option key={t} value={t}>{TYPE_LABELS[t]}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="field-label">Price From (USD) *</label>
            <input required type="number" min="0" step="1" value={form.priceFrom} onChange={(e) => update('priceFrom', e.target.value)} className="field-input" />
          </div>
          <div>
            <label className="field-label">Group Size Min *</label>
            <input required type="number" min="1" value={form.groupSizeMin} onChange={(e) => update('groupSizeMin', e.target.value)} className="field-input" />
          </div>
          <div>
            <label className="field-label">Group Size Max *</label>
            <input required type="number" min="1" value={form.groupSizeMax} onChange={(e) => update('groupSizeMax', e.target.value)} className="field-input" />
          </div>
        </div>
        <div>
          <label className="field-label">Hero Image (path) *</label>
          <input required value={form.heroImage} onChange={(e) => update('heroImage', e.target.value)} className="field-input" placeholder="/images/safaris/..." />
        </div>
        {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.5 : 1 }}>
          {loading ? 'Creating…' : 'Create Package'}
        </button>
      </form>
    </div>
  )
}
