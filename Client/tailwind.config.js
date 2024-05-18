/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '100':'32rem',
        '102':'37rem'
      },
      width: {
        '100': '32rem',
      },
      backdropBrightness: {
        25: '.25',
        175: '1.75',
      }
    },
  },
  plugins: [],
}

