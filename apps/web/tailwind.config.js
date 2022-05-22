const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        surface: {
          dark: {
            DEFAULT: '#171A23',
            light: '#1D212D',
            lighter: '#303649',
            lightest: '#414965',
          },
          light: {
            DEFAULT: '#FFFFFF',
            dark: '#F7FAFC',
            darker: '#ECECF9',
            darkest: '#DFDFEE',
          },
        },
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          DEFAULT: '#818cf8',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
