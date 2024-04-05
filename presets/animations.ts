const plugin = require('tailwindcss/plugin');

module.exports = {
    theme: {
        extend: {
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate3d(0, 100%, 0)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateZ(0)',
                    },
                },
                fadeInDown: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate3d(0, -100%, 0)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateZ(0)',
                    },
                },
                fadeInLeft: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate3d(-100%, 0, 0)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateZ(0)',
                    },
                },
                fadeInRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate3d(100%, 0, 0)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateZ(0)',
                    },
                },
                linearProgress: {
                    '0%': {
                        left: '0',
                        transform: 'translateX(-100%)',
                    },
                    '100%': {
                        left: '100%',
                        transform: 'translateX(0)',
                    },
                },
                circularProgress: {
                    '0%': {
                        'stroke-dashoffset': '113px',
                    },
                    '100%': {
                        'stroke-dashoffset': '-113px',
                    },
                },
                flow: {
                    '0%': {
                        left: '0',
                        transform: 'translateX(-100%)',
                    },
                    '80%': {
                        left: '100%',
                        transform: 'translateX(0)',
                    },
                    '100%': {
                        left: '100%',
                        transform: 'translateX(0)',
                    },
                },
            },
            animation: {
                fadeInUp: 'fadeInUp 1s linear forwards',
                fadeInDown: 'fadeInDown 1s linear forwards',
                fadeInLeft: 'fadeInLeft 1s linear forwards',
                fadeInRight: 'fadeInRight 1s linear forwards',
                flow: 'flow 1.5s linear infinite',
                linearProgress: 'linearProgress 1s ease-in-out infinite',
                circularProgress: 'circularProgress 1s ease-in-out infinite',
            },
        },
    },
    plugins: [
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    'animation-delay': value => {
                        return {
                            'animation-delay': value,
                        };
                    },
                    'animation-duration': value => {
                        return {
                            'animation-duration': value,
                        };
                    },
                },
                {
                    values: theme('transitionDelay'),
                },
            );
        }),
    ],
};
