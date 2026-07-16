'use client'

import React, { useState, useEffect, useMemo } from "react";
import * as d3 from "d3-geo";
import rewind from "@mapbox/geojson-rewind";
import { Link } from "@/i18n/navigation";
import { REGION_INFO } from "@/data/regionInfo.mjs";
import regionPhotos from "@/data/region-photos.json";

/**
 * East Africa Region Explorer — accurate boundaries version
 * Savannah Modern design system — deep savannah green, terracotta, sandstone, charcoal
 *
 * DATA SOURCE
 * The three geoBoundaries ADM1 files live in /public/geo (not importable as
 * JS modules under Next.js) and are fetched at runtime:
 *
 *   /geo/geoBoundaries-TZA-ADM1_simplified.geojson
 *   /geo/geoBoundaries-KEN-ADM1_simplified.geojson
 *   /geo/geoBoundaries-RWA-ADM1_simplified.geojson
 *
 * Each file is a standard GeoJSON FeatureCollection. geoBoundaries stores the
 * region name in `properties.shapeName` (confirmed against the actual files).
 *
 * These simplified files ship with clockwise exterior rings, which is the
 * opposite of what d3-geo's polygon clipping expects — left as-is, every
 * region renders as a giant rectangle (the "everything outside the shape"
 * region) instead of its actual boundary. `@mapbox/geojson-rewind` corrects
 * the winding before the data is used for projection.
 *
 * LICENSE: geoBoundaries data is CC-BY 4.0, which requires attribution
 * (Runfola et al. 2020, geoboundaries.org). This component doesn't render a
 * credit line — the required attribution must be provided elsewhere on the
 * site (e.g. a credits/legal page) to stay license-compliant.
 */

const PALETTE = {
  green: "#1B4332",
  terracotta: "#D97742",
  sand: "#F4EBD9",
  charcoal: "#211F1D",
  greenSoft: "#2F5D46",
  sandLine: "#E4D4B8",
  // Site-wide design tokens (src/app/globals.css --color-brand / --color-gold) —
  // used for region fills so the map reads as on-brand, not a bespoke palette.
  brandGreen: "#1C3A2A",
  gold: "#D4A853",
};

const COUNTRIES = {
  tanzania: { label: "Tanzania" },
  kenya: { label: "Kenya" },
  rwanda: { label: "Rwanda" },
};

// Fallback copy for standalone use (e.g. outside MapSection, which passes its
// own translated `countryDescriptions` prop pulled from the `home` namespace).
const DEFAULT_COUNTRY_DESCRIPTIONS = {
  tanzania: "Home to the Serengeti, Kilimanjaro, Ngorongoro Crater and Zanzibar — Africa's most complete safari destination.",
  kenya: "Birthplace of the Great Migration and home to the iconic Masai Mara. World-class big cat country.",
  rwanda: "\"Land of a Thousand Hills\" — famous for mountain gorilla trekking, pristine rainforests and warm hospitality.",
};

const GEO_URLS = {
  tanzania: "/geo/geoBoundaries-TZA-ADM1_simplified.geojson",
  kenya: "/geo/geoBoundaries-KEN-ADM1_simplified.geojson",
  rwanda: "/geo/geoBoundaries-RWA-ADM1_simplified.geojson",
};

function getRegionName(feature) {
  const p = feature.properties || {};
  return p.shapeName || p.name || p.NAME_1 || "Unnamed region";
}

function useProjectedPaths(geojson, width, height) {
  return useMemo(() => {
    if (!geojson || !geojson.features) return [];
    const projection = d3.geoMercator().fitSize([width, height], geojson);
    const pathGen = d3.geoPath(projection);
    return geojson.features.map((f) => ({
      id: getRegionName(f),
      d: pathGen(f),
      centroid: pathGen.centroid(f),
      feature: f,
    }));
  }, [geojson, width, height]);
}

function StampCard({ name, text, photoUrl, onClose }) {
  return (
    <div
      style={{
        borderRadius: 4,
        overflow: "hidden",
        minHeight: 340,
        position: "relative",
        background: photoUrl
          ? `${PALETTE.brandGreen} url(${photoUrl}) center / cover no-repeat`
          : PALETTE.brandGreen,
        boxShadow: "3px 3px 0px rgba(27,67,50,0.15)",
        transform: "rotate(-0.6deg)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Scrim: transparent at top so the photo reads, solid dark at the
          bottom where the text sits — keeps text readable regardless of
          how light or dark the photo itself is. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.88) 100%)",
        }}
      />
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: 10,
          right: 12,
          zIndex: 2,
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.4)",
          border: "none",
          fontSize: 16,
          color: "#FFFFFF",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "IBM Plex Mono, monospace",
        }}
      >
        ×
      </button>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: 340,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "20px 22px 22px",
        }}
      >
        <div
          style={{
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: PALETTE.terracotta,
            marginBottom: 6,
          }}
        >
          Field Note
        </div>
        <h3
          style={{
            fontFamily: "'Libre Caslon Text', serif",
            fontSize: 24,
            color: "#FFFFFF",
            margin: "0 0 10px 0",
          }}
        >
          {name}
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: PALETTE.sand, margin: 0 }}>
          {text}
        </p>
      </div>
    </div>
  );
}

