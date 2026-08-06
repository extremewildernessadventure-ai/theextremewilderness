// d3-geo ships no type declarations and no @types package is installed for
// it (the one existing consumer, EastAfricaRegionExplorer.jsx, is untyped
// JS). This is the minimal loose surface this codebase's one TS consumer
// actually calls — intentionally `any`-typed rather than modeling the full
// d3-geo API.
declare module 'd3-geo' {
  export function geoMercator(): {
    fitSize(size: [number, number], object: unknown): unknown
  }
  export function geoPath(projection?: unknown): {
    (object: unknown): string | null
    centroid(object: unknown): [number, number]
  }
}
