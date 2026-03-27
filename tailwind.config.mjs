/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        eden: {
          cream: '#f6f3ea',
          green: {
            50: '#f0f7ed',
            100: '#d4eacc',
            200: '#a8d599',
            300: '#7cbf66',
            400: '#4da336',
            500: '#00954d',
            600: '#486543',
            700: '#2d4a28',
            800: '#1a2e16',
            900: '#0d1a0b',
          },
          leaf: '#89A74A',
          bark: '#3d2b1f',
          soil: '#5c4033',
          moss: '#6b8e23',
        },
        pixel: {
          black: '#1a1a1a',
          white: '#fafaf5',
          gray: {
            100: '#f0ede4',
            200: '#ddd8cc',
            300: '#b8b2a4',
            400: '#8a8478',
            500: '#666055',
            600: '#444039',
          }
        }
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Noto Sans"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
        display: ['"Pixelify Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pixel-blink': 'pixelBlink 1.2s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pixelBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
