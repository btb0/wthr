/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0C131D',
        componentDark: '#222B3A'
      },
      gridTemplateColumns: {
        'custom': '0fr 1.3fr 1fr'
      },
    },
  },
  plugins: [],
}

