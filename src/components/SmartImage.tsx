import { useState } from 'react'

export default function SmartImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [bad, setBad] = useState(false)
  if (bad) return <div role="img" aria-label={alt} className={`bg-gradient-to-br from-brand via-navy to-sky/60 ${className}`} />
  return <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={`object-cover ${className}`} />
}