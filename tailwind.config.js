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
      ], // Default font family, primary font for the entire page
      mono: [[...defaultTheme.fontFamily.mono]], // Font family for code
      inter: ['Inter', 'sans-serif'], // Secondary font family
    },
    extend: {},
  },
  plugins: [],
};
