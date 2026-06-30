// Mountain centre: (450, 268)
// r = (5895 - elev) / 4395 * 228
// x = 450 + r * sin(bearing_deg * π/180)
// y = 268 - r * cos(bearing_deg * π/180)

type Pt = [number, number]

interface Camp {
  label: string
  elev: string
  x: number
  y: number
  /** label top-left anchor */
  lx: number
  ly: number
  anchor?: 'start' | 'end'
  gate?: true
  summit?: true
}

interface RouteData {
  name: string
  color: string
  ascent: Pt[]
  descent?: Pt[]
  camps: Camp[]
}

// ─── Named positions ──────────────────────────────────────────────────────────

const P = {
  uhuru:         [450, 268] as Pt,
  barafu:        [433, 330] as Pt,
  kiboHut:       [506, 294] as Pt,
  barranco:      [373, 332] as Pt,
  karanga:       [395, 347] as Pt,
  shira2:        [345, 287] as Pt,
  shira1:        [326, 268] as Pt,
  mawenziTarn:   [512, 216] as Pt,
  schoolHut:     [507, 253] as Pt,
  buffalo:       [417, 177] as Pt,
  thirdCave:     [487, 166] as Pt,
  horombo:       [507, 366] as Pt,
  mandara:       [552, 398] as Pt,
  machamecamp:   [375, 397] as Pt,
  bigTree:       [293, 226] as Pt,
  simba:         [474, 100] as Pt,
  secondCave:    [483, 145] as Pt,
  umbweCave:     [352, 385] as Pt,
  machameGate:   [360, 460] as Pt,
  mwekaGate:     [496, 484] as Pt,
  mwekaCamp:     [480, 410] as Pt,
  maranguGate:   [597, 415] as Pt,
  londorossi:    [267, 219] as Pt,
  rongaiGate:    [468, 64]  as Pt,
  umbweGate:     [314, 442] as Pt,
}

// ─── Route definitions ────────────────────────────────────────────────────────

