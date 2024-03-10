import type { Config } from "tailwindcss";
const { createThemes } = require('tw-colors');

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    variables: {
    },
    screens: {

    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height',
        'left': 'left',
        'top': 'top',
      },
      colors: {

      }
    },
  },
  plugins: [
    require('@mertasan/tailwindcss-variables'),
    createThemes({
      light: {
        main: '#fff',
        'main-hover': '#f1f5f9',
        content: '',
        primary: '#2563eb',
        'primary-hover': '#1d4ed8',
        hover: '#f1f5f9',
        secondary: '#9333ea',
        'secondary-hover': '#7e22ce',
        success: '#16a34a',
        'success-hover': '#15803d',
        info: '#0284c7',
        'info-hover': '#0369a1',
        warning: '#ca8a04',
        'warning-hover': '#a16207',
        danger: '#dc2626',
        'danger-hover': '#b91c1c',
        disableBg: '#cbd5e1',
        disableText: '#94a3b8'
      },
      dark: {

      }
    })
  ],
  function({ addVariant }: any) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
  }
};
export default config;
