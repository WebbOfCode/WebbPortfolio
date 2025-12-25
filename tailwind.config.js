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
        'burnt-orange': 'var(--accent-gold)',
        'warm-white': '#eff6ff',
        'teal': 'var(--accent-teal)',
        'slate-dark': '#0a0a0a',
        'bg-main': 'var(--bg-main)',
        'bg-elevated': '#151515',
        'text-primary': 'var(--text-main)',
        'text-muted': 'var(--text-muted)',
        'accent-gold': 'var(--accent-gold)',
        'accent-gold-dark': '#f59e0b',
        'accent-teal': 'var(--accent-teal)',
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