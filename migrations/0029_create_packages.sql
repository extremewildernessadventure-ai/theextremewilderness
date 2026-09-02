-- Migration number: 0029 	 2026-09-02T00:00:00.000Z

-- Admin-managed safari package catalog — the D1/R2 replacement for the
-- hardcoded src/data/packages.ts (+ 16 hand-translated locale siblings).
-- Mirrors SafariPackage (packages.ts) field-for-field, as a parent table +
-- child tables for everything with real internal structure (itinerary
-- days, per-day tier lodging, pricing grids, gallery, FAQ) — matching this
-- project's own established pattern for array-of-structured-data
-- (invoice_items, migration 0006), not JSON blob columns. Simple ordered
-- string lists with NO internal sub-structure (highlights, bestFor,
-- included, excluded, destinations) stay as JSON columns on the parent
-- row — there's no benefit to a one-table-per-flat-list schema, and no
-- existing `destinations` table in D1 to join against (destinations are
-- translated the same file-based way packages are today).
--
-- English content lives here structurally; package_translations (bottom of
-- this file) holds only the translated TEXT fields for every other locale
-- once an admin publishes and the AI-translation pass runs — numbers,
-- images, slugs, and tier structure are never duplicated per locale.
--
-- This table is not yet wired into anything the live site reads — see the
-- "Move safari packages to D1/R2" plan's staged execution. Nothing merges
-- to master until the whole system (migration through admin UI) is built
-- and verified end-to-end.

CREATE TABLE packages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  duration INTEGER NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('wildlife','trekking','beach','combination')),
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
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);
CREATE INDEX idx_packages_slug ON packages(slug);
CREATE INDEX idx_packages_status ON packages(status);

CREATE TABLE package_gallery (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  package_id INTEGER NOT NULL REFERENCES packages(id),
  image TEXT NOT NULL,
  alt TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX idx_package_gallery_package_id ON package_gallery(package_id);

CREATE TABLE package_itinerary_days (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  package_id INTEGER NOT NULL REFERENCES packages(id),
  day_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  accommodation TEXT NOT NULL,
  meals TEXT NOT NULL,
  insider_fact TEXT,
  location TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX idx_package_itinerary_days_package_id ON package_itinerary_days(package_id);

-- One row per tier stay for one itinerary day. `tier` covers both the
-- Wilderness Trail/Reserve/Sovereign vocabulary and the Luxury/Ultra-Luxury
-- family-tier vocabulary (packages.ts's accommodationByTier vs
-- accommodationByFamilyTier — mutually exclusive in practice per package)
-- in one table, distinguished by which tier values a package actually
-- populates, rather than two near-identical tables.
CREATE TABLE package_itinerary_tier_stays (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  itinerary_day_id INTEGER NOT NULL REFERENCES package_itinerary_days(id),
  tier TEXT NOT NULL CHECK(tier IN ('trail','reserve','sovereign','luxury','ultra_luxury')),
  lodge_name TEXT NOT NULL,
  image TEXT NOT NULL,
  amenities TEXT NOT NULL DEFAULT '[]'  -- JSON string[]
);
CREATE INDEX idx_package_itinerary_tier_stays_day_id ON package_itinerary_tier_stays(itinerary_day_id);
CREATE UNIQUE INDEX idx_package_itinerary_tier_stays_day_tier ON package_itinerary_tier_stays(itinerary_day_id, tier);

-- Per-pax x season x tier pricing grid (packages.ts's PricingTierRow) — most
-- packages have no rows here at all and the page falls back to flat
-- price_from, matching today's behavior exactly.
CREATE TABLE package_pricing_tiers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  package_id INTEGER NOT NULL REFERENCES packages(id),
  pax INTEGER NOT NULL,
  season TEXT CHECK(season IS NULL OR season IN ('high','low')),
  trail_price REAL,
  reserve_price REAL,
  sovereign_price REAL,
  sort_order INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX idx_package_pricing_tiers_package_id ON package_pricing_tiers(package_id);

-- Family-safari-line pricing grid (packages.ts's FamilyPricingRow) — priced
-- by family size rather than raw pax count. Used by exactly one package
-- today (10-days-luxury-family); kept as its own table rather than merged
-- into package_pricing_tiers since the two shapes don't actually overlap
-- (different tier vocabulary, different sizing dimension).
CREATE TABLE package_family_pricing (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  package_id INTEGER NOT NULL REFERENCES packages(id),
  season TEXT NOT NULL CHECK(season IN ('high','low')),
  family_size INTEGER NOT NULL,
  luxury_price REAL NOT NULL,
  ultra_luxury_price REAL NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX idx_package_family_pricing_package_id ON package_family_pricing(package_id);

CREATE TABLE package_faq (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  package_id INTEGER NOT NULL REFERENCES packages(id),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX idx_package_faq_package_id ON package_faq(package_id);

-- One row per (package, non-English locale) once AI-translated. Stores ONLY
-- the translated text fields as one JSON payload, shaped like one locale's
-- flattened package entry does today (see packages.<locale>.ts /
-- generate-locale-data.ts) — never a duplicate of the numbers/images/tier
-- structure above, which stay English-row-authoritative for every locale.
CREATE TABLE package_translations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  package_id INTEGER NOT NULL REFERENCES packages(id),
  locale TEXT NOT NULL,
  payload TEXT NOT NULL,  -- JSON — translated text fields only
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT
);
CREATE UNIQUE INDEX idx_package_translations_package_locale ON package_translations(package_id, locale);
