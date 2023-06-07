/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {
      dropShadow: {
        DEFAULT: '2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      maxWidth: {
        
      }
    },
  },
  plugins: [],
}

