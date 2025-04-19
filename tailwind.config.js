/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#263FA9',
        dark: '#030616',
        light: '#F2F5F9',
        whiteish: '#FAFAF9',
        translucent: '#F8FAFC1A',
      },
      backgroundImage: {
        'qa-bg': "url('/resources/qa-bg.jpg')",
        'qa-bg-small': "url('/resources/qa-bg-small.jpg')",
      }      
    },
  },
  plugins: [],
}
