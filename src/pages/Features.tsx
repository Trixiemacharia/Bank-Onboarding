import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import OnboardingLayout from '../components/OnboardingLayout'
import FeatureCard from '../components/FeatureCard'
import PrimaryButton from '../components/PrimaryButton'
import { features, images } from '../data/content'

export default function Features() {
  const nav = useNavigate()
  return (
    <OnboardingLayout image={images.features} alt="A business owner smiling at a desk" step={1} caption="Everything you need, in your pocket.">
      <h1 className="font-display text-3xl font-bold text-navy sm:text-4xl">What you get with Stanbic digital banking</h1>
      <ul className="mt-6">{features.map(f => <FeatureCard key={f.title} {...f} />)}</ul>
      <div className="mt-8 flex justify-between gap-3">
        <PrimaryButton variant="ghost" onClick={() => nav('/')}><ArrowLeft size={18} /> Back</PrimaryButton>
        <PrimaryButton onClick={() => nav('/details')}>Continue <ArrowRight size={18} /></PrimaryButton>
      </div>
    </OnboardingLayout>
  )
}