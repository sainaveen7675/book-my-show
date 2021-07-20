module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        sainaveen: 
        {
          50: '#ffe8e2',
          100: '#ffc1b3',
          200: '#fd9982',
          300: '#fd7150',
          400: '#fc4a1f',
          500: '#e33107',
          600: '#b12603',
          700: '#7f1b02',
          800: '#4d0f00',
          900: '#1e0300',
        },
        bms: 
        {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#2b3147',
          900: '#0a0a16',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}