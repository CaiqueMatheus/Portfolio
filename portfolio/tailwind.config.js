module.exports = {
  prefix: 'tw-',
  purge: ['./pages/**/*.{tsx}', './components/**/*.{tsx}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    linearGradientDirections: {
      'br': 'to bottom right',
    },
    linearGradientColors: {
      'violet-gradient':['#8b5fe9', '#6435c9'],
      'gray-gradient': ['#292a2d','#202124'],
    },
    variants: {
      backgroundImage: ['responsive'],
      linearGradients: ['responsive'],
      
    },
    screens: {
      'xs': '475px',
    },
    colors: {
      violet: {
        100: '#d1bff6',
        200: '#b99ff2',
        300: '#a27fed',
        DEFAULT: '#8b5fe9',
        500: '#6847af',
        600: '#6435c9',
      },
      gray: {
        100: '#d6dae6',
        200: '#aec1d0',
        300: '#6e8899',
        400: '#47484c',
        500: '#292a2d',
        DEFAULT: '#202124',
      },
      github: {
        DEFAULT: '#47484c',
        100: '#d1bff6',
        200: '#a27fed',
        300: '#8b5fe9',
        400: '#6435c9',        
      },
    },
    fontFamily: {
      varela: ['Varela Round', 'sans-serif'],
      archivo: ['Archivo', 'sans-serif'],
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}
