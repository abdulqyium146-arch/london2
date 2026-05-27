import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A1628',
          'navy-mid': '#1E3A5F',
          'navy-light': '#2D5A8E',
          orange: '#F97316',
          amber: '#F59E0B',
          'orange-dark': '#EA580C',
          'orange-light': '#FB923C',
          gold: '#EAB308',
          'gold-light': '#FDE047',
        },
        surface: {
          dark: '#0A1628',
          card: '#111827',
          'card-hover': '#1F2937',
          border: '#1F2937',
          'border-light': '#374151',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 50%, #0A1628 100%)',
        'emergency-gradient': 'linear-gradient(135deg, #EA580C 0%, #F97316 50%, #F59E0B 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(30,58,95,0.5) 0%, rgba(10,22,40,0.8) 100%)',
        'cta-gradient': 'linear-gradient(135deg, #F97316 0%, #EF4444 100%)',
        'glow-orange': 'radial-gradient(circle at center, rgba(249,115,22,0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
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
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(249,115,22,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(249,115,22,0.6)' },
        },
      },
      boxShadow: {
        'orange-glow': '0 0 30px rgba(249,115,22,0.4)',
        'orange-glow-lg': '0 0 60px rgba(249,115,22,0.3)',
        'navy-deep': '0 25px 50px rgba(10,22,40,0.8)',
        'card-hover': '0 20px 40px rgba(0,0,0,0.4)',
        'glass': '0 4px 30px rgba(0,0,0,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
