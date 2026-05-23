/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
      telex: ["Telex", "sans-serif"],
      urbanist:["Urbanist","sans-serif"]
    },
     moveInTop: {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        moveInTop: "moveInTop 300ms ease-out",
      },
    
  },
  plugins: [],
}

