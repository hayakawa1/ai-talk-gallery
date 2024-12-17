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
        'bolt-elements-background-depth-1': '#FFFFFF',
        'bolt-elements-textPrimary': '#171717',
        accent: '#007AFF',
        'card': '#F3F4F6',
        'card-hover': '#E5E7EB',
      },
      borderColor: {
        'zinc-800': '#E5E7EB',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#171717',
            a: {
              color: '#007AFF',
              '&:hover': {
                color: '#0056b3',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}