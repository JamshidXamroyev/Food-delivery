/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Title: ["Itim", "serif"]
      }
    },
  },
  plugins: [],
  important: true
}