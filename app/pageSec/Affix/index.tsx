'use client';
import Box from '@/src/components/Box';
import IconButton from '@/src/components/Button/IconButton';
import {
    WrenchScrewdriverIcon,
    Cog6ToothIcon,
    SunIcon,
    MoonIcon,
    ArrowsPointingOutIcon,
    BeakerIcon,
    ArrowsPointingInIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';

import {
    CSSProperties,
    MouseEventHandler,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { flushSync } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { GlobalContext, IGlobalContext } from '@/app/globalContext';
import Tooltip from '@/src/components/Tooltip';
import { useDraggable } from '@dnd-kit/core';
import { AFFIXDRAGID } from '@/app/utils/constants';
import { CSS } from '@dnd-kit/utilities';
import ForestIcon from '@/app/utils/icons/ForestIcon';
import DesertIcon from '@/app/utils/icons/DesertIcon';
import { THEME } from '@/app/globalStore/state';
import SkyIcon from '@/app/utils/icons/SkyIcon';

const Affix = () => {
    const fullScreenEleRef = useRef<HTMLElement>(
        document.querySelector('html'),
    );
    const { attributes, listeners, setNodeRef, transform, isDragging } =
        useDraggable({
            id: AFFIXDRAGID,
        });

    const [undeterminate, setUndeterminate] = useState<boolean>(false);
    const [colorMode, setColorMode] = useState<boolean>(false);
    const { setTheme, theme, fullScreen, affixPos, setSettingPanelOpen } =
        useContext<IGlobalContext>(GlobalContext);

    let style: CSSProperties = useMemo(() => {
        return {
            bottom: `${affixPos.bottom}px`,
            right: `${affixPos.right}px`,
            opacity: isDragging ? 0.5 : 1,
            transform: CSS.Translate.toString(transform),
        };
    }, [isDragging, transform, affixPos]);

    const boxClassName = twMerge(
        `h-12 w-12 bg-main text-mainText fixed rounded-full z-10`,
    );

    const mainClassName = twMerge(
        `bg-inherit text-inherit h-full w-full rounded-full rounded-full 
        shadow-md hover:bg-main-hover absolute left-0 top-0 transition-transform`,
    );

    const openBtnClassName = twMerge(
        mainClassName,
        'z-10',
        classNames({
            'bg-primary text-white hover:bg-primary': undeterminate,
        }),
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
            ['z-20']: colorMode,
        }),
    );

    const lightThemeClassName = twMerge(
        mainClassName,
        'duration-100',
        classNames({
            ['-translate-y-[130%]']: colorMode,
            'bg-primary text-white hover:bg-primary': theme === THEME['light'],
        }),
    );

    const darkThemeClassName = twMerge(
        mainClassName,
        'duration-200',
        classNames({
            ['-translate-y-[260%]']: colorMode,
            'bg-primary text-white hover:bg-primary': theme === THEME['dark'],
        }),
    );

    const forestThemeClassName = twMerge(
        mainClassName,
        'duration-300',
        classNames({
            ['-translate-y-[390%]']: colorMode,
            'bg-primary text-white hover:bg-primary': theme === THEME['forest'],
        }),
    );

    const desertThemeClassName = twMerge(
        mainClassName,
        'duration-300',
        classNames({
            ['-translate-y-[520%]']: colorMode,
            'bg-primary text-white hover:bg-primary': theme === THEME['desert'],
        }),
    );

    const skyThemeClassName = twMerge(
        mainClassName,
        'duration-300',
        classNames({
            ['-translate-y-[650%]']: colorMode,
            'bg-primary text-white hover:bg-primary': theme === THEME['sky'],
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

    useEffect(() => {
        setUndeterminate(false);
        setColorMode(false);
    }, [isDragging]);

    const onThemeBtnClick =
        (theme: THEME): MouseEventHandler<HTMLButtonElement> =>
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

    const toggleFullScreen = () => {
        if (!fullScreen) {
            fullScreenEleRef.current.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const openSettingPanel = () => {
        setSettingPanelOpen(true);
        setUndeterminate(false);
        setColorMode(false);
    };

    return (
        <Box
            className={boxClassName}
            onClick={e => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
            }}
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
        >
            <Box className={themeBoxClassName}>
                <Tooltip title='sky' placement='left' arrow>
                    <IconButton
                        className={skyThemeClassName}
                        onClick={onThemeBtnClick(THEME['sky'])}
                    >
                        <SkyIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='desert' placement='left' arrow>
                    <IconButton
                        className={desertThemeClassName}
                        onClick={onThemeBtnClick(THEME['desert'])}
                    >
                        <DesertIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='forest' placement='left' arrow>
                    <IconButton
                        className={forestThemeClassName}
                        onClick={onThemeBtnClick(THEME['forest'])}
                    >
                        <ForestIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='dark' placement='left' arrow>
                    <IconButton
                        className={darkThemeClassName}
                        onClick={onThemeBtnClick(THEME['dark'])}
                    >
                        <MoonIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='light' placement='left' arrow>
                    <IconButton
                        className={lightThemeClassName}
                        onClick={onThemeBtnClick(THEME['light'])}
                    >
                        <SunIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='themes' placement='left' arrow>
                    <IconButton
                        className={themeClassName}
                        onClick={toggleColorMode}
                    >
                        <BeakerIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Tooltip title='open setting panel' placement='left' arrow>
                <IconButton
                    className={settingClassName}
                    onClick={openSettingPanel}
                >
                    <Cog6ToothIcon />
                </IconButton>
            </Tooltip>

            <Tooltip
                title={!fullScreen ? 'full screen' : 'exit full screen'}
                placement='left'
                arrow
            >
                <IconButton
                    className={screenClassName}
                    onClick={toggleFullScreen}
                >
                    {!fullScreen ? (
                        <ArrowsPointingOutIcon />
                    ) : (
                        <ArrowsPointingInIcon />
                    )}
                </IconButton>
            </Tooltip>

            <IconButton className={openBtnClassName} onClick={toggleActive}>
                <WrenchScrewdriverIcon />
            </IconButton>
        </Box>
    );
};

export default Affix;
