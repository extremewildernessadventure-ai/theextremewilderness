'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'

export interface SafariPhotoGalleryLabels {
  heading: string
  counter: string // "Photo [n] of [total]" -- [n]/[total] interpolated
  closeTooltip: string
}

interface Props {
  gallery: { src: string; alt: string }[]
  labels: SafariPhotoGalleryLabels
}

export default function SafariPhotoGallery({ gallery, labels }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length))
  }, [gallery.length])
  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % gallery.length))
  }, [gallery.length])
  const close = useCallback(() => setLightboxIndex(null), [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, close, goPrev, goNext])

  if (gallery.length === 0) return null

  return (
    <div>
      <h2 className="text-xl font-semibold text-brand mb-4">{labels.heading}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {gallery.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-light-green group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col select-none"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-4" onClick={(e) => e.stopPropagation()}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium">
              <Camera className="w-3.5 h-3.5" />
              {labels.counter.replace('[n]', String(lightboxIndex + 1)).replace('[total]', String(gallery.length))}
            </span>
            <button type="button" onClick={close} title={labels.closeTooltip} aria-label={labels.closeTooltip} className="text-white/80 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center relative px-4" onClick={(e) => e.stopPropagation()}>
            {gallery.length > 1 && (
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous"
                className="absolute start-2 sm:start-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
              </button>
            )}
            <div className="relative w-full max-w-4xl h-[60vh] sm:h-[72vh]">
              <Image
                src={gallery[lightboxIndex].src}
                alt={gallery[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            {gallery.length > 1 && (
              <button
                type="button"
                onClick={goNext}
                aria-label="Next"
                className="absolute end-2 sm:end-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <ChevronRight className="w-5 h-5 rtl:rotate-180" />
              </button>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto px-4 sm:px-6 py-4" onClick={(e) => e.stopPropagation()}>
            {gallery.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className={`relative shrink-0 w-16 h-12 rounded-md overflow-hidden transition-all ${
                  i === lightboxIndex ? 'ring-2 ring-gold scale-105' : 'opacity-50 hover:opacity-80'
                }`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
