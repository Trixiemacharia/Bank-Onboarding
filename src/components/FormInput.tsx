import type { InputHTMLAttributes } from 'react'
type P = InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; id: string }

export default function FormInput({ label, error, id, ...p }: P) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      <input id={id} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined} {...p}
        className={`min-h-12 w-full rounded-xl border bg-white px-4 transition focus:border-brand ${error ? 'border-red-500' : 'border-line'}`} />
      {error && <p id={`${id}-e`} className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}