import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import PrintTrigger from './PrintTrigger'
import { buildAlternates } from '@/lib/site'
import PrintPdfButton from '@/components/pdf/PrintPdfButton'

// Kept dynamic deliberately: the printed document's "Edition" date reflects
// the actual render date, which would otherwise freeze at build time.
export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  return {
    alternates: buildAlternates(locale, '/trekking/pdf'),
    robots: { index: false, follow: false },
  }
}

interface Props {
  params: Promise<{ locale?: string }>
}

// Single consolidated Kilimanjaro trekking guide covering all 6 routes —
// replaces what used to be 7 separate documents (this general overview +
// one PDF per route). Every Kilimanjaro entry point on the site (the free-
// guide CTA on the trekking hub, and each individual route page's own
// download button) now links here instead of to a route-specific PDF.
//
// Design source: authored externally in Claude Design (not this codebase)
// and handed over as a finished `.dc.html` export — the markup below is a
// faithful, mechanically-converted copy of that source (image-slot/sc-if/
// doc-page custom elements — Claude Design's own editor-only runtime —
// swapped for plain <img>/CSS equivalents; asset paths repointed at
// /images/kilimanjaro-guide/), not redesigned. English-only for now,
// per the standing "localize last, after everything else is verified
// working" pattern from earlier in this project — see the pdf content-
// depth redesign memory note for the translation follow-up.
//
// US Letter page size (not the site's usual A4) — an explicit, deliberate
// choice per direct instruction, not an oversight. renderPageToPdf() takes
// a format param specifically to support this per-document.
export default async function KilimanjaroGuidePdfPage({ params }: Props) {
  await params
  const editionDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  return (
    <>
      <style>{`
        * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        @media print {
          @page { size: letter; margin: 0; }
        }
        #kili-guide-doc .page {
          width: 8.5in;
          height: 11in;
          page-break-after: always;
          break-after: page;
          overflow: hidden;
          box-sizing: border-box;
        }
        #kili-guide-doc .page:last-child {
          page-break-after: avoid;
          break-after: avoid;
        }
      `}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,400..500&family=Geist:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <PrintTrigger />

      {/* Screen-only header bar. mt-16 lg:mt-20 clears the site's fixed
          Navbar (h-16/h-20) — without it, this bar (and the Print button
          inside it) renders underneath the nav, since a fixed-position
          element doesn't reserve document-flow space on its own. */}
      <div className="mt-16 lg:mt-20 max-w-4xl mx-auto px-4 py-6 print:hidden flex items-center justify-between border-b border-gray-100">
        <div>
          <h1 className="text-xl font-bold text-brand">Kilimanjaro Trekking Guide</h1>
          <p className="text-sm text-text-muted">EWA Safari Outfitters · All 6 Routes</p>
        </div>
        <PrintPdfButton label="Print / Save as PDF" />
      </div>

      <div
        id="kili-guide-doc"
        className="mx-auto bg-white"
        style={{ maxWidth: '8.5in' }}
        dangerouslySetInnerHTML={{
          __html: `<section class="page" style="position:relative;background:#12241A;overflow:hidden;font-family:'Geist',sans-serif;">
  <div style="position:absolute;inset:0;">
    <img src="/images/kilimanjaro-guide/cover-photo.jpg" alt="Full-bleed Kilimanjaro summit photograph (sunrise, snow cap)" style="width:100%;height:100%;object-fit:cover;display:block;" />
  </div>
  <div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(18,36,26,0.05) 0%, rgba(18,36,26,0.15) 45%, rgba(18,36,26,0.75) 75%, #12241A 96%);"></div>
  <div style="position:absolute;top:0;left:0;right:0;height:7px;background:#D4A853;"></div>
  <div style="position:absolute;top:44px;left:60px;">
    <img src="/images/kilimanjaro-guide/ewa-logo.png" alt="EWA Safari Outfitters" style="height:64px;object-fit:contain;filter:drop-shadow(0 2px 10px rgba(0,0,0,0.35));">
  </div>
  <div style="position:absolute;top:52px;right:60px;text-align:right;font:600 10px/1.3 'Geist',sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#EADFC4;">
    Arusha · Tanzania
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:150px;">
    <div style="font:600 12px/1 'Geist',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#D4A853;margin-bottom:16px;">The Complete Guide</div>
    <h1 style="font:400 66px/1.02 'Fraunces',serif;color:#FBF8F0;margin:0 0 18px;max-width:640px;text-wrap:balance;">Kilimanjaro Trekking Guide</h1>
    <p style="font:400 17px/1.5 'Geist',sans-serif;color:#D8CFB8;margin:0 0 34px;max-width:520px;">Everything a first-time climber needs to choose a route, prepare a body and a kit bag, and stand on the roof of Africa — written by the guides who lead the trail.</p>
    <div style="display:flex;gap:28px;align-items:flex-end;">
      <div style="border-left:2px solid #D4A853;padding-left:18px;">
        <div style="font:400 44px/1 'Fraunces',serif;color:#FBF8F0;">5,895<span style="font-size:20px;">m</span></div>
        <div style="font:500 11px/1.4 'Geist',sans-serif;color:#B9AF97;letter-spacing:.04em;">19,341 ft · Africa's highest point<br>the world's tallest free-standing mountain</div>
      </div>
    </div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:40px;display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid rgba(212,168,83,0.35);padding-top:16px;">
    <div style="font:500 10px/1.4 'Geist',sans-serif;letter-spacing:.08em;color:#B9AF97;">+255 (0) 747 999 070 &nbsp;·&nbsp; info@theextremewilderness.com &nbsp;·&nbsp; theextremewilderness.com</div>
    <div style="font:500 10px/1.4 'Geist',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#D4A853;">Edition — ${editionDate}</div>
  </div>
</section>

<section class="page" style="position:relative;background:#12241A;overflow:hidden;padding:64px 60px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#EADFC4;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#D4A853;margin-bottom:10px;">Contents</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin-bottom:36px;"></div>
  <h1 style="font:400 34px/1.1 'Fraunces',serif;color:#FBF8F0;margin:0 0 46px;max-width:480px;">Sixteen pages, one mountain, six routes.</h1>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 48px;">
    <div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">About the Mountain</span><span style="color:#D4A853;font:500 13px;">03</span></div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">History &amp; Myths</span><span style="color:#D4A853;font:500 13px;">04</span></div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">Choosing Your Route</span><span style="color:#D4A853;font:500 13px;">05</span></div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">Route Profiles I</span><span style="color:#D4A853;font:500 13px;">06</span></div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">Route Profiles II</span><span style="color:#D4A853;font:500 13px;">07</span></div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);border-bottom:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">Route Profiles III</span><span style="color:#D4A853;font:500 13px;">08</span></div>
    </div>
    <div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">Best Climbing Seasons</span><span style="color:#D4A853;font:500 13px;">09</span></div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">Age &amp; Fitness</span><span style="color:#D4A853;font:500 13px;">10</span></div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">Altitude &amp; Health</span><span style="color:#D4A853;font:500 13px;">11</span></div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">Kit &amp; Packing List</span><span style="color:#D4A853;font:500 13px;">12–13</span></div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">What's Included</span><span style="color:#D4A853;font:500 13px;">14</span></div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">Advice From Our Guides</span><span style="color:#D4A853;font:500 13px;">15</span></div>
      <div style="display:flex;justify-content:space-between;padding:13px 0;border-top:1px solid rgba(212,168,83,.28);border-bottom:1px solid rgba(212,168,83,.28);"><span style="font:400 16px/1 'Fraunces',serif;">Start Your Climb</span><span style="color:#D4A853;font:500 13px;">16</span></div>
    </div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:40px;display:flex;justify-content:space-between;font:500 9px/1 'Geist',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8C9483;">
    <span>EWA Safari Outfitters</span><span>02</span>
  </div>
</section>

<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">Introduction</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <h1 style="font:400 36px/1.08 'Fraunces',serif;color:#1C3A2A;margin:0 0 14px;max-width:600px;">About the Mountain</h1>
  <div style="display:grid;grid-template-columns:1.25fr 1fr;gap:36px;">
    <div>
      <p style="font:400 13.5px/1.62 'Geist',sans-serif;margin:0 0 12px;">Kilimanjaro is a dormant stratovolcano built from three volcanic cones — Shira, Mawenzi and Kibo — raised by eruptions over roughly 750,000 years. Shira collapsed first and eroded into a broad plateau; Mawenzi's jagged spires are its second, extinct cone; Kibo, the youngest and highest, still holds the crater that forms the summit. Unlike the Andes or the Himalaya, Kilimanjaro stands almost alone, rising nearly 5,000 metres straight out of the East African plain — which is precisely what makes it so punishing on the body despite asking nothing of technical skill.</p>
      <p style="font:400 13.5px/1.62 'Geist',sans-serif;margin:0 0 12px;">A climb here is a walk from the equator to the poles in five or six days. You pass through five distinct climate zones, each with its own rainfall, vegetation and temperature band, compressed into a single ascent:</p>
      <div style="display:flex;flex-direction:column;gap:7px;margin:16px 0 18px;">
        <div style="display:grid;grid-template-columns:150px 90px 1fr;gap:10px;align-items:baseline;border-top:1px solid #E2DBC8;padding-top:7px;"><span style="font:500 12.5px 'Geist',sans-serif;color:#1C3A2A;">1. Cultivation</span><span style="font:500 10.5px 'Geist',sans-serif;color:#8A8F5F;">800–1,800m</span><span style="font:400 11.5px/1.4 'Geist',sans-serif;color:#5C6357;">Farmland and villages on the lower slopes</span></div>
        <div style="display:grid;grid-template-columns:150px 90px 1fr;gap:10px;align-items:baseline;border-top:1px solid #E2DBC8;padding-top:7px;"><span style="font:500 12.5px 'Geist',sans-serif;color:#1C3A2A;">2. Rainforest</span><span style="font:500 10.5px 'Geist',sans-serif;color:#8A8F5F;">1,800–2,800m</span><span style="font:400 11.5px/1.4 'Geist',sans-serif;color:#5C6357;">Dense, humid canopy, colobus monkeys</span></div>
        <div style="display:grid;grid-template-columns:150px 90px 1fr;gap:10px;align-items:baseline;border-top:1px solid #E2DBC8;padding-top:7px;"><span style="font:500 12.5px 'Geist',sans-serif;color:#1C3A2A;">3. Heather &amp; Moorland</span><span style="font:500 10.5px 'Geist',sans-serif;color:#8A8F5F;">2,800–4,000m</span><span style="font:400 11.5px/1.4 'Geist',sans-serif;color:#5C6357;">Giant lobelias and senecios, open heath</span></div>
        <div style="display:grid;grid-template-columns:150px 90px 1fr;gap:10px;align-items:baseline;border-top:1px solid #E2DBC8;padding-top:7px;"><span style="font:500 12.5px 'Geist',sans-serif;color:#1C3A2A;">4. Alpine Desert</span><span style="font:500 10.5px 'Geist',sans-serif;color:#8A8F5F;">4,000–5,000m</span><span style="font:400 11.5px/1.4 'Geist',sans-serif;color:#5C6357;">Bare volcanic rock, thin air, huge temperature swings</span></div>
        <div style="display:grid;grid-template-columns:150px 90px 1fr;gap:10px;align-items:baseline;border-top:1px solid #E2DBC8;border-bottom:1px solid #E2DBC8;padding-top:7px;padding-bottom:7px;"><span style="font:500 12.5px 'Geist',sans-serif;color:#1C3A2A;">5. Arctic Summit</span><span style="font:500 10.5px 'Geist',sans-serif;color:#8A8F5F;">5,000–5,895m</span><span style="font:400 11.5px/1.4 'Geist',sans-serif;color:#5C6357;">Glacier and scree, snow year-round, −20°C nights</span></div>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px;">
      <img src="/images/kilimanjaro-guide/mountain-zones.webp" alt="Kilimanjaro's climate zones, from farmland to glacier" style="width:100%;height:190px;object-fit:cover;display:block;border-radius:6px;" />
      <div style="background:#1C3A2A;padding:18px 20px 20px;border-radius:4px;">
        <div style="font:400 14px/1.4 'Fraunces',serif;font-style:italic;color:#F3EEDF;margin-bottom:9px;">"You don't climb Kilimanjaro with your legs. You climb it with patience."</div>
        <div style="font:600 10px 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#D4A853;">EWA lead guide, on Whiskey route summit night</div>
      </div>
      <img src="/images/kilimanjaro-guide/uhuru-sign.webp" alt="Trekkers at the Uhuru Peak summit sign" style="width:100%;height:150px;object-fit:cover;display:block;border-radius:6px;" />
      <p style="font:400 12px/1.5 'Geist',sans-serif;margin:0;color:#3C4238;">There are no ropes, ladders or technical pitches on any standard route — Kilimanjaro is, mechanically, a very long, very high hike. That is exactly why so many climbers underestimate it. The mountain's real gatekeeper is altitude, not terrain: it decides who reaches the top far more than fitness or experience. The true summit, <em style="font-style:italic;">Uhuru Peak</em> — Swahili for "freedom peak" — sits at 5,895m on Kibo's crater rim.</p>
    </div>
  </div>
  <div style="position:relative;margin-top:20px;border-radius:6px;overflow:hidden;height:150px;">
    <img src="/images/kilimanjaro-guide/climate-zones-band.webp" alt="View across Kilimanjaro's climate zones from the alpine desert" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(20,38,28,0.92) 0%, rgba(20,38,28,0.55) 45%, rgba(20,38,28,0.15) 75%, rgba(20,38,28,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:380px;">Five climate zones, one mountain — a walk from the equator to the poles in five days.</div>
    </div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>03</span>
  </div>
</section>

<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">History &amp; Myths</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <h1 style="font:400 36px/1.08 'Fraunces',serif;color:#1C3A2A;margin:0 0 20px;max-width:600px;">A mountain of legend and record</h1>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:36px;">
    <div>
      <div style="font:500 12.5px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:4px;">1889 — First Summit</div>
      <p style="font:400 13.5px/1.6 'Geist',sans-serif;margin:0 0 16px;">German geologist Hans Meyer and Austrian mountaineer Ludwig Purtscheller made the first recorded ascent on 6 October 1889, on their third attempt in three years. They found a small crater lake of ice at the summit and named the highest point Kaiser-Wilhelm-Spitze; it was renamed Uhuru Peak — "Freedom Peak" — after Tanzanian independence in 1961.</p>
      <div style="font:500 12.5px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:4px;">What's in a Name</div>
      <p style="font:400 13.5px/1.6 'Geist',sans-serif;margin:0 0 16px;">No theory of the name "Kilimanjaro" is settled. Leading readings trace it to Swahili <em style="font-style:italic;">Kilima Njaro</em>, "mountain of greatness," or to a KiChagga phrase evoking the mountain's white cap; others link it to <em style="font-style:italic;">Kilemakyaro</em>, "that which defeats the caravan," a nod to how the mountain broke early expeditions. Local Chagga names for the peak predate any of the colonial-era spellings, and the mountain carried meaning long before it carried a map reference.</p>
      <div style="font:500 12.5px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:4px;">Chagga Folklore</div>
      <p style="font:400 13.5px/1.6 'Geist',sans-serif;margin:0;">The Chagga people, who have farmed Kilimanjaro's lower slopes for centuries, tell of Mangi Meli and other spirits guarding the summit snows, and of a mischievous figure, Tuwelekekacha, who is said to have climbed the peak and been frozen there for boasting he could conquer the cold — an early caution about respecting the mountain that guides still repeat, in spirit, before every summit push.</p>
    </div>
    <div>
      <img src="/images/kilimanjaro-guide/history.jpg" alt="Historic-style photograph: early expedition or Chagga village on the lower slopes" style="width:100%;height:200px;margin-bottom:16px;object-fit:cover;display:block;border-radius:6px;" />
      <div style="font:500 12.5px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:4px;">The Vanishing Glaciers</div>
      <p style="font:400 13.5px/1.6 'Geist',sans-serif;margin:0 0 16px;">Kilimanjaro's ice fields have lost more than 85% of their area since they were first surveyed in 1912, and glaciologists expect most of the remaining ice to disappear within the coming decades. Climbers today are, quite literally, among the last generations who will see it — one more reason guides ask you not to touch or walk on the remaining ice near the crater rim.</p>
      <div style="font:500 12.5px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:4px;">One of the Seven Summits</div>
      <p style="font:400 13.5px/1.6 'Geist',sans-serif;margin:0 0 18px;">Kilimanjaro is Africa's entry on the Seven Summits — the highest peak on each continent — and, alongside Aconcagua, one of only two that require no ropes or technical climbing to reach. That accessibility is exactly why it draws climbers with no mountaineering background at all, and why altitude, not terrain, is the guide's real job on the mountain.</p>
      <div style="background:#EFE7D2;border-left:3px solid #D4A853;padding:14px 18px;">
        <div style="font:500 11px/1.5 'Geist',sans-serif;color:#5C4A22;">EWA GUIDE NOTE — Every summit party on our trips carries out everything it carries in. The mountain's condition is part of what we're protecting for the climbers after you.</div>
      </div>
    </div>
  </div>
  <div style="position:relative;margin-top:14px;border-radius:6px;overflow:hidden;height:130px;">
    <img src="/images/kilimanjaro-guide/band-04.webp" alt="The crater rim at dusk" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(28,58,42,0.85) 0%, rgba(28,58,42,0.3) 55%, rgba(28,58,42,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:380px;">Kaiser-Wilhelm-Spitze became Uhuru Peak in 1961 — the name changed; the challenge never did.</div>
    </div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>04</span>
  </div>
</section>

<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">Choosing Your Route</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <h1 style="font:400 34px/1.08 'Fraunces',serif;color:#1C3A2A;margin:0 0 12px;max-width:620px;">Six ways up the same mountain</h1>
  <p style="font:400 13.5px/1.6 'Geist',sans-serif;margin:0 0 22px;max-width:760px;">There is no single "best" route — only the route that fits your fitness, your calendar and how much you want to see along the way. As a rule, longer routes succeed more often: each extra day banks more altitude for the body to adjust to. The table below is built for side-by-side comparison; full profiles for each route follow on the next three pages.</p>
  <table style="width:100%;border-collapse:collapse;font-family:'Geist',sans-serif;margin-bottom:20px;">
    <thead>
      <tr style="background:#1C3A2A;">
        <th style="text-align:left;padding:10px 14px;font:600 10px 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#D4A853;">Route</th>
        <th style="text-align:left;padding:10px 14px;font:600 10px 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#D4A853;">Duration</th>
        <th style="text-align:left;padding:10px 14px;font:600 10px 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#D4A853;">Difficulty</th>
        <th style="text-align:left;padding:10px 14px;font:600 10px 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#D4A853;">Success Rate</th>
        <th style="text-align:left;padding:10px 14px;font:600 10px 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#D4A853;">Style</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #E2DBC8;"><td style="padding:11px 14px;font:500 13px 'Geist',sans-serif;">Machame <span style="font:400 10.5px 'Geist',sans-serif;color:#8A8F5F;">"Whiskey"</span></td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;">7d / 6n</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;">Challenging</td><td style="padding:11px 14px;font:500 12.5px 'Geist',sans-serif;color:#1C3A2A;">85–90%</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;color:#5C6357;">Camping, scenic, popular</td></tr>
      <tr style="border-bottom:1px solid #E2DBC8;background:#F1ECDA;"><td style="padding:11px 14px;font:500 13px 'Geist',sans-serif;">Lemosho</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;">8d / 7n</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;">Challenging</td><td style="padding:11px 14px;font:500 12.5px 'Geist',sans-serif;color:#1C3A2A;">90–95%</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;color:#5C6357;">Camping, remote, most scenic</td></tr>
      <tr style="border-bottom:1px solid #E2DBC8;"><td style="padding:11px 14px;font:500 13px 'Geist',sans-serif;">Marangu <span style="font:400 10.5px 'Geist',sans-serif;color:#8A8F5F;">"Coca-Cola"</span></td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;">6d / 5n</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;">Moderate</td><td style="padding:11px 14px;font:500 12.5px 'Geist',sans-serif;color:#1C3A2A;">65–70%</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;color:#5C6357;">Hut-based, shortest, most direct</td></tr>
      <tr style="border-bottom:1px solid #E2DBC8;background:#F1ECDA;"><td style="padding:11px 14px;font:500 13px 'Geist',sans-serif;">Rongai</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;">7d / 6n</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;">Moderate–Challenging</td><td style="padding:11px 14px;font:500 12.5px 'Geist',sans-serif;color:#1C3A2A;">80–85%</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;color:#5C6357;">Camping, quiet, dry north side</td></tr>
      <tr style="border-bottom:1px solid #E2DBC8;"><td style="padding:11px 14px;font:500 13px 'Geist',sans-serif;">Umbwe</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;">7d / 6n</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;">Very Hard</td><td style="padding:11px 14px;font:500 12.5px 'Geist',sans-serif;color:#1C3A2A;">~70%</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;color:#5C6357;">Camping, steep, experienced only</td></tr>
      <tr style="background:#F1ECDA;"><td style="padding:11px 14px;font:500 13px 'Geist',sans-serif;">Northern Circuit</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;">9d / 8n</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;">Moderate</td><td style="padding:11px 14px;font:500 12.5px 'Geist',sans-serif;color:#1C3A2A;">~95%</td><td style="padding:11px 14px;font:400 12.5px 'Geist',sans-serif;color:#5C6357;">Camping, longest, best acclimatization</td></tr>
    </tbody>
  </table>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:18px;">
    <div style="background:#1C3A2A;padding:16px 18px;border-radius:4px;">
      <div style="font:400 26px/1 'Fraunces',serif;color:#D4A853;margin-bottom:4px;">+1 day</div>
      <div style="font:400 11.5px/1.4 'Geist',sans-serif;color:#EADFC4;">of acclimatization typically lifts summit success several points more than any gear or training change.</div>
    </div>
    <div style="background:#1C3A2A;padding:16px 18px;border-radius:4px;">
      <div style="font:400 26px/1 'Fraunces',serif;color:#D4A853;margin-bottom:4px;">6</div>
      <div style="font:400 11.5px/1.4 'Geist',sans-serif;color:#EADFC4;">official routes to the summit — EWA guides and outfits climbers on all of them.</div>
    </div>
    <div style="background:#1C3A2A;padding:16px 18px;border-radius:4px;">
      <div style="font:400 26px/1 'Fraunces',serif;color:#D4A853;margin-bottom:4px;">1</div>
      <div style="font:400 11.5px/1.4 'Geist',sans-serif;color:#EADFC4;">route with hut accommodation (Marangu) — every other route is tented camping.</div>
    </div>
  </div>
  <div style="position:relative;margin-top:14px;border-radius:6px;overflow:hidden;height:185px;">
    <img src="/images/kilimanjaro-guide/band-05.webp" alt="Trekkers on the trail" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(28,58,42,0.85) 0%, rgba(28,58,42,0.3) 55%, rgba(28,58,42,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:380px;">Six routes, one mountain — every one of them EWA guides regularly.</div>
    </div>
  </div>
  <div style="background:#EFE7D2;border-left:3px solid #D4A853;padding:12px 18px;margin-top:12px;">
    <div style="font:500 11px/1.5 'Geist',sans-serif;color:#5C4A22;">EWA GUIDE NOTE — Not sure where to start? Machame suits most first-timers; add a day on Lemosho if your schedule allows it.</div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>05</span>
  </div>
</section>


<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">Route Profiles I</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;">
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:22px 22px 20px;position:relative;">
      <div style="position:absolute;top:18px;right:18px;background:#D4A853;color:#1C3A2A;font:600 9px/1 'Geist',sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border-radius:20px;">EWA Recommends</div>
      <div style="display:inline-block;background:#1C3A2A;color:#EADFC4;font:600 10.5px/1 'Geist',sans-serif;letter-spacing:.04em;padding:6px 13px;border-radius:20px;margin-bottom:12px;white-space:nowrap;">7 DAYS / 6 NIGHTS</div>
      <h2 style="font:400 27px/1.1 'Fraunces',serif;color:#1C3A2A;margin:0 0 2px;">Machame</h2>
      <div style="font:400 13px/1 'Fraunces',serif;font-style:italic;color:#8A8F5F;margin-bottom:12px;">The "Whiskey Route"</div>
      <img src="/images/kilimanjaro-guide/route-machame.jpg" alt="Machame — forested ridge trail" style="width:100%;height:130px;margin-bottom:14px;object-fit:cover;display:block;border-radius:5px;" />
      <div style="display:flex;gap:18px;margin-bottom:14px;row-gap:8px;">
        <div><div style="font:600 9.5px/1 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8A8F80;margin-bottom:6px;white-space:nowrap;">Difficulty</div><div style="font:500 13px/1 'Geist',sans-serif;">Challenging</div></div>
        <div><div style="font:600 9.5px/1 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8A8F80;margin-bottom:6px;white-space:nowrap;">Success Rate</div><div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;">85–90%</div></div>
      </div>
      <p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:0 0 10px;">The most popular route on the mountain for good reason: a steep but steady climb through rainforest and moorland, camping every night, with a strong acclimatization profile built around the "climb high, sleep low" pattern at the Lava Tower. Scenic ridgelines and varied terrain keep the days interesting even as the air thins.</p>
      <div style="font:500 11.5px/1.5 'Geist',sans-serif;color:#5C6357;"><strong style="color:#1C3A2A;">Best for:</strong> first-time high-altitude trekkers who want a proven, well-supported route without the longest itinerary.</div>
    </div>
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:22px 22px 20px;position:relative;">
      <div style="position:absolute;top:18px;right:18px;background:#D4A853;color:#1C3A2A;font:600 9px/1 'Geist',sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border-radius:20px;">Most Scenic</div>
      <div style="display:inline-block;background:#1C3A2A;color:#EADFC4;font:600 10.5px/1 'Geist',sans-serif;letter-spacing:.04em;padding:6px 13px;border-radius:20px;margin-bottom:12px;white-space:nowrap;">8 DAYS / 7 NIGHTS</div>
      <h2 style="font:400 27px/1.1 'Fraunces',serif;color:#1C3A2A;margin:0 0 2px;">Lemosho</h2>
      <div style="font:400 13px/1 'Fraunces',serif;font-style:italic;color:#8A8F5F;margin-bottom:12px;">The scenic long way round</div>
      <img src="/images/kilimanjaro-guide/route-lemosho.webp" alt="Lemosho — Shira Plateau, wide open moorland" style="width:100%;height:130px;margin-bottom:14px;object-fit:cover;display:block;border-radius:5px;" />
      <div style="display:flex;gap:18px;margin-bottom:14px;row-gap:8px;">
        <div><div style="font:600 9.5px/1 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8A8F80;margin-bottom:6px;white-space:nowrap;">Difficulty</div><div style="font:500 13px/1 'Geist',sans-serif;">Challenging</div></div>
        <div><div style="font:600 9.5px/1 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8A8F80;margin-bottom:6px;white-space:nowrap;">Success Rate</div><div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;">90–95%</div></div>
      </div>
      <p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:0 0 10px;">A longer western approach that crosses the Shira Plateau before joining Machame's upper route, buying an extra acclimatization day and far fewer crowds in the process. Widely regarded as the most scenic route on the mountain, with sweeping plateau views and the chance to spot wildlife on the lower slopes.</p>
      <div style="font:500 11.5px/1.5 'Geist',sans-serif;color:#5C6357;"><strong style="color:#1C3A2A;">Best for:</strong> climbers who want the highest realistic success rate together with the quietest, most varied scenery.</div>
    </div>
  </div>
  <div style="position:relative;margin-top:18px;border-radius:6px;overflow:hidden;height:300px;">
    <img src="/images/kilimanjaro-guide/band-06.webp" alt="Trekking group on the trail" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(28,58,42,0.85) 0%, rgba(28,58,42,0.3) 55%, rgba(28,58,42,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:380px;">Machame and Lemosho both build in real acclimatization time — the biggest lever on summit success.</div>
    </div>
  </div>
  <div style="background:#EFE7D2;border-left:3px solid #D4A853;padding:14px 18px;margin-top:14px;">
    <div style="font:500 11px/1.5 'Geist',sans-serif;color:#5C4A22;">EWA GUIDE NOTE — Both routes pass Lava Tower on their "climb high, sleep low" day, the single acclimatization habit that helps more than anything else.</div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>06</span>
  </div>
</section>

<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">Route Profiles II</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;">
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:22px 22px 20px;position:relative;">
      <div style="position:absolute;top:18px;right:18px;background:#D4A853;color:#1C3A2A;font:600 9px/1 'Geist',sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border-radius:20px;">Shortest Route</div>
      <div style="display:inline-block;background:#1C3A2A;color:#EADFC4;font:600 10.5px/1 'Geist',sans-serif;letter-spacing:.04em;padding:6px 13px;border-radius:20px;margin-bottom:12px;white-space:nowrap;">6 DAYS / 5 NIGHTS</div>
      <h2 style="font:400 27px/1.1 'Fraunces',serif;color:#1C3A2A;margin:0 0 2px;">Marangu</h2>
      <div style="font:400 13px/1 'Fraunces',serif;font-style:italic;color:#8A8F5F;margin-bottom:12px;">The "Coca-Cola Route"</div>
      <img src="/images/kilimanjaro-guide/route-marangu.jpg" alt="Marangu — sleeping huts along the trail" style="width:100%;height:130px;margin-bottom:14px;object-fit:cover;display:block;border-radius:5px;" />
      <div style="display:flex;gap:18px;margin-bottom:14px;row-gap:8px;">
        <div><div style="font:600 9.5px/1 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8A8F80;margin-bottom:6px;white-space:nowrap;">Difficulty</div><div style="font:500 13px/1 'Geist',sans-serif;">Moderate</div></div>
        <div><div style="font:600 9.5px/1 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8A8F80;margin-bottom:6px;white-space:nowrap;">Success Rate</div><div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;">65–70%</div></div>
      </div>
      <p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:0 0 10px;">The only route with sleeping huts instead of tents, and the shortest, most direct line to the summit — which is exactly its weakness. Fewer days means less time to acclimatize, and it shows in the lowest success rate of the six. The same path is used for ascent and descent, so it's also the least visually varied route.</p>
      <div style="font:500 11.5px/1.5 'Geist',sans-serif;color:#5C6357;"><strong style="color:#1C3A2A;">Best for:</strong> climbers on a tight schedule who want hut comfort over camping, and accept the trade-off in success odds.</div>
    </div>
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:22px 22px 20px;position:relative;">
      <div style="position:absolute;top:18px;right:18px;background:#D4A853;color:#1C3A2A;font:600 9px/1 'Geist',sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border-radius:20px;">Quietest Trail</div>
      <div style="display:inline-block;background:#1C3A2A;color:#EADFC4;font:600 10.5px/1 'Geist',sans-serif;letter-spacing:.04em;padding:6px 13px;border-radius:20px;margin-bottom:12px;white-space:nowrap;">7 DAYS / 6 NIGHTS</div>
      <h2 style="font:400 27px/1.1 'Fraunces',serif;color:#1C3A2A;margin:0 0 2px;">Rongai</h2>
      <div style="font:400 13px/1 'Fraunces',serif;font-style:italic;color:#8A8F5F;margin-bottom:12px;">The quiet northern approach</div>
      <img src="/images/kilimanjaro-guide/route-rongai.jpg" alt="Rongai — dry northern slopes near the Kenyan border" style="width:100%;height:130px;margin-bottom:14px;object-fit:cover;display:block;border-radius:5px;" />
      <div style="display:flex;gap:18px;margin-bottom:14px;row-gap:8px;">
        <div><div style="font:600 9.5px/1 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8A8F80;margin-bottom:6px;white-space:nowrap;">Difficulty</div><div style="font:500 13px/1 'Geist',sans-serif;">Moderate–Challenging</div></div>
        <div><div style="font:600 9.5px/1 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8A8F80;margin-bottom:6px;white-space:nowrap;">Success Rate</div><div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;">80–85%</div></div>
      </div>
      <p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:0 0 10px;">Approaches from the drier, far quieter northern side near the Kenyan border, making it the most reliable choice during the shoulder and rainy seasons when southern routes turn muddy. Traffic is noticeably lighter here — you'll share camps with far fewer groups than on Machame or Marangu.</p>
      <div style="font:500 11.5px/1.5 'Geist',sans-serif;color:#5C6357;"><strong style="color:#1C3A2A;">Best for:</strong> travelers climbing in the wetter months, or who want solitude without sacrificing a solid success rate.</div>
    </div>
  </div>
  <div style="position:relative;margin-top:18px;border-radius:6px;overflow:hidden;height:300px;">
    <img src="/images/kilimanjaro-guide/band-07.webp" alt="EWA guides on the trail" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(28,58,42,0.85) 0%, rgba(28,58,42,0.3) 55%, rgba(28,58,42,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:380px;">Marangu and Rongai trade scenery and crowds for schedule and dryness — both real advantages, depending on your trip.</div>
    </div>
  </div>
  <div style="background:#EFE7D2;border-left:3px solid #D4A853;padding:14px 18px;margin-top:14px;">
    <div style="font:500 11px/1.5 'Geist',sans-serif;color:#5C4A22;">EWA GUIDE NOTE — Marangu is the mountain's only hut-based route; Rongai stays driest in the shoulder season. Neither sees Machame's peak-season crowds.</div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>07</span>
  </div>
</section>

<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">Route Profiles III</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;">
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:22px 22px 20px;position:relative;">
      <div style="position:absolute;top:18px;right:18px;background:#D4A853;color:#1C3A2A;font:600 9px/1 'Geist',sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border-radius:20px;">Toughest Climb</div>
      <div style="display:inline-block;background:#1C3A2A;color:#EADFC4;font:600 10.5px/1 'Geist',sans-serif;letter-spacing:.04em;padding:6px 13px;border-radius:20px;margin-bottom:12px;white-space:nowrap;">7 DAYS / 6 NIGHTS</div>
      <h2 style="font:400 27px/1.1 'Fraunces',serif;color:#1C3A2A;margin:0 0 2px;">Umbwe</h2>
      <div style="font:400 13px/1 'Fraunces',serif;font-style:italic;color:#8A8F5F;margin-bottom:12px;">The steep, direct challenge</div>
      <img src="/images/kilimanjaro-guide/route-umbwe.jpg" alt="Umbwe — steep forested ridge, minimal crowds" style="width:100%;height:130px;margin-bottom:14px;object-fit:cover;display:block;border-radius:5px;" />
      <div style="display:flex;gap:18px;margin-bottom:14px;row-gap:8px;">
        <div><div style="font:600 9.5px/1 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8A8F80;margin-bottom:6px;white-space:nowrap;">Difficulty</div><div style="font:500 13px/1 'Geist',sans-serif;color:#8C3B2E;">Very Hard</div></div>
        <div><div style="font:600 9.5px/1 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8A8F80;margin-bottom:6px;white-space:nowrap;">Success Rate</div><div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;">~70%</div></div>
      </div>
      <p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:0 0 10px;">The steepest and most direct line on the mountain, gaining altitude fast up a narrow forested ridge with little room for a gentle acclimatization curve. Dramatic, exposed scenery and near-total solitude reward experienced trekkers — but this is not a route for a first big-mountain attempt.</p>
      <div style="font:500 11.5px/1.5 'Geist',sans-serif;color:#5C6357;"><strong style="color:#1C3A2A;">Best for:</strong> experienced, very fit trekkers seeking the toughest, least-traveled line to the top.</div>
    </div>
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:22px 22px 20px;position:relative;">
      <div style="position:absolute;top:18px;right:18px;background:#D4A853;color:#1C3A2A;font:600 9px/1 'Geist',sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border-radius:20px;">Highest Success Rate</div>
      <div style="display:inline-block;background:#1C3A2A;color:#EADFC4;font:600 10.5px/1 'Geist',sans-serif;letter-spacing:.04em;padding:6px 13px;border-radius:20px;margin-bottom:12px;white-space:nowrap;">9 DAYS / 8 NIGHTS</div>
      <h2 style="font:400 27px/1.1 'Fraunces',serif;color:#1C3A2A;margin:0 0 2px;">Northern Circuit</h2>
      <div style="font:400 13px/1 'Fraunces',serif;font-style:italic;color:#8A8F5F;margin-bottom:12px;">All the way around</div>
      <img src="/images/kilimanjaro-guide/route-northern.jpg" alt="Northern Circuit — remote northern slopes, wide views" style="width:100%;height:130px;margin-bottom:14px;object-fit:cover;display:block;border-radius:5px;" />
      <div style="display:flex;gap:18px;margin-bottom:14px;row-gap:8px;">
        <div><div style="font:600 9.5px/1 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8A8F80;margin-bottom:6px;white-space:nowrap;">Difficulty</div><div style="font:500 13px/1 'Geist',sans-serif;">Moderate</div></div>
        <div><div style="font:600 9.5px/1 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8A8F80;margin-bottom:6px;white-space:nowrap;">Success Rate</div><div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;">~95%</div></div>
      </div>
      <p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:0 0 10px;">The longest itinerary on the mountain, circling almost the entire massif via its remote northern flank before joining the summit push. The extra days deliver the best acclimatization profile of any route and, as a result, the highest success rate — the trade is time, not difficulty.</p>
      <div style="font:500 11.5px/1.5 'Geist',sans-serif;color:#5C6357;"><strong style="color:#1C3A2A;">Best for:</strong> climbers who can spare the extra days and want the best realistic odds of standing on Uhuru Peak.</div>
    </div>
  </div>
  <div style="position:relative;margin-top:18px;border-radius:6px;overflow:hidden;height:300px;">
    <img src="/images/kilimanjaro-guide/band-08.webp" alt="Trekkers on the rocky trail" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(28,58,42,0.85) 0%, rgba(28,58,42,0.3) 55%, rgba(28,58,42,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:380px;">Umbwe rewards experience; the Northern Circuit rewards patience — pick the trade-off that suits you.</div>
    </div>
  </div>
  <div style="background:#EFE7D2;border-left:3px solid #D4A853;padding:14px 18px;margin-top:14px;">
    <div style="font:500 11px/1.5 'Geist',sans-serif;color:#5C4A22;">EWA GUIDE NOTE — Umbwe suits climbers who've summited before; the Northern Circuit suits climbers with the extra days to spend.</div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>08</span>
  </div>
</section>

<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">Best Climbing Seasons</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <h1 style="font:400 34px/1.08 'Fraunces',serif;color:#1C3A2A;margin:0 0 16px;max-width:620px;">When to climb</h1>
  <p style="font:400 13.5px/1.6 'Geist',sans-serif;margin:0 0 22px;max-width:760px;">Kilimanjaro can be climbed year-round, but two dry windows give the most predictable weather, the driest trails and the clearest summit views. Between them sit two wetter periods that most operators, EWA included, generally steer first-timers away from.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-bottom:20px;">
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:20px 22px;">
      <div style="font:600 10px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#B8862F;margin-bottom:6px;">Peak Dry Season</div>
      <div style="font:400 20px/1.1 'Fraunces',serif;color:#1C3A2A;margin-bottom:10px;">June – October</div>
      <p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:0;">The most popular and most reliable window: cold, clear nights, minimal rain, and the best visibility of the whole year. Trails are busiest, especially on Machame and Marangu, but conditions underfoot are at their easiest.</p>
    </div>
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:20px 22px;">
      <div style="font:600 10px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#B8862F;margin-bottom:6px;">Second Dry Window</div>
      <div style="font:400 20px/1.1 'Fraunces',serif;color:#1C3A2A;margin-bottom:10px;">December – February / early March</div>
      <p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:0;">Shorter and colder, with a real chance of powder snow on the upper mountain — beautiful, but demanding underfoot near the summit. Quieter trails than the June–October peak, and a favourite for climbers wanting solitude.</p>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-bottom:24px;">
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:20px 22px;background:#F1ECDA;">
      <div style="font:600 10px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F5F;margin-bottom:6px;">Long Rains</div>
      <div style="font:400 18px/1.1 'Fraunces',serif;color:#5C6357;margin-bottom:10px;">Mid-March – May</div>
      <p style="font:400 12px/1.5 'Geist',sans-serif;margin:0;color:#5C6357;">The heaviest, most persistent rain of the year. Trails turn to mud on the lower slopes and low cloud can obscure views for days at a time — most operators, including EWA, discourage climbs in this window.</p>
    </div>
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:20px 22px;background:#F1ECDA;">
      <div style="font:600 10px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F5F;margin-bottom:6px;">Short Rains</div>
      <div style="font:400 18px/1.1 'Fraunces',serif;color:#5C6357;margin-bottom:10px;">November</div>
      <p style="font:400 12px/1.5 'Geist',sans-serif;margin:0;color:#5C6357;">Lighter and less predictable than the long rains — afternoon showers rather than all-day downpours. Some climbers use this shoulder month successfully, particularly on the drier Rongai route.</p>
    </div>
  </div>
  <div style="background:#1C3A2A;border-radius:6px;padding:20px 24px;">
    <div style="font:600 10px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#D4A853;margin-bottom:8px;">How season should shape your route choice</div>
    <p style="font:400 12.5px/1.55 'Geist',sans-serif;color:#EADFC4;margin:0;">Climbing in the shoulder or rainy months? Favour Rongai, on the drier northern side, or build in an extra buffer day. Climbing at the June–October or December–February peaks? Lemosho and the Northern Circuit reward the extra planning with noticeably quieter camps than Machame or Marangu see at the same time of year.</p>
  </div>
  <div style="position:relative;margin-top:14px;border-radius:6px;overflow:hidden;height:225px;">
    <img src="/images/kilimanjaro-guide/band-09.webp" alt="Trekkers on a sunny dry-season trail" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(28,58,42,0.85) 0%, rgba(28,58,42,0.3) 55%, rgba(28,58,42,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:380px;">Clear skies, dry trails — the June–October window at its best.</div>
    </div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>09</span>
  </div>
</section>

<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">Age &amp; Fitness</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <h1 style="font:400 34px/1.08 'Fraunces',serif;color:#1C3A2A;margin:0 0 16px;max-width:600px;">Who can climb</h1>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:36px;">
    <div>
      <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:5px;">Minimum age</div>
      <p style="font:400 13px/1.6 'Geist',sans-serif;margin:0 0 16px;">Most operators, EWA included, set a minimum age of 10–12 depending on route — hut-based Marangu is generally the most forgiving for younger teens, while steeper routes like Umbwe are not recommended for children at all. There is no substitute for a frank conversation with your guide team about a specific child's stamina and temperament before booking.</p>
      <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:5px;">No strict upper limit</div>
      <p style="font:400 13px/1.6 'Geist',sans-serif;margin:0 0 16px;">Kilimanjaro has been summited by climbers in their eighties. There is no age ceiling — but there is a genuine cardiovascular and joint-health bar. A pre-trip medical check is strongly advised for older climbers or anyone with an existing heart, lung or blood-pressure condition.</p>
      <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:5px;">Altitude doesn't care about fitness</div>
      <p style="font:400 13px/1.6 'Geist',sans-serif;margin:0;">This is the single most important fact on this page: acute mountain sickness risk is driven mainly by ascent rate and individual physiology, not by age, gender or gym fitness. Elite athletes have been turned back by altitude while first-time trekkers have summited comfortably. Fitness affects how <em style="font-style:italic;">comfortable</em> the days feel — it does not reliably predict who tolerates altitude.</p>
    </div>
    <div>
      <img src="/images/kilimanjaro-guide/fitness.webp" alt="Trekkers of varied ages on the trail" style="width:100%;height:190px;margin-bottom:16px;object-fit:cover;display:block;border-radius:6px;" />
      <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:8px;">Recommended pre-trip conditioning</div>
      <div style="display:flex;flex-direction:column;gap:9px;">
        <div style="display:flex;gap:10px;align-items:baseline;"><span style="color:#D4A853;font-weight:600;">—</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong style="color:#1C3A2A;">8–12 weeks out:</strong> build a weekly hiking or stair-climbing habit, ideally with a loaded daypack.</span></div>
        <div style="display:flex;gap:10px;align-items:baseline;"><span style="color:#D4A853;font-weight:600;">—</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong style="color:#1C3A2A;">Cardio base:</strong> 3–4 sessions a week of sustained aerobic work — hiking, cycling or running.</span></div>
        <div style="display:flex;gap:10px;align-items:baseline;"><span style="color:#D4A853;font-weight:600;">—</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong style="color:#1C3A2A;">Leg strength:</strong> stairs, step-ups and squats — descent days are harder on the knees than ascent days are on the lungs.</span></div>
        <div style="display:flex;gap:10px;align-items:baseline;"><span style="color:#D4A853;font-weight:600;">—</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong style="color:#1C3A2A;">Break in your boots:</strong> log real trail miles in the exact boots you'll summit in, well before departure.</span></div>
        <div style="display:flex;gap:10px;align-items:baseline;"><span style="color:#D4A853;font-weight:600;">—</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong style="color:#1C3A2A;">See a doctor:</strong> a pre-trip check is sensible for everyone, essential for anyone over 50 or with a known condition.</span></div>
      </div>
    </div>
  </div>
  <div style="position:relative;margin-top:18px;border-radius:6px;overflow:hidden;height:340px;">
    <img src="/images/kilimanjaro-guide/band-10.webp" alt="A porter carrying supplies on the trail" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(28,58,42,0.85) 0%, rgba(28,58,42,0.3) 55%, rgba(28,58,42,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:380px;">Determination gets you further than raw fitness — on both sides of the trail.</div>
    </div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>10</span>
  </div>
</section>

<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">Altitude &amp; Health</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <h1 style="font:400 34px/1.08 'Fraunces',serif;color:#1C3A2A;margin:0 0 16px;max-width:620px;">The mountain's real challenge</h1>
  <p style="font:400 13.5px/1.6 'Geist',sans-serif;margin:0 0 20px;max-width:780px;">Above roughly 2,500m, the air holds progressively less oxygen and the body needs time to adapt. Ascend faster than it can adjust and altitude sickness follows — this, not fitness or terrain, is what actually turns climbers back on Kilimanjaro.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:18px;margin-bottom:22px;">
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:16px 18px;">
      <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:6px;">AMS</div>
      <div style="font:400 10px/1 'Geist',sans-serif;color:#8A8F80;margin-bottom:8px;">Acute Mountain Sickness</div>
      <p style="font:400 11.5px/1.5 'Geist',sans-serif;margin:0;">Headache, nausea, fatigue and poor sleep. Common and usually mild — but a signal to slow down, hydrate and never ascend further while symptomatic.</p>
    </div>
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:16px 18px;">
      <div style="font:500 13px/1 'Geist',sans-serif;color:#8C3B2E;margin-bottom:6px;">HAPE</div>
      <div style="font:400 10px/1 'Geist',sans-serif;color:#8A8F80;margin-bottom:8px;">High-Altitude Pulmonary Edema</div>
      <p style="font:400 11.5px/1.5 'Geist',sans-serif;margin:0;">Fluid in the lungs — breathlessness at rest, a persistent cough. Rare but serious; requires immediate descent.</p>
    </div>
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:16px 18px;">
      <div style="font:500 13px/1 'Geist',sans-serif;color:#8C3B2E;margin-bottom:6px;">HACE</div>
      <div style="font:400 10px/1 'Geist',sans-serif;color:#8A8F80;margin-bottom:8px;">High-Altitude Cerebral Edema</div>
      <p style="font:400 11.5px/1.5 'Geist',sans-serif;margin:0;">Fluid on the brain — confusion, loss of coordination. The rarest and most dangerous form; also requires immediate descent.</p>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;">
    <div>
      <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:6px;">Climb high, sleep low</div>
      <p style="font:400 12.5px/1.6 'Geist',sans-serif;margin:0 0 14px;">The core principle behind every well-designed itinerary: gain altitude during the day, then descend to sleep lower than the day's high point. The body acclimatizes fastest at rest, and every route on this guide is timed around this pattern — it's also the biggest reason longer routes succeed more often than shorter ones.</p>
      <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:6px;">Pace, water, and honesty</div>
      <p style="font:400 12.5px/1.6 'Geist',sans-serif;margin:0;">Walk slower than feels necessary ("pole pole" — Swahili for "slowly, slowly"), drink 3–4 litres of water a day, and tell your guide about every symptom, however minor. Altitude sickness caught early is a pause; ignored, it can become an emergency.</p>
    </div>
    <div style="background:#1C3A2A;border-radius:6px;padding:22px 24px;">
      <div style="font:600 10px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#D4A853;margin-bottom:10px;">Medical support on every EWA climb</div>
      <div style="display:flex;flex-direction:column;gap:11px;">
        <div style="font:400 12.5px/1.5 'Geist',sans-serif;color:#EADFC4;"><strong style="color:#F3EEDF;">Guides trained in altitude illness</strong> — recognizing symptoms early and making the call to descend when needed.</div>
        <div style="font:400 12.5px/1.5 'Geist',sans-serif;color:#EADFC4;"><strong style="color:#F3EEDF;">Pulse oximeters</strong> — daily blood-oxygen and heart-rate checks on every climber, every route.</div>
        <div style="font:400 12.5px/1.5 'Geist',sans-serif;color:#EADFC4;"><strong style="color:#F3EEDF;">Supplemental oxygen &amp; first-aid kits</strong> — carried on every trek for emergency use.</div>
        <div style="font:400 12.5px/1.5 'Geist',sans-serif;color:#EADFC4;"><strong style="color:#F3EEDF;">Clear evacuation protocol</strong> — a standing plan for rapid descent or rescue, briefed before every departure.</div>
      </div>
    </div>
  </div>
  <div style="position:relative;margin-top:14px;border-radius:6px;overflow:hidden;height:290px;">
    <img src="/images/kilimanjaro-guide/band-11.webp" alt="Sun over the mountain's upper slopes" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(28,58,42,0.85) 0%, rgba(28,58,42,0.3) 55%, rgba(28,58,42,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:380px;">Thin air at altitude is beautiful and unforgiving in equal measure.</div>
    </div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>11</span>
  </div>
</section>

<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">Kit &amp; Packing List</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <h1 style="font:400 32px/1.08 'Fraunces',serif;color:#1C3A2A;margin:0 0 6px;max-width:620px;">What to bring — part 1</h1>
  <p style="font:400 12.5px/1.5 'Geist',sans-serif;margin:0 0 20px;color:#5C6357;">A four-season layering system, worn and repacked daily, matters more on Kilimanjaro than any single piece of gear.</p>
  <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:8px;">Layering system</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 28px;margin-bottom:18px;">
    <div><div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Moisture-wicking base layers</strong> (top &amp; bottom) — keep sweat off skin where it chills you fastest.</span></div>
    <div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Fleece or softshell mid-layer</strong> — traps warmth through the moorland and alpine zones.</span></div>
    <div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Insulated down jacket</strong> — non-negotiable above 4,000m; pack the warmest one you own.</span></div></div>
    <div><div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Waterproof/windproof shell</strong> (jacket &amp; pants) — rain lower down, wind at altitude.</span></div>
    <div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Summit-night system</strong> — every layer worn at once, plus a balaclava; night temperatures fall to −15 to −20°C.</span></div>
    <div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Warm hat, liner gloves &amp; insulated mitts</strong> — extremities lose heat fastest; bring a spare pair of gloves.</span></div></div>
  </div>
  <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:8px;">Footwear</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 28px;margin-bottom:18px;">
    <div><div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Broken-in, waterproof hiking boots</strong> — mid-to-high ankle support; never summit in new boots.</span></div>
    <div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Gaiters</strong> — keep scree and snow out of your boots on summit night.</span></div></div>
    <div><div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Wool hiking socks + liners</strong> — pack more pairs than seems necessary; wet feet chill fast.</span></div>
    <div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Camp shoes</strong> — lightweight sandals or slip-ons to let feet breathe at camp.</span></div></div>
  </div>
  <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:8px;">Sleeping gear</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 28px;">
    <div><div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;border-bottom:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Sleeping bag rated to at least −15°C</strong> — camp nights get far colder than daytime temperatures suggest.</span></div></div>
    <div><div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;border-bottom:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Sleeping bag liner</strong> — adds warmth and keeps the bag cleaner over multiple nights.</span></div></div>
  </div>
  <div style="position:relative;margin-top:22px;border-radius:6px;overflow:hidden;height:340px;">
    <img src="/images/kilimanjaro-guide/kit-band-1.webp" alt="Trekkers in wet-weather gear on the trail" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(28,58,42,0.85) 0%, rgba(28,58,42,0.35) 55%, rgba(28,58,42,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:360px;">Weather changes fast on the mountain — the right layers turn a miserable day into a manageable one.</div>
    </div>
  </div>
  <div style="background:#EFE7D2;border-left:3px solid #D4A853;padding:14px 18px;margin-top:16px;">
    <div style="font:500 11px/1.5 'Geist',sans-serif;color:#5C4A22;">EWA GUIDE NOTE — Pack for a 40°C swing in one day: shorts at breakfast, down jacket by midnight on summit night.</div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>12</span>
  </div>
</section>

<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">Kit &amp; Packing List</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <h1 style="font:400 32px/1.08 'Fraunces',serif;color:#1C3A2A;margin:0 0 20px;max-width:620px;">What to bring — part 2</h1>
  <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:8px;">Health &amp; medical</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 28px;margin-bottom:18px;">
    <div><div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Altitude sickness medication</strong> (e.g. acetazolamide) — discuss with your doctor before departure.</span></div>
    <div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Personal first-aid kit</strong> — blister care, painkillers, rehydration salts, any personal prescriptions.</span></div></div>
    <div><div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>High-SPF sunscreen &amp; lip balm</strong> — UV exposure near the equator, at altitude, is intense even in cold air.</span></div>
    <div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Hand sanitizer &amp; wet wipes</strong> — hygiene matters more the longer the route.</span></div></div>
  </div>
  <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:8px;">Personal items</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 28px;margin-bottom:18px;">
    <div><div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Duffel bag for porters + daypack for yourself</strong> — soft-sided duffel, 15–20kg limit.</span></div>
    <div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>3-litre water bladder or bottles</strong> — insulated sleeves prevent freezing on summit night.</span></div></div>
    <div><div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Snacks from home</strong> — familiar high-energy food helps on low-appetite summit night.</span></div>
    <div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Sunglasses (high UV rating)</strong> — glacier glare above 5,000m is severe.</span></div></div>
  </div>
  <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:8px;">Technical gear</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 28px;margin-bottom:22px;">
    <div><div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;border-bottom:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Trekking poles</strong> — save your knees, especially on steep descents.</span></div></div>
    <div><div style="display:flex;gap:10px;padding:7px 0;border-top:1px solid #E2DBC8;border-bottom:1px solid #E2DBC8;"><span style="color:#D4A853;">✓</span><span style="font:400 12px/1.5 'Geist',sans-serif;"><strong>Headlamp + spare batteries</strong> — summit night starts hours before dawn, in the dark.</span></div></div>
  </div>
  <div style="background:#EFE7D2;border-left:3px solid #D4A853;padding:14px 18px;margin-bottom:18px;">
    <div style="font:500 11.5px/1.5 'Geist',sans-serif;color:#5C4A22;">EWA supplies all group camping and safety equipment — tents, mess tent, cooking gear, oxygen and first-aid kits. Everything on these two pages is personal kit only.</div>
  </div>
  <div style="position:relative;border-radius:6px;overflow:hidden;height:340px;">
    <img src="/images/kilimanjaro-guide/kit-band-2.webp" alt="Trekkers on the summit ridge at sunrise" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(28,58,42,0.85) 0%, rgba(28,58,42,0.35) 55%, rgba(28,58,42,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:360px;">Every extra layer, every spare battery — you'll thank yourself for it hours before dawn on summit night.</div>
    </div>
  </div>
  <div style="background:#EFE7D2;border-left:3px solid #D4A853;padding:14px 18px;margin-top:16px;">
    <div style="font:500 11px/1.5 'Geist',sans-serif;color:#5C4A22;">EWA GUIDE NOTE — Everything across these two pages fits inside a single duffel bag under the 15–20kg porter limit.</div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>13</span>
  </div>
</section>

<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">What's Included</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <h1 style="font:400 34px/1.08 'Fraunces',serif;color:#1C3A2A;margin:0 0 20px;max-width:620px;">What you're paying for</h1>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;">
    <div style="border:1px solid #D4A853;border-radius:6px;padding:22px 24px;">
      <div style="font:500 13px/1 'Geist',sans-serif;color:#1C3A2A;margin-bottom:14px;">Included in every EWA climb</div>
      <div style="display:flex;flex-direction:column;gap:9px;">
        <div style="display:flex;gap:9px;"><span style="color:#1C3A2A;">✓</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;">Kilimanjaro National Park fees, camping and hut fees, rescue fees</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#1C3A2A;">✓</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;">Certified, English-speaking lead guide and assistant guides</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#1C3A2A;">✓</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;">Porters, cook, and full camping crew (fairly paid per Tanzanian park guidelines)</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#1C3A2A;">✓</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;">All meals on the mountain, prepared fresh, plus treated drinking water</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#1C3A2A;">✓</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;">Group camping equipment — sleeping tents, mess tent, tables and chairs</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#1C3A2A;">✓</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;">Safety equipment — oxygen cylinders, pulse oximeters, first-aid kits</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#1C3A2A;">✓</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;">Airport-to-hotel and hotel-to-trailhead transfers in Arusha</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#1C3A2A;">✓</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;">Summit certificate on successful completion</span></div>
      </div>
    </div>
    <div style="border:1px solid #E2DBC8;border-radius:6px;padding:22px 24px;background:#F1ECDA;">
      <div style="font:500 13px/1 'Geist',sans-serif;color:#5C6357;margin-bottom:14px;">Arranged separately</div>
      <div style="display:flex;flex-direction:column;gap:9px;">
        <div style="display:flex;gap:9px;"><span style="color:#8A8F80;">–</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;color:#5C6357;">International and domestic flights</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#8A8F80;">–</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;color:#5C6357;">Tanzania visa fees</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#8A8F80;">–</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;color:#5C6357;">Travel &amp; medical/evacuation insurance (required)</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#8A8F80;">–</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;color:#5C6357;">Tips and gratuities for guides, cooks and porters</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#8A8F80;">–</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;color:#5C6357;">Personal trekking gear (see the packing list)</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#8A8F80;">–</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;color:#5C6357;">Hotel nights before/after the climb</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#8A8F80;">–</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;color:#5C6357;">Personal spending — snacks, laundry, bar tabs, souvenirs</span></div>
        <div style="display:flex;gap:9px;"><span style="color:#8A8F80;">–</span><span style="font:400 12.5px/1.5 'Geist',sans-serif;color:#5C6357;">Altitude medication and any personal prescriptions</span></div>
      </div>
    </div>
  </div>
  <div style="position:relative;margin-top:22px;border-radius:6px;overflow:hidden;height:340px;">
    <img src="/images/kilimanjaro-guide/included-band.webp" alt="Trekkers crossing the snowfield near the summit" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(28,58,42,0.85) 0%, rgba(28,58,42,0.3) 60%, rgba(28,58,42,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:400px;">What you're really paying for: a team that gets you to the top, and back down, safely.</div>
    </div>
  </div>
  <div style="background:#EFE7D2;border-left:3px solid #D4A853;padding:14px 18px;margin-top:16px;">
    <div style="font:500 11px/1.5 'Geist',sans-serif;color:#5C4A22;">EWA GUIDE NOTE — Ask about local tipping norms before you go; it's the one cost climbers most often underestimate.</div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>14</span>
  </div>
</section>

<section class="page" style="position:relative;background:#F8F5EC;overflow:hidden;padding:56px 60px 90px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#232922;">
  <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B8862F;">Advice From Our Guides</div>
  <div style="height:1px;width:56px;background:#D4A853;opacity:.6;margin:8px 0 18px;"></div>
  <h1 style="font:400 34px/1.08 'Fraunces',serif;color:#1C3A2A;margin:0 0 18px;max-width:640px;">What experience actually teaches you</h1>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:36px;">
    <div style="display:flex;flex-direction:column;gap:15px;">
      <div><div style="font:400 15px/1 'Fraunces',serif;color:#D4A853;display:inline;margin-right:8px;">01</div><strong style="font:500 13px 'Geist',sans-serif;color:#1C3A2A;">Walk slower than feels right.</strong><p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:4px 0 0;">"Pole pole" isn't a slogan — it's the single biggest lever a climber controls. Guides deliberately set a pace that feels almost too easy on day one; by day four, you'll understand why.</p></div>
      <div><div style="font:400 15px/1 'Fraunces',serif;color:#D4A853;display:inline;margin-right:8px;">02</div><strong style="font:500 13px 'Geist',sans-serif;color:#1C3A2A;">Eat even without appetite.</strong><p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:4px 0 0;">Altitude suppresses hunger right when the body needs the most fuel. Force small, frequent meals — soup, carbs, familiar snacks from home — especially the night before a summit push.</p></div>
      <div><div style="font:400 15px/1 'Fraunces',serif;color:#D4A853;display:inline;margin-right:8px;">03</div><strong style="font:500 13px 'Geist',sans-serif;color:#1C3A2A;">Layer before you're cold, not after.</strong><p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:4px 0 0;">Add or remove a layer at the first hint of temperature change. Sweating into your insulation on the way up costs you warmth you can't get back after dark.</p></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:15px;">
      <div><div style="font:400 15px/1 'Fraunces',serif;color:#D4A853;display:inline;margin-right:8px;">04</div><strong style="font:500 13px 'Geist',sans-serif;color:#1C3A2A;">Summit night is 90% mental.</strong><p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:4px 0 0;">Cold, dark, and hours of switchbacks before sunrise — most climbers who turn back do so in their heads before their legs give out. Break the climb into small landmarks, not the summit as a whole.</p></div>
      <div><div style="font:400 15px/1 'Fraunces',serif;color:#D4A853;display:inline;margin-right:8px;">05</div><strong style="font:500 13px 'Geist',sans-serif;color:#1C3A2A;">Say something, always.</strong><p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:4px 0 0;">Guides would rather stop for a headache than treat it at 5,500m. Reporting symptoms early is what keeps minor discomfort from becoming a medical descent.</p></div>
      <div><div style="font:400 15px/1 'Fraunces',serif;color:#D4A853;display:inline;margin-right:8px;">06</div><strong style="font:500 13px 'Geist',sans-serif;color:#1C3A2A;">Tip your crew properly.</strong><p style="font:400 12.5px/1.55 'Geist',sans-serif;margin:4px 0 0;">Porters carry your gear up the same mountain you're struggling to climb empty-handed. Budget for gratuities as part of the trip's real cost, not an afterthought — your guide team can advise fair local rates.</p></div>
    </div>
  </div>
  <div style="margin-top:26px;background:#1C3A2A;border-radius:6px;padding:22px 26px;">
    <div style="font:400 16px/1.4 'Fraunces',serif;font-style:italic;color:#F3EEDF;">"The climbers who struggle most aren't the ones who trained the hardest — they're the ones in the biggest hurry. Give the mountain your time, and it tends to give summits back."</div>
    <div style="font:600 10px 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#D4A853;margin-top:10px;">EWA Safari Outfitters, senior guide team</div>
  </div>
  <div style="position:relative;margin-top:16px;border-radius:6px;overflow:hidden;height:320px;">
    <img src="/images/kilimanjaro-guide/band-15.webp" alt="A stone cairn on the trail" style="width:100%;height:100%;object-fit:cover;display:block;" />
    <div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(28,58,42,0.85) 0%, rgba(28,58,42,0.3) 55%, rgba(28,58,42,0) 100%);display:flex;align-items:center;padding:0 26px;">
      <div style="font:400 17px/1.3 'Fraunces',serif;font-style:italic;color:#FBF8F0;max-width:380px;">Every marker on the trail was placed by someone who came before.</div>
    </div>
  </div>
  <div style="background:#EFE7D2;border-left:3px solid #D4A853;padding:14px 18px;margin-top:14px;">
    <div style="font:500 11px/1.5 'Geist',sans-serif;color:#5C4A22;">EWA GUIDE NOTE — Every one of these six lessons came from a guide who's summited more times than they can count.</div>
  </div>
  <div style="position:absolute;left:60px;right:60px;bottom:18px;display:flex;justify-content:space-between;align-items:center;font:500 9px/1 'Geist',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8A8F80;border-top:1px solid #D4A853;padding-top:12px;">
    <span>EWA Safari Outfitters · Kilimanjaro Guide</span><span>15</span>
  </div>
</section>

<section class="page" style="position:relative;background:#12241A;overflow:hidden;padding:64px 60px;box-sizing:border-box;font-family:'Geist',sans-serif;color:#EADFC4;">
  <div style="position:absolute;inset:0;">
    <img src="/images/kilimanjaro-guide/closing.jpg" alt="Trekkers celebrating at the Uhuru Peak summit sign, dawn light" style="width:100%;height:100%;opacity:0.9;object-fit:cover;display:block;" />
  </div>
  <div style="position:absolute;inset:0;background:linear-gradient(100deg, #12241A 0%, rgba(18,36,26,0.88) 38%, rgba(18,36,26,0.45) 100%);"></div>
  <div style="position:relative;z-index:1;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
    <div>
      <img src="/images/kilimanjaro-guide/ewa-logo.png" alt="EWA Safari Outfitters" style="height:52px;object-fit:contain;margin-bottom:34px;">
      <div style="font:600 11px/1 'Geist',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#D4A853;margin-bottom:12px;">Start Your Climb</div>
      <h1 style="font:400 40px/1.1 'Fraunces',serif;color:#FBF8F0;margin:0 0 18px;max-width:460px;">Every route on this mountain leads to the same sunrise.</h1>
      <p style="font:400 14px/1.6 'Geist',sans-serif;color:#D8CFB8;margin:0 0 26px;max-width:440px;">Whichever route fits your calendar and your legs, our guides have led it. Reach out and we'll walk you through the specifics before you commit to anything.</p>
              <div style="background:rgba(212,168,83,0.12);border:1px solid rgba(212,168,83,0.5);border-radius:6px;padding:18px 22px;max-width:460px;margin-bottom:8px;">
          <div style="font:500 13px/1.5 'Geist',sans-serif;color:#F3EEDF;">Not sure which route fits you? <strong style="color:#D4A853;">Tell us your age, fitness level and travel dates</strong> when you write in — we'll match you to the route with the best odds for your situation, honestly, before you book anything.</div>
        </div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:flex-end;border-top:1px solid rgba(212,168,83,0.35);padding-top:22px;">
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="font:500 15px/1.3 'Geist',sans-serif;color:#FBF8F0;">+255 (0) 747 999 070</div>
        <div style="font:500 15px/1.3 'Geist',sans-serif;color:#FBF8F0;">info@theextremewilderness.com</div>
        <div style="font:500 15px/1.3 'Geist',sans-serif;color:#FBF8F0;">theextremewilderness.com</div>
      </div>
      <div style="text-align:right;font:500 11px/1.5 'Geist',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#B9AF97;">Arusha, Tanzania<br>EWA Safari Outfitters</div>
    </div>
  </div>
</section>`,
        }}
      />
    </>
  )
}
