module.exports = {
    theme: {
        extend: {
            keyframes: {
                fadeInLeft: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate3d(-50%, 0, 0)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateZ(0)',
                    },
                },
                fadeInDown: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate3d(0, -50%, 0)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateZ(0)',
                    },
                },
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate3d(0, 50%, 0)',
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
                fadeInLeft: 'fadeInLeft 0.5s linear forwards',
                fadeInDown: 'fadeInDown 0.5s linear forwards',
                fadeInUp: 'fadeInUp 0.5s linear forwards',
                flow: 'flow 1.5s linear infinite',
                linearProgress: 'linearProgress 1s ease-in-out infinite',
                circularProgress: 'circularProgress 1s ease-in-out infinite',
            },
        },
    },
};
