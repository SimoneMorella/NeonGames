/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neon: ['NeonNeon', 'sans-serif'],
        cyberWay: ['CyberWay', 'sans-serif'],
      }
    },
  },
  plugins: [],
}