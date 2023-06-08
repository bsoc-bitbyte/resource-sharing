/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
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
          'max': '1280px'
        },
        'max-2xl': {
          'max': '1536px'
        },
      },
      colors: {
      'main': '#e002a2',
      'second': '#47019d',
      'three': '#e00256',
      'black': '#212121',
      'white': '#ffffff',
      'gray': '#808080e2',
      'blue':'#5F4DFF',
      'tblue':'#1DA1F2',
      'tyellow':'#FCF300'
       }
    },
  },
 
  plugins: [],
})