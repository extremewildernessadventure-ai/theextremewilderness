// Chart-specific status/accent colors — deliberately NOT the same hex
// values as admin-theme.css's --pine-fg/--gold/--rust tokens, even though
// they're the same brand hues. Those CSS tokens are tuned for *text*
// legibility on the dark page (small pill labels, hover accents); chart
// marks are large-area fills that need to sit in a different OKLCH
// lightness band to read well side-by-side without smearing into each
// other under color-vision deficiency. Validated against the dark card
// surface (#16241C) with the dataviz skill's validate_palette.js — this
// exact 4-color set is the first one that passed every check (lightness
// band, chroma floor, CVD separation, normal-vision floor); RUST gets a
// contrast WARN (2.75:1 vs surface, just under the 3:1 floor) that the
// skill requires mitigating with visible direct labels rather than
// color alone — every chart using it here always pairs it with a legend
// or an adjacent number, never relies on the color alone to carry meaning.
export const CHART_GOOD = '#3C8C63' // confirmed bookings, paid revenue
export const CHART_WARNING = '#B08F12' // pending bookings
export const CHART_CRITICAL = '#B33A3A' // cancelled bookings, outstanding/unpaid
export const CHART_ACCENT = '#3E7BAF' // leads (a 4th metric, not a status)
