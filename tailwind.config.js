/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    screens: {
      'mobile': {'max': '600px'},
      '_desktop': '600px'
    }
  }
  },
  plugins: [],
}
