/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      // => phone
      'xs': '375px',
      // => tablet
      'sm': '640px',
       // => laptop
      'md': '1024px',
      // => desktop
      'lg': '1280px',
      // =>
      'xl': '1536px'
    },
    colors: {
      'dark-content': '#32373D',
      'white-content': '#ADB4BC',
      'router-active': '#005BC5',
      'color-button': '#005BC5',
      'electro-color': '#9955CC',
      'rarety-color': '#FFEE4A',
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'blue-content': '#B3CEEE',
      'light-blue': colors.lightBlue,
    },
    extend: {
        height: {
          '128': '32rem',
          '93p' : '93%',
          '62.5': '15.625rem',
          '120': '7.5rem'
        },
        width: {
         '62.5': '15.625rem',
         '100px' : '6.25rem',
         '120': '7.5rem'
        },

        margin: {
          '6px': '6px',
          '7px': '7px',
          '30' : '1.875rem',
          '10' : '0.625rem'
        },

        padding: {
          '6px': '6px',
          '5px': '0.313rem'
        },
        dropShadow: {
          'purple': '0 4px 0px rgba(153, 85, 204, 0.75)',
        },

        flex: {
          '2': '2 2 0%',
          '1': '1 0 auto'
        }
    },
    minHeight: {
      '200px': '200px',
    },
    maxHeight: {
      '250': '15.625rem',
    },
    fontFamily: {
      'arimo': ['"Arimo"', 'sans-serif']
    },
    fontSize: {
      '16px': '16px'
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'card': '1.25rem'
    },
    fontSize: {
      'base': '1rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem'
    },
    minWidth: {
      '200px': '200px',
    },
    maxWidth: {
      '250': '15.625rem',
      '300': '18.75rem',
      '500': '31.25rem',
    },
  },
  plugins: [],
}
