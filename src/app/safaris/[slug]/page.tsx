import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, Check, X, ChevronDown } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import InquiryForm from '@/components/shared/InquiryForm'
import { packages } from '@/data/packages'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pkg = packages.find((p) => p.slug === slug)
  if (!pkg) return {}
  return {
    title: `${pkg.name} | Tanzania Safari`,
    description: `${pkg.name} — ${pkg.duration} nights starting from $${pkg.priceFrom.toLocaleString()}/person. ${pkg.highlights[0]}.`,
  }
}

export default async function SafariPackagePage({ params }: Props) {
  const { slug } = await params
  const pkg = packages.find((p) => p.slug === slug)
  if (!pkg) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-80 bg-brand flex items-end">
        <Image src={pkg.heroImage} alt={pkg.name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/safaris" className="hover:text-white">Safaris</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{pkg.name}</span>
          </nav>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              {pkg.badge && (
                <div className="mb-2">
                  <Badge label={pkg.badge === 'bestseller' ? 'Bestseller' : pkg.badge === 'new' ? 'New' : 'Popular'} />
                </div>
              )}
              <h1 className="text-3xl lg:text-4xl font-semibold text-white">{pkg.name}</h1>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center border border-white/20">
              <div className="text-white/70 text-xs uppercase tracking-wide">From</div>
              <div className="text-white font-bold text-2xl">${pkg.priceFrom.toLocaleString()}</div>
              <div className="text-white/60 text-xs">per person</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Quick info */}
            <div className="flex flex-wrap gap-5 text-sm">
              <div className="flex items-center gap-2 text-text-muted">
                <Clock className="w-4 h-4 text-gold" />
                <span><strong className="text-brand">{pkg.duration} nights</strong> duration</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Users className="w-4 h-4 text-gold" />
                <span>Groups of <strong className="text-brand">{pkg.groupSize.min}–{pkg.groupSize.max}</strong></span>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-semibold text-brand mb-4">Package Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
                    <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            {pkg.itinerary.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-brand mb-5">Day-by-Day Itinerary</h2>
                <div className="space-y-3">
                  {pkg.itinerary.map((day) => (
                    <details key={day.day} className="group border border-gray-100 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-light-green transition-colors list-none">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {day.day}
                          </span>
                          <span className="font-medium text-brand text-sm">{day.title}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
                        <p className="text-sm text-text-muted leading-relaxed mb-3">{day.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-text-muted">
                          <span>{day.accommodation}</span>
                          <span>{day.meals}</span>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Included / Excluded */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> Included
                </h3>
                <ul className="space-y-1.5">
                  {pkg.included.map((item) => (
                    <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-brand mb-3 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> Not Included
                </h3>
                <ul className="space-y-1.5">
                  {pkg.excluded.map((item) => (
                    <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar — inquiry form */}
          <div>
            <div className="sticky top-24">
              <div className="bg-light-green rounded-2xl p-4 mb-4 text-center">
                <div className="text-2xl font-bold text-brand">${pkg.priceFrom.toLocaleString()}</div>
                <div className="text-text-muted text-xs">per person · {pkg.duration} nights</div>
              </div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
