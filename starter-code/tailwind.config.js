const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#24053E",
        eucaplyptus: "#44FFA1",
        "davys-grey": "#584D62",
        "ghost-white": "#FCF8FF",
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
        header: ["Fraunces"],
      },
    },
  },
  plugins: [],
  safelist: ['btn-primary', 'btn-secondary'],
};
