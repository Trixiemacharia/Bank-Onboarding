import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import ProgressIndicator from './ProgressIndicator'
import SmartImage from './SmartImage'

type P = { image: string; alt: string; step?: number; total?: number; caption?: string; children: ReactNode }

export default function OnboardingLayout({ image, alt, step, total = 4, caption, children }: P) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
      <aside className="relative h-52 overflow-hidden bg-navy sm:h-72 lg:sticky lg:top-0 lg:h-screen">
        <SmartImage src={image} alt={alt} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-navy/40" />
        <div className="relative flex h-full flex-col justify-between p-5 sm:p-8 lg:p-12">
          <Navbar light />
          {caption && <p className="max-w-md font-display text-xl leading-snug text-white sm:text-2xl lg:text-3xl">{caption}</p>}
        </div>
      </aside>
      <main className="flex flex-col justify-center px-5 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-xl">
          {step && <div className="mb-8"><ProgressIndicator step={step} total={total} /></div>}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  )
}