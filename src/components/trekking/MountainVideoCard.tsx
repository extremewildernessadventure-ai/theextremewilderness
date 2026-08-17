'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

interface Props {
  src: string
  poster: string
  label: string
  /** Native aspect of the clip so portrait phone footage isn't cropped. */
  orientation: 'landscape' | 'portrait'
}

export default function MountainVideoCard({ src, poster, label, orientation }: Props) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const start = () => {
    setPlaying(true)
    // play() after state flip; the element exists on next tick
    requestAnimationFrame(() => videoRef.current?.play().catch(() => {}))
  }

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-brand-dark ${
        orientation === 'portrait' ? 'aspect-[9/16] max-h-[480px] mx-auto w-full' : 'aspect-video w-full'
      }`}
    >
      {playing ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-contain bg-black"
        />
      ) : (
        <button type="button" onClick={start} aria-label={label} className="absolute inset-0 group cursor-pointer">
          <Image src={poster} alt={label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          <span className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" aria-hidden />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-gold text-brand flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 ml-1" fill="currentColor" />
            </span>
          </span>
          <span className="absolute inset-x-4 bottom-3 text-white text-sm font-semibold text-start">{label}</span>
        </button>
      )}
    </div>
  )
}
