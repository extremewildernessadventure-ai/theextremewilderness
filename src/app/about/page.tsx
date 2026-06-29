import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Star, Users, Award } from 'lucide-react'
import InquiryForm from '@/components/shared/InquiryForm'

export const metadata: Metadata = {
  title: 'About The Extreme Wilderness | Tanzania-Born Safari Company',
  description:
    "We are Tanzania. Not an agency selling Africa from abroad — a team of local experts born in the wilderness. Meet the team behind East Africa's best safari experience.",
}

const team = [
  {
    name: 'Samuel Mwangi',
    role: 'Lead Safari Guide & Co-Founder',
    image: 'https://placehold.co/200x200/1C3A2A/D4A853?text=SM',
    bio: 'Born in Arusha, Samuel has 18 years guiding in the Serengeti and Ngorongoro. TANAPA certified, speaks 4 languages.',
  },
  {
    name: 'Grace Kimaro',
    role: 'Operations Director',
    image: 'https://placehold.co/200x200/2D5A3D/D4A853?text=GK',
    bio: 'Grace ensures every safari runs flawlessly — from the first enquiry to your final airport drop-off.',
  },
  {
    name: 'David Olerai',
    role: 'Senior Wildlife Guide',
    image: 'https://placehold.co/200x200/1C3A2A/D4A853?text=DO',
    bio: 'Maasai-born, Ol\' David knows the Northern Circuit like the back of his hand. Big cat specialist.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-4">Our Story</span>
            <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-5">
              We Are <span className="text-gold">Tanzania</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              The Extreme Wilderness was founded by Tanzanian guides who were tired of watching foreign operators sell Africa from offices in London and Cape Town. We decided to do it properly — from Arusha, in the shadow of Kilimanjaro, where we were born.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { Icon: Star, value: '4.9/5', label: 'TripAdvisor Rating', sub: '800+ reviews' },
              { Icon: Users, value: '1,200+', label: 'Happy Travellers', sub: 'Since 2009' },
              { Icon: MapPin, value: '10', label: 'Tanzania Regions', sub: 'Every park covered' },
              { Icon: Award, value: 'TATO', label: 'Certified Member', sub: 'Tanzania operators assoc.' },
            ].map(({ Icon, value, label, sub }) => (
              <div key={label}>
                <Icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand">{value}</div>
                <div className="font-medium text-sm text-brand">{label}</div>
                <div className="text-text-muted text-xs mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-light-green" id="why-us">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-text-muted">
          <h2 className="text-2xl font-semibold text-brand not-prose mb-4">Why Choose a Local Operator?</h2>
          <p>
            When you book with a foreign safari company, your money flows out of Africa. When you book with The Extreme Wilderness, it stays here — paying our guides fairly, supporting local communities, and funding conservation.
          </p>
          <p>
            But beyond the ethics, it's about quality. Our guides grew up tracking wildlife. They know which waterhole the leopard visits every morning, which hill gives the best sunrise view over the Serengeti, and which camp chef makes the best nyama choma in the Northern Circuit.
          </p>
          <p>
            You can't buy that knowledge from a brochure. You only get it by being born here.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white" id="guides">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-brand">Meet the Team</h2>
            <p className="text-text-muted mt-2">Born in Tanzania. Passionate about wildlife. Ready to share it with you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gold">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-brand">{member.name}</h3>
                <p className="text-gold text-xs font-medium mb-2">{member.role}</p>
                <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-brand">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Ready to Plan Your Safari?</h2>
          <p className="text-white/70 mb-8">Get in touch — we'll design your perfect East Africa adventure in 24 hours.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
