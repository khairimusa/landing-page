/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx,html,js,jsx}'],
  theme: {
    container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};
