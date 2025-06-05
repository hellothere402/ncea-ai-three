/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/_app.js",
    "./pages/index.js",
    "./pages/about.js",
    "./pages/assistant.js",
    "./pages/contact.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Add some classes to ensure Tailwind has content to process
  safelist: [
    'min-h-screen',
    'bg-gradient-to-br',
    'from-blue-50',
    'via-white',
    'to-purple-50',
    'bg-white',
    'text-gray-900',
    'px-4',
    'py-2',
    'rounded-md'
  ]
}