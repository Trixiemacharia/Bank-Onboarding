import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import OnboardingLayout from '../components/OnboardingLayout'
import FormInput from '../components/FormInput'
import PrimaryButton from '../components/PrimaryButton'
import { useOnboarding, type Details } from '../hooks/useOnboarding'
import { countries, images } from '../data/content'

const validate = (d: Details) => {
  const e: Partial<Details> = {}
  if (d.name.trim().split(/\s+/).length < 2) e.name = 'Enter your first and last name.'
  if (!/^\S+@\S+\.\S+$/.test(d.email)) e.email = 'Enter a valid email, like name@example.com.'
  if (!/^\+?[0-9\s]{9,15}$/.test(d.phone)) e.phone = 'Enter 9 to 15 digits, for example +254 712 345 678.'
  if (!d.country) e.country = 'Choose your country of residence.'
  return e
}

export default function PersonalDetails() {
  const nav = useNavigate()
  const { details, setDetails } = useOnboarding()
  const [errors, setErrors] = useState<Partial<Details>>({})

  const set = (k: keyof Details) => (v: string) => {
    setDetails({ ...details, [k]: v })
    if (errors[k]) setErrors({ ...errors, [k]: undefined })
  }

  const submit = (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate(details)
    setErrors(e)
    if (!Object.keys(e).length) nav('/preferences')
  }

  return (
    <OnboardingLayout image={images.details} alt="A man using his phone outdoors in the city" step={2} caption="Tell us who you are.">
      <h1 className="font-display text-3xl font-bold text-navy sm:text-4xl">Your details</h1>
      <p className="mt-2 text-ink/65">We only use this to personalise your demo.</p>
      <form onSubmit={submit} noValidate className="mt-6 space-y-4">
        <FormInput id="name" label="Full name" autoComplete="name" value={details.name} onChange={e => set('name')(e.target.value)} error={errors.name} />
        <FormInput id="email" label="Email address" type="email" autoComplete="email" value={details.email} onChange={e => set('email')(e.target.value)} error={errors.email} />
        <FormInput id="phone" label="Phone number" type="tel" autoComplete="tel" value={details.phone} onChange={e => set('phone')(e.target.value)} error={errors.phone} />
        <div>
          <label htmlFor="country" className="mb-1.5 block text-sm font-medium">Country of residence</label>
          <select id="country" value={details.country} onChange={e => set('country')(e.target.value)} aria-invalid={!!errors.country}
            className={`min-h-12 w-full rounded-xl border bg-white px-4 ${errors.country ? 'border-red-500' : 'border-line'}`}>
            <option value="">Select a country</option>
            {countries.map(c => <option key={c}>{c}</option>)}
          </select>
          {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
        </div>
        <div className="flex justify-between gap-3 pt-4">
          <PrimaryButton type="button" variant="ghost" onClick={() => nav('/features')}><ArrowLeft size={18} /> Back</PrimaryButton>
          <PrimaryButton type="submit">Continue <ArrowRight size={18} /></PrimaryButton>
        </div>
      </form>
    </OnboardingLayout>
  )
}