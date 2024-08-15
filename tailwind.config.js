/** @type {import('tailwindcss').Config} */
export default {
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
    },
  },
  plugins: [],
}

