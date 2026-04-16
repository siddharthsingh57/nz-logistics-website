import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'bg-alt': 'rgb(var(--bg-alt) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)',
          light: 'rgb(var(--primary-light) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          hover: 'rgb(var(--accent-hover) / <alpha-value>)',
        },
        ocean: 'rgb(var(--ocean) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        'border-clr': 'var(--border-color)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'gradient-shift': 'gradientShift 10s ease infinite',
        'line-draw': 'lineDraw 2.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'orb-drift': 'orbDrift 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        lineDraw: {
          to: { strokeDashoffset: '0' },
        },
        orbDrift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(20px, -15px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 10px) scale(0.95)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(26, 42, 34, 0.08)',
        'card-hover': '0 20px 60px -12px rgba(26, 42, 34, 0.16)',
        'btn-accent': '0 8px 32px -4px rgba(196, 98, 45, 0.35)',
      },
    },
  },
  plugins: [],
}

export default config