const ROUTES: Record<string, RouteData> = {
  machame: {
    name: 'Machame Route',
    color: '#D4A853',
    ascent: [
      P.machameGate, P.machamecamp, P.shira2,
      P.barranco, P.barafu, P.uhuru,
    ],
    descent: [P.uhuru, P.mwekaCamp, P.mwekaGate],
    camps: [
      { label: 'Machame Gate', elev: '1,800m', x: P.machameGate[0], y: P.machameGate[1], lx: P.machameGate[0] - 95, ly: P.machameGate[1] + 8, anchor: 'start', gate: true },
      { label: 'Machame Camp', elev: '3,020m', x: P.machamecamp[0], y: P.machamecamp[1], lx: P.machamecamp[0] - 95, ly: P.machamecamp[1] + 6, anchor: 'start' },
      { label: 'Shira Camp',   elev: '3,840m', x: P.shira2[0],      y: P.shira2[1],      lx: P.shira2[0] - 88,     ly: P.shira2[1] - 16,    anchor: 'start' },
      { label: 'Barranco',     elev: '3,976m', x: P.barranco[0],    y: P.barranco[1],    lx: P.barranco[0] - 76,   ly: P.barranco[1] + 6,   anchor: 'start' },
      { label: 'Barafu Camp',  elev: '4,673m', x: P.barafu[0],      y: P.barafu[1],      lx: P.barafu[0] + 10,     ly: P.barafu[1] - 14,    anchor: 'start' },
      { label: 'Uhuru Peak',   elev: '5,895m', x: P.uhuru[0],       y: P.uhuru[1],       lx: P.uhuru[0] + 14,      ly: P.uhuru[1] - 12,     anchor: 'start', summit: true },
      { label: 'Mweka Camp',   elev: '3,100m', x: P.mwekaCamp[0],   y: P.mwekaCamp[1],   lx: P.mwekaCamp[0] + 8,   ly: P.mwekaCamp[1] - 14, anchor: 'start' },
      { label: 'Mweka Gate',   elev: '1,640m', x: P.mwekaGate[0],   y: P.mwekaGate[1],   lx: P.mwekaGate[0] + 8,   ly: P.mwekaGate[1] - 12, anchor: 'start', gate: true },
    ],
  },

  lemosho: {
    name: 'Lemosho Route',
    color: '#D4A853',
    ascent: [
      P.londorossi, P.bigTree, P.shira1, P.shira2,
      P.barranco, P.karanga, P.barafu, P.uhuru,
    ],
    descent: [P.uhuru, P.mwekaCamp, P.mwekaGate],
    camps: [
      { label: 'Londorossi Gate', elev: '2,250m', x: P.londorossi[0],  y: P.londorossi[1],  lx: P.londorossi[0] + 8,   ly: P.londorossi[1] - 16, anchor: 'start', gate: true },
      { label: 'Big Tree Camp',   elev: '2,780m', x: P.bigTree[0],     y: P.bigTree[1],     lx: P.bigTree[0] - 94,     ly: P.bigTree[1] - 16,    anchor: 'start' },
      { label: 'Shira 1',         elev: '3,500m', x: P.shira1[0],      y: P.shira1[1],      lx: P.shira1[0] - 60,      ly: P.shira1[1] + 6,      anchor: 'start' },
      { label: 'Shira 2',         elev: '3,840m', x: P.shira2[0],      y: P.shira2[1],      lx: P.shira2[0] - 60,      ly: P.shira2[1] - 16,     anchor: 'start' },
      { label: 'Barranco',         elev: '3,976m', x: P.barranco[0],    y: P.barranco[1],    lx: P.barranco[0] - 76,    ly: P.barranco[1] + 6,    anchor: 'start' },
      { label: 'Karanga',          elev: '4,035m', x: P.karanga[0],     y: P.karanga[1],     lx: P.karanga[0] + 8,      ly: P.karanga[1] + 4,     anchor: 'start' },
      { label: 'Barafu Camp',      elev: '4,673m', x: P.barafu[0],      y: P.barafu[1],      lx: P.barafu[0] + 10,      ly: P.barafu[1] - 14,     anchor: 'start' },
      { label: 'Uhuru Peak',       elev: '5,895m', x: P.uhuru[0],       y: P.uhuru[1],       lx: P.uhuru[0] + 14,       ly: P.uhuru[1] - 12,      anchor: 'start', summit: true },
      { label: 'Mweka Gate',       elev: '1,640m', x: P.mwekaGate[0],   y: P.mwekaGate[1],   lx: P.mwekaGate[0] + 8,    ly: P.mwekaGate[1] - 12,  anchor: 'start', gate: true },
    ],
  },

  marangu: {
    name: 'Marangu Route',
    color: '#D4A853',
    ascent: [
      P.maranguGate, P.mandara, P.horombo, P.kiboHut, P.uhuru,
    ],
    descent: [P.uhuru, P.kiboHut, P.horombo, P.maranguGate],
    camps: [
      { label: 'Marangu Gate', elev: '1,879m', x: P.maranguGate[0], y: P.maranguGate[1], lx: P.maranguGate[0] + 8,  ly: P.maranguGate[1] - 12, anchor: 'start', gate: true },
      { label: 'Mandara Hut',  elev: '2,720m', x: P.mandara[0],     y: P.mandara[1],     lx: P.mandara[0] + 8,      ly: P.mandara[1] - 14,     anchor: 'start' },
      { label: 'Horombo Hut',  elev: '3,720m', x: P.horombo[0],     y: P.horombo[1],     lx: P.horombo[0] + 8,      ly: P.horombo[1] - 14,     anchor: 'start' },
      { label: 'Kibo Hut',     elev: '4,703m', x: P.kiboHut[0],     y: P.kiboHut[1],     lx: P.kiboHut[0] + 8,      ly: P.kiboHut[1] - 14,     anchor: 'start' },
      { label: 'Uhuru Peak',   elev: '5,895m', x: P.uhuru[0],       y: P.uhuru[1],       lx: P.uhuru[0] + 14,       ly: P.uhuru[1] - 12,       anchor: 'start', summit: true },
    ],
  },

  rongai: {
    name: 'Rongai Route',
    color: '#D4A853',
    ascent: [
      P.rongaiGate, P.simba, P.secondCave, P.mawenziTarn, P.kiboHut, P.uhuru,
    ],
    descent: [P.uhuru, P.kiboHut, P.horombo, P.maranguGate],
    camps: [
      { label: 'Rongai Gate',    elev: '1,950m', x: P.rongaiGate[0],  y: P.rongaiGate[1],  lx: P.rongaiGate[0] + 8,  ly: P.rongaiGate[1] + 4,   anchor: 'start', gate: true },
      { label: 'Simba Camp',     elev: '2,625m', x: P.simba[0],       y: P.simba[1],       lx: P.simba[0] + 8,       ly: P.simba[1] - 12,        anchor: 'start' },
      { label: 'Second Cave',    elev: '3,449m', x: P.secondCave[0],  y: P.secondCave[1],  lx: P.secondCave[0] + 8,  ly: P.secondCave[1] - 12,   anchor: 'start' },
      { label: 'Mawenzi Tarn',   elev: '4,330m', x: P.mawenziTarn[0], y: P.mawenziTarn[1], lx: P.mawenziTarn[0] + 8, ly: P.mawenziTarn[1] - 14,  anchor: 'start' },
      { label: 'Kibo Hut',       elev: '4,703m', x: P.kiboHut[0],     y: P.kiboHut[1],     lx: P.kiboHut[0] + 8,     ly: P.kiboHut[1] + 4,       anchor: 'start' },
      { label: 'Uhuru Peak',     elev: '5,895m', x: P.uhuru[0],       y: P.uhuru[1],       lx: P.uhuru[0] + 14,      ly: P.uhuru[1] - 12,        anchor: 'start', summit: true },
      { label: 'Horombo Hut',    elev: '3,720m', x: P.horombo[0],     y: P.horombo[1],     lx: P.horombo[0] + 8,     ly: P.horombo[1] - 14,      anchor: 'start' },
      { label: 'Marangu Gate',   elev: '1,879m', x: P.maranguGate[0], y: P.maranguGate[1], lx: P.maranguGate[0] + 8, ly: P.maranguGate[1] - 12,  anchor: 'start', gate: true },
    ],
  },

  umbwe: {
    name: 'Umbwe Route',
    color: '#D4A853',
    ascent: [
      P.umbweGate, P.umbweCave, P.barranco, P.karanga, P.barafu, P.uhuru,
    ],
    descent: [P.uhuru, P.mwekaCamp, P.mwekaGate],
    camps: [
      { label: 'Umbwe Gate',   elev: '1,641m', x: P.umbweGate[0],  y: P.umbweGate[1],  lx: P.umbweGate[0] - 90,  ly: P.umbweGate[1] + 6,  anchor: 'start', gate: true },
      { label: 'Umbwe Cave',   elev: '2,940m', x: P.umbweCave[0],  y: P.umbweCave[1],  lx: P.umbweCave[0] - 82,  ly: P.umbweCave[1] - 14, anchor: 'start' },
      { label: 'Barranco',      elev: '3,976m', x: P.barranco[0],   y: P.barranco[1],   lx: P.barranco[0] - 76,   ly: P.barranco[1] + 6,   anchor: 'start' },
      { label: 'Karanga',       elev: '4,035m', x: P.karanga[0],    y: P.karanga[1],    lx: P.karanga[0] + 8,     ly: P.karanga[1] + 4,    anchor: 'start' },
      { label: 'Barafu Camp',   elev: '4,673m', x: P.barafu[0],     y: P.barafu[1],     lx: P.barafu[0] + 10,     ly: P.barafu[1] - 14,    anchor: 'start' },
      { label: 'Uhuru Peak',    elev: '5,895m', x: P.uhuru[0],      y: P.uhuru[1],      lx: P.uhuru[0] + 14,      ly: P.uhuru[1] - 12,     anchor: 'start', summit: true },
      { label: 'Mweka Gate',    elev: '1,640m', x: P.mwekaGate[0],  y: P.mwekaGate[1],  lx: P.mwekaGate[0] + 8,   ly: P.mwekaGate[1] - 12, anchor: 'start', gate: true },
    ],
  },

  'northern-circuit': {
    name: 'Northern Circuit',
    color: '#D4A853',
    ascent: [
      P.londorossi, P.bigTree, P.shira1, P.shira2,
      P.buffalo, P.thirdCave, P.schoolHut, P.mawenziTarn, P.kiboHut, P.uhuru,
    ],
    descent: [P.uhuru, P.kiboHut, P.horombo, P.maranguGate],
    camps: [
      { label: 'Londorossi Gate', elev: '2,250m', x: P.londorossi[0], y: P.londorossi[1], lx: P.londorossi[0] + 8,  ly: P.londorossi[1] - 16, anchor: 'start', gate: true },
      { label: 'Shira 1',          elev: '3,500m', x: P.shira1[0],     y: P.shira1[1],     lx: P.shira1[0] - 56,     ly: P.shira1[1] + 6,      anchor: 'start' },
      { label: 'Shira 2',          elev: '3,840m', x: P.shira2[0],     y: P.shira2[1],     lx: P.shira2[0] - 56,     ly: P.shira2[1] - 16,     anchor: 'start' },
      { label: 'Buffalo Camp',     elev: '4,020m', x: P.buffalo[0],    y: P.buffalo[1],    lx: P.buffalo[0] - 90,    ly: P.buffalo[1] - 14,    anchor: 'start' },
      { label: 'Third Cave',       elev: '3,800m', x: P.thirdCave[0],  y: P.thirdCave[1],  lx: P.thirdCave[0] + 8,   ly: P.thirdCave[1] - 12,  anchor: 'start' },
      { label: 'School Hut',       elev: '4,750m', x: P.schoolHut[0],  y: P.schoolHut[1],  lx: P.schoolHut[0] + 8,   ly: P.schoolHut[1] - 14,  anchor: 'start' },
      { label: 'Mawenzi Tarn',     elev: '4,330m', x: P.mawenziTarn[0],y: P.mawenziTarn[1],lx: P.mawenziTarn[0] + 8, ly: P.mawenziTarn[1] - 14,anchor: 'start' },
      { label: 'Kibo Hut',         elev: '4,703m', x: P.kiboHut[0],    y: P.kiboHut[1],    lx: P.kiboHut[0] + 8,     ly: P.kiboHut[1] + 4,     anchor: 'start' },
      { label: 'Uhuru Peak',       elev: '5,895m', x: P.uhuru[0],      y: P.uhuru[1],      lx: P.uhuru[0] + 14,      ly: P.uhuru[1] - 12,      anchor: 'start', summit: true },
      { label: 'Horombo Hut',      elev: '3,720m', x: P.horombo[0],    y: P.horombo[1],    lx: P.horombo[0] + 8,     ly: P.horombo[1] - 14,    anchor: 'start' },
      { label: 'Marangu Gate',     elev: '1,879m', x: P.maranguGate[0],y: P.maranguGate[1],lx: P.maranguGate[0] + 8, ly: P.maranguGate[1] - 12,anchor: 'start', gate: true },
    ],
  },
}

