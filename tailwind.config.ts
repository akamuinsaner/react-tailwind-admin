import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    presets: [
        require('./presets/safeList'),
        require('./presets/animations'),
        require('./presets/themes'),
    ],
    theme: {
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
                opacity: 'opacity',
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
                'rt-medium': '16px',
                'rt-small': '14px',
            },
            lineHeight: {
                'rt-large': '48px',
                'rt-medium': '40px',
                'rt-small': '32px',
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
        require('@xpd/tailwind-3dtransforms'),
    ],
};
export default config;
