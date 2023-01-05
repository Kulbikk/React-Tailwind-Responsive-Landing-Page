/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '476px',
      md: '768px',
      lg: '1024px',
      xl: '1440px,',
    },
  
    extend: {
      colors: {
        White: 'hsl(0, 0%, 100%)',
        Black: 'hsl(0, 0%, 0%)',
        DarkGray: 'hsl(0, 0%, 55%)',
        VeryDarkGray: 'hsl(0, 0%, 41%)',
      },
      fontFamily: {
        atlanta: 'Alata, sains serif',
        josefin: 'Josefin Sans, sains serif'
      }
    },
  },
  plugins: [],
}