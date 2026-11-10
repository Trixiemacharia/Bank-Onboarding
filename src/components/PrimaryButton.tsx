import type { ButtonHTMLAttributes } from 'react'
type P = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'solid' | 'ghost' }

export default function PrimaryButton({ variant = 'solid', className = '', ...p }: P) {
  const v = variant === 'solid'
    ? 'bg-brand text-white hover:bg-navy shadow-soft'
    : 'text-brand hover:bg-mist border border-line'
  return (
    <button {...p} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 font-semibold transition active:scale-[.98] disabled:opacity-50 ${v} ${className}`} />
  )
}