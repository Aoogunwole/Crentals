/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3563E9",
        secondary: "#54A6FF",
        text: "#90A3BF",
        input: "#F6F7F9",
      },
      fontFamily: {
        font: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
}

