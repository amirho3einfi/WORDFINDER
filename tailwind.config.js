/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        dana:["dana"]
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none",
        },
        ".no-scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width":"none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

