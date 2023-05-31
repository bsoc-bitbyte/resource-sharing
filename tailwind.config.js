/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'mobile': {
          'max': '500px'
        },
        'anti-mobile': {
          'min': '500px',
          'max': '640px'
        },
        'max-sm': {
          'max': '640px'
        },
        'max-md': {
          'max': '768px'
        },
        'max-lg': {
          'max': '1024px'
        },
        'max-xl': {
          'max': '1280px'
        },
        'max-2xl': {
          'max': '1536px'
        },
      }
    },
  },
  plugins: [],
})