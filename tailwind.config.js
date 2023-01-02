/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'principal-color': '#ffde59',
      'secondary-color': '#000',
      'third-color': '#fa9bdf',
      'secondary-color-opacity': 'rgba(0, 0, 0, 0.9)'
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}
