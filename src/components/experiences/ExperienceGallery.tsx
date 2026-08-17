'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { ExperienceGalleryImage } from '@/data/experiencePages/types'
import { useFocusTrap } from '@/hooks/useFocusTrap'

interface Props {
  images: ExperienceGalleryImage[]
  labels: {
    close: string
    prev: string
    next: string
  }
  /** 'featured' (default): 4-col grid with a large 2x2 first tile. 'portrait': uniform 3:4 tiles — suits phone photos. */
  variant?: 'featured' | 'portrait'
}

export default function ExperienceGallery({ images, labels, variant = 'featured' }: Props) {
  const [current, setCurrent] = useState<number | null>(null)

  const close = useCallback(() => setCurrent(null), [])
  const prev = useCallback(
    () => setCurrent((c) => (c === null ? c : (c + images.length - 1) % images.length)),
    [images.length]
  )
  const next = useCallback(
    () => setCurrent((c) => (c === null ? c : (c + 1) % images.length)),
    [images.length]
  )

  useEffect(() => {
    if (current === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [current, prev, next])

  const lightboxRef = useFocusTrap<HTMLDivElement>(current !== null, close)

  return (
    <>
      {/* ── Tile grid ── */}
      <div
        className={
          variant === 'portrait'
            ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5'
            : 'grid grid-cols-2 md:grid-cols-4 gap-2.5 auto-rows-[120px] md:auto-rows-[140px]'
        }
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setCurrent(i)}
            className={`relative rounded-xl overflow-hidden group cursor-zoom-in ${
              variant === 'portrait' ? 'aspect-[3/4]' : i === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes={
                variant === 'portrait'
                  ? '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
                  : i === 0
                    ? '(max-width: 768px) 100vw, 450px'
                    : '(max-width: 768px) 50vw, 225px'
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
            <span className="absolute inset-x-3 bottom-2.5 text-white text-xs font-semibold text-start opacity-0 group-hover:opacity-100 transition-opacity z-10">
              {img.alt}
            </span>
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {current !== null && (
        <div
          ref={lightboxRef}
          tabIndex={-1}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={images[current].alt}
        >
          <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-sm" onClick={close} aria-hidden="true" />

          <button
            type="button"
            onClick={close}
            aria-label={labels.close}
            className="absolute top-4 end-4 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <button
            type="button"
            onClick={prev}
            aria-label={labels.prev}
            className="absolute start-2 sm:start-6 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white rtl:rotate-180" />
          </button>

          <figure className="relative z-20 w-[92vw] max-w-5xl">
            <div className="relative w-full h-[62vh] sm:h-[72vh]">
              <Image
                src={images[current].src}
                alt={images[current].alt}
                fill
                className="object-contain"
                sizes="92vw"
                priority
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-white/85">
              <span className="text-sm font-medium">{images[current].alt}</span>
              <span className="text-xs text-white/50 tabular-nums flex-shrink-0">
                {current + 1} / {images.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={next}
            aria-label={labels.next}
            className="absolute end-2 sm:end-6 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white rtl:rotate-180" />
          </button>
        </div>
      )}
    </>
  )
}
