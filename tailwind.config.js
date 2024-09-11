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
        geist: ['Geist Variable', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        customBg: 'linear-gradient(165deg, rgba(0,0,0,1) 0%, rgba(27,11,28,1) 70%, rgba(52,22,46,1) 100%);',
        navShopBg: 'linear-gradient(165deg, rgba(52,22,46,1) 0%, rgba(137,120,134,1) 33%, rgba(255,255,255,1) 100%);'
      },
      keyframes: {
        textPulsate: {
          "0%": {
            textShadow: "0 0 4px #ffffff4d, 0 0 6px #ffffff4d, 0 0 20px #FA4B9C, 0 0 30px #FA4B9C, 0 0 40px #FA4B9C",
          },
          "100%": {
            textShadow: "0 0 6px #ffffff4d, 0 0 10px #ffffff4d, 0 0 25px #FA4B9C, 0 0 38px #FA4B9C, 0 0 50px #FA4B9C, 0 0 58px #FA4B9C",
          }
        },
        textFlick: {
          "0%, 2%, 21%": {
            opacity: 0.1,
          },
          "4%, 19%, 80%, 83%": {
            opacity: 0.5,
          },
          "23%, 87%" : {
            opacity: 1,
          }
        },
        borderPulse: {
          "0%, 4%": {
            opacity: 0.1,
          },
          "2%, 8%, 100%": {
            opacity: 1,
          },
          "70%": {
            opacity: 0.7,
          }

        }
      },
      animation: {
        textPulsate: 'textPulsate 2s infinite alternate',
        textFlick: 'textFlick 2s linear infinite',
        borderPulse: 'borderPulse 2s infinite linear',
      },
    },
  },
  plugins: [],
}