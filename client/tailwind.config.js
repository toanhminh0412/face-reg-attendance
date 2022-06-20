/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '25%': '25%',
        '35%': '35%'
      }, 
      boxShadow: {
        '0 -10px -15px -3px rgb(0 0 0 / 0.1), 0 -4px -6px -4px rgb(0 0 0 / 0.1)': '0 -10px -15px -3px rgb(0 0 0 / 0.1), 0 -4px -6px -4px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [],
}
