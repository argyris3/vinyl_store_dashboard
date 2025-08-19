/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "register": "url('/src/assets/registerLogo.jpg')",
        "login": "url('/src/assets/login.jpg')",
        "admin": "url('/src/assets/adminLogo.jpg')",
      }
    },
  },
  plugins: [],
}
