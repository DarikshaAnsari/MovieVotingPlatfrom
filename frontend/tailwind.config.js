/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      'primary': "#000000",
      'secondary':'#db0001',
      'white':'#ffffff'
    },
    screens: {
      mobile: {max:"780px"},
      widescreen: {min:"780px"},
    },
  },
  plugins: [],
};
