import { describe, it, expect } from 'vitest'
import { deriveStatus, round2, validateItems } from './invoices'

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
