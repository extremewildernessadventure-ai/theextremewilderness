import { MapPin, Users, Star, Shield } from 'lucide-react'

const reasons = [
  {
    Icon: MapPin,
    title: 'Born in Tanzania',
    description:
      'We are not a foreign agency reselling packages. We live here, we know every trail, every guide, and every hidden camp in Tanzania.',
  },
  {
    Icon: Users,
    title: 'Tailor-Made Only',
    description:
      'No group tours, no cookie-cutter itineraries. Every safari is built around you — your dates, your budget, and your dream.',
  },
  {
    Icon: Star,
    title: 'Expert Local Guides',
    description:
      'TANAPA-certified guides with 10+ years in the field. Born in the wilderness, fluent in wildlife and culture.',
  },
  {
    Icon: Shield,
    title: 'End-to-End Care',
    description:
      'From airport pickup to final drop-off, we handle every detail. 24/7 support throughout your entire journey.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-3">
            Why Travel With Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand mb-4">
            The Extreme Wilderness Difference
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            We are Tanzania. Not an agency abroad selling Africa — a team of local experts who call the wilderness home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl border border-gray-100 hover:border-brand hover:shadow-lg transition-all duration-200 bg-white"
            >
              <div className="w-12 h-12 bg-light-green rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand transition-colors">
                <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-brand text-lg mb-2">{title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
