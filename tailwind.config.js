/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./content/**/*.{md,json,csv}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}

