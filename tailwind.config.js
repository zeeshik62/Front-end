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
        'grey-darker': '#596a73'
      },
      backgroundImage: {
        'register-pattern': "url('/src/assets/img/curved14.jpg')",
      }
    },
  },
  plugins: [],
}
