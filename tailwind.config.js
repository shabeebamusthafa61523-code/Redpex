/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redpex: {
          red: '#be1e2d',
          'red-dark': '#9b1824',
          'red-light': '#e63946',
          dark: '#0a0d14',
          'dark-card': '#121622',
          'dark-border': '#1e2433',
          cream: '#faf8f5',
          gold: '#f59e0b',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'shield-glow': 'shieldGlow 4s infinite ease-in-out',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(190, 30, 45, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(190, 30, 45, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shieldGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(190, 30, 45, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 35px rgba(255, 80, 80, 0.9))' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
