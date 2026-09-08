/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        racing: {
          green: "#39d353",
          blue: "#2457ff",
          dark: "#050505",
          card: "#17181c",
        }
      }
    },
  },
  plugins: [],
}
