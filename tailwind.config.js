/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
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
          'max  ': '1280px'
        },
        'max-2xl': {
          'max  ': '1536px'
        },
      },
    },
  },
  plugins: [],
})
