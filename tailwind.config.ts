import type { Config } from 'tailwindcss';
const { createThemes } = require('tw-colors');
let columnsSafeList = [];
let gapSafeList = [];
let spaceSafeList = [];
let dividerGapList = [];
Array(1000)
    .fill(0)
    .forEach((a, i) => {
        columnsSafeList = [
            ...columnsSafeList,
            `columns-${i + 1}`,
            `sm:columns-${i + 1}`,
            `md:columns-${i + 1}`,
            `lg:columns-${i + 1}`,
            `xl:columns-${i + 1}`,
            `2xl:columns-${i + 1}`,
        ];
        gapSafeList = [
            ...gapSafeList,
            `gap-[${i + 1}px]`,
            `sm:gap-[${i + 1}px]`,
            `md:gap-[${i + 1}px]`,
            `lg:gap-[${i + 1}px]`,
            `xl:gap-[${i + 1}px]`,
            `2xl:gap-[${i + 1}px]`,
        ];
        spaceSafeList = [...spaceSafeList, `[&>*]:mb-[${i + 1}px]`];
        dividerGapList = [
            ...dividerGapList,
            `mx-[${i + 1}px]`,
            `my-[${i + 1}px]`,
        ];
    });

const config: Config = {
    safelist: [
        ...columnsSafeList,
        ...gapSafeList,
        ...spaceSafeList,
        ...dividerGapList,
    ],
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        variables: {},
        extend: {
            flexGrow: {
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
                8: '8',
                9: '9',
                10: '10',
            },
            transitionProperty: {
                height: 'height',
                'max-height': 'max-height',
                left: 'left',
                top: 'top',
            },
            colors: {},
            minHeight: {
                'rt-large': '48px',
                'rt-medium': '40px',
                'rt-small': '32px',
            },
            height: {
                'rt-large': '48px',
                'rt-medium': '40px',
                'rt-small': '32px',
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
            },
            width: {
                'rt-large': '48px',
                'rt-medium': '40px',
                'rt-small': '32px',
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
            },
            fontSize: {
                'rt-large': '16px',
                'rt-medium': '14px',
                'rt-small': '14px',
            },
            boxShadow: {
                tableLeft: '4px 0 8px -4px rgba(0,0,0,0.2)',
                tableRight: '-4px 0 8px -4px rgba(0,0,0,0.2)',
            },
        },
    },
    plugins: [
        require('@mertasan/tailwindcss-variables'),
        require('tailwind-scrollbar'),
        require('tailwind-children'),
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
                disableText: '#d1d5db', // gray-300
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
};
export default config;
