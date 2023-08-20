/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0C131D',
        componentDark: '#222B3A',
        greyText: '#C5CAD2',
        darkGreyText: '#9499A1',
        compBorderDark: '#38465C'
      },
      gridTemplateColumns: {
        'custom': '0fr 1.3fr 1fr'
      },
    },
  },
  plugins: [],
}

