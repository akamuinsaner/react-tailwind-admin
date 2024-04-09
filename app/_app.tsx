'use client';
import ScrollPage from '@/src/components/ScrollPage';
import Page from '@/src/components/Page';
import Header from './pageSec/Header';
import Side from './pageSec/Side';
import Content from '@/src/components/Content';
import {
    CSSProperties,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
} from 'react';
import { GlobalContext, IGlobalContext } from './globalContext';
import { useReducer } from 'react';
import {
    reducer,
    setThemeAction,
    initialState,
    setSearchAction,
    setSideOpenKeysAction,
    setSideBarWidthAction,
    setSideBarLocaleAction,
    setHeaderHeightAction,
    setBreadcrumbAction,
    setFullscreenAction,
    setHistorysAction,
    setNavHeightAction,
    setAffixPosAction,
    setFooterHeightAction,
    setSideBarFoldedAction,
    setSettingPanelOpenAction,
    setSettingOptionsAction,
} from './globalStore';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { getTreeDataFormatted } from '@/src/components/Cascader/utils';
import { config, Config } from './pageSec/Side/config';
import Footer from './pageSec/Footer';
import Affix from './pageSec/Affix';
import { GlobalState, SIDEBARLOCALE, THEME } from './globalStore/state';
import Nav from './pageSec/Nav';
import { flushSync } from 'react-dom';
import {
    DndContext,
    useDroppable,
    PointerSensor,
    MouseSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { GLOBALDROPID } from './utils/constants';
import SettingPanel from './pageSec/SettingPanel';

export default function App({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const { isOver, setNodeRef } = useDroppable({ id: GLOBALDROPID });
    const dataSet = getTreeDataFormatted<Config>(config);
    const [state, dispatch] = useReducer(reducer, initialState);
    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            tolerance: 0,
            delay: 300,
        },
    });
    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: {
            tolerance: 0,
            delay: 300,
        },
    });
    const sensors = useSensors(mouseSensor, pointerSensor);
    const {
        theme,
        search,
        sideOpenKeys,
        breadcrumb,
        fullScreen,
        historys,
        sideBarWidth,
        sideBarLocale,
        headerHeight,
        navHeight,
        affixPos,
        footerHeight,
        sideBarFolded,
        settingPanelOpen,
        settingOptions,
    } = state;
    const setTheme = (theme: THEME) => dispatch(setThemeAction(theme));
    const setSearch = (search: boolean) => dispatch(setSearchAction(search));
    const setSideBarWidth = (width: number) =>
        dispatch(setSideBarWidthAction(width));
    const setSideBarLocale = (locale: SIDEBARLOCALE) =>
        dispatch(setSideBarLocaleAction(locale));
    const setHeaderHeight = (height: number) =>
        dispatch(setHeaderHeightAction(height));
    const setNavHeight = (height: number) =>
        dispatch(setNavHeightAction(height));
    const setSideOpenKeys = (oks: string[]) =>
        dispatch(setSideOpenKeysAction(oks));
    const setBreadcrumb = (bc: Config[]) => dispatch(setBreadcrumbAction(bc));
    const setFullScreen = (fs: boolean) => dispatch(setFullscreenAction(fs));
    const setHisorys = (hs: Config[]) => dispatch(setHistorysAction(hs));
    const setAffixPos = (ap: GlobalState['affixPos']) =>
        dispatch(setAffixPosAction(ap));
    const setFooterHeight = (fh: GlobalState['footerHeight']) =>
        dispatch(setFooterHeightAction(fh));
    const setSideBarFolded = (sbf: boolean) =>
        dispatch(setSideBarFoldedAction(sbf));
    const setSettingPanelOpen = (spo: boolean) =>
        dispatch(setSettingPanelOpenAction(spo));
    const setSettingOptions = (so: GlobalState['settingOptions']) =>
        dispatch(setSettingOptionsAction(so));
    const navigate = (path: string) => {
        flushSync(() => {
            if (!document.startViewTransition) {
                router.push(path);
                return;
            }
            const transition = document.startViewTransition(() => {
                router.push(path);
            });
            transition.ready.then(() => {
                document.documentElement.animate(
                    [{ opacity: 0 }, { opacity: 1 }],
                    {
                        duration: 500,
                        easing: 'ease-in',
                        pseudoElement: '::view-transition-new(root)',
                    },
                );
            });
        });
    };

    const contextValue: IGlobalContext = {
        navigate,
        theme,
        search,
        setTheme,
        setSearch,
        sideOpenKeys,
        setSideOpenKeys,
        pathname,
        dataSet,
        breadcrumb,
        fullScreen,
        navHeight,
        setNavHeight,
        historys,
        setHisorys,
        sideBarWidth,
        setSideBarWidth,
        headerHeight,
        setHeaderHeight,
        sideBarLocale,
        setSideBarLocale,
        affixPos,
        footerHeight,
        setFooterHeight,
        sideBarFolded,
        setSideBarFolded,
        settingPanelOpen,
        setSettingPanelOpen,
        settingOptions,
        setSettingOptions,
    };

    const generateBreadcrumb = useCallback(() => {
        const parentChain = dataSet.parentChainMap.get(pathname);
        if (!parentChain) return;
        const chain = [...parentChain];
        chain.reverse();
        chain.push(pathname);
        const breadcrumb = chain.map(id => dataSet.idTreeNodeMap.get(id));
        setBreadcrumb(breadcrumb);
    }, [pathname]);

    const generateHistorys = useCallback(() => {
        if (!!historys.find(item => item.path === pathname)) return;
        const config = dataSet.idTreeNodeMap.get(pathname);
        setHisorys([...historys, config]);
    }, [historys, pathname]);

    const wrapperClassName = twMerge(
        'text-mainText',
        classNames({
            'perspective-1600 h-screen overflow-hidden': state.search,
        }),
    );
    const innerClassName = twMerge(
        'text-mainText duration-1000 transition-transform flex flex-col relative',
        classNames({
            'rotate-x-30 pointer-events-none transform': state.search,
        }),
    );

    const fullScreenChange = useCallback(() => {
        if (!!document.fullscreenElement) {
            setFullScreen(true);
        } else {
            setFullScreen(false);
        }
    }, []);

    useEffect(() => {
        generateBreadcrumb();
        generateHistorys();
    }, [pathname]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        fullScreenChange();
        document.addEventListener('fullscreenchange', fullScreenChange);
        return () =>
            document.removeEventListener('fullscreenchange', fullScreenChange);
    }, []);

    useEffect(() => {
        const html = document.querySelector('html');
        if (settingOptions.grayMode) html.classList.add('grayscale');
        else html.classList.remove('grayscale');
    }, [settingOptions.grayMode]);

    useEffect(() => {
        const html = document.querySelector('html');
        if (settingOptions.blindMode) html.classList.add('invert');
        else html.classList.remove('invert');
    }, [settingOptions.blindMode]);

    useEffect(() => {
        const html = document.querySelector('html');
        if (settingOptions.rtl) {
            html.setAttribute('dir', 'rtl');
        } else {
            html.removeAttribute('dir');
        }
    }, [settingOptions.rtl]);

    const pageStyle: CSSProperties = useMemo(() => {
        let paddingTop = 0;
        if (headerHeight) paddingTop += headerHeight;
        if (navHeight && settingOptions.navVisible) paddingTop += navHeight;
        let style = { paddingTop };
        if (settingOptions.footerVisible) {
            style = Object.assign({}, style, {
                paddingBottom: `${footerHeight}px`,
            });
        }
        if (sideBarLocale === SIDEBARLOCALE['left'])
            style = Object.assign({}, style, {
                paddingLeft: `${sideBarWidth}px`,
            });
        if (sideBarLocale === SIDEBARLOCALE['right'])
            style = Object.assign({}, style, {
                paddingRight: `${sideBarWidth}px`,
            });
        return style;
    }, [
        headerHeight,
        navHeight,
        sideBarLocale,
        sideBarWidth,
        footerHeight,
        settingOptions.footerVisible,
        settingOptions.navVisible,
    ]);

    const handleDragEnd = ({ delta }) => {
        setAffixPos({
            right: affixPos.right - delta.x,
            bottom: affixPos.bottom - delta.y,
        });
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
                <ScrollPage ref={setNodeRef} className={wrapperClassName}>
                    <Page className={innerClassName} style={pageStyle}>
                        <Content
                            className='h-full'
                            style={{ minHeight: `calc()` }}
                        >
                            {children}
                        </Content>
                        <Header />
                        {settingOptions.navVisible && <Nav />}
                        <Side />
                        {settingOptions.footerVisible && <Footer />}
                        <Affix />
                        <SettingPanel />
                    </Page>
                </ScrollPage>
            </DndContext>
        </GlobalContext.Provider>
    );
}
