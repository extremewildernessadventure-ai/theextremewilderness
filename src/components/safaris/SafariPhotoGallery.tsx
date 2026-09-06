'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Camera, Maximize2 } from 'lucide-react'

export interface SafariPhotoGalleryLabels {
  heading: string
  counter: string // "Photo [n] of [total]" -- [n]/[total] interpolated
  closeTooltip: string
  expandGallery: string // "Expand Gallery ([n])" -- [n] interpolated
  morePhotos: string // "+[n] More Photos" -- [n] interpolated
}

interface Props {
  gallery: { src: string; alt: string }[]
  labels: SafariPhotoGalleryLabels
  // e.g. "Tanzania" -- shown as a pill on the main photo's top-right corner,
  // matching the prototype's "{country} • {circuit} Circuit" badge (the
  // "Circuit" half has no real equivalent in this app's data, so this is
  // just the resolved country name(s)).
  locationLabel?: string
}

// Matches the prototype's "Hero Photo Gallery Showcase": one large active
// photo + up to 3 supporting photos in a side column (the last one carrying
// a "+N more" overlay once there are more photos than fit), a mobile
// thumbnail strip, and a full lightbox with its own bottom thumbnail strip.
// This gallery is the page's visual centerpiece -- there is no separate
// hero banner above it.
export default function SafariPhotoGallery({ gallery, labels, locationLabel }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const supportingPhotos = useMemo(
    () => gallery.map((img, idx) => ({ img, idx })).filter((item) => item.idx !== activeIndex),
    [gallery, activeIndex]
  )

  const goPrevMain = useCallback(() => {
    setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length)
  }, [gallery.length])
  const goNextMain = useCallback(() => {
    setActiveIndex((i) => (i + 1) % gallery.length)
  }, [gallery.length])

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
    <div aria-label={labels.heading}>
      <div className={`grid grid-cols-1 md:grid-cols-12 gap-3 h-auto ${supportingPhotos.length > 0 ? 'md:h-[450px] lg:h-[480px]' : ''}`}>
        {/* Main large photo */}
        <div
          className={`h-[320px] sm:h-[420px] md:h-full relative rounded-2xl overflow-hidden border border-gray-100 group bg-brand shadow-sm ${
            supportingPhotos.length > 0 ? 'md:col-span-8 lg:col-span-9' : 'md:col-span-12'
          }`}
        >
          <button type="button" onClick={() => setLightboxIndex(activeIndex)} className="absolute inset-0 w-full h-full cursor-pointer">
            <Image
              src={gallery[activeIndex].src}
              alt={gallery[activeIndex].alt}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-101"
              sizes="(max-width: 768px) 100vw, 75vw"
            />
          </button>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

          <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/15 shadow-sm">
              <Camera className="w-3.5 h-3.5 text-gold" />
              {labels.counter.replace('[n]', String(activeIndex + 1)).replace('[total]', String(gallery.length))}
            </span>
          </div>

          {locationLabel && (
            <div className="absolute top-3.5 right-3.5 pointer-events-none hidden sm:flex items-center gap-2 z-10">
              <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-brand text-xs font-semibold tracking-wide border border-white/20 shadow-sm">
                {locationLabel}
              </span>
            </div>
          )}

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goPrevMain() }}
                aria-label="Previous photograph"
                className="absolute start-3.5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100 shadow-lg border border-white/20"
              >
                <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goNextMain() }}
                aria-label="Next photograph"
                className="absolute end-3.5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100 shadow-lg border border-white/20"
              >
                <ChevronRight className="w-5 h-5 rtl:rotate-180" />
              </button>
            </>
          )}

          <div className="absolute bottom-3.5 end-3.5 z-10">
            <button
              type="button"
              onClick={() => setLightboxIndex(activeIndex)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/70 hover:bg-black/90 text-white text-xs font-semibold backdrop-blur-md transition-all border border-white/20 shadow-md"
            >
              <Maximize2 className="w-3.5 h-3.5 text-gold" />
              <span>{labels.expandGallery.replace('[n]', String(gallery.length))}</span>
            </button>
          </div>
        </div>

        {/* Side supporting photos */}
        {supportingPhotos.length > 0 && (
          <div
            className="hidden md:grid md:col-span-4 lg:col-span-3 h-full gap-2.5"
            style={{ gridTemplateRows: `repeat(${Math.min(supportingPhotos.length, 3)}, minmax(0, 1fr))` }}
          >
            {supportingPhotos.slice(0, 3).map((item, idx) => {
              const isLast = idx === 2
              const remainingCount = supportingPhotos.length - 3
              const hasMore = isLast && remainingCount > 0

              return (
                <button
                  key={item.img.src}
                  type="button"
                  onClick={() => (hasMore ? setLightboxIndex(activeIndex) : setActiveIndex(item.idx))}
                  className="relative w-full h-full min-h-0 rounded-2xl overflow-hidden border border-gray-100 hover:border-brand transition-all group bg-brand shadow-xs block text-left"
                >
                  <Image
                    src={item.img.src}
                    alt={item.img.alt}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="22vw"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />

                  {hasMore && (
                    <div className="absolute inset-0 bg-black/65 backdrop-blur-xs flex flex-col items-center justify-center text-white gap-1 p-2 text-center">
                      <Camera className="w-5 h-5 text-gold" />
                      <span className="text-xs font-bold">{labels.morePhotos.replace('[n]', String(remainingCount + 1))}</span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Mobile thumbnail strip */}
      {gallery.length > 1 && (
        <div className="md:hidden flex items-center gap-2 overflow-x-auto pt-2.5 pb-1">
          {gallery.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                activeIndex === idx ? 'border-brand ring-2 ring-gold' : 'border-gray-100 opacity-75'
              }`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}

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
