// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    colors: {
      text: "#e3ebe8",
      background: "#0e1412",
      primary: "#b4c9c3",
      secondary: "#41535a",
      accent: "#8293a6",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        lg: "1px 3px 40px #ffffff",
      },
    },
  },
  plugins: [],
};
