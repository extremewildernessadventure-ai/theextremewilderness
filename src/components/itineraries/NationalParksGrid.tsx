import Image from 'next/image'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'

interface Park {
  name: string
  desc: string
  image: string
}

interface Props {
  eyebrow: string
  heading: string
  tanzaniaLabel: string
  kenyaLabel: string
  tanzaniaParks: Park[]
  kenyaParks: Park[]
}

function ParkCard({ park }: { park: Park }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
      <Image
        src={park.image}
        alt={park.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 p-4">
        <h4 className="text-white font-bold text-sm leading-tight mb-1">{park.name}</h4>
        <p className="text-white/65 text-xs leading-snug line-clamp-2">{park.desc}</p>
      </div>
    </div>
  )
}

function CountryBlock({ label, parks, accent }: { label: string; parks: Park[]; accent: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className={`w-1 h-8 rounded-full ${accent}`} />
        <h3 className="text-brand font-bold text-xl">{label}</h3>
      </div>
      <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {parks.map((p) => (
          <RevealItem key={p.name}>
            <ParkCard park={p} />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  )
}

export default function NationalParksGrid({
  eyebrow, heading, tanzaniaLabel, kenyaLabel, tanzaniaParks, kenyaParks,
}: Props) {
  return (
    <section className="py-24 bg-light-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="text-center mb-14">
          <span className="text-gold-label font-semibold text-xs uppercase tracking-widest">
            {eyebrow}
          </span>
          <h2 className="text-brand font-semibold text-3xl lg:text-4xl mt-2">
            {heading}
          </h2>
        </Reveal>

        <div className="space-y-14">
          <CountryBlock label={tanzaniaLabel} parks={tanzaniaParks} accent="bg-brand" />
          <CountryBlock label={kenyaLabel} parks={kenyaParks} accent="bg-gold" />
        </div>

      </div>
    </section>
  )
}
