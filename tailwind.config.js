/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hslOrange': 'hsl(25, 97%, 53%)', // shared
        'hslWhite': 'hsl(0, 0%, 100%)', // shared
        'hslLightGrey': 'hsl(217, 12%, 63%)', // shared
        'hslMediumGrey': 'hsl(216, 12%, 54%)', // shared
        'hslMediumBlue': 'hsl(213, 18%, 21%)',
        'hslMediumDarkBlue': 'hsl(215, 20%, 17%)',
        'hslDarkBlue': 'hsl(213, 19%, 18%)', // nearly shared hsl(210, 19%, 18%)
        'hslVeryDarkBlue': 'hsl(216, 12%, 8%)' // nearly shared hsl(228, 11%, 9%)
      }
    },
  },
  plugins: [],
}
