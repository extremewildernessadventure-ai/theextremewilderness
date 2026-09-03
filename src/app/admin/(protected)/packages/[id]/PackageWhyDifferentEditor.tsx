'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Trash2 } from 'lucide-react'
import type { SafariPackage } from '@/data/packages'
import StringListEditor from '@/components/admin/StringListEditor'

const inputCls = 'field-input'
const labelCls = 'field-label'

type HighlightItem = { title: string; text: string }

// Both fields here are optional "rich content" blocks (whyDifferent's
// heading+paragraphs, destinationHighlights' heading+items) that only
// render on the live detail page when present -- an empty heading means
// the whole section is omitted on save, matching how the hand-written
// TS packages already behave. Same full-replace PATCH contract as the
// other panels on this page.
export default function PackageWhyDifferentEditor({ id, pkg }: { id: number; pkg: SafariPackage }) {
  const router = useRouter()
  const [whyHeading, setWhyHeading] = useState(pkg.whyDifferent?.heading ?? '')
  const [whyParagraphs, setWhyParagraphs] = useState(pkg.whyDifferent?.paragraphs ?? [])
  const [destHeading, setDestHeading] = useState(pkg.destinationHighlights?.heading ?? '')
  const [destItems, setDestItems] = useState<HighlightItem[]>(pkg.destinationHighlights?.items ?? [])
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  function updateDestItem(index: number, key: keyof HighlightItem, value: string) {
    setDestItems((items) => items.map((it, i) => (i === index ? { ...it, [key]: value } : it)))
  }
  function addDestItem() {
    setDestItems((items) => [...items, { title: '', text: '' }])
  }
  function removeDestItem(index: number) {
    setDestItems((items) => items.filter((_, i) => i !== index))
  }

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    setError('')

    const cleanParagraphs = whyParagraphs.filter((p) => p.trim() !== '')
    if (whyHeading.trim() && cleanParagraphs.length === 0) {
      setError('"Why This Trip Is Different" needs at least one paragraph if it has a heading.')
      setSaving(false)
      return
    }
    const cleanDestItems = destItems.filter((it) => it.title.trim() !== '' && it.text.trim() !== '')
    if (destHeading.trim() && cleanDestItems.length === 0) {
      setError('Destination Highlights needs at least one complete item (title + text) if it has a heading.')
      setSaving(false)
      return
    }

    const updated: SafariPackage = { ...pkg }
    if (whyHeading.trim() && cleanParagraphs.length > 0) {
      updated.whyDifferent = { heading: whyHeading.trim(), paragraphs: cleanParagraphs }
    } else {
      delete updated.whyDifferent
    }
    if (destHeading.trim() && cleanDestItems.length > 0) {
      updated.destinationHighlights = { heading: destHeading.trim(), items: cleanDestItems.map((it) => ({ title: it.title.trim(), text: it.text.trim() })) }
    } else {
      delete updated.destinationHighlights
    }

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
      <h2 className="mb-1">Why This Trip Is Different (optional)</h2>
      <div>
        <label className={labelCls}>Heading</label>
        <input value={whyHeading} onChange={(e) => setWhyHeading(e.target.value)} className={inputCls} />
      </div>
      <StringListEditor label="Paragraphs" values={whyParagraphs} onChange={setWhyParagraphs} addLabel="Add paragraph" textarea />

      <div className="pt-2 border-t border-gray-100 space-y-3">
        <h3 className="text-sm font-semibold text-gray-500">Destination Highlights (optional)</h3>
        <div>
          <label className={labelCls}>Heading</label>
          <input value={destHeading} onChange={(e) => setDestHeading(e.target.value)} className={inputCls} />
        </div>
        <div className="space-y-2">
          {destItems.map((item, i) => (
            <div key={i} className="grid grid-cols-[1fr_2fr_auto] gap-2 items-start">
              <input
                value={item.title}
                onChange={(e) => updateDestItem(i, 'title', e.target.value)}
                className={inputCls}
                placeholder="Title"
              />
              <textarea
                value={item.text}
                onChange={(e) => updateDestItem(i, 'text', e.target.value)}
                className={inputCls}
                rows={2}
                placeholder="Text"
              />
              <button
                type="button"
                onClick={() => removeDestItem(i)}
                className="p-2 text-gray-400 hover:text-red-500"
                aria-label="Remove destination highlight"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addDestItem}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-secondary"
        >
          <Plus className="w-4 h-4" /> Add highlight
        </button>
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
