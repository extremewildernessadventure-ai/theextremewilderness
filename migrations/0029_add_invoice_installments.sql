-- Migration number: 0029

-- Deposit/balance percentage split for invoices. Both columns default to
-- NULL, meaning "no split" -- every existing invoice keeps its exact current
-- behavior (one due_date, one total). Dollar amounts are never stored here:
-- deposit/balance amounts are always computed on the fly from the invoice's
-- current `amount` (already a derived value recalculated whenever line
-- items change) via computeInstallments() in src/lib/invoices.ts, so a
-- later item edit never leaves a stale deposit figure behind. due_date
-- (existing column) is reinterpreted as "deposit due date" whenever
-- deposit_percent is set; balance_due_date is the second, later due date.
ALTER TABLE invoices ADD COLUMN deposit_percent INTEGER;
ALTER TABLE invoices ADD COLUMN balance_due_date TEXT;
