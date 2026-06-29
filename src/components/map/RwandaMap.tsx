'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

// GADM admin-1 (provinces) for Rwanda
const GEO_URL = 'https://geodata.ucdavis.edu/gadm/gadm4.1/json/gadm41_RWA_1.json'

interface Zone {
  slug: string; name: string; subtext: string
  packages: number; heatLevel: 1|2|3|4|5; fill: string
}

// Map Rwanda GADM NAME_1 province names → tourism zones
// Rwanda has 5 provinces. GADM may use English or French names.
const ZONE_MAP: Record<string, Zone> = {
  // ── Northern Province → Volcanoes NP ──────────────────────────
  'Northern':        { slug: '/rwanda/volcanoes', name: 'Volcanoes NP', subtext: 'Mountain Gorillas · Golden Monkeys · Dian Fossey', packages: 12, heatLevel: 5, fill: '#1C3A2A' },
  'Province du Nord':{ slug: '/rwanda/volcanoes', name: 'Volcanoes NP', subtext: 'Mountain Gorillas · Golden Monkeys · Dian Fossey', packages: 12, heatLevel: 5, fill: '#1C3A2A' },
  'Amajyaruguru':    { slug: '/rwanda/volcanoes', name: 'Volcanoes NP', subtext: 'Mountain Gorillas · Golden Monkeys · Dian Fossey', packages: 12, heatLevel: 5, fill: '#1C3A2A' },

  // ── Western Province → Nyungwe Forest & Lake Kivu ─────────────
  'Western':          { slug: '/rwanda/nyungwe', name: 'Nyungwe & Lake Kivu', subtext: 'Nyungwe Forest · Chimpanzees · Lake Kivu · Canopy Walk', packages: 6, heatLevel: 4, fill: '#2D5A3D' },
  "Province de l'Ouest": { slug: '/rwanda/nyungwe', name: 'Nyungwe & Lake Kivu', subtext: 'Nyungwe Forest · Chimpanzees · Lake Kivu · Canopy Walk', packages: 6, heatLevel: 4, fill: '#2D5A3D' },
  'Iburengerazuba':   { slug: '/rwanda/nyungwe', name: 'Nyungwe & Lake Kivu', subtext: 'Nyungwe Forest · Chimpanzees · Lake Kivu · Canopy Walk', packages: 6, heatLevel: 4, fill: '#2D5A3D' },

  // ── Eastern Province → Akagera NP ────────────────────────────
  'Eastern':         { slug: '/rwanda/akagera', name: 'Akagera NP', subtext: 'Big Five · Lake Ihema · Hippos · Open savanna', packages: 5, heatLevel: 3, fill: '#3d7a52' },
  "Province de l'Est": { slug: '/rwanda/akagera', name: 'Akagera NP', subtext: 'Big Five · Lake Ihema · Hippos · Open savanna', packages: 5, heatLevel: 3, fill: '#3d7a52' },
  'Iburasirazuba':   { slug: '/rwanda/akagera', name: 'Akagera NP', subtext: 'Big Five · Lake Ihema · Hippos · Open savanna', packages: 5, heatLevel: 3, fill: '#3d7a52' },

  // ── Kigali City ───────────────────────────────────────────────
  'Kigali':           { slug: '/rwanda/kigali', name: 'Kigali', subtext: 'Capital City · Genocide Memorial · Culture & Cuisine', packages: 3, heatLevel: 2, fill: '#5a9a72' },
  'City of Kigali':   { slug: '/rwanda/kigali', name: 'Kigali', subtext: 'Capital City · Genocide Memorial · Culture & Cuisine', packages: 3, heatLevel: 2, fill: '#5a9a72' },
  'Ville de Kigali':  { slug: '/rwanda/kigali', name: 'Kigali', subtext: 'Capital City · Genocide Memorial · Culture & Cuisine', packages: 3, heatLevel: 2, fill: '#5a9a72' },

  // ── Southern Province ─────────────────────────────────────────
  'Southern':         { slug: '#', name: 'Southern Rwanda', subtext: 'Huye · Butare Museum · Cultural villages', packages: 2, heatLevel: 1, fill: '#8ab89a' },
  'Province du Sud':  { slug: '#', name: 'Southern Rwanda', subtext: 'Huye · Butare Museum · Cultural villages', packages: 2, heatLevel: 1, fill: '#8ab89a' },
  'Amajyepfo':        { slug: '#', name: 'Southern Rwanda', subtext: 'Huye · Butare Museum · Cultural villages', packages: 2, heatLevel: 1, fill: '#8ab89a' },
}

