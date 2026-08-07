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
        // Display face for headings, Inter for body, mono for labels/eyebrows.
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
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
        // Cool, deep neutral scale tuned for a near-black premium dark UI.
        surface: {
          50: '#f3f8fa',
          100: '#e2edf1',
          200: '#c3d6dd',
          300: '#93b0bb',
          400: '#5f8091',
          500: '#41616f',
          600: '#2e4854',
          700: '#1f323b',
          800: '#13222a',
          900: '#0a151b',
          950: '#050c10',
        },
      },
      borderRadius: {
        '4xl': '1.75rem',
        '5xl': '2.25rem',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 50px -30px rgba(0,0,0,0.9)',
        lift: '0 28px 70px -34px rgba(35,138,175,0.55), 0 1px 0 0 rgba(255,255,255,0.06) inset',
        glow: '0 0 0 1px rgba(35,138,175,0.28), 0 18px 50px -20px rgba(35,138,175,0.5)',
        float: '0 24px 60px -20px rgba(0,0,0,0.75)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 12s ease-in-out infinite',
        shimmer: 'shimmer 2.8s ease-in-out infinite',
        bob: 'bob 3.6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        caret: 'caret 1.1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.94) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -28px, 0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.9' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.85)', opacity: '0.5' },
          '70%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        caret: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
