-- Migration number: 0009 	 2026-08-27T00:00:00.000Z

-- A capacity-bound instance of a safari package on a specific date range.
-- `package_slug` is validated at the app layer against src/data/packages.ts,
-- not a DB FK — packages are a static data file, not a table. Nearly every
-- table added in later phases (bookings, invoices, expenses, permits,
-- incident_reports, supplier_payments) tags against departures.id.
CREATE TABLE departures (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  package_slug TEXT NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  capacity INTEGER NOT NULL,
  -- Denormalized, recalculated in app code whenever a booking is
  -- created/cancelled (see src/lib/departures.ts) — same pattern as
  -- invoices.amount/amount_paid in src/lib/invoices.ts.
  seats_booked INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'few_left', 'full', 'departed', 'cancelled')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);

CREATE INDEX idx_departures_start_date ON departures(start_date);
