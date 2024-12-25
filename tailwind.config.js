/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true

    },
    extend: {
      colors:{
        primcolor:{
          50:'#9dde9d',
          100:'#85d685',
          200:'#6cce6c',
          300:'#54c654',
          400:'#3bbd3b',
          500:'#23b523',
          600:'#0aad0a',
          700:'#066806',
          800:'#055705',
          900:'#044504',
        }
      },
      screens:{
        'xl':"1200px"
      },
    },
  },
  plugins: [],
}

