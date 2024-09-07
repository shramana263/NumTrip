/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'luckiest_guy':["Luckiest Guy", "cursive"],
        'lilita_one':["Lilita One", "sans-serif"],
        'black-han-sans-regular':["Black Han Sans", "sans-serif"],
        'Caveat':["Caveat", "cursive"]
      },
      keyframes:{
        slideDown: {
          '0%': { transform: 'translateY(-15%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        slideUp:{
          '0%':{opacity:'1',transform:'translateY(0%)'},
          '100%':{opacity:'0',transform:'translateY(-55%)'},
        },
        slideNegative:{
          '0%':{opacity:'1',transform: 'translateY(0%)'},
          '50%':{opacity:'0.5',transform: 'translateY(50%)'},
          '100%':{opacity:'0',transform:'translateY(75%)'},
        },
        popCell:{
          '0%':{opacity:'0',transform:'scale(0)'},
          '100%':{opacity:'1',transform:'scale(1)'},
        },
        leafFall1: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(50%) rotate(220deg)' },
          // '100%': { transform: 'translateY(100%) rotate(-720deg)' },
        },
        leafFall2: {
          '0%': { opacity:'0',transform: 'translateY(-10%) translateX(100px) rotate(10deg)' },
          '10%': { opacity:'1',transform: 'translateY(0%) translateX(200px) rotate(20deg)' },
          '50%': { opacity:'1',transform: 'translateY(50%) translateX(500px) rotate(220deg)' },
          '80%': { opacity:'1',transform: 'translateY(-20%) translateX(800px) rotate(500deg)' },
          '100%': { opacity:'1',transform: 'translateY(100%) translateX(870px) rotate(800deg)' },
          // '100%': { transform: 'translateY(100%) rotate(-720deg)' },
        },
        spiralDown: {
          '0%': { transform: 'rotate(0deg) translateX(0px) translateY(0px)' },
          '100%': { transform: 'rotate(720deg) translateX(-100px) translateY(200px)' },
        },

      },
      animation:{
        slideDown: 'slideDown ease-in-out 1s',
        slideUp: 'slideUp ease-out 3s',
        slideNegative:'slideNegative ease-out 4s',
        popCell:'popCell ease-in-out 1s',
        leafFall1: 'leafFall1 15s linear infinite',
        leafFall2: 'leafFall2 30s  linear infinite',
        spiralDown: 'spiralDown 10s linear infinite',
      }
    },
  },
  plugins: [],
}
