/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto','sans-serif'],
        poppins: ['Poppins','sans-serif'],
      },
      colors: {
        primary: '#3498db'
      }
    },
  },


  plugins: [
    require('@tailwindcss/forms'),
  ],
}

