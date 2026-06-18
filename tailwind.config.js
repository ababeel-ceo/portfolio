/** @type {import('tailwindcss').Config} */

// Brand palette — Primary #13475A (deep teal), Secondary #238AAF (teal),
// Accent #E63946 (red). `primary` and `brand` share one teal scale so both
// the shared component classes and data-driven gradients stay in sync.
const teal = {
  50: '#ecfbff',
  100: '#cef3fc',
  200: '#a3e7f7',
  300: '#6ad4ed',
  400: '#38bcdc',
  500: '#238aaf', // secondary
  600: '#1d7393',
  700: '#1a5f7a',
  800: '#13475a', // primary brand
  900: '#103a4a',
  950: '#0a2733',
};

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        primary: teal,
        brand: teal,
        accent: {
          50: '#fdeef0',
          100: '#fbd5d9',
          200: '#f6abb3',
          300: '#f08a93',
          400: '#ee5d68',
          500: '#e63946', // accent
          600: '#d11f2d',
          700: '#b01825',
          800: '#8f1620',
          900: '#76161e',
        },
        surface: {
          50: '#f2f7f9',
          100: '#dfeaed',
          200: '#bdd0d6',
          300: '#90aab3',
          400: '#688592',
          500: '#4a626c',
          600: '#35474f',
          700: '#243239',
          800: '#17242a',
          900: '#0e1a1f',
          950: '#081317',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 9s ease-in-out infinite',
        'marquee': 'marquee 38s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
