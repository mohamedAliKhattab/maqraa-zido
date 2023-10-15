const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        DEFAULT: "#ffffff",
        100: "#F1F1F1",
        200: "#F5F5F5",
        300: "#F2F2F7",
      },
      black: "#000000",
      maqraaLightBlue: {
        DEFAULT: "#37A4DF",
        100: "#99d6e5",
        200: "#AEEAF4",
      },
      maqraaDarkBlue: {
        DEFAULT: "#155B82",
        100: "#83a8bc",
        200: "#456272",
      },
      maqraaOrange: {
        DEFAULT: "#F7931E",
        100: "#F9F9E4",
      },
      maqraaYellow: {
        DEFAULT: "#FFF886",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
    extend: {
      dropShadow: {
        xl: "3px 3px 0px #FFF",
        "2xl": "1px 1px 0px #155B82",
        "3xl": "2px 2px 0px #37A4DF",
        "white-1px": "1px 1px 0px #FFF",
        "white-2px": "2px 2px 0px #FFF",
        "white-3px": "3px 3px 0px #FFF",
        "white-4px": "4px 4px 0px #FFF",
        "white-5px": "5px 5px 0px #FFF",
        "white-b-1px": "0px 1px 0px #FFF",
        "white-b-2px": "0px 2px 0px #FFF",
        "white-b-3px": "0px 3px 0px #FFF",
        "white-b-4px": "0px 4px 0px #FFF",
        "white-b-5px": "0px 5px 0px #FFF",
        "gray-1px": "1px 1px 0px #ddd",
        "gray-2px": "2px 2px 0px #ddd",
        "gray-3px": "3px 3px 0px #ddd",
        "gray-4px": "4px 4px 0px #ddd",
        "gray-5px": "5px 5px 0px #ddd",
        "gray-b-1px": "0px 1px 0px #ddd",
        "gray-b-2px": "0px 2px 0px #ddd",
        "gray-b-3px": "0px 3px 0px #ddd",
        "gray-b-4px": "0px 4px 0px #ddd",
        "gray-b-5px": "0px 5px 0px #ddd",

        "dark-blue-1px": "1px 1px 0px #155B82",
        "dark-blue-2px": "2px 2px 0px #155B82",
        "dark-blue-3px": "3px 3px 0px #155B82",
        "dark-blue-4px": "4px 4px 0px #155B82",
        "dark-blue-5px": "5px 5px 0px #155B82",
        "dark-blue-b-1px": "0px 1px 0px #155B82",
        "dark-blue-b-2px": "0px 2px 0px #155B82",
        "dark-blue-b-3px": "0px 3px 0px #155B82",
        "dark-blue-b-4px": "0px 4px 0px #155B82",
        "dark-blue-b-5px": "0px 5px 0px #155B82",

        "light-blue-1px": "1px 1px 0px #37A4DF",
        "light-blue-2px": "2px 2px 0px #37A4DF",
        "light-blue-3px": "3px 3px 0px #37A4DF",
        "light-blue-4px": "4px 4px 0px #37A4DF",
        "light-blue-5px": "5px 5px 0px #37A4DF",
        "light-blue-b-1px": "0px 1px 0px #37A4DF",
        "light-blue-b-2px": "0px 2px 0px #37A4DF",
        "light-blue-b-3px": "0px 3px 0px #37A4DF",
        "light-blue-b-4px": "0px 4px 0px #37A4DF",
        "light-blue-b-5px": "0px 5px 0px #37A4DF",

        "light-blue-100-1px": "1px 1px 0px #99d6e5",
        "light-blue-100-2px": "2px 2px 0px #99d6e5",
        "light-blue-100-3px": "3px 3px 0px #99d6e5",
        "light-blue-100-4px": "4px 4px 0px #99d6e5",
        "light-blue-100-5px": "5px 5px 0px #99d6e5",
        "light-blue-100-b-1px": "0px 1px 0px #99d6e5",
        "light-blue-100-b-2px": "0px 2px 0px #99d6e5",
        "light-blue-100-b-3px": "0px 3px 0px #99d6e5",
        "light-blue-100-b-4px": "0px 4px 0px #99d6e5",
        "light-blue-100-b-5px": "0px 5px 0px #99d6e5",
      },
      boxShadow: {
        video: "5px 5px 7px 0px rgba(21, 91, 130, 0.7)",
      },
      fontFamily: {
        cairo: ["var(--Alexandria)", ...fontFamily.sans],
      },
      backgroundImage: {
        stars: "url('/assets/stars.png')",
        "secret-image": "url('/assets/secret-bg.png')",
        "top-clouds": "url('/assets/white-clouds.png')",
        "bottom-clouds": "url('/assets/white-clouds-b.png')",
        "white-video": "url('/assets/white-video-bg.png')",
      },
    },
  },
  plugins: [],
};
