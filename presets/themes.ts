const { createThemes } = require('tw-colors');

module.exports = {
    theme: {},
    plugins: [
        createThemes({
            light: {
                main: '#fff',
                mainText: '#1f2937', // gray-900
                'main-hover': '#f3f4f6', // gray-100
                mainBorder: '#d1d5db', // gray-300
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
                disableText: '#9ca3af', // gray-400
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
            forest: {
                main: '#5e7f52', // gray-800
                mainText: '#fff', // gray-200
                'main-hover': '#4c6d42', // gray-600
                mainBorder: '#e3f1d9', // gray-950
                content: '#4c6d42', // gray-900
                primary: '#2563eb',
                'primary-hover': '#1d4ed8',
                hover: '#616161',
                secondary: '#d8b08c',
                'secondary-hover': '#7e22ce',
                success: '#16a34a',
                'success-hover': '#15803d',
                info: '#0284c7',
                'info-hover': '#0369a1',
                warning: '#ca8a04',
                'warning-hover': '#a16207',
                danger: '#dc2626',
                'danger-hover': '#b91c1c',
                disableBg: '#d1d5db', // gray-500
                disableText: '#9ca3af', // gray-400
            },
        }),
    ],
};
