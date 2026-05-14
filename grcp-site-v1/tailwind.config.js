/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hind: ['Hind', 'Tahoma', 'sans-serif'],
        'dm-sans': ['"DM Sans"', 'Tahoma', 'sans-serif'],
        tahoma: ['Tahoma', 'sans-serif'],
      },
      colors: {
        brand: {
          primary:   '#5B1027',
          highlight: '#C32033',
          green:     '#00873d',
          dark:      '#222222',
          neutral:   '#BFBFBF',
          soft:      '#F3DAB2',
        },
      },
    },
  },
  plugins: [],
};
