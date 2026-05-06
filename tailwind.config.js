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
          100: '#D9E5FE',
          200: '#BEDBFF',
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
      backgroundImage: {
        'brand-gradient': 'linear-gradient(70deg, #1191FF 0%, #026DFF 100%)',
      },
      boxShadow: {
        card: '4px 4px 24px rgba(0,0,0,0.05)',
        btn: '0 10px 15px rgba(21,93,252,0.20), 0 4px 6px rgba(21,93,252,0.20)',
        soft: '0 4px 8.9px 1px rgba(9,87,174,0.13)',
        modal: '0 20px 31.2px 3px rgba(0,0,0,0.05), 0 8px 10px -1px rgba(0,0,0,0.04)',
      },
      borderRadius: {
        card: '24px',
        hero: '32px',
        outer: '40px',
        chip: '21px',
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
