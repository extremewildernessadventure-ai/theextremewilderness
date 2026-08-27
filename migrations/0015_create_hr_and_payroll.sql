-- Migration number: 0015 	 2026-08-27T00:00:00.000Z

-- No file_key column — R2 isn't wired into this project until Phase 7's
-- Documents module. Certification metadata only for now.
CREATE TABLE guide_certifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  guide_id INTEGER NOT NULL REFERENCES guides(id),
  type TEXT NOT NULL,
  issuing_body TEXT,
  cert_number TEXT,
  issued_at TEXT,
  expires_at TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_guide_certifications_guide_id ON guide_certifications(guide_id);

CREATE TABLE guide_availability (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  guide_id INTEGER NOT NULL REFERENCES guides(id),
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('leave', 'unavailable', 'booked')),
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_guide_availability_guide_id ON guide_availability(guide_id);

CREATE TABLE staff_members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  role_title TEXT,
  guide_id INTEGER REFERENCES guides(id),
  pay_type TEXT NOT NULL CHECK (pay_type IN ('salary', 'daily_rate', 'per_trip')),
  base_rate REAL NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);

CREATE TABLE payroll_periods (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  period_start TEXT NOT NULL,
  period_end TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'processed', 'paid')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- trip_pay_total is pulled from expenses where category='wages' AND
-- staff_member_id = this payslip's staff member, tagged to a departure that
-- falls within the period's date range, at generation time — see
-- POST /api/admin/payroll/[id]/generate. Statutory tax/deduction
-- calculation is explicitly out of scope (manual bookkeeping only), same
-- philosophy as the rest of this system.
CREATE TABLE payslips (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  period_id INTEGER NOT NULL REFERENCES payroll_periods(id),
  staff_member_id INTEGER NOT NULL REFERENCES staff_members(id),
  base_amount REAL NOT NULL,
  bonuses REAL NOT NULL DEFAULT 0,
  deductions REAL NOT NULL DEFAULT 0,
  trip_pay_total REAL NOT NULL DEFAULT 0,
  net_amount REAL NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'approved', 'paid')),
  paid_at TEXT,
  payment_reference TEXT,
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payslips_period_id ON payslips(period_id);
