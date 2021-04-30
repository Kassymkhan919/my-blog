const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      'max-width': { default: '10rem' },
    },
    fontFamily: {
      display: ['Permanent Marker', 'sans-serif'],
      extra: ['IBM Plex Mono'],
      serif: ['Georgia'],
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.trueGray,
    //   indigo: colors.indigo,
    //   red: colors.rose,
    //   yellow: colors.amber,
    // },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
        },
        company: {
          DEFAULT: '#f04d21',
          dark: '#db3b0f',
        },
        blue: {
          light: '#85d7ff',
          DEFAULT: '#03203C',
          dark: '#009eeb',
          regal: '#243c5a',
        },
        gray: {
          dark: '#6B7280',
          small: '#999999',
        },
        green: {
          DEFAULT: '#10B981',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   purge: ['./src/**/*.js'],
//   theme: {
//     container: {
//       center: true,
//       padding: '1.5rem',
//       'max-width': {
//         default: '10rem',
//       },
//     },
//     fontFamily: {
//       display: ['Permanent Marker', 'sans-serif'],
//     },

//   },
//   variants: {},
//   plugins: [],
// };
