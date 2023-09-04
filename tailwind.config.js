/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      colors: {
        'cyprus': {
          '50': '#effefb',
          '100': '#c8fff3',
          '200': '#90ffe7',
          '300': '#51f7da',
          '400': '#1de4c7',
          '500': '#05c7ae',
          '600': '#00a18f',
          '700': '#058074',
          '800': '#0a655d',
          '900': '#0e534e',
          '950': '#004643',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
