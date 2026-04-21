/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#E5F1FF',
          100: '#BEDBFF',
          400: '#1191FF',
          500: '#0279FF',
          600: '#026DFF',
        },
        navy: {
          700: '#00325F',
          800: '#103E72',
          900: '#13263D',
        },
        ink: {
          300: '#C7D3EB',
          400: '#90A1B9',
          500: '#667085',
          700: '#22272F',
          900: '#10182E',
        },
        surface: '#F5F8FD',
        success: '#00C950',
        warn: '#F0A152',
        accent: '#FDC700',
      },
      boxShadow: {
        card: '4px 4px 24px rgba(0,0,0,0.05)',
        btn: '0px 6px 11.2px rgba(2,121,255,0.4)',
        soft: '0px 4px 8.9px 1px rgba(9,87,174,0.13)',
      },
      borderRadius: {
        card: '20px',
        hero: '28px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 260ms ease-out',
      },
    },
  },
  plugins: [],
};
