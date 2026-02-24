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
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        'burnt-orange': 'var(--accent-gold)',
        'warm-white': '#eff6ff',
        'teal': 'var(--accent-teal)',
        'slate-dark': '#0a0a0a',
        'bg-main': 'var(--bg-main)',
        'bg-elevated': '#151515',
        'text-primary': 'var(--text-main)',
        'text-secondary': '#d1d5db',
        'text-muted': 'var(--text-muted)',
        'accent-gold': 'var(--accent-gold)',
        'accent-gold-dark': '#f59e0b',
        'accent-teal': 'var(--accent-teal)',
        'accent-bronze': '#cd7f32',
        'border-default': '#2a2a2a',
        // Trust & professionalism colors
        'trust-blue': '#2563eb',
        'trust-blue-dark': '#1e40af',
        'military-olive': '#4A5D23',
        'military-olive-dark': '#3d4d1d',
        // Status colors
        'status-green': '#10B981',
        'status-amber': '#F59E0B',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'xl': '12px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      maxWidth: {
        'content': '1200px',
      },
      letterSpacing: {
        'tighter': '-0.02em',
      },
    },
  },
  plugins: [],
}