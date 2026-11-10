import type { LucideIcon } from 'lucide-react'

export default function FeatureCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <li className="group flex gap-4 border-b border-line py-5 last:border-0">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-brand transition group-hover:bg-brand group-hover:text-white">
        <Icon size={22} />
      </span>
      <div>
        <h3 className="font-display text-lg font-bold">{title}</h3>
        <p className="mt-1 text-ink/65">{text}</p>
      </div>
    </li>
  )
}