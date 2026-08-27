-- Migration number: 0010 	 2026-08-27T00:00:00.000Z

CREATE TABLE guides (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  languages TEXT,
  specialty TEXT,
  active INTEGER NOT NULL DEFAULT 1,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);

CREATE TABLE vehicles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  plate_number TEXT NOT NULL,
  capacity INTEGER NOT NULL,
  maintenance_status TEXT NOT NULL DEFAULT 'ok' CHECK (maintenance_status IN ('ok', 'due_soon', 'in_service')),
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);

-- Ops-side lodge roster (booking/logistics contact info) — distinct from the
-- public marketing lodge pages in src/data/accommodations.ts, which describe
-- guest-facing tiers/amenities, not who to call to confirm a reservation.
CREATE TABLE ops_lodges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  location TEXT,
  contact_info TEXT,
  rate_notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);

CREATE TABLE suppliers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('lodge', 'vehicle_vendor', 'activity_operator', 'other')),
  contact_info TEXT,
  active INTEGER NOT NULL DEFAULT 1,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);

CREATE TABLE supplier_contracts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  supplier_id INTEGER NOT NULL REFERENCES suppliers(id),
  negotiated_rate REAL,
  currency TEXT NOT NULL DEFAULT 'USD',
  valid_from TEXT,
  valid_to TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- `booking_id` isn't added here — the bookings table doesn't exist until
-- migration 0011, and SQLite won't validate a REFERENCES target that
-- doesn't exist yet. 0011 adds it via ALTER TABLE once bookings is real.
CREATE TABLE supplier_payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  supplier_id INTEGER NOT NULL REFERENCES suppliers(id),
  departure_id INTEGER REFERENCES departures(id),
  amount REAL NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  status TEXT NOT NULL DEFAULT 'owed' CHECK (status IN ('owed', 'paid')),
  due_date TEXT,
  paid_at TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_supplier_contracts_supplier_id ON supplier_contracts(supplier_id);
CREATE INDEX idx_supplier_payments_supplier_id ON supplier_payments(supplier_id);
