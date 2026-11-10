import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import OnboardingLayout from '../components/OnboardingLayout'
import PrimaryButton from '../components/PrimaryButton'
import { images } from '../data/content'

function PaymentChip() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{ opacity: { delay: 0.8, duration: 0.5 }, y: { delay: 0.8, duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
      className="absolute right-6 top-1/3 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-soft sm:flex lg:right-12"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-sky text-white"><Check size={18} strokeWidth={3} /></span>
      <div>
        <p className="text-xs text-ink/60">Payment received</p>
        <p className="font-display font-bold text-navy">KES 12,500</p>
      </div>
    </motion.div>
  )
}

export default function Welcome() {
  const nav = useNavigate()
  return (
    <OnboardingLayout
      image={images.welcome}
      alt="A young African professional working on a laptop"
      caption="Built for people who are building something."
      overlay={<PaymentChip />}
    >
      <h1 className="font-display text-4xl font-bold leading-[1.05] text-navy sm:text-5xl">
        Banking that keeps up with you.
      </h1>
      <p className="mt-5 max-w-md text-lg text-ink/70">
        Open your digital banking profile in a few minutes. Set it up once, then manage your money from anywhere.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <PrimaryButton onClick={() => nav('/features')}>Get Started <ArrowRight size={18} /></PrimaryButton>
        <PrimaryButton variant="ghost" onClick={() => nav('/complete', { state: { returning: true } })}>
          I already have an account
        </PrimaryButton>
      </div>
      <p className="mt-8 text-sm text-ink/50">Demo prototype. No real account is created.</p>
    </OnboardingLayout>
  )
}