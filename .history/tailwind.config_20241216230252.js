/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bolt-elements-background-depth-1': '#1A1B1E',
        'bolt-elements-textPrimary': '#FFFFFF',
        accent: '#007AFF',
      },
      height: {
        'header': 'var(--header-height)',
      },
    },
  },
  plugins: [],
} 