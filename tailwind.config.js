/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        'light': '#f8f9fa',
        'app-color': '#818cf8',
        'green': '#51d88a',
        'green-light': '#46c97c',
        'grey-light': '#dbe4e9',
        'grey-darker': '#596a73',
        'red': '#ef4444',
        'amber': '#f59e0b',
        'lime': '#84cc16',
        'emerald': '#10b981',
        'sky': '#0ea5e9',
        'rose': '#f43f5e',
      },
      backgroundImage: {
        'register-pattern': "url('/src/assets/img/curved14.jpg')",
      }
    },
  },
  plugins: [],
}
