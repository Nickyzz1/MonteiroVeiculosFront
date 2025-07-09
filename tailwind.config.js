/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#E7E8EC',
        foreground: '#171717',
        blueCustom: '#316EBA',
        green1: '#20FF2F',
        green2: '#00D70E',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        viga : ['var(--viga), sans-serif']
      },
    },
  },
  plugins: [],
};
