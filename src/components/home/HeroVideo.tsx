'use client'

import { useEffect, useRef } from 'react'

// The poster <Image> in HeroSection is the real LCP element. Rendering
// <source> tags in the initial HTML makes the browser's preload scanner
// fetch the ~1MB+ video immediately (autoplay overrides preload="none" in
// most browsers), competing for bandwidth with the fonts/CSS/JS that gate
// text paint. Sources are attached lazily instead, and only on viewports
// wide enough that this is a desktop pointer — on mobile the ~1MB+ decode
// and network transfer directly inflates Total Blocking Time even when
// deferred to idle, so mobile just keeps the static poster.
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (!window.matchMedia('(min-width: 768px)').matches) return

    const load = () => {
      const webm = document.createElement('source')
      webm.src = '/Video/hero.webm'
      webm.type = 'video/webm'
      const mp4 = document.createElement('source')
      mp4.src = '/Video/hero.mp4'
      mp4.type = 'video/mp4'
      video.appendChild(webm)
      video.appendChild(mp4)
      video.load()
      video.play().catch(() => {})
    }

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(load, { timeout: 3000 })
      return () => window.cancelIdleCallback(id)
    }
    const id = setTimeout(load, 1500)
    return () => clearTimeout(id)
  }, [])

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none"
      className="absolute inset-0 w-full h-full object-cover"
      aria-hidden
    />
  )
}
