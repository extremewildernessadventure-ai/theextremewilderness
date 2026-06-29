declare module 'react-simple-maps' {
  import type { ComponentProps, MouseEventHandler, ReactNode } from 'react'

  export interface ProjectionConfig {
    center?: [number, number]
    scale?: number
    rotate?: [number, number, number]
    parallels?: [number, number]
  }

  export interface ComposableMapProps {
    projection?: string
    projectionConfig?: ProjectionConfig
    width?: number
    height?: number
    style?: React.CSSProperties
    children?: ReactNode
  }

  export function ComposableMap(props: ComposableMapProps): JSX.Element

  export interface GeographiesProps {
    geography: string | object
    children: (props: { geographies: GeographyFeature[]; projection: unknown }) => ReactNode
  }

  export interface GeographyFeature {
    rsmKey: string
    id?: string | number
    type: string
    geometry: object
    properties: Record<string, unknown>
  }

  export interface GeographyProps {
    geography: GeographyFeature | object
    fill?: string
    fillOpacity?: number
    stroke?: string
    strokeWidth?: number
    style?: React.CSSProperties
    onMouseEnter?: MouseEventHandler<SVGPathElement>
    onMouseMove?: MouseEventHandler<SVGPathElement>
    onMouseLeave?: MouseEventHandler<SVGPathElement>
    onClick?: MouseEventHandler<SVGPathElement>
  }

  export function Geographies(props: GeographiesProps): JSX.Element
  export function Geography(props: GeographyProps): JSX.Element

  export interface MarkerProps {
    coordinates: [number, number]
    children?: ReactNode
    style?: React.CSSProperties
  }

  export function Marker(props: MarkerProps): JSX.Element

  export interface AnnotationProps {
    subject: [number, number]
    dx?: number
    dy?: number
    children?: ReactNode
  }

  export function Annotation(props: AnnotationProps): JSX.Element

  export interface ZoomableGroupProps {
    center?: [number, number]
    zoom?: number
    children?: ReactNode
    onMoveEnd?: (position: { coordinates: [number, number]; zoom: number }) => void
  }

  export function ZoomableGroup(props: ZoomableGroupProps): JSX.Element
}
