// @mapbox/geojson-rewind ships no type declarations and no @types package
// exists for it — this is the minimal shape this codebase actually calls.
declare module '@mapbox/geojson-rewind' {
  function rewind<T>(gj: T, outer?: boolean): T
  export default rewind
}
