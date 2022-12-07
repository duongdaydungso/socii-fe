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
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      colors: {
        "black-blue": "#00274d",
      },
    },
  },
  plugins: [],
};
