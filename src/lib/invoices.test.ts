import { describe, it, expect } from 'vitest'
import { deriveStatus, round2, validateItems, computeInstallments, buildPaymentSummary } from './invoices'

describe('deriveStatus', () => {
  it('is unpaid at zero paid', () => {
    expect(deriveStatus('unpaid', 1000, 0)).toBe('unpaid')
  })

  it('is partial between zero and the full amount', () => {
    expect(deriveStatus('unpaid', 1000, 400)).toBe('partial')
  })

  it('is paid once amount_paid reaches the total', () => {
    expect(deriveStatus('partial', 1000, 1000)).toBe('paid')
  })

  it('is paid if amount_paid overshoots the total (e.g. a tip/overpayment)', () => {
    expect(deriveStatus('partial', 1000, 1050)).toBe('paid')
  })

  it('stays cancelled while no payment has landed', () => {
    expect(deriveStatus('cancelled', 1000, 0)).toBe('cancelled')
  })

  it('falls through to normal derivation once a real payment lands on a cancelled invoice', () => {
    expect(deriveStatus('cancelled', 1000, 500)).toBe('partial')
    expect(deriveStatus('cancelled', 1000, 1000)).toBe('paid')
  })
})

describe('round2', () => {
  it('avoids float-sum drift', () => {
    expect(round2(0.1 + 0.2)).toBe(0.3)
  })

  it('rounds to 2 decimal places', () => {
    expect(round2(10.005)).toBeCloseTo(10.01, 2)
    expect(round2(19.999)).toBe(20)
  })
})

describe('validateItems', () => {
  it('accepts a well-formed item list', () => {
    expect(validateItems([{ description: 'Deposit', quantity: 2, unitPrice: 500 }])).toBe(true)
  })

  it('rejects an empty array', () => {
    expect(validateItems([])).toBe(false)
  })

  it('rejects a non-array', () => {
    expect(validateItems(undefined)).toBe(false)
    expect(validateItems({ description: 'x' })).toBe(false)
  })

  it('rejects an item with a blank description', () => {
    expect(validateItems([{ description: '  ', quantity: 1, unitPrice: 100 }])).toBe(false)
  })

  it('rejects zero or negative quantity', () => {
    expect(validateItems([{ description: 'x', quantity: 0, unitPrice: 100 }])).toBe(false)
    expect(validateItems([{ description: 'x', quantity: -1, unitPrice: 100 }])).toBe(false)
  })

  it('rejects negative unit price but allows zero (a free line item)', () => {
    expect(validateItems([{ description: 'x', quantity: 1, unitPrice: -1 }])).toBe(false)
    expect(validateItems([{ description: 'x', quantity: 1, unitPrice: 0 }])).toBe(true)
  })

  it('rejects if any item in a multi-item list is invalid', () => {
    expect(validateItems([
      { description: 'valid', quantity: 1, unitPrice: 100 },
      { description: '', quantity: 1, unitPrice: 50 },
    ])).toBe(false)
  })
})

