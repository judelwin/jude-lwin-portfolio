module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#F5F0FF',
          100: '#E8D9FF',
          200: '#DFC5FE',
          300: '#D1B3FF',
          400: '#C7A5FF',
          500: '#B894FF',
        },
        violet: {
          400: '#A855F7',
          500: '#8A2BE2',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
