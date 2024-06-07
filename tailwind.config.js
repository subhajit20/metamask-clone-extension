/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|ripple|spinner).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        // button: ["Ubuntu"],
        // // bannerHeading:["Evogria"],
        // // oneWord:["Baloo Thambi 2"],
        // // heading:["Alata"],
        // // paragraph:['Ubuntu'],
        // // para:['Cocogoose'],
        // Montserrat: ["Montserrat"],
        // source: ["Source Sans 3"],
        poppins: ["Poppins"],
    },
    },
  },
  plugins: [
    require("rippleui"),
    nextui()
  ],
}