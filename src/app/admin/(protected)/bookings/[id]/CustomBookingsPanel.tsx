'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { CustomBooking } from '@/lib/bookings'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'
import { todayIso } from '@/lib/dates'

const inputCls = 'field-input'
const labelCls = 'field-label'

const PILL_CLASS: Record<'pending' | 'confirmed' | 'cancelled', PillClass> = {
  pending: 'few',
  confirmed: 'open',
  cancelled: 'cancelled',
}

type CustomForm = { description: string; startDate: string; endDate: string; contactInfo: string; notes: string }

const EMPTY_FORM: CustomForm = { description: '', startDate: '', endDate: '', contactInfo: '', notes: '' }

// Shared between the "+ Add Entry" form and each row's inline "Edit" form —
// same fields either way, just pointed at different state/handlers.
function CustomFields({ form, update }: {
  form: CustomForm
  update: <K extends keyof CustomForm>(key: K, value: string) => void
}) {
  return (
    <>
      <div>
        <label className={labelCls}>What&apos;s Being Booked *</label>
        <textarea
          value={form.description}
          onChange={(e) => update('description', e.target.value)}
          rows={2}
          className={inputCls}
          placeholder="e.g. Football pitch — corporate tournament, or Private arena — cultural performance"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Start Date</label>
          <input type="date" min={todayIso()} value={form.startDate} onChange={(e) => update('startDate', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>End Date</label>
          <input type="date" min={todayIso()} value={form.endDate} onChange={(e) => update('endDate', e.target.value)} className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Provider Contact (phone/email)</label>
        <input
          value={form.contactInfo}
          onChange={(e) => update('contactInfo', e.target.value)}
          className={inputCls}
          placeholder="e.g. +255 22 123 4567 or venue@example.com"
        />
        <p className="text-xs text-gray-400 mt-1">Printed on the voucher so the client can confirm directly with the provider.</p>
      </div>
      <div>
        <label className={labelCls}>Notes</label>
        <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={2} className={inputCls} />
      </div>
    </>
  )
}

// Sibling to LodgeBookingPanel, for anything booked that isn't accommodation
// — a venue, a pitch, an arena, equipment. Sits directly below Accommodation
// & Facilities on the same booking (same client), so it never needs its own
// client-input fields.
export default function CustomBookingsPanel({ bookingId, customBookings }: {
  bookingId: number
  customBookings: CustomBooking[]
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<CustomForm>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)

  // Editing an existing entry reuses the same form shape/fields as adding
  // one, just pre-filled and PATCHed instead of POSTed — editingId doubles
  // as "which row is in edit mode", null means none.
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<CustomForm>(EMPTY_FORM)
  const [editSaving, setEditSaving] = useState(false)

  function update<K extends keyof CustomForm>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function updateEdit<K extends keyof CustomForm>(key: K, value: string) {
    setEditForm((f) => ({ ...f, [key]: value }))
  }

  function startEdit(cb: CustomBooking) {
    setOpen(false)
    setEditingId(cb.id)
    setEditForm({
      description: cb.description,
      startDate: cb.start_date ?? '',
      endDate: cb.end_date ?? '',
      contactInfo: cb.contact_info ?? '',
      notes: cb.notes ?? '',
    })
  }

  const canSubmitEdit = editForm.description.trim().length > 0

  async function handleSaveEdit() {
    if (editingId === null || !canSubmitEdit) return
    setEditSaving(true)
    const res = await fetch(`/api/admin/bookings/${bookingId}/custom/${editingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: editForm.description.trim(),
        startDate: editForm.startDate,
        endDate: editForm.endDate,
        contactInfo: editForm.contactInfo,
        notes: editForm.notes,
      }),
    })
    setEditSaving(false)
    if (res.ok) {
      setEditingId(null)
      router.refresh()
    }
  }

  const canSubmit = form.description.trim().length > 0

  async function handleAdd() {
    if (!canSubmit) return
    setSaving(true)
    const res = await fetch(`/api/admin/bookings/${bookingId}/custom`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: form.description.trim(),
        startDate: form.startDate,
        endDate: form.endDate,
        contactInfo: form.contactInfo,
        notes: form.notes,
      }),
    })
    setSaving(false)
    if (res.ok) {
      setForm(EMPTY_FORM)
      setOpen(false)
      router.refresh()
    }
  }

  return (
    <div className="panel">
      <div className="flex items-center justify-between mb-4">
        <h2>Custom Bookings</h2>
        <button
          type="button"
          onClick={() => { setEditingId(null); setOpen((v) => !v) }}
          className="text-xs font-semibold hover:underline"
          style={{ color: 'var(--pine)' }}
        >
          {open ? 'Cancel' : '+ Add Entry'}
        </button>
      </div>

      {customBookings.length > 0 ? (
        <ul className="space-y-3">
          {customBookings.map((cb) => (
            <li key={cb.id} className="text-sm border-b border-gray-100 last:border-0 pb-3 last:pb-0">
              {editingId === cb.id ? (
                <div className="space-y-3">
                  <CustomFields form={editForm} update={updateEdit} />
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={handleSaveEdit} disabled={editSaving || !canSubmitEdit} className="btn-primary" style={{ opacity: editSaving || !canSubmitEdit ? 0.5 : 1 }}>
                      {editSaving ? 'Saving…' : 'Save Changes'}
                    </button>
                    <button type="button" onClick={() => setEditingId(null)} className="text-xs font-semibold hover:underline" style={{ color: 'var(--grey)' }}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-gray-700">{cb.description}</span>
                    {(cb.start_date || cb.end_date) && (
                      <span className="text-xs text-gray-400 ms-2">{cb.start_date ?? '…'} → {cb.end_date ?? '…'}</span>
                    )}
                    {cb.contact_info && <p className="text-xs text-gray-500 mt-0.5">Contact: {cb.contact_info}</p>}
                    {cb.notes && <p className="text-xs text-gray-500 mt-0.5">{cb.notes}</p>}
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => startEdit(cb)} className="text-xs font-semibold hover:underline" style={{ color: 'var(--pine)' }}>
                      Edit
                    </button>
                    <InlineStatusSelect
                      endpoint={`/api/admin/bookings/${bookingId}/custom/${cb.id}`}
                      statuses={['pending', 'confirmed', 'cancelled']}
                      pillClass={PILL_CLASS}
                      currentStatus={cb.status}
                      compact
                    />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        !open && <p className="text-sm text-gray-400">No custom bookings recorded — a venue, a pitch, an arena, or anything else that isn&apos;t accommodation.</p>
      )}

      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          <CustomFields form={form} update={update} />
          <button type="button" onClick={handleAdd} disabled={saving || !canSubmit} className="btn-primary" style={{ opacity: saving || !canSubmit ? 0.5 : 1 }}>
            {saving ? 'Adding…' : 'Add Entry'}
          </button>
        </div>
      )}
    </div>
  )
}
