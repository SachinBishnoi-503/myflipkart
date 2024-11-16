/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "login": "0px 0px 25px 0px #0303031F"
      },
      fontFamily: {
        "poppins": '"Poppins", system-ui',
        "inter": '"Inter", system-ui'
      },
      colors: {
        "off-white": "#FEFEFE",
        "rich-black": "#030303",
        "palatinate-blue": "#2A55E5",
        "amber": "#FFC200"
      }
    },
  },
  plugins: [],
}