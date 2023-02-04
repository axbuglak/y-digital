/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {

      lg: { max: '1025px' },
      md: { max: '768px' },
      sm: { max: '480px' },
      lgR: { min: '1025px' },
      xxlR: { min: '2000px' },
    },
    container: {
      padding: '20px',
      center: true,
    },

    extend: {
      colors: {
        blue: '#00A3FF',
        deepblue: '#016CEA',
        darkblue: '#001F56',
        whiteCustom: 'white',
      },
    },
  },
  plugins: [],
}
