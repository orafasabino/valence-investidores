/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        valence: {
          emerald: '#0B2217',
          deep: '#0E2C1E',
          forest: '#173D2C',
          slate: '#354A3F',
          sage: '#D0DDD5',
          gold: '#D4AF57',
          'gold-light': '#EBD59B',
          'gold-dark': '#8C6722',
          cream: '#F8F6F1',
          linen: '#F2EBDC',
          soft: '#E9EEEA'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', '"Inter"', 'sans-serif']
      },
      boxShadow: {
        'luxury': '0 20px 50px rgba(11, 34, 23, 0.25)',
        'gold-glow': '0 0 25px rgba(212, 175, 87, 0.35)',
        'inner-luxury': 'inset 0 2px 10px rgba(212, 175, 87, 0.15)'
      }
    },
  },
  plugins: [],
}
