/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
    },
    fontFamily: {
      bellefair: ["Bellefair", "serif"],
      barlow: ["Barlow Condensed", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        desktop: "url('/src/assets/home/background-home-desktop.jpg')",
        mobile: "url('/src/assets/home/background-home-mobile.jpg')",
        tablet: "url('/src/assets/home/background-home-tablet.jpg')",
      },

      colors: {
        "header-bg": "#ffffff0a",
        // backdrop-filter: blur(40.7742px);
      },
    },
  },
  plugins: [],
};