describe('computeInstallments', () => {
  it('returns null when no deposit split is set (today\'s exact single-total behavior)', () => {
    expect(computeInstallments({ amount: 1000, amount_paid: 0, deposit_percent: null, due_date: '2026-01-01', balance_due_date: null })).toBeNull()
  })

  it('splits a round percentage correctly', () => {
    const result = computeInstallments({ amount: 5000, amount_paid: 0, deposit_percent: 30, due_date: '2026-01-01', balance_due_date: '2026-03-01' })
    expect(result).not.toBeNull()
    expect(result!.deposit.amount).toBe(1500)
    expect(result!.balance.amount).toBe(3500)
    expect(result!.deposit.dueDate).toBe('2026-01-01')
    expect(result!.balance.dueDate).toBe('2026-03-01')
  })

  it('rounds an uneven percentage split to 2 decimal places without losing money (deposit + balance == amount)', () => {
    const result = computeInstallments({ amount: 1000, amount_paid: 0, deposit_percent: 33, due_date: null, balance_due_date: null })!
    expect(result.deposit.amount).toBe(330)
    expect(result.balance.amount).toBe(670)
    expect(round2(result.deposit.amount + result.balance.amount)).toBe(1000)
  })

  it('applies payments deposit-first: a payment smaller than the deposit only covers the deposit', () => {
    const result = computeInstallments({ amount: 5000, amount_paid: 1000, deposit_percent: 30, due_date: null, balance_due_date: null })!
    expect(result.deposit.paid).toBe(1000)
    expect(result.deposit.status).toBe('partial')
    expect(result.balance.paid).toBe(0)
    expect(result.balance.status).toBe('unpaid')
  })

  it('applies payments deposit-first: once the deposit is fully covered, the rest flows to the balance', () => {
    const result = computeInstallments({ amount: 5000, amount_paid: 2000, deposit_percent: 30, due_date: null, balance_due_date: null })!
    expect(result.deposit.amount).toBe(1500)
    expect(result.deposit.paid).toBe(1500)
    expect(result.deposit.status).toBe('paid')
    expect(result.balance.paid).toBe(500)
    expect(result.balance.status).toBe('partial')
  })

  it('marks both legs paid once the full amount is covered', () => {
    const result = computeInstallments({ amount: 5000, amount_paid: 5000, deposit_percent: 30, due_date: null, balance_due_date: null })!
    expect(result.deposit.status).toBe('paid')
    expect(result.balance.status).toBe('paid')
  })

  it('treats a payment exactly equal to the deposit as a boundary: deposit paid, balance still unpaid', () => {
    const result = computeInstallments({ amount: 5000, amount_paid: 1500, deposit_percent: 30, due_date: null, balance_due_date: null })!
    expect(result.deposit.paid).toBe(1500)
    expect(result.deposit.status).toBe('paid')
    expect(result.balance.paid).toBe(0)
    expect(result.balance.status).toBe('unpaid')
  })
})

describe('buildPaymentSummary', () => {
  it('describes a plain (un-split) invoice as "due" when nothing has been paid', () => {
    const summary = buildPaymentSummary({ currency: 'USD', amount: 1000, amount_paid: 0, deposit_percent: null, due_date: null, balance_due_date: null })
    expect(summary).toContain('due')
    expect(summary).not.toContain('balance due')
  })

  it('describes a plain (un-split) invoice as "balance due" once something has been paid', () => {
    const summary = buildPaymentSummary({ currency: 'USD', amount: 1000, amount_paid: 400, deposit_percent: null, due_date: null, balance_due_date: null })
    expect(summary).toContain('balance due')
  })

  // The actual bug being fixed: resending after the deposit has cleared
  // must not re-announce it as if still pending -- only the attached PDF
  // was accurate before this fix, the email body text always described the
  // full schedule from scratch regardless of what had already been paid.
  it('describes the full deposit+balance schedule when neither leg is paid yet (first send)', () => {
    const summary = buildPaymentSummary({ currency: 'USD', amount: 5000, amount_paid: 0, deposit_percent: 30, due_date: '2026-01-01', balance_due_date: '2026-03-01' })
    expect(summary).toContain('deposit of USD 1,500')
    expect(summary).toContain('due 2026-01-01')
    expect(summary).toContain('balance of USD 3,500')
    expect(summary).toContain('due 2026-03-01')
  })

  it('thanks the client for the deposit and states only the remaining balance once the deposit has cleared', () => {
    const summary = buildPaymentSummary({ currency: 'USD', amount: 5000, amount_paid: 1500, deposit_percent: 30, due_date: '2026-01-01', balance_due_date: '2026-03-01' })
    expect(summary).toContain('deposit of USD 1,500 has been received')
    expect(summary).toContain('remaining balance of USD 3,500')
    expect(summary).toContain('due 2026-03-01')
    // must NOT re-describe the deposit as still owed/pending
    expect(summary).not.toContain('is split into')
  })

  it('accounts for a partial balance payment when stating the remaining amount', () => {
    const summary = buildPaymentSummary({ currency: 'USD', amount: 5000, amount_paid: 2000, deposit_percent: 30, due_date: '2026-01-01', balance_due_date: '2026-03-01' })
    // deposit (1500) fully covered, 500 of the 3500 balance also paid -> 3000 remaining
    expect(summary).toContain('remaining balance of USD 3,000')
  })

  it('announces paid-in-full once both legs are fully covered', () => {
    const summary = buildPaymentSummary({ currency: 'USD', amount: 5000, amount_paid: 5000, deposit_percent: 30, due_date: '2026-01-01', balance_due_date: '2026-03-01' })
    expect(summary).toContain('paid in full')
  })
})
