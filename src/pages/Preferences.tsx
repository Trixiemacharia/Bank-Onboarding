import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Check } from 'lucide-react'
import OnboardingLayout from '../components/OnboardingLayout'
import PrimaryButton from '../components/PrimaryButton'
import { useOnboarding } from '../hooks/useOnboarding'
import { interests, images } from '../data/content'

export default function Preferences() {
  const nav = useNavigate()
  const { prefs, togglePref } = useOnboarding()
  return (
    <OnboardingLayout image={images.preferences} alt="Contactless card payment at a counter" step={3} caption="Choose what matters to you.">
      <h1 className="font-display text-3xl font-bold text-navy sm:text-4xl">What are you here for?</h1>
      <p className="mt-2 text-ink/65">Pick one or more. You can change this later.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {interests.map(({ id, icon: Icon, title, text }) => {
          const on = prefs.includes(id)
          return (
            <button key={id} type="button" aria-pressed={on} onClick={() => togglePref(id)}
              className={`relative rounded-2xl border-2 p-4 text-left transition ${on ? 'border-brand bg-brand text-white shadow-soft' : 'border-line hover:border-sky'} ${id === 'payments' ? 'sm:col-span-2' : ''}`}>
              <Icon size={24} className={on ? 'text-white' : 'text-brand'} />
              <span className="mt-3 block font-display text-lg font-bold">{title}</span>
              <span className={`text-sm ${on ? 'text-white/80' : 'text-ink/60'}`}>{text}</span>
              {on && <Check size={18} className="absolute right-4 top-4" />}
            </button>
          )
        })}
      </div>
      <div className="mt-8 flex justify-between gap-3">
        <PrimaryButton variant="ghost" onClick={() => nav('/details')}><ArrowLeft size={18} /> Back</PrimaryButton>
        <PrimaryButton disabled={!prefs.length} onClick={() => nav('/complete')}>Finish setup</PrimaryButton>
      </div>
    </OnboardingLayout>
  )
}