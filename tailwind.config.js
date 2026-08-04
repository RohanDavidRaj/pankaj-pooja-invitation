/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8EC",
        rose: "#C86C78",
        blush: "#F5D5D2",
        gold: "#B88A3B",
        ink: "#3D2930"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"]
      },
      boxShadow: {
        card: "0 24px 70px rgba(102, 55, 40, 0.15)"
      }
    }
  },
  plugins: []
};
