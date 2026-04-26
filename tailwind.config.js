/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB800',
        dark: '#050505',
        light: '#FFFFFF',
        gridGrey: '#E5E5E5'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'], // Assuming we use a bold graffiti/street font from Google Fonts like Outfit or Permanent Marker
      }
    },
  },
  plugins: [],
}
