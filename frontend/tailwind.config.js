/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      'primary': "#000000",
      'secondary':'#FA3946',
      'white':'#ffffff'
    },
    screens: {
      mobile: {max:"780px"},
      widescreen: {min:"780px"},
    },
  },
  plugins: [],
};
