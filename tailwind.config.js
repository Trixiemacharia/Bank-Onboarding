export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { navy: '#001447', brand: '#0033A0', sky: '#009DDB', mist: '#F3F6FB', ink: '#0B1633', line: '#DCE3F0' },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: { soft: '0 18px 40px -18px rgba(0,20,71,.35)' },
    },
  },
  plugins: [],
}