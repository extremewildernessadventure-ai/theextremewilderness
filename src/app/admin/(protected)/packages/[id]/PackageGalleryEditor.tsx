'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Trash2 } from 'lucide-react'
import type { SafariPackage } from '@/data/packages'

const inputCls = 'field-input'

type GalleryImage = SafariPackage['gallery'][number]

// Image paths only, no R2 upload yet -- that's a later stage of the
// packages-D1 migration (existing packages keep referencing their current
// public/images/... paths; R2 upload is planned for new admin-created
// packages once that's built). For now, admins paste an existing path.
export default function PackageGalleryEditor({ id, gallery }: { id: number; gallery: SafariPackage['gallery'] }) {
  const router = useRouter()
  const [rows, setRows] = useState<GalleryImage[]>(gallery)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  function updateRow(index: number, key: keyof GalleryImage, value: string) {
    setRows((r) => r.map((row, i) => (i === index ? { ...row, [key]: value } : row)))
    setSaved(false)
  }
  function addRow() {
    setRows((r) => [...r, { src: '', alt: '' }])
  }
  function removeRow(index: number) {
    setRows((r) => r.filter((_, i) => i !== index))
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    setError('')

    const parsed = rows.filter((r) => r.src.trim() !== '').map((r) => ({ src: r.src.trim(), alt: r.alt.trim() }))
    if (parsed.some((r) => !r.alt)) {
      setError('Every gallery image needs alt text.')
      setSaving(false)
      return
    }

    const res = await fetch(`/api/admin/packages/${id}/gallery`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gallery: parsed }),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error ?? 'Failed to save the gallery.')
      return
    }
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="panel space-y-3">
      <h2 className="mb-1">Gallery</h2>
      <div className="space-y-2">
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-[2fr_2fr_auto] gap-2 items-center">
            <input value={row.src} onChange={(e) => updateRow(i, 'src', e.target.value)} className={inputCls} placeholder="/images/safaris/..." />
            <input value={row.alt} onChange={(e) => updateRow(i, 'alt', e.target.value)} className={inputCls} placeholder="Alt text" />
            <button type="button" onClick={() => removeRow(i)} className="p-2 text-gray-400 hover:text-red-500" aria-label="Remove gallery image">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addRow} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-secondary">
        <Plus className="w-4 h-4" /> Add image
      </button>

      {error && <p role="alert" className="text-red-500 text-xs">{error}</p>}
      <div className="flex items-center gap-3">
        <button type="button" onClick={handleSave} disabled={saving} className="btn-primary" style={{ opacity: saving ? 0.5 : 1 }}>
          {saving ? 'Saving…' : 'Save Gallery'}
        </button>
        {saved && <span className="text-green-600 text-sm">Saved</span>}
      </div>
    </div>
  )
}
