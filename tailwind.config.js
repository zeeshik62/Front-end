/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        'light': '#f8f9fa'
      },
      backgroundImage: {
        'register-pattern': "url('/src/assets/img/curved14.jpg')",
      }
    },
  },
  plugins: [],
}
