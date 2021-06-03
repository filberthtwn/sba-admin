module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4EA76E',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
