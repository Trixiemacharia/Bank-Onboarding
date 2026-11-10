import { createContext, useContext, useState, type ReactNode } from 'react'

export type Details = { name: string; email: string; phone: string; country: string }
type Ctx = {
  details: Details
  setDetails: (d: Details) => void
  prefs: string[]
  togglePref: (id: string) => void
  reset: () => void
}

const empty: Details = { name: '', email: '', phone: '', country: '' }
const C = createContext<Ctx | null>(null)

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [details, setDetails] = useState<Details>(empty)
  const [prefs, setPrefs] = useState<string[]>([])
  const togglePref = (id: string) =>
    setPrefs(p => (p.includes(id) ? p.filter(x => x !== id) : [...p, id]))
  const reset = () => { setDetails(empty); setPrefs([]) }
  return <C.Provider value={{ details, setDetails, prefs, togglePref, reset }}>{children}</C.Provider>
}

export const useOnboarding = () => {
  const c = useContext(C)
  if (!c) throw new Error('useOnboarding must be used inside OnboardingProvider')
  return c
}