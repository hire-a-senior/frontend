import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#333333',
        white: '#EFEFEF',
        purple: {
          light: '#694281',
          dark: '#4A2367',
        },
        magnolia: '#EDF4ED',
        error: '#E43C3C',
        warning: '#D6A909',
      },
    },
  },
  plugins: [],
}
export default config
