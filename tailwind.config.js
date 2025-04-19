/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          600: '#800020',
          700: '#660019',
        }
      }
    },
  },
  plugins: [],
};