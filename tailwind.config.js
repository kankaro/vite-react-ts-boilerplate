import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        ['InterVariable', ...defaultTheme.fontFamily.sans],
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
      mono: [[...defaultTheme.fontFamily.mono]],
    },
    extend: {},
  },
  plugins: [],
};
