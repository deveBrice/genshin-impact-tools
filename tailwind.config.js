/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'dark-content': '#32373D',
      'white-content': '#ADB4BC',
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
      'light-blue': colors.lightBlue,
    },
    extend: {
        height: {
          '128': '32rem',
          '93p' : '93%'
        },
        margin: {
          '6px': '6px',
          '7px': '7px',
        }
    },
    minHeight: {
      '200px': '200px',
    },
    minWidth: {
      '200px': '200px',
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
    }
  },
  plugins: [],
}
