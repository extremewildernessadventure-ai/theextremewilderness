import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    slug: 'great-migration-guide',
    title: 'The Complete Guide to the Great Wildebeest Migration',
    excerpt:
      "Every year, 1.5 million wildebeest cross the Serengeti in one of nature's greatest spectacles. Here's everything you need to know to witness it.",
    date: 'June 12, 2025',
    readTime: '15 min read',
    category: 'Wildlife',
    image: '/images/gallery/serengeti (1).png',
  },
  {
    slug: 'kilimanjaro-climbing-guide',
    title: 'How to Climb Kilimanjaro: Routes, Cost & Everything You Need to Know',
    excerpt:
      "Africa's highest peak doesn't require technical climbing skills — but it demands preparation. Here's the complete 2025 guide to every route and what to expect.",
    date: 'May 10, 2025',
    readTime: '14 min read',
    category: 'Trekking',
    image: '/images/gallery/kilimanjaro (1).png',
  },
  {
    slug: 'zanzibar-travel-guide',
    title: 'Zanzibar Travel Guide: Beaches, Stone Town & Safari Combos',
    excerpt:
      "White coral sand, turquoise Indian Ocean water, ancient Swahili culture — Zanzibar is the perfect final chapter to any Tanzania safari.",
    date: 'March 30, 2025',
    readTime: '13 min read',
    category: 'Planning',
    image: '/images/gallery/zanzibar.png',
  },
]

export default function BlogPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading row */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
              From the Bush
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-brand">
              Stories, Tips &amp; Wildlife Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-secondary transition-colors"
          >
            All articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-gold text-brand text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-brand text-base mb-2 leading-snug group-hover:text-brand-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-gold group-hover:underline">
                    Read more &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "view all" link */}
        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
