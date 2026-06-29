import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import InquiryForm from '@/components/shared/InquiryForm'

export const metadata: Metadata = {
  title: 'Contact & Plan Your Safari | The Extreme Wilderness',
  description:
    'Get in touch with our Tanzania-based safari experts. We respond within 24 hours with a custom itinerary tailored to your dates, budget, and bucket list.',
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
            Plan Your <span className="text-gold">Safari</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Tell us your dream. Our team responds within 24 hours with a custom itinerary — no obligation, just inspiration.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-brand mb-5">Get In Touch</h2>
                <div className="space-y-4">
                  {[
                    { Icon: MapPin, label: 'Our Office', value: 'Arusha, Tanzania\n(Near Arusha Town Centre)' },
                    { Icon: Phone, label: 'Phone / WhatsApp', value: '+255 (0) 767 000 000' },
                    { Icon: Mail, label: 'Email', value: 'info@theextremewilderness.com' },
                    { Icon: Clock, label: 'Response Time', value: 'Within 24 hours\n7 days a week' },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3 bg-white rounded-xl p-4">
                      <div className="w-9 h-9 bg-light-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-brand" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-0.5">{label}</div>
                        <div className="text-sm text-brand font-medium whitespace-pre-line">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand rounded-2xl p-5 text-white">
                <h3 className="font-semibold mb-2">Prefer WhatsApp?</h3>
                <p className="text-white/70 text-sm mb-4">Chat directly with our safari team on WhatsApp for a quick response.</p>
                <a
                  href="https://wa.me/255767000000"
                  className="block w-full text-center py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl text-sm transition-colors"
                >
                  Open WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-brand mb-6">Send Us Your Safari Request</h2>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
