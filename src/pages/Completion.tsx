import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import OnboardingLayout from '../components/OnboardingLayout'
import PrimaryButton from '../components/PrimaryButton'
import { useOnboarding } from '../hooks/useOnboarding'
import { images, interests } from '../data/content'

export default function Completion() {
  const nav = useNavigate()
  const returning = (useLocation().state as { returning?: boolean } | null)?.returning
  const { details, prefs, reset } = useOnboarding()
  const [demo, setDemo] = useState(false)
  const first = details.name.trim().split(/\s+/)[0]

  return (
    <OnboardingLayout image={images.complete} alt="A confident entrepreneur in a modern office" step={returning ? undefined : 4} caption="Your journey starts here.">
      <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', delay: 0.2 }}
        className="mb-6 grid h-16 w-16 place-items-center rounded-full bg-sky text-white shadow-soft">
        <Check size={32} strokeWidth={3} />
      </motion.div>
      <h1 className="font-display text-3xl font-bold text-navy sm:text-4xl">
        {returning ? 'Welcome back' : `Welcome${first ? `, ${first}` : ''}`}.
      </h1>
      <p className="mt-3 max-w-md text-ink/70">
        {returning ? 'Your demo dashboard is ready.' : 'Your digital banking profile is set up. This is a demo, so no account was created.'}
      </p>
      {!returning && prefs.length > 0 && (
        <p className="mt-3 text-sm text-ink/60">Interests: {interests.filter(i => prefs.includes(i.id)).map(i => i.title).join(', ')}</p>
      )}
      {demo && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 rounded-2xl bg-navy p-6 text-white shadow-soft">
          <p className="text-sm text-white/70">Available balance (mock data)</p>
          <p className="mt-1 font-display text-4xl font-bold">KES 128,450.00</p>
          <p className="mt-4 text-sm text-white/70">Last activity: Salary credit, +KES 85,000</p>
        </motion.div>
      )}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {!demo
          ? <PrimaryButton onClick={() => setDemo(true)}>Explore the dashboard <ArrowRight size={18} /></PrimaryButton>
          : <PrimaryButton onClick={() => { reset(); nav('/') }}>Restart demo</PrimaryButton>}
      </div>
    </OnboardingLayout>
  )
}