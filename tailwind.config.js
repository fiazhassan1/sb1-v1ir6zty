/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c7d9ff',
          300: '#9ebeff',
          400: '#7098ff',
          500: '#4672fd',
          600: '#2f4cf4',
          700: '#243bdb',
          800: '#2034b1',
          900: '#1f318a',
          950: '#172057',
        },
        secondary: {
          50: '#f0fdfd',
          100: '#ccfafc',
          200: '#9df3f9',
          300: '#64e8f4',
          400: '#39d4e5',
          500: '#17b3c9',
          600: '#0f8fa9',
          700: '#107287',
          800: '#135d6f',
          900: '#154d5d',
          950: '#083442',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdaa9',
          300: '#ffbf71',
          400: '#fd9836',
          500: '#fc7a13',
          600: '#ed5a07',
          700: '#c43e09',
          800: '#9c3110',
          900: '#7e2a10',
          950: '#441205',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};