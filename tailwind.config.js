/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      mm: '400px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      'max-xl': { max: '1300px' },
      'max-lg': { max: '1024px' },
      'max-md': { max: '768px' },
      'max-sm': { max: '640px' },
      'max-mm': { max: '400px' }
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      backgroundImage: {
        explosion: 'url("/steam-skull.jpg")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/brown1.jpg")',
      },
      keyframes: {
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%' : { transform: 'rotate(-360deg)' }
        }
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        spinner: 'spinner 6s linear infinite'
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.translate-175': {
          transform: 'translate(175%)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
