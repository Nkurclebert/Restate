/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "Sans-serif"],
        "rubik-bold": ["Rubik-Bold", "Sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "Sans-serif"],
        "rubik-medium": ["Rubik-Medium", "Sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "Sans-serif"],
        "rubik-light": ["Rubik-Light", "Sans-serif"],
      },
      colors: {
        primary: {
          100: "#0061FF0A",
          200: "#0061FF1A",
          300: "#0061FF",
        },

        accent: {
          100: "#FBFBFD",
        },

        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191d31",
        },

        danger: "#F75555",
      },
    },
  },
  plugins: [],
};
