import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts, categories } from '@/data/blog/index'

export const metadata: Metadata = {
  title: 'Safari Blog | Tanzania & East Africa Travel Guides | The Extreme Wilderness',
  description: 'Expert Tanzania safari guides, Kilimanjaro tips, and wildlife articles from our local team in Arusha.',
}

export default function BlogPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <>
      <section className="pt-28 pb-12 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
            Safari <span className="text-gold">Journal</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Expert guides, wildlife insights, and travel inspiration from our team on the ground in Tanzania.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  cat === 'All' ? 'bg-brand text-white border-brand' : 'border-gray-200 text-text-muted hover:border-brand hover:text-brand bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <Link href={`/blog/${featured.slug}`} className="group block mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-60 lg:h-auto min-h-[280px]">
                <Image src={featured.heroImage} alt={featured.heroImageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">{featured.category} &middot; Featured</span>
                <h2 className="text-2xl font-semibold text-brand mb-3 group-hover:text-brand-secondary transition-colors">{featured.title}</h2>
                <p className="text-text-muted text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5">
                <div className="relative h-44">
                  <Image src={post.heroImage} alt={post.heroImageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-5">
                  <span className="text-gold text-[10px] font-semibold uppercase tracking-widest">{post.category}</span>
                  <h3 className="font-semibold text-brand text-sm mt-1 mb-2 leading-snug group-hover:text-brand-secondary transition-colors">{post.title}</h3>
                  <p className="text-text-muted text-xs leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 text-brand font-semibold">Read <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
