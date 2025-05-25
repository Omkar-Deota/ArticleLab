/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  color: {
    lightorange: "#ff7b00",
  },

  darkMode: "class",
  plugins: [nextui()],
};
