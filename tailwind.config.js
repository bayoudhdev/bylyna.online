/** @type {import('tailwindcss').Config} */
const { join } = require("path");
module.exports = {
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [join(__dirname, "app/**/*.{js,ts,jsx,tsx}"),],
  theme: {
    extend: {},
  },
  plugins: [],
}

