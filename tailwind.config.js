/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarBlue: "#004E98", // Custom navbar background color
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Inter font family
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
