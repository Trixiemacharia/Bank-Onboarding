import { Navigate, Route, Routes } from 'react-router-dom'
import { OnboardingProvider } from './hooks/useOnboarding'
import Welcome from './pages/Welcome'
import Features from './pages/Features'
import PersonalDetails from './pages/PersonalDetails'
import Preferences from './pages/Preferences'
import Completion from './pages/Completion'

export default function App() {
  return (
    <OnboardingProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/features" element={<Features />} />
        <Route path="/details" element={<PersonalDetails />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/complete" element={<Completion />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </OnboardingProvider>
  )
}