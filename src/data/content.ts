import { ShieldCheck, Smartphone, LineChart, Wallet, PiggyBank, TrendingUp, Briefcase, CreditCard, User, type LucideIcon } from 'lucide-react'
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`

// SmartImage falls back to a brand gradient if one fails to load.
export const images = {
  welcome: u('photo-1531545514256-b1400bc00f31'),
  features: u('photo-1573164713988-8665fc963095'),
  details: u('photo-1507152832244-10d45c7eda57'),
  preferences: u('photo-1556742049-0cfed4f6a45d'),
  complete: u('photo-1560250097-0b93528c311a'),
}

export const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Smartphone, title: 'Bank from anywhere', text: 'Open, pay and manage accounts from your phone, in Nairobi or abroad.' },
  { icon: Wallet, title: 'Money that stays organised', text: 'Move between accounts and track every shilling without paperwork.' },
  { icon: ShieldCheck, title: 'Protected by default', text: 'Biometric sign-in and instant alerts on every transaction.' },
  { icon: LineChart, title: 'Insight as it happens', text: 'See where your money goes this month and what you can save.' },
]

export const countries = ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Ghana', 'Nigeria', 'South Africa', 'Zambia', 'Other']

export const interests: { id: string; icon: LucideIcon; title: string; text: string }[] = [
  { id: 'personal', icon: User, title: 'Personal banking', text: 'Everyday accounts and cards' },
  { id: 'savings', icon: PiggyBank, title: 'Savings', text: 'Goals and fixed deposits' },
  { id: 'investments', icon: TrendingUp, title: 'Investments', text: 'Grow your wealth' },
  { id: 'business', icon: Briefcase, title: 'Business banking', text: 'Tools for your company' },
  { id: 'payments', icon: CreditCard, title: 'Digital payments', text: 'Pay and get paid instantly' },
]