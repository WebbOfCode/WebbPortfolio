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
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Yeezy Design System
        'yzy-void': 'var(--yzy-void)',
        'yzy-ash': 'var(--yzy-ash)',
        'yzy-concrete': 'var(--yzy-concrete)',
        'yzy-burnished': 'var(--yzy-burnished)',
        'yzy-dust': 'var(--yzy-dust)',
        'yzy-bone': 'var(--yzy-bone)',
        'yzy-construction': 'var(--yzy-construction)',
        'yzy-safety': 'var(--yzy-safety)',
        'yzy-oxide': 'var(--yzy-oxide)',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
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
