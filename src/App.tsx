import OnboardingLayout from './components/OnboardingLayout'
import PrimaryButton from './components/PrimaryButton'
import FormInput from './components/FormInput'

export default function App() {
  return (
    <OnboardingLayout
      image="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1400&q=80"
      alt="A young African professional working on a laptop"
      step={2}
      caption="Layout test"
    >
      <h1 className="font-display text-3xl font-bold text-navy">Shared components</h1>
      <div className="mt-6 space-y-4">
        <FormInput id="t" label="Sample input" error="Sample error message" />
        <PrimaryButton>Primary</PrimaryButton>
      </div>
    </OnboardingLayout>
  )
}