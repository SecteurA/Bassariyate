import type { Config } from 'tailwindcss';
import { colors } from './lib/colors';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: colors.lavender,
        primary: colors.skyBlue,
        secondary: colors.lavender,
        accent: colors.powderPink,
        'sky-blue': colors.skyBlue,
        lavender: colors.lavender,
        'powder-pink': colors.powderPink,
      },
      backgroundColor: {
        primary: colors.skyBlue,
        secondary: colors.lavender,
        accent: colors.powderPink,
      },
      textColor: {
        primary: colors.skyBlue,
        secondary: colors.lavender,
        accent: colors.powderPink,
      },
      borderColor: {
        DEFAULT: colors.lavender,
        primary: colors.skyBlue,
        secondary: colors.lavender,
        accent: colors.powderPink,
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;