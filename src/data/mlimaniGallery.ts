// Real expedition photos from the company's own Kilimanjaro climbs
// ("Mlimani The Extreme"), curated and converted to WebP.
// Files: /images/gallery/mlimani/mlimani-kili-01..40.webp
// Captions: `trekking.mlimani.capNN` message keys (all four locales).

export const mlimaniPhoto = (n: number) =>
  `/images/gallery/mlimani/mlimani-kili-${String(n).padStart(2, '0')}.webp`

export const mlimaniCapKey = (n: number) => `mlimani.cap${String(n).padStart(2, '0')}`

/** Best-of selection for the /trekking "From the Mountain" showcase. */
export const MLIMANI_SHOWCASE = [3, 38, 11, 19, 17, 12, 37, 5, 14, 23]