// ─── Helper: label pill ────────────────────────────────────────────────────────

function LabelPill({ label, elev, lx, ly }: { label: string; elev: string; lx: number; ly: number }) {
  const w = Math.max(label.length, elev.length) * 5.4 + 10
  return (
    <g>
      <rect x={lx - 2} y={ly - 10} width={w} height={22} rx="3" ry="3"
        fill="white" fillOpacity="0.92" stroke="#1C3A2A" strokeOpacity="0.12" strokeWidth="0.5" />
      <text x={lx + 2} y={ly} fontSize="9" fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill="#1C3A2A" fontWeight="600">{label}</text>
      <text x={lx + 2} y={ly + 10} fontSize="8" fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill="#6B7280">{elev}</text>
    </g>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function KiliRouteMapSVG({ routeId }: { routeId: string }) {
  const route = ROUTES[routeId]
  if (!route) return null

  const ascentPts  = route.ascent.map(([x, y]) => `${x},${y}`).join(' ')
  const descentPts = route.descent?.map(([x, y]) => `${x},${y}`).join(' ')

  return (
    <svg
      viewBox="0 0 900 560"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
      aria-label={`${route.name} trail map`}
    >
      <defs>
        <radialGradient id="kili-bg" cx="50%" cy="48%" r="52%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e8f2ec" />
        </radialGradient>
        <filter id="kili-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#1C3A2A" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* ── Background ─────────────────────────────────────────── */}
      <rect width="900" height="560" fill="#f0f7f2" />

      {/* ── Topographic contour rings (outer → inner) ─────────── */}
      {/* Band 1: base ~1500m */}
      <ellipse cx="450" cy="268" rx="235" ry="183"
        fill="#dff0e6" stroke="#1C3A2A" strokeOpacity="0.10" strokeWidth="1" />
      {/* Band 2: ~2500m */}
      <ellipse cx="450" cy="268" rx="188" ry="147"
        fill="#c6e2d0" stroke="#1C3A2A" strokeOpacity="0.15" strokeWidth="1" />
      {/* Band 3: ~3500m */}
      <ellipse cx="450" cy="268" rx="142" ry="111"
        fill="#a4ccb6" stroke="#1C3A2A" strokeOpacity="0.20" strokeWidth="1" />
      {/* Band 4: ~4200m */}
      <ellipse cx="450" cy="268" rx="96" ry="75"
        fill="#76b096" stroke="#1C3A2A" strokeOpacity="0.26" strokeWidth="1.5" />
      {/* Band 5: ~4800m */}
      <ellipse cx="450" cy="268" rx="55" ry="43"
        fill="#4c9479" stroke="#1C3A2A" strokeOpacity="0.32" strokeWidth="1.5" />
      {/* Summit ice cap */}
      <ellipse cx="450" cy="268" rx="22" ry="17"
        fill="#eaf7f3" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="1.5" />

      {/* ── Elevation legend key (top-left) ───────────────────── */}
      <g transform="translate(18, 18)" opacity="0.9">
        <rect width="118" height="96" rx="6" fill="white" fillOpacity="0.88"
          stroke="#1C3A2A" strokeOpacity="0.10" strokeWidth="0.5" />
        <text x="8" y="15" fontSize="8.5" fontFamily="ui-sans-serif, system-ui, sans-serif"
          fill="#1C3A2A" fontWeight="700" letterSpacing="0.05em">ELEVATION (m)</text>
        {[
          { fill: '#dff0e6', label: '1,500–2,500' },
          { fill: '#c6e2d0', label: '2,500–3,500' },
          { fill: '#a4ccb6', label: '3,500–4,200' },
          { fill: '#76b096', label: '4,200–4,800' },
          { fill: '#4c9479', label: '4,800–5,400' },
          { fill: '#eaf7f3', label: '5,400+ Ice Cap' },
        ].map((b, i) => (
          <g key={i} transform={`translate(8, ${22 + i * 12})`}>
            <rect width="10" height="10" rx="2" fill={b.fill}
              stroke="#1C3A2A" strokeOpacity="0.25" strokeWidth="0.5" />
            <text x="15" y="8.5" fontSize="8" fontFamily="ui-sans-serif, system-ui, sans-serif" fill="#374151">{b.label}</text>
          </g>
        ))}
      </g>

      {/* ── Descent path (lighter, dashed) ────────────────────── */}
      {descentPts && (
        <polyline
          points={descentPts}
          fill="none"
          stroke={route.color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="5 5"
          opacity="0.45"
        />
      )}

      {/* ── Ascent path (bold, dashed gold) ───────────────────── */}
      <polyline
        points={ascentPts}
        fill="none"
        stroke={route.color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="9 5"
      />

      {/* ── Camp markers ──────────────────────────────────────── */}
      {route.camps.map((camp) => (
        <g key={`${camp.x}-${camp.y}-${camp.label}`} filter="url(#kili-shadow)">
          {camp.summit ? (
            <circle cx={camp.x} cy={camp.y} r="8" fill="#D4A853" stroke="white" strokeWidth="2.5" />
          ) : camp.gate ? (
            <rect
              x={camp.x - 6} y={camp.y - 6}
              width="12" height="12"
              fill="#1C3A2A"
              stroke="white" strokeWidth="2"
              transform={`rotate(45 ${camp.x} ${camp.y})`}
            />
          ) : (
            <circle cx={camp.x} cy={camp.y} r="5.5" fill="#1C3A2A" stroke="white" strokeWidth="2" />
          )}
        </g>
      ))}

      {/* ── Camp labels ───────────────────────────────────────── */}
      {route.camps.map((camp) => (
        <LabelPill
          key={`lbl-${camp.x}-${camp.y}`}
          label={camp.label}
          elev={camp.elev}
          lx={camp.lx}
          ly={camp.ly}
        />
      ))}

      {/* ── Summit flag (on top of everything) ───────────────── */}
      <g transform="translate(450,268)">
        {/* Pole */}
        <line x1="0" y1="-8" x2="0" y2="-26" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" />
        {/* Flag */}
        <polygon points="0,-26 15,-21 0,-16" fill="#D4A853" />
      </g>

      {/* ── Compass rose (bottom-right) ───────────────────────── */}
      <g transform="translate(848, 500)">
        <circle r="20" fill="white" fillOpacity="0.88" stroke="#1C3A2A" strokeOpacity="0.18" strokeWidth="1" />
        {/* N arrow */}
        <polygon points="0,-14 4,-4 0,-8 -4,-4" fill="#1C3A2A" />
        <polygon points="0,-8 4,-4 0,14 -4,-4" fill="#1C3A2A" fillOpacity="0.3" />
        <text x="0" y="-16" textAnchor="middle" fontSize="8" fontFamily="ui-sans-serif, system-ui, sans-serif"
          fill="#1C3A2A" fontWeight="800">N</text>
      </g>

      {/* ── Legend strip (bottom-left) ────────────────────────── */}
      <g transform="translate(18, 518)">
        <rect width="240" height="32" rx="6" fill="white" fillOpacity="0.88"
          stroke="#1C3A2A" strokeOpacity="0.10" strokeWidth="0.5" />
        {/* Route line sample */}
        <line x1="10" y1="16" x2="32" y2="16" stroke="#D4A853" strokeWidth="3"
          strokeDasharray="7 4" strokeLinecap="round" />
        <text x="40" y="13" fontSize="9.5" fontFamily="ui-sans-serif, system-ui, sans-serif"
          fill="#1C3A2A" fontWeight="700">{route.name}</text>
        <text x="40" y="25" fontSize="8" fontFamily="ui-sans-serif, system-ui, sans-serif"
          fill="#6B7280">Kilimanjaro NP · TANAPA Approved</text>
      </g>

      {/* ── Mountain name watermark ───────────────────────────── */}
      <text x="450" y="520" textAnchor="middle" fontSize="9" fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill="#1C3A2A" fillOpacity="0.25" fontWeight="700" letterSpacing="0.15em">MOUNT KILIMANJARO  ·  5,895m</text>
    </svg>
  )
}
