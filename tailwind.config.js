/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        bghero: "#0F0000",
        bgcard:"#0D0D0D",
        border:'#2C2C2C',
        desc:"#B9B9B9",
        step:"#2C2C2C"
      },
      screens: {
        'xs': '390px',
      }
    },
  },
  plugins: [],
}