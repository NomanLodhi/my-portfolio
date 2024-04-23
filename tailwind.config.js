/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      backgroundImage:{
        'intro':"url('./Img/About-bg.jpg')",
        'xxl-screen':"url(./Img/xxl-background.jpg)"
      },
      fontFamily:{
        'wix':"'Wix Madefor Display', 'sans-serif'",
        'montserrat':"'Montserrat', 'sans-serif'",
        'lato':"'Lato', 'sans-serif'",
      },
      keyframes:{
        pic:{
          '0%,100%':{transform:'translateY(0px)'},
          '50%':{transform:'translateY(10px)'}
        },
        slide:{
          '0%':{transform:'translateX(-100px)'},
          '100%':{transform:'translateX(100px)'}
        },
        slidesm:{
          '0%':{transform:'translateX(-1000px)'},
          '100%':{transform:'translateX(100px)'}
        },
        navii:{
          '100%':{'top':'0px'}
        },
        rotate1:{
          // '100%':{transform:'rotate(45deg)'},
          '100%':{transform:'translateY(12px)rotate(45deg)',width:'40px'},
          
        },
        rotate2:{
          '100%':{transform:'rotate(-45deg)'}
        },
        hide:{
          '100%':{'visibility':'hidden'}
        },
      },
      animation:{
     'pic':'pic 2s linear infinite',
     'slide':'slide 5s linear infinite',
     'slide-sm':'slidesm 10s linear infinite',
      'navtoggle':'navii 0.2s linear forwards',
      'rotate1':'rotate1 0.2s linear forwards',
      'rotate2':'rotate2 0.2s linear forwards',
      'hide':'hide 0.2s linear forwards'
      },
 
    },
  },
  plugins: [],
}

