// Per-locale content scale for the two fixed-page-size guide PDFs
// (Kilimanjaro trekking guide, sample family itinerary — both built on a
// literal-px, Claude-Design-sourced layout, not a fluid one).
//
// Translated text runs longer than English for most languages, and since
// every `.page` in these documents is a hard-fixed 8.5in x 11in box with
// overflow:hidden (by design — this is a paginated print document, not a
// scrolling page), a locale whose text is meaningfully longer than English
// will silently clip content off the bottom of some pages instead of
// reflowing. Confirmed live via direct visual inspection (French page 3's
// closing photo band/footer/page-number were cut off) and then measured
// precisely across every page of both documents, every locale, via
// Playwright (comparing each descendant's real laid-out bounding-box
// bottom edge against the page's own 1056px/11in boundary — NOT by
// relaxing the page's height/overflow CSS to "measure natural height",
// which breaks flex-fill children and produces false positives).
//
// Fix: each locale needing it gets a "zoom compensation" factor Z < 1,
// applied to `.page` as `width/height: calc(8.5in / Z)` + `zoom: Z` (not
// applied to an inner wrapper) — this makes the layout engine compute
// text-wrapping against a proportionally larger virtual canvas (more
// characters fit per line before wrapping, so paragraphs run shorter in
// absolute px), then uniformly shrinks the whole box — including that
// reclaimed headroom — back down to the true 8.5in x 11in physical page.
// A naive zoom on an inner 100%-sized wrapper instead would leave a
// visible gap at the page's trailing edge; scaling `.page` itself avoids
// that entirely.
//
// Values below were derived from each locale's single worst overflow
// across BOTH documents (so one locale gets one consistent zoom, not a
// different one per page — visibly different type sizes between adjacent
// pages of the same document would look broken), computed as
// 1056 / (1056 + measuredOverflowPx + 25) — the +25px is a fixed safety
// buffer (not a multiplicative one, which over-corrects small overflows
// disproportionately) covering the gap between the local Chromium used to
// measure this and production's Cloudflare Browser Rendering engine's
// text metrics, which won't be pixel-identical.
//
// Every locale is listed, including English: the itinerary guide's three
// "closing photo band" containers (`height:130px`/`150px;
// overflow:hidden; margin-top:auto`, used to pin a photo + the page
// footer/number to the bottom of a flex-column page) were, before this
// fix, silently getting flex-shrunk down to a near-invisible sliver
// whenever the day-block text above them ran long — hiding real overflow
// rather than preventing it. That's fixed at the template level
// (`flex-shrink:0` added to those three containers, applied identically
// across every content/{locale}.ts — see this project's PDF content-depth
// redesign memory), which correctly turned the hidden squeeze into
// visible, measurable overflow — present even in the original English
// design on 3 of 11 itinerary pages. Every locale therefore needs at
// least a small zoom to keep those three photo bands at full height
// without pushing the page's footer past its boundary.
const GUIDE_CONTENT_ZOOM: Record<string, number> = {
  de: 0.81,
  fr: 0.82,
  es: 0.82,
  ru: 0.82,
  nl: 0.82,
  pt: 0.82,
  it: 0.84,
  ja: 0.86,
  en: 0.86,
  hi: 0.86,
  ko: 0.89,
  he: 0.91,
  th: 0.91,
  'zh-TW': 0.93,
  zh: 0.95,
  ar: 0.95,
}

export function guideContentZoom(locale: string): number {
  return GUIDE_CONTENT_ZOOM[locale] ?? 1
}
