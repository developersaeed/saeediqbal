/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        
          "bg-primary": "#080808 ",
          "bg-secondary": "#FF6B00",
          "acent-primary": "#292929",
          "acent-secondary": "#292929",
          "para-color": "#F3F3F3",
        
      },
    },
    plugins: [require("rippleui")],
  },
};
