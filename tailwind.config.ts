import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    /* https://colorhunt.co/palette/27374d526d829db2bfdde6ed */
    colors: {
      'background-dark': '#1c1a11',
      'background-light': '#27374D',
      'primary-dark': '#526D82',
      'primary-light': '#DDE6ED',
      'accent': '#9DB2BF',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-barlow)'],
        mono: ['var(--font-roboto-mono)'],
        barlow: ['var(--font-barlow)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
