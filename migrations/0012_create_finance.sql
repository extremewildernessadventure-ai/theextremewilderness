-- Migration number: 0012 	 2026-08-27T00:00:00.000Z

-- staff_member_id is a bare column, not a REFERENCES — staff_members doesn't
-- exist until Phase 6's migration, and SQLite's CREATE TABLE syntax can't
-- reference a table that isn't there yet. D1 *does* enforce FK constraints
-- at DML time (confirmed live: an unrelated DELETE FROM invoices failed with
-- SQLITE_CONSTRAINT_FOREIGNKEY until its invoice_items rows were cleared
-- first) — every DELETE route touching a table with children must clear
-- them first, same as the existing invoices/suppliers DELETE routes already
-- do; this isn't optional cleanup hygiene, it's a real runtime requirement.
--
-- exchange_rate_to_usd/amount_usd are a manual snapshot entered at record
-- time, never a live FX lookup — same zero-external-dependency philosophy
-- as the rest of this system (e.g. Pesapal amounts, invoice currency).
CREATE TABLE expenses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT NOT NULL CHECK (category IN ('fuel', 'vehicle_maintenance', 'wages', 'permit', 'insurance', 'other')),
  vehicle_id INTEGER REFERENCES vehicles(id),
  staff_member_id INTEGER,
  departure_id INTEGER REFERENCES departures(id),
  amount REAL NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  exchange_rate_to_usd REAL NOT NULL DEFAULT 1,
  amount_usd REAL NOT NULL,
  description TEXT,
  paid_at TEXT,
  payment_method TEXT,
  reference TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_expenses_departure_id ON expenses(departure_id);

CREATE TABLE refunds (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  invoice_id INTEGER REFERENCES invoices(id),
  booking_id INTEGER REFERENCES bookings(id),
  amount REAL NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  reason TEXT,
  status TEXT NOT NULL DEFAULT 'requested' CHECK (status IN ('requested', 'approved', 'processed', 'denied')),
  processed_at TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Lets a departure's real revenue (paid invoices tagged to it) later be
-- weighed against its costs (expenses, supplier payments) in a
-- profitability report (Phase 8). Untagged invoices are simply excluded
-- from that report, not backfilled.
ALTER TABLE invoices ADD COLUMN departure_id INTEGER REFERENCES departures(id);
