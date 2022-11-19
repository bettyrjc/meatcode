const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        openSans: ['Open Sans',' sans-serif'],
      },
      colors: {
        grey: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          450: '#64748B',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          850: '#999999',
          890: '#3a3a3a', //tint %10 or lighten %10
          895: '#2e2e2e', //tint 5% or lighten 5%
          900: '#212121',
        },
        transparent: 'transparent',
        white: colors.white,
        black: "#24272A",
        gray: "#3F454A",
        'blue':"#009CD9",
        'red':"#B72C2C",
        'yellow':"#D8AD3D",
        },
      animation: {
        wiggle: ' pulse 4s cubic-bezier(0, 0.3, 0.6, 1) infinite;',
      },
    },
  },
  important: "#__next",
  plugins: [],
};
