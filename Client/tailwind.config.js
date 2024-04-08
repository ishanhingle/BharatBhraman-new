/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '100':'32rem'
      },
      width: {
        '100': '32rem',
      }
    },
  },
  plugins: [],
}

