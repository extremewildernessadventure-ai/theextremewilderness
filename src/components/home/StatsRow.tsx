'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

function useCountUp(target: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])
  return count
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const count = useCountUp(value, 1800, started)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center py-8 px-4">
      <div className="text-4xl lg:text-5xl font-bold text-brand mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-text-muted text-sm font-medium uppercase tracking-wide">{label}</div>
    </div>
  )
}

export default function StatsRow() {
  const t = useTranslations('home')

  const stats = [
    { value: 200, suffix: '+', label: t('safarisDelivered') },
    { value: 5, suffix: '+', label: t('yearsExperience') },
    { value: 20, suffix: '+', label: t('tanzaniaRegions') },
    { value: 98, suffix: '%', label: t('satisfactionRate') },
  ]

  return (
    <section className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
