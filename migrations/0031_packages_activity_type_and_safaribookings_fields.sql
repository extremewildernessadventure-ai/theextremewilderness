-- Migration number: 0031 	 2026-09-04T00:00:00.000Z

-- Part of the SafariBookings-style rebuild (see the "Rebuild the safari
-- pages" plan): widens `type` from 4 coarse values to a 7-value
-- ActivityType enum (confirmed with the user as the correct move, not a
-- bolt-on tag field alongside the old one), and adds the new optional
-- fields the rebuild needs: operator name, best-travel months, practical
-- tips, and a structured seasonality guide (kept alongside the existing
-- best_time_to_travel string, not replacing it).
--
-- SQLite can't ALTER a CHECK constraint in place, so this recreates
-- `packages` with the new schema. Safe pre-launch: this whole catalog is
-- still unmerged/local-only (feat/packages-d1-schema), so existing rows
-- are cleared here rather than preserved through the migration --
-- scripts/migrate-packages-to-d1.ts regenerates everything from
-- src/data/packages.ts afterward, including the newly-required `type`
-- remap for all 44 packages.

DELETE FROM package_translations;
DELETE FROM package_faq;
DELETE FROM package_family_pricing;
DELETE FROM package_pricing_tiers;
DELETE FROM package_itinerary_tier_stays;
DELETE FROM package_itinerary_days;
DELETE FROM package_gallery;
DELETE FROM packages;

DROP TABLE packages;

CREATE TABLE packages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  duration INTEGER NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('big_five_game_drives','migration','photographic','walking','cultural','gorilla_trekking','beach_extension','mountain_trekking')),
  price_from REAL NOT NULL,
  group_size_min INTEGER NOT NULL,
  group_size_max INTEGER NOT NULL,
  hero_image TEXT NOT NULL,
  hero_image_alt TEXT,
  badge TEXT CHECK(badge IS NULL OR badge IN ('bestseller','new','popular')),
  tagline TEXT,
  best_time_to_travel TEXT,
  why_different_heading TEXT,
  why_different_paragraphs TEXT,       -- JSON string[]
  destination_highlights TEXT,         -- JSON {heading, items:[{title,text}]}
  notes TEXT,                          -- JSON string[]
  meta_title TEXT,
  meta_description TEXT,
  pricing_tiers_provisional INTEGER NOT NULL DEFAULT 0,
  destinations TEXT NOT NULL DEFAULT '[]',   -- JSON string[] (destination slugs)
  highlights TEXT NOT NULL DEFAULT '[]',     -- JSON string[]
  best_for TEXT NOT NULL DEFAULT '[]',       -- JSON string[]
  overview TEXT,                             -- JSON string[]
  included TEXT NOT NULL DEFAULT '[]',       -- JSON string[]
  excluded TEXT NOT NULL DEFAULT '[]',       -- JSON string[]
  included_categorized TEXT,                 -- JSON {transfers?, accommodationMeals?, guidingGameDrives?}
  excluded_categorized TEXT,                 -- JSON string[]
  status TEXT NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','published')),
  sort_order INTEGER NOT NULL DEFAULT 0,
  operator_name TEXT NOT NULL DEFAULT 'EWA Safari Outfitters',
  best_months TEXT,                          -- JSON string[] e.g. ["Jun","Jul","Aug"]
  practical_tips TEXT,                       -- JSON string[]
  seasonality_peak_season TEXT,
  seasonality_shoulder_season TEXT,
  seasonality_green_season TEXT,
  seasonality_recommendation TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);
CREATE INDEX idx_packages_slug ON packages(slug);
CREATE INDEX idx_packages_status ON packages(status);
CREATE INDEX idx_packages_sort_order ON packages(sort_order);

-- "Wildlife Radar" tab data -- species/sighting-likelihood per package.
CREATE TABLE package_wildlife_targets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  package_id INTEGER NOT NULL REFERENCES packages(id),
  name TEXT NOT NULL,
  chance TEXT NOT NULL CHECK(chance IN ('Guaranteed','High','Seasonal','Rare')),
  note TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX idx_package_wildlife_targets_package_id ON package_wildlife_targets(package_id);

-- Real, staff-moderated visitor reviews (existing table, migration 0018)
-- can now be tied to a specific package. Nullable -- existing rows are
-- unaffected. Matches departures.package_slug's existing soft-FK-by-slug
-- convention elsewhere in this schema, rather than a numeric package_id.
ALTER TABLE reviews ADD COLUMN package_slug TEXT;
CREATE INDEX idx_reviews_package_slug ON reviews(package_slug);
