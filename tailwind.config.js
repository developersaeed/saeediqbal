/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        
          "primary": "#080808 ",
          "secondary": "#FF6B00",
          "acent": "#292929",
          "acent-i": "#292929",
          "para-color": "#F3F3F3",
        
      },
    },
    plugins: [require("rippleui")],
  },
};
