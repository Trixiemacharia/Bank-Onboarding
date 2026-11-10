import { Link } from 'react-router-dom'

export default function Navbar({ light = false }: { light?: boolean }) {
  return (
    <header className="flex items-center justify-between">
      <Link to="/" aria-label="Stanbic Bank home"
        className={`flex items-center gap-2 font-display text-xl font-bold ${light ? 'text-white' : 'text-brand'}`}>
        <span className={`grid h-8 w-8 place-items-center rounded-lg text-sm ${light ? 'bg-white text-brand' : 'bg-brand text-white'}`}>S</span>
        Stanbic Bank
      </Link>
      <Link to="/" className={`text-sm font-medium underline-offset-4 hover:underline ${light ? 'text-white/90' : 'text-ink/70'}`}>Start over</Link>
    </header>
  )
}