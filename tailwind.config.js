/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
    require("rippleui")
  ],
}