/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'lightestBlack': '#424141',
        'lighterBlack': '#252525',
        'lightBlack' : '#121212',
        'black-shadow': 'rgb(0,0,0,.3)',
        'blue': '#5799ef'
      },
    },
  },
  plugins: [],
}

