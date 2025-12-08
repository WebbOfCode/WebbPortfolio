/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        'burnt-orange': '#fbbf24',
        'warm-white': '#eff6ff',
        'teal': '#22c55e',
        'slate-dark': '#0a0a0a',
        'bg-main': '#0a0a0a',
        'bg-elevated': '#151515',
        'text-primary': '#f5f5f5',
        'text-muted': '#b0b0b0',
        'accent-gold': '#fbbf24',
        'accent-gold-dark': '#f59e0b',
        'accent-teal': '#22c55e',
        'border-default': '#2a2a2a',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
      borderRadius: {
        'xl': '12px',
      },
    },
  },
  plugins: [],
}