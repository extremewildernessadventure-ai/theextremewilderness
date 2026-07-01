'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

// GADM admin-1 (regions/mkoa) for Tanzania
const GEO_URL = 'https://geodata.ucdavis.edu/gadm/gadm4.1/json/gadm41_TZA_1.json'

interface Zone {
  slug: string; name: string; subtext: string
  packages: number; heatLevel: 1|2|3|4|5; fill: string
}

// Map Tanzania GADM NAME_1 region names → tourism zones
const ZONE_MAP: Record<string, Zone> = {
  // ── Serengeti belt ────────────────────────────────────────────
  'Mara':     { slug: '/destinations/serengeti', name: 'Serengeti', subtext: 'Serengeti NP · Great Migration · Big Five', packages: 24, heatLevel: 5, fill: '#1C3A2A' },
  'Simiyu':   { slug: '/destinations/serengeti', name: 'S. Serengeti', subtext: 'Ndutu · Calving season · Great Migration', packages: 16, heatLevel: 4, fill: '#1C3A2A' },

  // ── Arusha / Ngorongoro / Kilimanjaro ─────────────────────────
  'Arusha':      { slug: '/destinations/arusha', name: 'Arusha & Ngorongoro', subtext: 'Ngorongoro Crater · Arusha NP · Gateway city', packages: 22, heatLevel: 5, fill: '#243d2f' },
  'Kilimanjaro': { slug: '/destinations/arusha', name: 'Kilimanjaro', subtext: 'Mt Kilimanjaro · Moshi · Trekking', packages: 18, heatLevel: 5, fill: '#2D5A3D' },

  // ── Tanga coast ───────────────────────────────────────────────
  'Tanga': { slug: '/destinations/zanzibar', name: 'Tanga', subtext: 'Usambara Mts · Tanga coast · Beaches', packages: 5, heatLevel: 2, fill: '#5a9a72' },

  // ── Tarangire / Manyara ───────────────────────────────────────
  'Manyara': { slug: '/destinations/tarangire', name: 'Tarangire & Manyara', subtext: 'Tarangire NP · Lake Manyara · Elephants', packages: 12, heatLevel: 4, fill: '#2D5A3D' },

  // ── Coast / Dar es Salaam / Zanzibar ──────────────────────────
  'Pwani':         { slug: '/destinations/zanzibar', name: 'Coast', subtext: 'Bagamoyo · Mafia Island · Coast reserves', packages: 8, heatLevel: 3, fill: '#3d7a52' },
  'Dar es Salaam': { slug: '/destinations/zanzibar', name: 'Dar es Salaam', subtext: 'City hub · Beach resorts · Departure point', packages: 5, heatLevel: 2, fill: '#5a9a72' },
  'Dar Es Salaam': { slug: '/destinations/zanzibar', name: 'Dar es Salaam', subtext: 'City hub · Beach resorts · Departure point', packages: 5, heatLevel: 2, fill: '#5a9a72' },

  // ── Zanzibar archipelago ──────────────────────────────────────
  'Zanzibar Urban/West':    { slug: '/destinations/zanzibar', name: 'Zanzibar – Stone Town', subtext: 'Stone Town · History · Spices', packages: 10, heatLevel: 4, fill: '#2D5A3D' },
  'Zanzibar Central/South': { slug: '/destinations/zanzibar', name: 'Zanzibar South', subtext: 'Jambiani · Paje · Kite surfing', packages: 10, heatLevel: 4, fill: '#2D5A3D' },
  'Zanzibar North':         { slug: '/destinations/zanzibar', name: 'Zanzibar North', subtext: 'Nungwi · Kendwa · Swimming', packages: 8, heatLevel: 4, fill: '#2D5A3D' },
  'Pemba North':            { slug: '/destinations/zanzibar', name: 'Pemba', subtext: 'Pemba Island · Scuba diving', packages: 3, heatLevel: 2, fill: '#5a9a72' },
  'Pemba South':            { slug: '/destinations/zanzibar', name: 'Pemba S', subtext: 'Pemba Island · Scuba diving', packages: 3, heatLevel: 2, fill: '#5a9a72' },

  // ── Ruaha ─────────────────────────────────────────────────────
  'Iringa': { slug: '/destinations/ruaha', name: 'Ruaha', subtext: 'Ruaha NP · Wild dogs · Lion prides', packages: 8, heatLevel: 3, fill: '#3d7a52' },

  // ── Nyerere / Selous ──────────────────────────────────────────
  'Morogoro': { slug: '/destinations/nyerere', name: 'Nyerere', subtext: "Nyerere NP · Boat safaris · Wild dogs", packages: 8, heatLevel: 3, fill: '#3d7a52' },
  'Lindi':    { slug: '/destinations/nyerere', name: 'Lindi', subtext: 'Southern Nyerere · Remote wilderness', packages: 4, heatLevel: 2, fill: '#5a9a72' },

  // ── Mahale / Katavi ───────────────────────────────────────────
  'Kigoma': { slug: '/destinations/mahale', name: 'Mahale', subtext: 'Mahale NP · Chimps · Lake Tanganyika', packages: 4, heatLevel: 2, fill: '#5a9a72' },
  'Katavi':  { slug: '/destinations/mahale', name: 'Katavi', subtext: 'Katavi NP · Hippos · Remote buffalo herds', packages: 3, heatLevel: 2, fill: '#5a9a72' },

  // ── Southern highlands ────────────────────────────────────────
  'Mbeya':   { slug: '/destinations/ruaha', name: 'Mbeya', subtext: 'Southern Highlands · Udzungwa Mts', packages: 3, heatLevel: 1, fill: '#7aaa8a' },
  'Ruvuma':  { slug: '/destinations/nyerere', name: 'Ruvuma', subtext: 'Ruvuma region · Mahenge', packages: 2, heatLevel: 1, fill: '#7aaa8a' },
  'Mtwara':  { slug: '/destinations/nyerere', name: 'Mtwara', subtext: 'Southern coast · Remote', packages: 1, heatLevel: 1, fill: '#8ab89a' },
  'Rukwa':   { slug: '/destinations/mahale', name: 'Rukwa', subtext: 'Lake Rukwa · SW Tanzania', packages: 2, heatLevel: 1, fill: '#8ab89a' },
  'Njombe':  { slug: '#', name: 'Njombe', subtext: 'Southern highlands', packages: 0, heatLevel: 1, fill: '#9dcaad' },
  'Songwe':  { slug: '#', name: 'Songwe', subtext: 'SW Tanzania', packages: 0, heatLevel: 1, fill: '#9dcaad' },

  // ── Non-tourist central ───────────────────────────────────────
  'Tabora':    { slug: '#', name: 'Tabora', subtext: 'Central Tanzania', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Shinyanga': { slug: '#', name: 'Shinyanga', subtext: 'Central-west Tanzania', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Singida':   { slug: '#', name: 'Singida', subtext: 'Central Tanzania', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Dodoma':    { slug: '#', name: 'Dodoma', subtext: 'Capital region', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Geita':     { slug: '#', name: 'Geita', subtext: 'NW Tanzania', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Mwanza':    { slug: '#', name: 'Mwanza', subtext: 'Lake Victoria south shore', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Kagera':    { slug: '#', name: 'Kagera', subtext: 'NW corner · Lake Victoria', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
}

interface Tip { x: number; y: number; zone: Zone }

export default function TanzaniaMap() {
  const router = useRouter()
  const [hovered, setHovered] = useState<string | null>(null)
  const [tip, setTip] = useState<Tip | null>(null)
  const t = useTranslations('destinations')

  const getZone = (name: string): Zone | undefined => ZONE_MAP[name]

  const handleEnter = (e: React.MouseEvent<SVGPathElement>, name: string) => {
    const r = e.currentTarget.ownerSVGElement?.getBoundingClientRect()
    const zone = getZone(name)
    if (r && zone) setTip({ x: e.clientX - r.left, y: e.clientY - r.top, zone })
    setHovered(name)
  }

  const handleMove = (e: React.MouseEvent<SVGPathElement>, name: string) => {
    const r = e.currentTarget.ownerSVGElement?.getBoundingClientRect()
    const zone = getZone(name)
    if (r && zone) setTip({ x: e.clientX - r.left, y: e.clientY - r.top, zone })
  }

  const handleLeave = () => { setHovered(null); setTip(null) }

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [35.0, -6.3], scale: 3200 }}
        width={700}
        height={800}
        style={{ width: '100%', height: 'auto' }}
      >
        {/* All non-hovered regions */}
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter(geo => geo.properties.NAME_1 !== hovered)
              .map(geo => {
                const name = geo.properties.NAME_1 as string
                const zone = getZone(name)
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={zone?.fill ?? '#c8dfc8'}
                    stroke="white"
                    strokeWidth={0.8}
                    style={{ cursor: zone && zone.heatLevel > 1 && zone.slug !== '#' ? 'pointer' : 'default', outline: 'none' }}
                    onMouseEnter={(e) => handleEnter(e as unknown as React.MouseEvent<SVGPathElement>, name)}
                    onMouseMove={(e) => handleMove(e as unknown as React.MouseEvent<SVGPathElement>, name)}
                    onMouseLeave={handleLeave}
                    onClick={() => { if (zone && zone.heatLevel > 1 && zone.slug !== '#') router.push(zone.slug) }}
                  />
                )
              })
          }
        </Geographies>

        {/* Hovered region rendered on top with gold border */}
        {hovered && (
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies
                .filter(geo => geo.properties.NAME_1 === hovered)
                .map(geo => {
                  const name = geo.properties.NAME_1 as string
                  const zone = getZone(name)
                  return (
                    <Geography
                      key={`top-${geo.rsmKey}`}
                      geography={geo}
                      fill={zone?.fill ?? '#c8dfc8'}
                      fillOpacity={1}
                      stroke="#D4A853"
                      strokeWidth={2.5}
                      style={{ cursor: zone && zone.heatLevel > 1 && zone.slug !== '#' ? 'pointer' : 'default', outline: 'none' }}
                      onMouseMove={(e) => handleMove(e as unknown as React.MouseEvent<SVGPathElement>, name)}
                      onMouseLeave={handleLeave}
                      onClick={() => { if (zone && zone.heatLevel > 1 && zone.slug !== '#') router.push(zone.slug) }}
                    />
                  )
                })
            }
          </Geographies>
        )}
      </ComposableMap>

      {tip && (
        <div
          className="absolute z-20 pointer-events-none bg-brand text-white rounded-xl shadow-2xl px-3 py-2.5 min-w-44"
          style={{ left: Math.min(tip.x + 14, 360), top: Math.max(tip.y - 85, 4) }}
        >
          <p className="font-semibold text-sm">{tip.zone.name}</p>
          <p className="text-white/65 text-[10px] mt-0.5 mb-1.5">{tip.zone.subtext}</p>
          <p className="text-gold font-semibold text-[11px]">
            {tip.zone.packages > 0 ? `${tip.zone.packages} ${t('mapPackagesLabel')} · ${'★'.repeat(tip.zone.heatLevel)}` : t('mapBackgroundRegion')}
          </p>
        </div>
      )}

      <div className="mt-3 flex items-center justify-center gap-5 text-xs text-text-muted">
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm inline-block bg-[#b5d9bc]" />{t('mapNonTourist')}</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm inline-block bg-[#3d7a52]" />{t('mapSomeSafaris')}</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm inline-block bg-[#1C3A2A]" />{t('mapTopSafari')}</span>
      </div>
    </div>
  )
}
