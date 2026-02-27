import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#464196',
        'primary-light': '#B9B9FF',
        'primary-dark': '#09094C',
        accent: '#D946EF',
        orange: '#FF8C42',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
