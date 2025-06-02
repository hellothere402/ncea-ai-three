/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./services/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
    // Also include any other directories that might contain Tailwind classes
    "./**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  // Add this to ensure Tailwind processes all the classes
  safelist: [
    // Add any classes that might be dynamically generated
    'bg-blue-600',
    'text-white',
    'hover:bg-blue-700',
    'transition-colors',
    'rounded-lg',
    'px-8',
    'py-3'
  ]
}