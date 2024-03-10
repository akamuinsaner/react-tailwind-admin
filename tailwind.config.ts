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
        content: '',
        primary: '#0066CC',
        hover: 'rgb(241 245 249)',
        secondary: '#2E7D32',
        success: '#00d68f',
        info: '#0288D1',
        warning: '#ED6C02',
        danger: '#D32F2F',
        disableBg: '#8f9bb33d',
        disableText: '#8f9bb37a'
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
