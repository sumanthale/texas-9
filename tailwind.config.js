/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      secondary: ["Dosis"],
    },
    extend: {
      colors: {
        secondary: "#8f8f8f",
      },
      fontFamily: {
        condensedWeb: ["DIN Condensed Web"],
        sans: ['"Open Sans"', "sans-serif"],
        Gbold: ["G bold", "sans-serif"],
        Gboldoblique: ["G boldoblique", "sans-serif"],
        GBook: ["G book", "sans-serif"],
        Gbookoblique: ["G bookoblique", "sans-serif"],
        Gdemi: ["G demi", "sans-serif"],
        Gdemioblique: ["G demioblique", "sans-serif"],
        Glig: ["G lig", "sans-serif"],
        Gligoblique: ["G ligoblique", "sans-serif"],
        Gmedium: ["G medium", "sans-serif"],
        Gmediumoblique: ["G mediumoblique", "sans-serif"],
        Gsemi: ["G semi", "sans-serif"],
        Gsemioblique: ["G semioblique", "sans-serif"],
        Gtext: ["G text", "sans-serif"],
        Gtextoblique: ["G textoblique", "sans-serif"],
        Gthick: ["G thick", "sans-serif"],
        Gthickoblique: ["G thickoblique", "sans-serif"],
        Gxlig: ["G xlig", "sans-serif"],
        Gxligoblique: ["G xligoblique", "sans-serif"],
        DinCondensed: ["Din Condensed", "sans-serif"],
        primary: ["Shree Devanagari", "sans-serif"],
      },
    },
  },
  plugins: [],
};
