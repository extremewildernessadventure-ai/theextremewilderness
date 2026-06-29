interface BadgeProps {
  label: string
  variant?: 'gold' | 'green' | 'outline'
  size?: 'sm' | 'md'
}

export default function Badge({ label, variant = 'gold', size = 'sm' }: BadgeProps) {
  const base = 'inline-flex items-center font-semibold uppercase tracking-wider rounded-full'
  const sizes = { sm: 'px-2.5 py-0.5 text-[10px]', md: 'px-3 py-1 text-xs' }
  const variants = {
    gold: 'bg-gold text-brand',
    green: 'bg-brand text-white',
    outline: 'border border-gold text-gold',
  }
  return <span className={`${base} ${sizes[size]} ${variants[variant]}`}>{label}</span>
}
