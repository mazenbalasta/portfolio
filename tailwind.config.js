/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      screens: {
        'xsm': '400px',
      },
    },
  },
  plugins: [],
}
