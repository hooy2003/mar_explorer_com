/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/**/*.html'
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '480px'},
        'md': {'max': '640px'},
        'xl': {'max': '1000px'},
      },
      height: {
        '1px': '1px',
        '2px': '2px'
      },
      width: {
        '1px': '1px',
        '2px': '2px'
      },
      borderRadius: {
        '25': '25%',
        '50': '50%',
      },
      color: {
        'explorer-bule': '#145D9F',
        'explorer-d-bule': '#1628D1',
        'explorer-white': '#145D9F',
        'explorer-light-white': '#F6F6F6'
      },
      backgroundColor:  {
        'explorer-bule': '#145D9F',
        'explorer-d-bule': '#1628D1',
        'explorer-white': '#145D9F',
        'explorer-light-white': '#F6F6F6'
      },
      textColor:  {
        'explorer-bule': '#145D9F',
        'explorer-d-bule': '#1628D1',
        'explorer-white': '#145D9F',
        'explorer-light-white': '#F6F6F6'
      },
      backgroundImage: {
        's1-bg': "url('/img/s1_bg.png')",
        's2-bg': "url('/img/s2_bg.png')",
        's2-wrap': "url('/img/s2_wrap.png')",
        's2-wrap-moblie': "url('/img/s2_wrap_moblie.png')",
        's4-left': "url('/img/s4_left.png')",
        's4-left-mobile': "url('/img/s4_left_mobile.png')",
      },
      flex: {
        '100': '1 1 100%'
      }
    },
  },
  plugins: [],
}
