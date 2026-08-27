-- Migration number: 0013 	 2026-08-27T00:00:00.000Z

-- Gives the public site's TANAPA-fees-paid trust claim an actual
-- operational record. Optionally tagged to a departure.
CREATE TABLE permits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  departure_id INTEGER REFERENCES departures(id),
  type TEXT NOT NULL CHECK (type IN ('tanapa', 'ncaa', 'other')),
  park TEXT,
  permit_number TEXT,
  amount_paid REAL,
  currency TEXT NOT NULL DEFAULT 'USD',
  paid_at TEXT,
  confirmation_ref TEXT,
  valid_from TEXT,
  valid_to TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'confirmed', 'expired')),
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_permits_departure_id ON permits(departure_id);
