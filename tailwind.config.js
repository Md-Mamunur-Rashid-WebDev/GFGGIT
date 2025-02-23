/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor1: '#3A7BD5',
        primaryColor2: '#00D2FF',
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
        'cloudServiceHeroBg': "url('/images/cloudServicesHeroBg.png')",
        'solutionsBg': "url('/images/solutionsHeroBg.png')",
        'digital360Bg': "url('/images/digital360Bg.png')",
        'coreCloudBg': "url('/images/coreCloudBg.png')",
        'platformBg': "url('/images/platformBg.png')",
        'cdmSolutionsBg': "url('/images/cdmSolutionsBg.png')",
        'analyticsAiSolutionBg': "url('/images/analyticsAiSolutionBg.png')",
        'financialServiceCloudBg': "url('/images/financialServiceCloudBg.png')",
        'consumerProductCloudBg': "url('/images/consumerProductCloudBg.png')",
        'healthcareCloudBg': "url('/images/healthcareCloudBg.png')",
        'insuranceSolutionsBg': "url('/images/insuranceSolutionsBg.png')",
        'manufacturingCloudBg': "url('/images/manufacturingCloudBg.png')",
        'RetailServiceBg': "url('/images/RetailServiceBg.png')",
        'EnergyUtilitiesBg': "url('/images/EnergyUtilitiesBg.png')",
        'TelecomCloudBg': "url('/images/TelecomCloudBg.png')",
        'contactBannerBg': "url('/images/contactUsBanner.png')",
        'caseStudyBg': "url('/images/caseStudyBg.png')",
        '50milions': "url('/images/50milions.png')",
        'highlightBg': "url('/images/highlightBg.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}