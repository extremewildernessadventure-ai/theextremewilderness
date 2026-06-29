'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, Minus, Plus } from 'lucide-react'

const tabs = ['Wildlife Safari', 'Kilimanjaro Trek', 'Beach & Safari', 'Custom Trip']

const destinations = ['Tanzania', 'Kenya', 'Rwanda', 'Surprise me!']
const durations = ['3–4 nights', '5–7 nights', '8–10 nights', '10+ nights']
const routes = ['Machame Route (7 days)', 'Lemosho Route (8 days)', 'Marangu Route (6 days)', 'Rongai Route (7 days)', 'Northern Circuit (9 days)']
const beachDests = ['Zanzibar', 'Pemba Island', 'Mafia Island']

const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-brand bg-white'
const labelCls = 'block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5'

function TravelerStepper({ label, value, onChange, min = 0 }: { label: string; value: number; onChange: (v: number) => void; min?: number }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-sm text-gray-600">{label}</span>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))}
          className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand hover:text-brand transition-colors">
          <Minus className="w-3 h-3" />
        </button>
        <span className="w-4 text-center font-semibold text-sm text-brand">{value}</span>
        <button type="button" onClick={() => onChange(value + 1)}
          className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand hover:text-brand transition-colors">
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  )
}

export default function BookingWidget() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(0)
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [route, setRoute] = useState('')
  const [beach, setBeach] = useState('')
  const [customName, setCustomName] = useState('')
  const [customEmail, setCustomEmail] = useState('')
  const [customMsg, setCustomMsg] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (activeTab === 0) {
      const params = new URLSearchParams()
      if (destination) params.set('destination', destination.toLowerCase())
      if (duration) params.set('duration', duration)
      if (adults) params.set('adults', String(adults))
      router.push(`/safaris?${params}`)
    } else if (activeTab === 1) {
      router.push('/trekking/kilimanjaro')
    } else if (activeTab === 2) {
      router.push('/safaris?type=combination')
    } else {
      router.push('/contact')
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full">
      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        {tabs.map((tab, i) => (
          <button key={tab} onClick={() => setActiveTab(i)}
            className={`flex-1 py-3.5 text-xs font-semibold transition-colors border-b-2 ${
              activeTab === i ? 'border-gold text-brand bg-light-green' : 'border-transparent text-gray-400 hover:text-brand'
            }`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Form body — fixed height so it stays square */}
      <form onSubmit={handleSearch} className="p-5 flex flex-col gap-4" style={{ minHeight: 260 }}>

        {/* Wildlife Safari — 2×2 grid */}
        {activeTab === 0 && (
          <div className="grid grid-cols-2 gap-4 flex-1">
            <div>
              <label className={labelCls}>Destination</label>
              <select value={destination} onChange={(e) => setDestination(e.target.value)} className={inputCls}>
                <option value="">Any destination</option>
                {destinations.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Travel Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                min={new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0]}
                className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Duration</label>
              <select value={duration} onChange={(e) => setDuration(e.target.value)} className={inputCls}>
                <option value="">Any length</option>
                {durations.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Travelers</label>
              <div className="border border-gray-200 rounded-lg px-3 py-1.5 space-y-1">
                <TravelerStepper label="Adults" value={adults} onChange={setAdults} min={1} />
                <div className="border-t border-gray-100" />
                <TravelerStepper label="Children" value={children} onChange={setChildren} />
              </div>
            </div>
          </div>
        )}

        {/* Kilimanjaro Trek — 2×2 grid */}
        {activeTab === 1 && (
          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="col-span-2">
              <label className={labelCls}>Route</label>
              <select value={route} onChange={(e) => setRoute(e.target.value)} className={inputCls}>
                <option value="">Choose route</option>
                {routes.map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Start Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Climbers</label>
              <div className="border border-gray-200 rounded-lg px-3 py-1.5">
                <TravelerStepper label="Climbers" value={adults} onChange={setAdults} min={1} />
              </div>
            </div>
          </div>
        )}

        {/* Beach & Safari — 2×2 grid */}
        {activeTab === 2 && (
          <div className="grid grid-cols-2 gap-4 flex-1">
            <div>
              <label className={labelCls}>Safari Region</label>
              <select value={destination} onChange={(e) => setDestination(e.target.value)} className={inputCls}>
                <option value="">Choose region</option>
                {destinations.slice(0, 3).map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Beach</label>
              <select value={beach} onChange={(e) => setBeach(e.target.value)} className={inputCls}>
                <option value="">Choose beach</option>
                {beachDests.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Travel Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Travelers</label>
              <div className="border border-gray-200 rounded-lg px-3 py-1.5 space-y-1">
                <TravelerStepper label="Adults" value={adults} onChange={setAdults} min={1} />
                <div className="border-t border-gray-100" />
                <TravelerStepper label="Children" value={children} onChange={setChildren} />
              </div>
            </div>
          </div>
        )}

        {/* Custom Trip — name/email row + large textarea */}
        {activeTab === 3 && (
          <div className="flex flex-col gap-4 flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Your Name</label>
                <input type="text" value={customName} onChange={(e) => setCustomName(e.target.value)}
                  placeholder="Full name" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Email</label>
                <input type="email" value={customEmail} onChange={(e) => setCustomEmail(e.target.value)}
                  placeholder="your@email.com" className={inputCls} />
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <label className={labelCls}>Your Dream Safari</label>
              <textarea
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Tell us where you want to go, what wildlife you want to see, your budget, travel dates, and any special requests..."
                className="flex-1 w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-brand resize-none"
                rows={5}
              />
            </div>
          </div>
        )}

        {/* Submit */}
        <div className="flex justify-end pt-1">
          <button type="submit"
            className="flex items-center gap-2 px-7 py-3 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm">
            <Search className="w-4 h-4" />
            {activeTab === 3 ? 'Send My Request' : 'Search Safaris'}
          </button>
        </div>
      </form>
    </div>
  )
}
