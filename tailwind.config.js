/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      amber: colors.amber,
      emerald: colors.emerald,
    }
  },
    screens:{
      'xs': '640px',
    }
  },
  plugins: [],
}