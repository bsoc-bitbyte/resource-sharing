/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        "mobile-sm": {
          max: '400px',
        },
        mobile: {
          max: '531px',
        },
        'anti-mobile': {
          min: '531px',
          max: '640px',
        },
        'max-sm': {
          max: '640px',
        },
        'max-md': {
          max: '768px',
        },
        'max-lg': {
          max: '1024px',
        },
        'max-xl': {
          'max': '1280px'
        },
        'max-2xl': {
          'max': '1536px'
        },
        'anti-ham': {
          'min': '500px'
        },
        'hero-section-sm': {
          'max': '670px',
        },
        'hero-section': {
          'min': '670px',
          'max': '800px',
        },
        'hero-section-lg': {
          'min': '800px',
          'max': '960px',
        },
      }
    },
  },

  plugins: [],
}
