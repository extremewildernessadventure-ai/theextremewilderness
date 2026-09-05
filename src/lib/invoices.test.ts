import { describe, it, expect } from 'vitest'
import { deriveStatus, round2, validateItems, computeImpliedTotal, computeRemainingBalance, validateDepositPercent, buildPaymentSummary } from './invoices'

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

describe('computeImpliedTotal', () => {
  it('returns null for a plain (non-deposit) invoice', () => {
    expect(computeImpliedTotal({ amount: 1000, deposit_percent: null })).toBeNull()
  })

  it('derives the larger total a deposit amount represents a percentage of', () => {
    // $902.88 is 30% of a $3,009.60 total -- exactly the real-world figures
    // that prompted this design (a real production invoice).
    expect(computeImpliedTotal({ amount: 902.88, deposit_percent: 30 })).toBe(3009.6)
  })

  it('round-trips cleanly for a round percentage', () => {
    expect(computeImpliedTotal({ amount: 1500, deposit_percent: 30 })).toBe(5000)
  })
})

describe('computeRemainingBalance', () => {
  it('returns null for a plain (non-deposit) invoice', () => {
    expect(computeRemainingBalance({ amount: 1000, deposit_percent: null })).toBeNull()
  })

  it('computes what a follow-up invoice for the remainder should be billed as', () => {
    expect(computeRemainingBalance({ amount: 902.88, deposit_percent: 30 })).toBe(2106.72)
  })

  it('deposit + remaining balance always sums back to the implied total', () => {
    const amount = 1500
    const remaining = computeRemainingBalance({ amount, deposit_percent: 30 })!
    const total = computeImpliedTotal({ amount, deposit_percent: 30 })!
    expect(round2(amount + remaining)).toBe(total)
  })
})

describe('validateDepositPercent', () => {
  it('allows undefined/null (not a deposit invoice)', () => {
    expect(validateDepositPercent(undefined)).toBeNull()
    expect(validateDepositPercent(null)).toBeNull()
  })

  it('allows any whole number 1-99', () => {
    expect(validateDepositPercent(1)).toBeNull()
    expect(validateDepositPercent(30)).toBeNull()
    expect(validateDepositPercent(99)).toBeNull()
  })

  it('rejects 0, 100, negative, non-integer, and non-number values', () => {
    expect(validateDepositPercent(0)).not.toBeNull()
    expect(validateDepositPercent(100)).not.toBeNull()
    expect(validateDepositPercent(-5)).not.toBeNull()
    expect(validateDepositPercent(30.5)).not.toBeNull()
    expect(validateDepositPercent('30')).not.toBeNull()
  })
})

describe('buildPaymentSummary', () => {
  it('describes a plain invoice as "due" when nothing has been paid', () => {
    const summary = buildPaymentSummary({ currency: 'USD', amount: 1000, amount_paid: 0, deposit_percent: null })
    expect(summary).toContain('due')
    expect(summary).not.toContain('balance due')
  })

  it('describes a plain invoice as "balance due" once something has been paid', () => {
    const summary = buildPaymentSummary({ currency: 'USD', amount: 1000, amount_paid: 400, deposit_percent: null })
    expect(summary).toContain('balance due')
  })

  it('states the deposit amount and the larger implied total while unpaid', () => {
    const summary = buildPaymentSummary({ currency: 'USD', amount: 902.88, amount_paid: 0, deposit_percent: 30 })
    expect(summary).toContain('deposit of USD 902.88')
    expect(summary).toContain('30% of the USD 3,009.6 total')
  })

  it('thanks the client once the deposit is fully paid, without re-describing it as still owed', () => {
    const summary = buildPaymentSummary({ currency: 'USD', amount: 902.88, amount_paid: 902.88, deposit_percent: 30 })
    expect(summary).toContain('received in full')
    expect(summary).not.toContain('30%')
  })
})
