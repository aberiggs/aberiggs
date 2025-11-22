import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      colors: {
        // Modern dark color scheme inspired by GitHub Dark and VSCode
        background: {
          DEFAULT: '#0d1117',
          subtle: '#161b22',
          elevated: '#1c2128',
          overlay: '#21262d',
        },
        border: {
          DEFAULT: '#30363d',
          subtle: '#21262d',
          accent: '#58a6ff',
        },
        text: {
          primary: '#e6edf3',
          secondary: '#8b949e',
          tertiary: '#6e7681',
          link: '#58a6ff',
          'link-hover': '#79c0ff',
        },
        accent: {
          blue: '#58a6ff',
          cyan: '#39d0d8',
          green: '#3fb950',
          yellow: '#d29922',
          orange: '#ff9955',
          red: '#ff7b72',
          purple: '#bc8cff',
          pink: '#ff6eb4',
        },
        code: {
          bg: '#161b22',
          'inline-bg': 'rgba(110, 118, 129, 0.2)',
          'inline-text': '#e6edf3',
        },
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'Consolas', 'monospace'],
        barlow: ['var(--font-barlow)'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#e6edf3',
            '--tw-prose-headings': '#e6edf3',
            '--tw-prose-lead': '#8b949e',
            '--tw-prose-links': '#58a6ff',
            '--tw-prose-bold': '#e6edf3',
            '--tw-prose-counters': '#8b949e',
            '--tw-prose-bullets': '#6e7681',
            '--tw-prose-hr': '#30363d',
            '--tw-prose-quotes': '#8b949e',
            '--tw-prose-quote-borders': '#30363d',
            '--tw-prose-captions': '#8b949e',
            '--tw-prose-code': '#e6edf3',
            '--tw-prose-pre-code': '#e6edf3',
            '--tw-prose-pre-bg': '#161b22',
            '--tw-prose-th-borders': '#30363d',
            '--tw-prose-td-borders': '#30363d',
            maxWidth: 'none',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [typography],
}
export default config
