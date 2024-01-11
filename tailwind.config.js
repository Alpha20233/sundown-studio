/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#EFEAE3'
      },
      transitionProperty:{
        '3s':'all .5s ease'
      },
      fontFamily:{
        'Normal':['normal','sans serif'],
        'Medium':'medium',
      },
      width:{
        '30':'30%'
      },
      keyframes: {
        Shake1: {
          '0%':{transform:'translate(-10%,-8%)'} , '100%': { transform: 'translate(10%,10%)' },
        }, 
        Shake2: {
          '0%':{transform:'translate(15%,-20%)'} , '100%': { transform: 'translate(10%,10%)' },
        },
      },
      animation: {
        Shake1: 'Shake1 3s linear infinite',
        Shake2: 'Shake2 4s linear infinite',
      }
    },
  },
  plugins: [],
}