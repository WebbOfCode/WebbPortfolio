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
        'slate-dark': '#0c0b0d',
        'bg-main': '#0c0b0d',
        'bg-elevated': '#323b44',
        'text-primary': '#e1e1e2',
        'text-muted': '#979898',
        'accent-gold': '#fbbf24',
        'accent-gold-dark': '#9a6427',
        'accent-teal': '#22c55e',
        'border-default': '#58595a',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6B6B',
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