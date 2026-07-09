import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface Props {
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  readTime?: string
  readLabel?: string
}

export default function BlogSuggestionCard({
  slug,
  title,
  excerpt,
  category,
  image,
  readTime,
  readLabel = 'Read Article',
}: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group relative flex items-end rounded-2xl overflow-hidden min-h-[260px] sm:min-h-[280px] block"
    >
      {/* Full-bleed background image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 640px) 100vw, 50vw"
      />

      {/* Dark gradient overlay — fades from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-brand/50 to-transparent" />

      {/* Text content — overlaid at bottom */}
      <div className="relative z-10 p-6 w-full">
        <span className="inline-block px-2.5 py-0.5 bg-gold text-brand text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
          {category}
        </span>
        <h3 className="font-bold text-white text-base leading-snug line-clamp-2 mb-2">
          {title}
        </h3>
        <p className="text-white/70 text-xs leading-relaxed line-clamp-2 mb-4">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-white/20">
          {readTime && <span className="text-xs text-white/50">{readTime}</span>}
          <span className="flex items-center gap-1.5 text-white text-xs font-semibold group-hover:text-gold transition-colors ml-auto">
            {readLabel} <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}
