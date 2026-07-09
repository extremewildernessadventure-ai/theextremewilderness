import Image from 'next/image'

interface Props {
  images: string[]      // exactly 5 URLs
  altPrefix: string     // e.g. "Machame Route Kilimanjaro"
}

export default function RouteImageGallery({ images, altPrefix }: Props) {
  if (!images || images.length < 5) return null
  const [main, ...rest] = images

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 rounded-2xl overflow-hidden h-72 sm:h-80">
      {/* Left: large hero image */}
      <div className="col-span-1 sm:col-span-1 relative overflow-hidden rounded-xl">
        <Image
          src={main}
          alt={`${altPrefix} — view 1`}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 33vw, 25vw"
        />
      </div>

      {/* Right: 2×2 grid */}
      <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3">
        {rest.map((src, i) => (
          <div key={i} className="relative overflow-hidden rounded-xl">
            <Image
              src={src}
              alt={`${altPrefix} — view ${i + 2}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 33vw, 20vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
