'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

// GADM admin-1 (counties) for Kenya
const GEO_URL = 'https://geodata.ucdavis.edu/gadm/gadm4.1/json/gadm41_KEN_1.json'

interface Zone {
  slug: string; name: string; subtext: string
  packages: number; heatLevel: 1|2|3|4|5; fill: string
}

// Map Kenya GADM NAME_1 county names → tourism zones
const ZONE_MAP: Record<string, Zone> = {
  // ── Masai Mara ────────────────────────────────────────────────
  'Narok': { slug: '/kenya/masai-mara', name: 'Masai Mara', subtext: 'Great Migration · Big Five · Hot-air Balloons', packages: 14, heatLevel: 5, fill: '#1C3A2A' },

  // ── Amboseli / Kajiado ────────────────────────────────────────
  'Kajiado': { slug: '/kenya/amboseli', name: 'Amboseli', subtext: 'Kilimanjaro views · Elephant herds · Ol Tukai', packages: 8, heatLevel: 4, fill: '#2D5A3D' },

  // ── Samburu / Laikipia / Isiolo ───────────────────────────────
  'Samburu': { slug: '/kenya/samburu', name: 'Samburu', subtext: 'Samburu NR · Rare northern species · Wild dogs', packages: 5, heatLevel: 3, fill: '#3d7a52' },
  'Laikipia': { slug: '/kenya/samburu', name: 'Laikipia', subtext: 'Laikipia Plateau · Ol Pejeta · Rhinos', packages: 5, heatLevel: 3, fill: '#3d7a52' },
  'Isiolo':  { slug: '/kenya/samburu', name: 'Isiolo', subtext: 'Buffalo Springs · Shaba NR', packages: 3, heatLevel: 2, fill: '#5a9a72' },
  'Meru':    { slug: '/kenya/samburu', name: 'Meru', subtext: 'Meru NP · Elsa the lioness', packages: 3, heatLevel: 2, fill: '#5a9a72' },

  // ── Rift Valley / Nakuru ──────────────────────────────────────
  'Nakuru':         { slug: '/kenya', name: 'Lake Nakuru', subtext: 'Lake Nakuru · Flamingos · Rhinos · Hell\'s Gate', packages: 6, heatLevel: 3, fill: '#3d7a52' },
  'Baringo':        { slug: '/kenya', name: 'Lake Baringo', subtext: 'Lake Baringo · Flamingos · Bird watching', packages: 3, heatLevel: 2, fill: '#5a9a72' },
  'Naivasha':       { slug: '/kenya', name: 'Naivasha', subtext: 'Lake Naivasha · Hell\'s Gate NP · Hippos', packages: 4, heatLevel: 2, fill: '#5a9a72' },
  'Nyandarua':      { slug: '/kenya', name: 'Aberdares', subtext: 'Aberdare NP · Tree Top hotels', packages: 3, heatLevel: 2, fill: '#5a9a72' },
  'Nyeri':          { slug: '/kenya', name: 'Mt Kenya', subtext: 'Mt Kenya NP · Aberdares · Treetops', packages: 4, heatLevel: 2, fill: '#5a9a72' },
  'Kirinyaga':      { slug: '/kenya', name: 'Kirinyaga', subtext: 'Mt Kenya eastern slopes', packages: 2, heatLevel: 1, fill: '#7aaa8a' },
  'Elgeyo-Marakwet':{ slug: '/kenya', name: 'Rift Valley', subtext: 'Rift Valley escarpment', packages: 1, heatLevel: 1, fill: '#8ab89a' },

  // ── Nairobi ───────────────────────────────────────────────────
  'Nairobi': { slug: '/kenya', name: 'Nairobi', subtext: 'Nairobi NP · Giraffe Centre · Karen Blixen', packages: 4, heatLevel: 2, fill: '#5a9a72' },
  'Kiambu':  { slug: '/kenya', name: 'Kiambu', subtext: 'Nairobi outskirts · Coffee farms', packages: 2, heatLevel: 1, fill: '#7aaa8a' },

  // ── Tsavo / SE Kenya ─────────────────────────────────────────
  'Taita-Taveta': { slug: '/kenya', name: 'Tsavo West', subtext: 'Tsavo West NP · Mzima Springs · Chyulu Hills', packages: 5, heatLevel: 3, fill: '#3d7a52' },
  'Kitui':        { slug: '/kenya', name: 'Tsavo East', subtext: 'Tsavo East NP · Red elephants · Galana River', packages: 5, heatLevel: 3, fill: '#3d7a52' },
  'Makueni':      { slug: '/kenya', name: 'Makueni', subtext: 'Southern Kenya', packages: 2, heatLevel: 1, fill: '#7aaa8a' },

  // ── Coast ─────────────────────────────────────────────────────
  'Mombasa': { slug: '/kenya', name: 'Mombasa', subtext: 'Mombasa · Fort Jesus · Beach resorts', packages: 5, heatLevel: 2, fill: '#5a9a72' },
  'Kwale':   { slug: '/kenya', name: 'Diani Beach', subtext: 'Diani Beach · Shimba Hills NR · Diving', packages: 4, heatLevel: 2, fill: '#5a9a72' },
  'Kilifi':  { slug: '/kenya', name: 'Malindi', subtext: 'Watamu · Malindi · Arabuko-Sokoke', packages: 4, heatLevel: 2, fill: '#5a9a72' },
  'Lamu':    { slug: '/kenya', name: 'Lamu', subtext: 'Lamu Island · UNESCO heritage · Dhow sailing', packages: 3, heatLevel: 2, fill: '#5a9a72' },
  'Tana River': { slug: '/kenya', name: 'Tana River', subtext: 'Tana River Delta · Primate reserve', packages: 1, heatLevel: 1, fill: '#8ab89a' },

  // ── Northern Kenya (non-tourist) ──────────────────────────────
  'Turkana':  { slug: '#', name: 'Turkana', subtext: 'Lake Turkana · Jade Sea', packages: 1, heatLevel: 1, fill: '#b5d9bc' },
  'Marsabit': { slug: '#', name: 'Marsabit', subtext: 'Marsabit NP · N Kenya desert', packages: 1, heatLevel: 1, fill: '#b5d9bc' },
  'Mandera':  { slug: '#', name: 'Mandera', subtext: 'Far NE Kenya', packages: 0, heatLevel: 1, fill: '#c2e0c9' },
  'Wajir':    { slug: '#', name: 'Wajir', subtext: 'NE Kenya', packages: 0, heatLevel: 1, fill: '#c2e0c9' },
  'Garissa':  { slug: '#', name: 'Garissa', subtext: 'E Kenya', packages: 0, heatLevel: 1, fill: '#c2e0c9' },

  // ── Western Kenya ─────────────────────────────────────────────
  'Kisumu':   { slug: '#', name: 'Kisumu', subtext: 'Lake Victoria shore', packages: 1, heatLevel: 1, fill: '#9dcaad' },
  'Kakamega': { slug: '#', name: 'Kakamega', subtext: 'Kakamega Forest', packages: 1, heatLevel: 1, fill: '#9dcaad' },
  'Migori':   { slug: '#', name: 'Migori', subtext: 'SW Kenya · Lake Victoria', packages: 1, heatLevel: 1, fill: '#9dcaad' },
  'Homa Bay': { slug: '#', name: 'Homa Bay', subtext: 'Lake Victoria', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Siaya':    { slug: '#', name: 'Siaya', subtext: 'W Kenya', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Kisii':    { slug: '#', name: 'Kisii', subtext: 'W Kenya highlands', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Nyamira':  { slug: '#', name: 'Nyamira', subtext: 'W Kenya', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Bomet':    { slug: '#', name: 'Bomet', subtext: 'W Kenya', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Kericho':  { slug: '#', name: 'Kericho', subtext: 'Tea country', packages: 1, heatLevel: 1, fill: '#9dcaad' },
  'Nandi':    { slug: '#', name: 'Nandi', subtext: 'Rift Valley', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Uasin Gishu': { slug: '#', name: 'Eldoret', subtext: 'Highland farming', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Trans Nzoia': { slug: '#', name: 'Trans Nzoia', subtext: 'Mt Elgon area', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Bungoma':  { slug: '#', name: 'Bungoma', subtext: 'W Kenya', packages: 0, heatLevel: 1, fill: '#c2e0c9' },
  'Busia':    { slug: '#', name: 'Busia', subtext: 'Uganda border', packages: 0, heatLevel: 1, fill: '#c2e0c9' },
  'Vihiga':   { slug: '#', name: 'Vihiga', subtext: 'W Kenya', packages: 0, heatLevel: 1, fill: '#c2e0c9' },
  'West Pokot': { slug: '#', name: 'W Pokot', subtext: 'NW Kenya', packages: 0, heatLevel: 1, fill: '#c2e0c9' },
  'Machakos': { slug: '#', name: 'Machakos', subtext: 'SE Kenya', packages: 1, heatLevel: 1, fill: '#b5d9bc' },
  'Muranga':  { slug: '#', name: "Murang'a", subtext: 'Central Kenya', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  "Murang'a": { slug: '#', name: "Murang'a", subtext: 'Central Kenya', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Embu':     { slug: '#', name: 'Embu', subtext: 'Mt Kenya foothills', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
  'Tharaka-Nithi': { slug: '#', name: 'Tharaka', subtext: 'E Kenya', packages: 0, heatLevel: 1, fill: '#b5d9bc' },
}

interface Tip { x: number; y: number; zone: Zone }

export default function KenyaMap() {
  const router = useRouter()
  const [hovered, setHovered] = useState<string | null>(null)
  const [tip, setTip] = useState<Tip | null>(null)
  const t = useTranslations('destinations')

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
    <div className="relative w-full max-w-lg mx-auto select-none">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [38.0, 0.2], scale: 3500 }}
        width={570}
        height={650}
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
                    fill={zone?.fill ?? '#c8dfc8'} stroke="white" strokeWidth={0.6}
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
                      stroke="#D4A853" strokeWidth={2}
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
          style={{ left: Math.min(tip.x + 14, 310), top: Math.max(tip.y - 85, 4) }}>
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
