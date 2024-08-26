/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('assets/background-profileImage.png')",
        vectorbg: "url('assets/vectorbg.png')",
        formbg: "url('assets/bgimg.png')",
        bggridimg: "url(assets/line1.png)",
        reviewimg: "url(assets/reviewimg.png)",
      },
      colors: {
        navbg: '#231F40',
        orangeclr: '#FF7C08',
        offerbg:'#EEF6EB',
        bgclr1: '#D3FFE3',
        bgclr2: '#FFE3DD',
        circle1: '#D6E3B8',
        circle2: '#F9CCB5',
      },
      fontFamily:{
        Bangers:['Bangers'],
        interTight:['Inter Tight'],
        poppins:['Poppins'],
      },
    },
  },
  plugins: [],
}

