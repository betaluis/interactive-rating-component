/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        "light-gray": "hsl(217, 12%, 63%)",
        "medium-gray": "hsl(216, 12%, 54%)",
        "dark-gray": "hsl(213, 19%, 18%)",
        "dark-blue": "#181D28",
        "darker-blue": "hsl(216, 12%, 8%)",
      },
    },
    screens: {
      xxs: "380px",
      xs: "440px",
    }
  },
  plugins: [],
}
