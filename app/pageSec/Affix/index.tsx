'use client';
import Box from '@/src/components/Box';
import Button from '@/src/components/Button';
import IconButton from '@/src/components/Button/IconButton';
import {
    WrenchScrewdriverIcon,
    Cog6ToothIcon,
    SunIcon,
    MoonIcon,
    ArrowsPointingOutIcon,
    BeakerIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';

import {
    MouseEventHandler,
    SyntheticEvent,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { flushSync } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { GlobalContext, IGlobalContext } from '@/app/globalContext';
import { m } from 'framer-motion';

const Affix = () => {
    const [undeterminate, setUndeterminate] = useState<boolean>(false);
    const [colorMode, setColorMode] = useState<boolean>(false);
    const { setTheme, theme } = useContext<IGlobalContext>(GlobalContext);
    const boxClassName = twMerge(
        `h-12 w-12 bg-main text-mainText fixed bottom-10 right-10 rounded-full`,
    );

    const mainClassName = twMerge(
        `bg-inherit text-inherit h-full w-full rounded-full rounded-full 
        shadow-xl hover:bg-main-hover absolute left-0 top-0 transition-transform`,
    );

    const openBtnClassName = twMerge(
        mainClassName,
        classNames({ 'bg-primary text-white hover:bg-primary': undeterminate }),
    );

    const screenClassName = twMerge(
        mainClassName,
        'duration-100',
        classNames({ ['-translate-y-[130%]']: undeterminate }),
    );
    const settingClassName = twMerge(
        mainClassName,
        'duration-200',
        classNames({ ['-translate-y-[260%]']: undeterminate }),
    );

    const themeClassName = twMerge(
        mainClassName,
        classNames({ 'bg-primary text-white hover:bg-primary': colorMode }),
    );
    const themeBoxClassName = twMerge(
        boxClassName,
        'duration-300 absolute inset-0',
        classNames({
            ['-translate-y-[390%]']: undeterminate,
            ['z-[1]']: colorMode,
        }),
    );

    const lightThemeClassName = twMerge(
        mainClassName,
        'duration-100',
        classNames({
            ['-translate-y-[130%]']: colorMode,
            'bg-primary text-white hover:bg-primary': theme === 'light',
        }),
    );

    const darkThemeClassName = twMerge(
        mainClassName,
        'duration-200',
        classNames({
            ['-translate-y-[260%]']: colorMode,
            'bg-primary text-white hover:bg-primary': theme === 'dark',
        }),
    );

    const toggleActive = () => {
        setUndeterminate(!undeterminate);
    };
    const toggleColorMode = () => {
        setColorMode(!colorMode);
    };
    const deActive = useCallback(() => {
        if (colorMode) {
            setColorMode(false);
            setUndeterminate(true);
        } else {
            setUndeterminate(false);
        }
    }, [undeterminate, colorMode]);

    useEffect(() => {
        document.addEventListener('click', deActive);
        return () => document.removeEventListener('click', deActive);
    }, [undeterminate, colorMode]);

    useEffect(() => {
        if (colorMode) setUndeterminate(false);
    }, [colorMode]);

    const onThemeBtnClick =
        (theme: string): MouseEventHandler<HTMLButtonElement> =>
        e => {
            flushSync(() => {
                if (!document.startViewTransition) {
                    setTheme(theme);
                    return;
                }
                const transition = document.startViewTransition(() => {
                    setTheme(theme);
                });
                const pageX = e.pageX,
                    pageY = e.pageY;
                const endRadius = Math.hypot(
                    Math.max(pageX, innerWidth - pageX),
                    Math.max(pageY, innerHeight - pageY),
                );
                transition.ready.then(() => {
                    document.documentElement.animate(
                        {
                            clipPath: [
                                `circle(0 at ${pageX}px ${pageY}px)`,
                                `circle(${endRadius}px at ${pageX}px ${pageY}px)`,
                            ],
                        },
                        {
                            duration: 500,
                            easing: 'ease-in',
                            pseudoElement: '::view-transition-new(root)',
                        },
                    );
                });
            });
        };

    return (
        <Box
            className={boxClassName}
            onClick={e => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
            }}
        >
            <Box className={themeBoxClassName}>
                <IconButton
                    className={darkThemeClassName}
                    onClick={onThemeBtnClick('dark')}
                >
                    <MoonIcon />
                </IconButton>
                <IconButton
                    className={lightThemeClassName}
                    onClick={onThemeBtnClick('light')}
                >
                    <SunIcon />
                </IconButton>
                <IconButton
                    className={themeClassName}
                    onClick={toggleColorMode}
                >
                    <BeakerIcon />
                </IconButton>
            </Box>
            <IconButton className={settingClassName}>
                <Cog6ToothIcon />
            </IconButton>
            <IconButton className={screenClassName}>
                <ArrowsPointingOutIcon />
            </IconButton>
            <IconButton className={openBtnClassName} onClick={toggleActive}>
                <WrenchScrewdriverIcon />
            </IconButton>
        </Box>
    );
};

export default Affix;
