/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "#202020",
        green_btn: "#009006",
        red: "#ff4500",
        green: "#35ff2f",
      },
    },
  },
  plugins: [],
};
