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
        success: '#4ade80',
        'success-hover': '#22c55e',
        info: '#38bdf8',
        'info-hover': '#0ea5e9',
        warning: '#facc15',
        'warning-hover': '#eab308',
        danger: '#f43f5e',
        'danger-hover': '#e11d48',
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
