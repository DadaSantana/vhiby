import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'main-blue': 'rgba(45, 37, 61, 0.95)',
        'light-blue': '#3BBCD9',
        'skin': '#F2C3A7',
      },
      colors: {
        'main-blue': 'rgba(45, 37, 61, 1)',
        'light-blue': '#3BBCD9',
        'skin': '#F2C3A7',
      },
      borderColor: {
        'main-blue': 'rgba(45, 37, 61, 1)',
        'light-blue': '#3BBCD9',
        'skin': '#F2C3A7',
      }
    },
  },
  plugins: [],
}
export default config