interface Tip { x: number; y: number; zone: Zone }

export default function RwandaMap() {
  const router = useRouter()
  const [hovered, setHovered] = useState<string | null>(null)
  const [tip, setTip] = useState<Tip | null>(null)

  const getZone = (name: string) => ZONE_MAP[name]

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

  return (
    <div className="relative w-full max-w-md mx-auto select-none">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [29.9, -1.95], scale: 18000 }}
        width={400}
        height={360}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter(geo => geo.properties.NAME_1 !== hovered)
              .map(geo => {
                const name = geo.properties.NAME_1 as string
                const zone = getZone(name)
                return (
                  <Geography
                    key={geo.rsmKey} geography={geo}
                    fill={zone?.fill ?? '#c8dfc8'} stroke="white" strokeWidth={0.8}
                    style={{ cursor: zone && zone.heatLevel > 1 && zone.slug !== '#' ? 'pointer' : 'default', outline: 'none' }}
                    onMouseEnter={(e) => handleEnter(e as unknown as React.MouseEvent<SVGPathElement>, name)}
                    onMouseMove={(e) => handleMove(e as unknown as React.MouseEvent<SVGPathElement>, name)}
                    onMouseLeave={() => { setHovered(null); setTip(null) }}
                    onClick={() => { if (zone && zone.heatLevel > 1 && zone.slug !== '#') router.push(zone.slug) }}
                  />
                )
              })
          }
        </Geographies>

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
                      key={`top-${geo.rsmKey}`} geography={geo}
                      fill={zone?.fill ?? '#c8dfc8'} fillOpacity={1}
                      stroke="#D4A853" strokeWidth={2.5}
                      style={{ cursor: zone && zone.heatLevel > 1 && zone.slug !== '#' ? 'pointer' : 'default', outline: 'none' }}
                      onMouseMove={(e) => handleMove(e as unknown as React.MouseEvent<SVGPathElement>, name)}
                      onMouseLeave={() => { setHovered(null); setTip(null) }}
                      onClick={() => { if (zone && zone.heatLevel > 1 && zone.slug !== '#') router.push(zone.slug) }}
                    />
                  )
                })
            }
          </Geographies>
        )}
      </ComposableMap>

      {tip && (
        <div className="absolute z-20 pointer-events-none bg-brand text-white rounded-xl shadow-2xl px-3 py-2.5 min-w-44"
          style={{ left: Math.min(tip.x + 14, 240), top: Math.max(tip.y - 85, 4) }}>
          <p className="font-semibold text-sm">{tip.zone.name}</p>
          <p className="text-white/65 text-[10px] mt-0.5 mb-1.5">{tip.zone.subtext}</p>
          <p className="text-gold font-semibold text-[11px]">
            {tip.zone.packages > 0 ? `${tip.zone.packages} packages · ${'★'.repeat(tip.zone.heatLevel)}` : 'Cultural region'}
          </p>
        </div>
      )}

      <div className="mt-3 flex items-center justify-center gap-5 text-xs text-text-muted">
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm inline-block bg-[#8ab89a]" />Low activity</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm inline-block bg-[#3d7a52]" />Some safaris</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm inline-block bg-[#1C3A2A]" />Top safari</span>
      </div>
    </div>
  )
}
