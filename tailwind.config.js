/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      segoe: [
        "Segoe UI Historic",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        dark: "#1E2021",
        accent: "#62B6B7",
        accentLight: "#97DECE",
        "black-blue": "#00274d",
        borderDark: "#2F3336",
        borderLight: "#ededed",
        hoverDark: "#181818",
        hoverLight: "#E6E7E7",
      },
    },
    screens: {
      xs: "550px",
      sm: "670px",
      md: "980px",
      lg: "1260px",
    },
  },
  plugins: [],
};
