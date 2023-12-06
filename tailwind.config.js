/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Literata'],
        sans: ['"General Sans"']
      },
      colors: {
        primary: '#0CBABA', // light cyan-ish
        secondary: '#093737' // dark cyan-ish
      }
    },
  },
  plugins: [],
}