/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
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
        desktopDestination:
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        mobileDestination:
          "url('/src/assets/destination/background-destination-mobile.jpg')",
        tabletDestination:
          "url('/src/assets/destination/background-destination-tablet.jpg')",
        desktopCrew: "url('/src/assets/crew/background-crew-desktop.jpg')",
        tabletCrew: "url('/src/assets/crew/background-crew-tablet.jpg')",
        mobileCrew: "url('/src/assets/crew/background-crew-mobile.jpg')",
        desktopTech:
          "url('/src/assets/technology/background-technology-desktop.jpg')",
        tabletTech:
          "url('/src/assets/technology/background-technology-tablet.jpg')",
        mobileTech:
          "url('/src/assets/technology/background-technology-mobile.jpg')",
      },

      colors: {
        "header-bg": "#ffffff0a",
        // backdrop-filter: blur(40.7742px);
      },
    },
  },
  plugins: [],
};
