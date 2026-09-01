'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { LodgeBooking } from '@/lib/bookings'
import type { OpsLodge } from '@/lib/ops'
import InlineStatusSelect, { type PillClass } from '@/components/admin/InlineStatusSelect'
import SelectWithCustom, { CUSTOM_OPTION_VALUE } from '@/components/admin/SelectWithCustom'
import { todayIso } from '@/lib/dates'

const inputCls = 'field-input'
const labelCls = 'field-label'

const PILL_CLASS: Record<'pending' | 'confirmed' | 'cancelled', PillClass> = {
  pending: 'few',
  confirmed: 'open',
  cancelled: 'cancelled',
}

type LodgeForm = {
  lodgeId: string; lodgeNameOther: string; checkIn: string; checkOut: string
  confirmationRef: string; roomType: string; inclusions: string; contactInfo: string
}

const EMPTY_FORM: LodgeForm = {
  lodgeId: '', lodgeNameOther: '', checkIn: '', checkOut: '', confirmationRef: '', roomType: '', inclusions: '', contactInfo: '',
}

// Shared between the "+ Add Entry" form and each row's inline "Edit" form —
// same fields either way, just pointed at different state/handlers.
function LodgeFields({ form, update, lodges }: {
  form: LodgeForm
  update: <K extends keyof LodgeForm>(key: K, value: string) => void
  lodges: OpsLodge[]
}) {
  return (
    <>
      <div>
        <label className={labelCls}>Lodge / Facility</label>
        <SelectWithCustom
          options={lodges}
          getOptionValue={(l) => String(l.id)}
          getOptionLabel={(l) => l.name}
          value={form.lodgeId}
          onChange={(v) => {
            update('lodgeId', v)
            // Prefill the provider contact from the catalog lodge's own
            // record — a per-booking snapshot, not a live join, so it
            // stays editable/overridable and still works for
            // free-text/unlisted entries with no catalog record at all.
            // Only prefills if the field is still empty, so it never
            // clobbers something staff already typed.
            if (!form.contactInfo) {
              const lodge = lodges.find((l) => String(l.id) === v)
              if (lodge?.contact_info) update('contactInfo', lodge.contact_info)
            }
          }}
          customValue={form.lodgeNameOther}
          onCustomChange={(v) => update('lodgeNameOther', v)}
          placeholder="— Select a lodge —"
          customOptionLabel="— Other / unlisted (homestay, lab, venue, hostel…) —"
          customPlaceholder="e.g. Research Lab — Arusha, or Homestay, Bishop Rd"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Check In</label>
          <input type="date" min={todayIso()} value={form.checkIn} onChange={(e) => update('checkIn', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Check Out</label>
          <input type="date" min={todayIso()} value={form.checkOut} onChange={(e) => update('checkOut', e.target.value)} className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Room Type / Access</label>
        <input value={form.roomType} onChange={(e) => update('roomType', e.target.value)} className={inputCls} placeholder="e.g. Twin Room, Lab access, Private room" />
      </div>
      <div>
        <label className={labelCls}>Confirmation Ref</label>
        <input value={form.confirmationRef} onChange={(e) => update('confirmationRef', e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Provider Contact (phone/email)</label>
        <input
          value={form.contactInfo}
          onChange={(e) => update('contactInfo', e.target.value)}
          className={inputCls}
          placeholder="e.g. +255 22 123 4567 or reservations@serenahotels.com"
        />
        <p className="text-xs text-gray-400 mt-1">Printed on the voucher so the client can confirm directly with the provider.</p>
      </div>
      <div>
        <label className={labelCls}>Inclusions</label>
        <textarea value={form.inclusions} onChange={(e) => update('inclusions', e.target.value)} rows={2} className={inputCls} placeholder="e.g. Full board, airport transfer, game drive" />
      </div>
    </>
  )
}

export default function LodgeBookingPanel({ bookingId, lodgeBookings, lodges }: {
  bookingId: number
  lodgeBookings: LodgeBooking[]
  lodges: OpsLodge[]
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<LodgeForm>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)

  // Editing an existing entry reuses the same form shape/fields as adding
  // one, just pre-filled and PATCHed instead of POSTed — editingId doubles
  // as "which row is in edit mode", null means none.
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<LodgeForm>(EMPTY_FORM)
  const [editSaving, setEditSaving] = useState(false)

  function update<K extends keyof LodgeForm>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function updateEdit<K extends keyof LodgeForm>(key: K, value: string) {
    setEditForm((f) => ({ ...f, [key]: value }))
  }

  function startEdit(lb: LodgeBooking) {
    setOpen(false)
    setEditingId(lb.id)
    setEditForm({
      lodgeId: lb.lodge_id ? String(lb.lodge_id) : (lb.lodge_name_other ? CUSTOM_OPTION_VALUE : ''),
      lodgeNameOther: lb.lodge_name_other ?? '',
      checkIn: lb.check_in ?? '',
      checkOut: lb.check_out ?? '',
      confirmationRef: lb.confirmation_ref ?? '',
      roomType: lb.room_type ?? '',
      inclusions: lb.inclusions ?? '',
      contactInfo: lb.contact_info ?? '',
    })
  }

  const isEditCustomLodge = editForm.lodgeId === CUSTOM_OPTION_VALUE
  const canSubmitEdit = isEditCustomLodge ? editForm.lodgeNameOther.trim().length > 0 : editForm.lodgeId.length > 0

  async function handleSaveEdit() {
    if (editingId === null || !canSubmitEdit) return
    setEditSaving(true)
    const res = await fetch(`/api/admin/bookings/${bookingId}/lodge/${editingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lodgeId: isEditCustomLodge ? null : Number(editForm.lodgeId),
        lodgeNameOther: isEditCustomLodge ? editForm.lodgeNameOther.trim() : null,
        checkIn: editForm.checkIn,
        checkOut: editForm.checkOut,
        confirmationRef: editForm.confirmationRef,
        roomType: editForm.roomType,
        inclusions: editForm.inclusions,
        contactInfo: editForm.contactInfo,
      }),
    })
    setEditSaving(false)
    if (res.ok) {
      setEditingId(null)
      router.refresh()
    }
  }

  function lodgeName(lb: LodgeBooking): string {
    if (lb.lodge_name_other) return lb.lodge_name_other
    return lodges.find((l) => l.id === lb.lodge_id)?.name ?? `Entry #${lb.lodge_id}`
  }

  const isCustomLodge = form.lodgeId === CUSTOM_OPTION_VALUE
  const canSubmit = isCustomLodge ? form.lodgeNameOther.trim().length > 0 : form.lodgeId.length > 0

  async function handleAdd() {
    if (!canSubmit) return
    setSaving(true)
    const res = await fetch(`/api/admin/bookings/${bookingId}/lodge`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lodgeId: isCustomLodge ? null : Number(form.lodgeId),
        lodgeNameOther: isCustomLodge ? form.lodgeNameOther.trim() : null,
        checkIn: form.checkIn,
        checkOut: form.checkOut,
        confirmationRef: form.confirmationRef,
        roomType: form.roomType,
        inclusions: form.inclusions,
        contactInfo: form.contactInfo,
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
        <h2>Accommodation & Facilities</h2>
        <button
          type="button"
          onClick={() => { setEditingId(null); setOpen((v) => !v) }}
          className="text-xs font-semibold hover:underline"
          style={{ color: 'var(--pine)' }}
        >
          {open ? 'Cancel' : '+ Add Entry'}
        </button>
      </div>

      {lodgeBookings.length > 0 ? (
        <ul className="space-y-3">
          {lodgeBookings.map((lb) => (
            <li key={lb.id} className="text-sm border-b border-gray-100 last:border-0 pb-3 last:pb-0">
              {editingId === lb.id ? (
                <div className="space-y-3">
                  <LodgeFields form={editForm} update={updateEdit} lodges={lodges} />
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
                    <span className="font-semibold text-gray-700">{lodgeName(lb)}</span>
                    {(lb.check_in || lb.check_out) && (
                      <span className="text-xs text-gray-400 ms-2">{lb.check_in ?? '…'} → {lb.check_out ?? '…'}</span>
                    )}
                    {lb.room_type && <p className="text-xs text-gray-500 mt-0.5">Room: {lb.room_type}</p>}
                    {lb.confirmation_ref && <p className="text-xs text-gray-500 mt-0.5">Ref: {lb.confirmation_ref}</p>}
                    {lb.contact_info && <p className="text-xs text-gray-500 mt-0.5">Contact: {lb.contact_info}</p>}
                    {lb.inclusions && <p className="text-xs text-gray-500 mt-0.5">Includes: {lb.inclusions}</p>}
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => startEdit(lb)} className="text-xs font-semibold hover:underline" style={{ color: 'var(--pine)' }}>
                      Edit
                    </button>
                    <InlineStatusSelect
                      endpoint={`/api/admin/bookings/${bookingId}/lodge/${lb.id}`}
                      statuses={['pending', 'confirmed', 'cancelled']}
                      pillClass={PILL_CLASS}
                      currentStatus={lb.status}
                      compact
                    />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        !open && <p className="text-sm text-gray-400">No accommodation or facilities recorded.</p>
      )}

      {open && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          <LodgeFields form={form} update={update} lodges={lodges} />
          <button type="button" onClick={handleAdd} disabled={saving || !canSubmit} className="btn-primary" style={{ opacity: saving || !canSubmit ? 0.5 : 1 }}>
            {saving ? 'Adding…' : 'Add Entry'}
          </button>
        </div>
      )}
    </div>
  )
}
