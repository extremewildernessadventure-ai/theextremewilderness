-- Migration number: 0035

-- A small, admin-managed list of trip/package names, replacing the fixed
-- 44-entry public-marketing `packages.ts` catalog as the OPTIONS source for
-- the "Package" pickers on quotes/departures -- almost every real booking
-- is a custom/bespoke trip, so staff shouldn't have to scroll past 44
-- irrelevant marketing packages to reach "Custom / Bespoke Package" every
-- time. Deliberately NOT a real FK target for departures.package_slug /
-- quotes.package_slug (those stay plain TEXT, same "soft reference
-- validated at the app layer" convention packages.ts already used) --
-- archiving or even deleting an entry here never breaks an existing
-- departure/quote that already stored its name. The unrelated public
-- marketing site (src/data/packages.ts + 15 locale siblings) and the
-- shelved feat/packages-d1-schema branch (PR #45) are untouched by this.
CREATE TABLE trip_catalog (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  notes TEXT,
  archived INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);
