-- Migration number: 0032

-- Quotes were lead-only (lead_id NOT NULL) -- a client entered directly
-- (never a lead) had no way to be quoted. lead_id must become nullable,
-- which SQLite/D1 can't do via ALTER COLUMN -- recreate the table (first
-- time this schema has needed to loosen a NOT NULL constraint). Also
-- brings across the adults/children/price-per-person pricing model
-- departures briefly carried (migration 0031, reverted in 0033) -- quotes
-- are now the one place a trip's price is entered; see computeQuoteTotalCost
-- in src/lib/quotes.ts and computeInvoiceBalanceSchedule in
-- src/lib/invoices.ts for the read side.
CREATE TABLE quotes_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lead_id INTEGER REFERENCES leads(id),
  client_id INTEGER REFERENCES clients(id),
  package_slug TEXT,
  adults INTEGER NOT NULL DEFAULT 1,
  children INTEGER NOT NULL DEFAULT 0,
  price_per_adult REAL,
  price_per_child REAL,
  -- Derived from the 4 fields above, same "stored but always recalculated"
  -- convention as invoices.amount -- kept as a real column since every
  -- existing reader (list/detail/PDF) already just reads quote.price directly.
  price REAL NOT NULL DEFAULT 0,
  currency TEXT NOT NULL DEFAULT 'USD',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'accepted', 'declined', 'expired')),
  valid_until TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT,
  CHECK (lead_id IS NOT NULL OR client_id IS NOT NULL)
);

INSERT INTO quotes_new (id, lead_id, package_slug, price, currency, status, valid_until, notes, created_at, updated_at, adults, price_per_adult)
SELECT id, lead_id, package_slug, price, currency, status, valid_until, notes, created_at, updated_at, 1, price FROM quotes;

DROP TABLE quotes;
ALTER TABLE quotes_new RENAME TO quotes;

CREATE INDEX idx_quotes_lead_id ON quotes(lead_id);
CREATE INDEX idx_quotes_client_id ON quotes(client_id);
