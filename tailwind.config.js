/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor1: '#3A7BD5',
        primaryColor2: '#00D2FF',
        secondaryColor1: '#E24C4A',
        secondaryColor2: '#9747FF',
      },
      fontSize:{
        '5xl':['55px','1.1em'],
        lg:['18px','1.2em']
      },
      backgroundImage: {
        'services-1': "url('/images/advisory.png')",
        'services-2': "url('/images/training.png')",
        'services-3': "url('/images/managed.png')",
        'projects': "url('/images/projects.png')",
        'services-4': "url('/images/proService.png')",
        'gifBg': "url('/images/gif bg.gif')",
        'aboutUsHeroBg': "url('/images/About us Hero bg.png')",
        'serviceHeroBg': "url('/images/service hero bg.png')",
        'missionBg': "url('/images/mission-bg.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}