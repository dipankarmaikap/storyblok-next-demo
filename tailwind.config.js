/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
