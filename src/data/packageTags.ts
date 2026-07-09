// Interest-tag taxonomy for the /plan wizard's matching logic.
//
// This mapping is INFERRED from each package's name/highlights/destinations/bestFor
// in src/data/packages.ts — it is not a taxonomy the team has confirmed. It needs
// sign-off before being relied on for production matching quality (spec §11 Q5).
//
// It is intentionally kept separate from src/data/packages.ts (and its four
// locale-specific variants packages.de/es/fr.ts) so this can be revised without
// touching translated package data.
//
// Vocabulary: migration | bigfive | gorilla | beach | trekking | honeymoon |
// family | photography | remote | luxury | classic

export const packageTags: Record<string, string[]> = {
  '7-day-serengeti-ngorongoro': ['migration', 'bigfive', 'classic', 'honeymoon', 'family'],
  '10-day-northern-circuit': ['migration', 'bigfive', 'classic', 'honeymoon'],
  '10-day-safari-zanzibar': ['bigfive', 'beach', 'honeymoon', 'family'],
  '5-day-serengeti-fly-in': ['bigfive', 'luxury', 'honeymoon', 'remote'],
  'kilimanjaro-machame-7day': ['trekking'],
  '7-day-southern-circuit': ['bigfive', 'remote'],
  '5-days-highlights-safari': ['bigfive', 'migration', 'classic'],
  '8-days-honeymoon-safari': ['honeymoon', 'bigfive', 'luxury'],
  '7-days-crown-jewels': ['bigfive', 'beach', 'honeymoon', 'family', 'classic'],
  '7-days-migration-southern': ['migration', 'bigfive', 'photography'],
  '10-days-luxury-family': ['family', 'bigfive', 'classic'],
  '12-days-wild-wilderness': ['remote', 'bigfive', 'photography'],
  '8-days-great-northern-migration': ['migration', 'bigfive', 'photography'],
  'ultimate-tanzania-safari': ['bigfive', 'beach', 'honeymoon', 'classic'],
  '7-days-gems-of-north': ['bigfive', 'family', 'classic'],
  '7-days-flight-ndutu': ['migration', 'bigfive', 'luxury', 'photography'],
  '8-days-flight-migration': ['migration', 'bigfive', 'luxury', 'photography'],
  // NOTE: source package has no 'rwanda' in `destinations`, but `included` does
  // list "All park and gorilla permit fees" — the permit cost is bundled into
  // priceFrom, not a separate line item, unlike the spec's assumption in §5/§11 Q2.
  '11-days-rwanda-tanzania': ['gorilla', 'bigfive'],
  '12-days-rwanda-tanzania-zanzibar': ['gorilla', 'bigfive', 'beach', 'honeymoon', 'luxury'],
  '12-days-rwanda-primates': ['gorilla', 'remote', 'photography'],
  '11-days-kenya-undisputed': ['bigfive', 'family', 'photography'],
  '10-days-southern-secrets': ['bigfive', 'remote'],
  '11-days-southern-spice': ['bigfive', 'beach', 'remote', 'honeymoon', 'luxury'],
  '12-days-tanzania-kenya': ['bigfive', 'migration', 'classic'],
  '12-days-grand-safari': ['bigfive', 'remote', 'classic'],
  '5-day-comfort-tanzania-safari': ['bigfive', 'migration', 'classic'],
  '6-day-comfort-tanzania-safari': ['bigfive', 'migration', 'classic'],
  'kenya-tanzania-highlights-safari': ['bigfive', 'migration', 'classic', 'luxury'],
  '10-day-kenya-tanzania-safari': ['bigfive', 'migration', 'classic'],
  '2-day-selous-safari-from-zanzibar': ['bigfive', 'beach', 'short-break'],
  '4-day-tarangire-ngorongoro-lake-eyasi': ['bigfive', 'classic'],
  '5-day-kenya-safari': ['bigfive', 'migration', 'classic'],
}
