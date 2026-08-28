// Shared by every admin date input representing a future-only booking/
// reservation window (departure dates, lodge check-in/out, permit/contract
// validity, quote expiry, guide availability/certification expiry) — used
// as the `min` attribute so past dates can't be picked. Deliberately NOT
// applied to retroactive-logging fields (expense paid-on, incident
// occurred-on, etc.) or genuinely ambiguous ones (invoice/payment due
// dates, payroll periods) — those legitimately need to accept past dates.
export function todayIso(): string {
  return new Date().toISOString().slice(0, 10)
}
