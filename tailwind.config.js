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
     // current: 'currentColor',
      'white': '#FFFFFF',
     /* 'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'blue-content': '#B3CEEE',*/
      'form-color': '#00ACC1',
      'light-blue': colors.lightBlue,
      'gray-100': '#C2C3C5',
      'color-filter': '#32373D4D',
      'remove-accept': '#3AEC1E',
      'remove-refuse': '#D81B60',
      'trash-icon-color': '#D81B60',
      'black-400': '#51555A',
      'golden': '#EED5A0'
    },
    extend: {
        height: {
          '5': '1.25rem',//20px
          '6.252':'1.563rem',//25px
          '7.5': '1.875rem',//30px
          '10': '2.5rem', //40px
          '30': '7.5rem', //120px
          '50': '12.5rem', //200px
          '62.5': '15.625rem', //250px
          '93p' : '93%',
          'full': '100%'
        },
        width: {
          '10': '2.5rem', //40px
          '30': '7.5rem', //120px
          '50': '12.5rem', //200px
          '62.5': '15.625rem', //250px
          '25' : '6.25rem', //100px
          '250': '62.5rem', //1000px 
          'full': '100%'
        },

        margin: {
          '0.752': '0.188rem',//3px
          '1.252': '0.313rem', //5px
          '1.5': '0.375rem', //6px
          '1.752': '0.438rem', //7px
          '2.5': '0.625rem', //10px
          '3.752' : '0.938rem',
          '5': '1.25rem', // 20px
          '6.2' : '1.563rem', //25px
          '8.5' : '2.125rem' //34px

        },

        padding: {
          '1.252': '0.313rem', //5px
          '1.5': '0.375rem', //6px
          '5': '1.25rem', // 20px
          '17.5': '4.375rem' //70px
        },
        dropShadow: {
          'purple': '0 4px 0px rgba(153, 85, 204, 0.75)',
          'cyan': '0 4px 0px rgba(0, 172, 193, 0.75)',
          'light-gray': '0 4px 0px 0px rgb(194, 195, 197)'
        },

        flex: {
          '2': '2 2 0%',
          '1': '1',
          '1-0-auto': '1 0 auto'
          
        },
        cursor: {
          'fancy': 'url(hand.cur), pointer',
        },
        zIndex: {
          '999': '999',
        },
        grayscale: {
          100: '100%',
        },
        boxShadow: {
          'default':  '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
          'light-gray-bottom': '0 4px 0px 0px rgb(194, 195, 197)',
        },
        spacing: {
          '3.2': '0.813rem',//13px
        }
    },
    minHeight: {
      '50': '12.5rem', //200px
      '62.5': '15.625rem', //250px
    },
    maxHeight: {
      '62.5': '15.625rem', //250px
      'full': '100%'
    },
    fontFamily: {
      'arimo': ['"Arimo"', 'sans-serif']
    },
    fontSize: {
      '4': '1rem', //16px
      '5': '1.25rem',//20px
      '6': '1.5rem', //24px
      '6.2': '1.563rem', //25px
      '7.8': '1.953rem', //31px
      '8': '2rem' //32px
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
      
      '5': '1.25rem', //20px
      '7.5': '1.875rem', //30px
      '12.5': '3.125rem', //50px
      'full': '9999px',
      'circle': '50%'
      
    },
    minWidth: {
      '50': '12.5rem', //200px
      '62.5': '15.625rem', //250px
      '87.5': '21.875rem' //350px
    },
    maxWidth: {
      '62.5': '15.625rem', //250px
      '75': '18.75rem', //300px
      /*'500': '31.25rem',
      '350': '21.875rem',*/
    },

    borderWidth: {
      '0': '0',
      '2' :'2'
    },
    backgroundImage: {
      'download-picture': "url('../../assets/imgs/logo/picture-logo.png')"
    },
    opcity: {
      '0': '0',
      '60': '60',
      '100': '100'
    },
    transitionProperty: {
      'all': 'all',
   //   'opacity': '0.5s'
    },

    transitionDuration: {
      '300': '300ms'
    },

  /*  transitionOpacity: {
      '0.5': '0.5s linear'
    }*/
  },
  plugins: [],
}
