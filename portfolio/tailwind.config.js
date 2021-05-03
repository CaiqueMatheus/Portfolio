module.exports = {
  prefix: 'tw-',
  purge: ['./pages/**/*.{tsx}', './components/**/*.{tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
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
      }
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
  plugins: [],
}
