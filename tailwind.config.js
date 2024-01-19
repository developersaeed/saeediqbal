/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      backgroundImage: {
        'hero-image': "url('/src/img/herobg.png')"
      }
      ,

      colors: {
        
          "primary": "#4FCC23 ",
          "secondary": "#4FCC23",
          "acent": "#292929",
          "acent-i": "#292929",
          "para-color": "#F3F3F3",
          "shadow": "#D55D07",
          "btn": "#006600",
          "r-bg":"#14C832",
        
      },
    },
    plugins: [require("rippleui")],
  },
};
