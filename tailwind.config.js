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
        desktop: "url('/public/assets/home/background-home-desktop.jpg')",
        mobile: "url('/public/assets/home/background-home-mobile.jpg')",
        tablet: "url('/public/assets/home/background-home-tablet.jpg')",
        desktopDestination:
          "url('/public/assets/destination/background-destination-desktop.jpg')",
        mobileDestination:
          "url('/public/assets/destination/background-destination-mobile.jpg')",
        tabletDestination:
          "url('/public/assets/destination/background-destination-tablet.jpg')",
        desktopCrew: "url('/public/assets/crew/background-crew-desktop.jpg')",
        tabletCrew: "url('/public/assets/crew/background-crew-tablet.jpg')",
        mobileCrew: "url('/public/assets/crew/background-crew-mobile.jpg')",
        desktopTech:
          "url('/public/assets/technology/background-technology-desktop.jpg')",
        tabletTech:
          "url('/public/assets/technology/background-technology-tablet.jpg')",
        mobileTech:
          "url('/public/assets/technology/background-technology-mobile.jpg')",
      },

      colors: {
        "header-bg": "#ffffff0a",
        // backdrop-filter: blur(40.7742px);
      },
    },
  },
  plugins: [],
};
