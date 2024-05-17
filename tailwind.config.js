/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        footer: "#D1E2EB",
        textGrey: "#555555",
        textLowerGrey: "#ADADAD",
        bgGrey: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
