/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/pages/**/*.{js,ts,jsx,tsx}",
    "./frontend/components/**/*.{js,ts,jsx,tsx}",
    "./frontend/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#4b5563",
        accent: "#2563eb",
      },
    },
  },
  plugins: [],
}