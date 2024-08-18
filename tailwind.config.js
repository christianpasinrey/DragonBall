/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.vue"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'db-gradient': 'linear-gradient(45deg, #E08116, #E0B616, #E09D16, #E05116, #E6D530, #E18968)',
      },
      backgroundColor: {
        'db-orange': '#E08116',
        'db-yellow': '#E0B616',
        'db-gold': '#E09D16',
        'db-red': '#E05116',
        'db-green': '#E6D530',
        'db-pink': '#E18968',
      },
      fontFamily: {
        'saiyan': ['Saiyan Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