function Legend() {
  const items = [
    { color: PALETTE.brandGreen, label: "Flagship destination" },
    { color: PALETTE.gold, label: "Hidden gem" },
  ];
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        marginTop: 14,
        fontFamily: "Inter, sans-serif",
        fontSize: 13,
        color: PALETTE.charcoal,
      }}
    >
      {items.map((item) => (
        <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 3,
              background: item.color,
              border: `1px solid ${PALETTE.green}`,
              display: "inline-block",
            }}
          />
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default function EastAfricaRegionExplorer({
  showHeader = true,
  countryDescriptions = DEFAULT_COUNTRY_DESCRIPTIONS,
} = {}) {
  const [country, setCountry] = useState("tanzania");
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [geoData, setGeoData] = useState({ tanzania: null, kenya: null, rwanda: null });
  const width = 560;
  const height = 560;

  useEffect(() => {
    Promise.all([
      fetch(GEO_URLS.tanzania).then((r) => r.json()),
      fetch(GEO_URLS.kenya).then((r) => r.json()),
      fetch(GEO_URLS.rwanda).then((r) => r.json()),
    ]).then(([tz, ke, rw]) => {
      setGeoData({
        tanzania: rewind(tz, true),
        kenya: rewind(ke, true),
        rwanda: rewind(rw, true),
      });
    });
  }, []);

  const geo = geoData[country];
  const paths = useProjectedPaths(geo, width, height);
  const active = paths.find((p) => p.id === activeId);
  const isLoading = !geoData.tanzania || !geoData.kenya || !geoData.rwanda;

  const handleCountryChange = (key) => {
    setCountry(key);
    setActiveId(null);
    setHoveredId(null);
  };

  if (isLoading) {
    return (
      <div
        style={{
          background: PALETTE.sand,
          padding: 40,
          fontFamily: "Inter, sans-serif",
          color: PALETTE.charcoal,
        }}
      >
        <p>Loading map…</p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: PALETTE.sand,
        minHeight: "100%",
        padding: "40px 24px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        {showHeader && (
          <>
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: PALETTE.terracotta,
                marginBottom: 6,
              }}
            >
              Where to go
            </div>
            <h1
              style={{
                fontFamily: "'Libre Caslon Text', serif",
                fontSize: 38,
                color: PALETTE.green,
                margin: "0 0 24px 0",
              }}
            >
              Explore East Africa by region
            </h1>
          </>
        )}

        <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
          {Object.keys(COUNTRIES).map((key) => (
            <button
              key={key}
              onClick={() => handleCountryChange(key)}
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                border: `1.5px solid ${PALETTE.green}`,
                background: country === key ? PALETTE.green : "transparent",
                color: country === key ? PALETTE.sand : PALETTE.green,
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              {COUNTRIES[key].label}
            </button>
          ))}
        </div>

        <div
          style={{
            border: `1px solid ${PALETTE.sandLine}`,
            borderRadius: 8,
            padding: "18px 20px",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontFamily: "'Libre Caslon Text', serif",
              fontSize: 18,
              color: PALETTE.green,
              marginBottom: 6,
            }}
          >
            {COUNTRIES[country].label}
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: PALETTE.charcoal, margin: 0 }}>
            {countryDescriptions[country]}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 32,
            alignItems: "start",
          }}
        >
          <div
            style={{
              border: `1px solid ${PALETTE.sandLine}`,
              borderRadius: 8,
              padding: 20,
            }}
          >
            <svg
              viewBox={`0 0 ${width} ${height}`}
              style={{ width: "100%", height: "auto", display: "block" }}
            >
              {paths.map((p) => {
                const isActive = p.id === activeId;
                const isHovered = p.id === hoveredId;
                const isSignature = Boolean(REGION_INFO[p.id]?.signature);
                return (
                  <path
                    key={p.id}
                    d={p.d}
                    onClick={() => setActiveId(p.id)}
                    onMouseEnter={() => setHoveredId(p.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    fill={
                      isActive || isHovered
                        ? PALETTE.terracotta
                        : isSignature
                        ? PALETTE.brandGreen
                        : PALETTE.gold
                    }
                    fillOpacity={isActive ? 0.9 : isHovered ? 0.45 : 1}
                    stroke="#FFFFFF"
                    strokeWidth={1}
                    style={{
                      cursor: "pointer",
                      transition: "fill 0.15s ease, fill-opacity 0.15s ease",
                    }}
                  >
                    <title>{p.id}</title>
                  </path>
                );
              })}
            </svg>
            <Legend />
          </div>

          <div>
            {active ? (
              <StampCard
                name={active.id}
                text={REGION_INFO[active.id]?.text}
                photoUrl={regionPhotos[active.id]}
                onClose={() => setActiveId(null)}
              />
            ) : hoveredId ? (
              <div
                style={{
                  border: `1.5px dashed ${PALETTE.terracotta}`,
                  borderRadius: 4,
                  padding: "26px 22px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Libre Caslon Text', serif",
                    fontSize: 22,
                    color: PALETTE.green,
                    margin: "0 0 6px 0",
                  }}
                >
                  {hoveredId}
                </h3>
                <p style={{ color: "#7A6F5D", fontSize: 14, margin: 0 }}>
                  Click to see what it's known for.
                </p>
              </div>
            ) : (
              <div
                style={{
                  border: `1.5px dashed ${PALETTE.sandLine}`,
                  borderRadius: 4,
                  padding: "26px 22px",
                  color: "#7A6F5D",
                  fontSize: 14.5,
                  lineHeight: 1.6,
                }}
              >
                Tap any region on the map to see what it's known for — every
                region, flagship or hidden gem, has a story.
              </div>
            )}

            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              <Link
                href="/destinations"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
              >
                All Destinations
              </Link>
              <Link
                href="/safaris"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
              >
                All Safaris
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
