'use client'

import { Plus, Trash2 } from 'lucide-react'

// Reusable add/remove editor for a simple string[] field (destinations,
// highlights, bestFor, overview, notes, excludedCategorized, and so on) --
// same skeleton as InvoiceItemsEditor's row list, simplified to one text
// input per row instead of a multi-column grid. A controlled component:
// the parent owns the array in its own form state and passes it down,
// matching every other admin form's single-source-of-truth pattern rather
// than this component holding its own copy.
export default function StringListEditor({
  label,
  values,
  onChange,
  placeholder,
  addLabel = 'Add',
  textarea = false,
}: {
  label: string
  values: string[]
  onChange: (next: string[]) => void
  placeholder?: string
  addLabel?: string
  textarea?: boolean
}) {
  function updateAt(index: number, value: string) {
    onChange(values.map((v, i) => (i === index ? value : v)))
  }
  function removeAt(index: number) {
    onChange(values.filter((_, i) => i !== index))
  }
  function add() {
    onChange([...values, ''])
  }

  return (
    <div>
      <label className="field-label">{label}</label>
      <div className="space-y-2">
        {values.map((value, i) => (
          <div key={i} className="flex gap-2 items-start">
            {textarea ? (
              <textarea
                value={value}
                onChange={(e) => updateAt(i, e.target.value)}
                className="field-input flex-1"
                placeholder={placeholder}
                rows={2}
              />
            ) : (
              <input
                value={value}
                onChange={(e) => updateAt(i, e.target.value)}
                className="field-input flex-1"
                placeholder={placeholder}
              />
            )}
            <button
              type="button"
              onClick={() => removeAt(i)}
              className="p-2 text-gray-400 hover:text-red-500 shrink-0"
              aria-label={`Remove ${label} entry`}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-secondary"
      >
        <Plus className="w-4 h-4" /> {addLabel}
      </button>
    </div>
  )
}
