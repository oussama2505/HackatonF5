/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        'light-gray':'#C3C2BB',
        'dark-gray':'#585858',
        'beige':'#D7D8B6',
      },
      fontFamily:{
        custom:['abel','san-serif'],
      },
    },
  },
  plugins: [],
}

