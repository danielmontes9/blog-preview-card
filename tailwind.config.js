/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Figtree', 'sans-serif'],
      },
      maxWidth: {
        '88': '22rem'
      }
    },
  },
  plugins: [],
}

