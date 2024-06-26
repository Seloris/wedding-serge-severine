/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#212993',
        primaryHover: '#cbc7c0',
        primaryLighter: '#eae6e0',
        secondary: '#de7830',
        secondaryLighter: '#cbd6d9',
        background: '#fafaf9',
        black: 'black',
        white: 'white',
      },
      fontFamily: {
        body: '"noto-serif", serif',
        title: '"Alex Brush", serif',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.1s ease-in-out forwards',
        'rotate-infinite': 'rotate 0.8s linear infinite',
      },
    },
  },
  plugins: [],
  safelist: ['opacity-0'],
};
