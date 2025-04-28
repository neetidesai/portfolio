/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        components: {
          primary: "#7AA185", //"#9E2E71",
          secondary: "#CADACB", //"#778F7E",
          accent: "#9DACA0",
          background: "#01330B", // "#DDC9D5",
        },
        fontColor: {
          primary: "#FFFFFF",
          secondary: "#000000",
          darkAccent: "#01330B",
          lightAccent: "#9DACA0",
        },
      },
      fontSize: {
        largeHeader: "3.5rem",
        smallHeader: "2rem",
        largeSubheader: "2rem",
        smallSubheader: "1.5rem",
        largeBody: "1.5rem",
        smallBody: "1rem",
        largeButton: "1rem",
        smallButton: "0.75rem",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Courier New", "monospace"],
        header: ["'Kaisei Opti'", "serif"],
        body: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
});
