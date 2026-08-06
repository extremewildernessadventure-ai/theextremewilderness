'use client'

import { useEffect, useMemo, useState } from 'react'
import * as d3 from 'd3-geo'
import rewind from '@mapbox/geojson-rewind'
import { useTranslations } from 'next-intl'

/**
 * Page-specific East Africa context map for /destinations.
 *
 * Deliberately independent of src/components/map/EastAfricaRegionExplorer.jsx
 * (the homepage's single-country region drill-down) — this map instead shows
 * the whole context region in one view, with only Tanzania/Kenya/Rwanda
 * clickable and every neighboring country rendered inert for geographic
 * context. No shared state with the homepage component.
 *
 * DATA SOURCE: public/geo/east-africa-context.geojson — Natural Earth 1:50m
 * "Admin 0 – Countries" (naturalearthdata.com, public domain), filtered to
 * Tanzania/Kenya/Rwanda + Uganda/Burundi/DRC/Zambia/Malawi/Mozambique/
 * Somalia/South Sudan/Ethiopia and simplified per-country with mapshaper
 * (small countries and Tanzania's offshore islands — Zanzibar, Pemba — were
 * simplified in isolation at a gentler ratio than the larger mainland
 * countries; simplifying everything together caused Zanzibar and Rwanda to
 * lose their shape entirely, confirmed while building this data).
 */

type CountryKey = 'tanzania' | 'kenya' | 'rwanda'

interface CountryProps {
  name: string
  iso: string
  country: CountryKey | null
  interactive: boolean
}

// Minimal local shape for the one GeoJSON file this component reads —
// avoids pulling in @types/geojson for a single fetch-and-project use.
interface CountryFeature {
  type: 'Feature'
  properties: CountryProps
  geometry: unknown
}
interface CountryFeatureCollection {
  type: 'FeatureCollection'
  features: CountryFeature[]
}

const GEO_URL = '/geo/east-africa-context.geojson'
const WIDTH = 420
const HEIGHT = 460

function useProjectedPaths(geojson: CountryFeatureCollection | null) {
  return useMemo(() => {
    if (!geojson) return []
    const projection = d3.geoMercator().fitSize([WIDTH, HEIGHT], geojson)
    const pathGen = d3.geoPath(projection)
    return geojson.features.map((f) => ({
      d: pathGen(f) ?? '',
      props: f.properties,
    }))
  }, [geojson])
}

interface EastAfricaMapProps {
  activeCountry: CountryKey
  onCountryClick: (country: CountryKey) => void
  className?: string
}

export default function EastAfricaMap({ activeCountry, onCountryClick, className }: EastAfricaMapProps) {
  const tNav = useTranslations('nav')
  const t = useTranslations('destinationsHub')
  const [geo, setGeo] = useState<CountryFeatureCollection | null>(null)
  const [hovered, setHovered] = useState<CountryKey | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(GEO_URL)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setGeo(rewind(data, true))
      })
    return () => {
      cancelled = true
    }
  }, [])

  const paths = useProjectedPaths(geo)
  const countryLabel: Record<CountryKey, string> = {
    tanzania: tNav('tanzania'),
    kenya: tNav('kenya'),
    rwanda: tNav('rwanda'),
  }

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full h-auto"
        role="img"
        aria-label={t('mapAriaLabel')}
      >
        {paths.map(({ d, props }) => {
          if (!props.interactive) {
            return (
              <path
                key={props.name}
                d={d}
                className="fill-brand/20 stroke-white/40"
                strokeWidth={1}
              />
            )
          }
          const key = props.country as CountryKey
          const isActive = key === activeCountry
          const isHovered = key === hovered
          return (
            <path
              key={props.name}
              d={d}
              onClick={() => onCountryClick(key)}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              className={`cursor-pointer stroke-white transition-colors duration-150 ${
                isActive ? 'fill-brand' : isHovered ? 'fill-gold-dark' : 'fill-gold'
              }`}
              strokeWidth={1.5}
            >
              <title>{countryLabel[key]}</title>
            </path>
          )
        })}
      </svg>
    </div>
  )
}
