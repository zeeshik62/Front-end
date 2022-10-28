/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        'light': '#f8f9fa',
        'app-color': '#818cf8'
      },
      backgroundImage: {
        'register-pattern': "url('/src/assets/img/curved14.jpg')",
      }
    },
  },
  plugins: [],
}
