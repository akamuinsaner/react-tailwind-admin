import type { Config } from 'tailwindcss'
const { createThemes } = require('tw-colors')

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        variables: {},
        extend: {
            transitionProperty: {
                height: 'height',
                'max-height': 'max-height',
                left: 'left',
                top: 'top',
            },
            colors: {},
            height: {
                'rt-large': '48px',
                'rt-medium': '40px',
                'rt-small': '32px',
            },
            width: {
                'rt-large': '48px',
                'rt-medium': '40px',
                'rt-small': '32px',
            },
            fontSize: {
                'rt-large': '16px',
                'rt-medium': '14px',
                'rt-small': '14px',
                inherit: 'inherit',
            },
        },
    },
    plugins: [
        require('@mertasan/tailwindcss-variables'),
        createThemes({
            light: {
                main: '#fff',
                mainText: '#1f2937', // gray-900
                'main-hover': '#f3f4f6', // gray-100
                mainBorder: '#e5e7eb', // gray-200
                content: '#F1F5F9',
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
                disableBg: '#e5e7eb', // gray-200
                disableText: '#9ca3af', // gray-300
            },
            dark: {
                main: '#1f2937', // gray-800
                mainText: '#e5e7eb', // gray-200
                'main-hover': '#4b5563', // gray-600
                mainBorder: '#030712', // gray-950
                content: '#111827', // gray-900
                primary: '#2563eb',
                'primary-hover': '#1d4ed8',
                hover: '#616161',
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
                disableBg: '#6b7280', // gray-500
                disableText: '#9ca3af', // gray-400
            },
        }),
    ],
    function({ addVariant }: any) {
        addVariant('child', '& > *')
        addVariant('child-hover', '& > *:hover')
    },
}
export default config
