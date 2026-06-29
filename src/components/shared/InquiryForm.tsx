'use client'

import { useState } from 'react'
import { Send, Check } from 'lucide-react'

interface InquiryFormProps {
  destination?: string
}

export default function InquiryForm({ destination }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: destination ?? '',
    dates: '',
    travelers: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: send via API route
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
        <div className="w-14 h-14 bg-light-green rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 text-brand" />
        </div>
        <h3 className="text-xl font-semibold text-brand mb-2">Message Received!</h3>
        <p className="text-text-muted text-sm">
          Thank you, {form.name}. Our safari experts will be in touch within 24 hours with a custom itinerary.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Your Name *
          </label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Email Address *
          </label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (xxx) xxx-xxxx"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Destination
          </label>
          <select
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand"
          >
            <option value="">Choose destination</option>
            {['Tanzania — Serengeti', 'Tanzania — Ngorongoro', 'Tanzania — Tarangire', 'Zanzibar Beach', 'Kilimanjaro Trek', 'Kenya — Masai Mara', 'Rwanda — Gorillas', 'Custom / Not Sure'].map(
              (d) => <option key={d}>{d}</option>
            )}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Travel Dates
          </label>
          <input
            name="dates"
            value={form.dates}
            onChange={handleChange}
            placeholder="e.g. July 10–20, 2025"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Number of Travelers
          </label>
          <input
            name="travelers"
            value={form.travelers}
            onChange={handleChange}
            placeholder="e.g. 2 adults, 1 child"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
          Tell Us Your Dream Safari
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Budget, special requests, what you'd love to see or do..."
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-brand hover:bg-brand-secondary text-white font-bold rounded-xl transition-colors"
      >
        <Send className="w-4 h-4" />
        Send My Inquiry
      </button>

      <p className="text-center text-xs text-text-muted">
        We respond within 24 hours. No spam, ever.
      </p>
    </form>
  )
}
