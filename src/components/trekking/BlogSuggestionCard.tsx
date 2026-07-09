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
      className="group flex flex-col sm:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand/20 transition-all"
    >
      {/* Image */}
      <div className="relative sm:w-40 h-44 sm:h-auto flex-shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, 160px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-5 flex-1 min-w-0">
        <div>
          <span className="inline-block px-2.5 py-0.5 bg-gold/10 text-gold-label text-[10px] font-bold uppercase tracking-wider rounded-full mb-2">
            {category}
          </span>
          <h3 className="font-bold text-brand text-sm leading-snug line-clamp-2 mb-2">
            {title}
          </h3>
          <p className="text-text-muted text-xs leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          {readTime && <span className="text-xs text-text-muted">{readTime}</span>}
          <span className="flex items-center gap-1 text-brand text-xs font-semibold group-hover:text-gold transition-colors ml-auto">
            {readLabel} <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}
