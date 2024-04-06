'use client';
import ScrollPage from '@/src/components/ScrollPage';
import Page from '@/src/components/Page';
import Nav from './pageSec/Nav';
import Side from './pageSec/Side';
import Content from '@/src/components/Content';
import { ReactNode, useEffect } from 'react';
import { GlobalContext, IGlobalContext } from './globalContext';
import { useReducer } from 'react';
import {
    reducer,
    setThemeAction,
    initialState,
    setSearchAction,
    setSideOpenKeysAction,
    setSideWidthAction,
    setBreadcrumbAction,
} from './globalStore';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { getTreeDataFormatted } from '@/src/components/Cascader/utils';
import { config, Config } from './pageSec/Side/config';
import Footer from './pageSec/Footer';

export default function App({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const dataSet = getTreeDataFormatted<Config>(config);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { theme, search, sideOpenKeys, sideWidth, breadcrumb } = state;
    const setTheme = (theme: string) => dispatch(setThemeAction(theme));
    const setSearch = (search: boolean) => dispatch(setSearchAction(search));
    const setSideWidth = (width: number) => dispatch(setSideWidthAction(width));
    const setSideOpenKeys = (oks: string[]) =>
        dispatch(setSideOpenKeysAction(oks));
    const setBreadcrumb = (bc: Config[]) => dispatch(setBreadcrumbAction(bc));
    const contextValue: IGlobalContext = {
        theme,
        search,
        setTheme,
        setSearch,
        sideOpenKeys,
        setSideOpenKeys,
        sideWidth,
        setSideWidth,
        pathname,
        dataSet,
        breadcrumb,
    };

    const generateBreadcrumb = () => {
        const parentChain = dataSet.parentChainMap.get(pathname);
        if (!parentChain) return;
        const chain = [...parentChain];
        chain.reverse();
        chain.push(pathname);
        const breadcrumb = chain.map(id => dataSet.idTreeNodeMap.get(id));
        setBreadcrumb(breadcrumb);
    };

    useEffect(() => {
        generateBreadcrumb();
    }, [pathname]);

    const wrapperClassName = twMerge(
        classNames({
            'perspective-1600 h-screen overflow-hidden': state.search,
        }),
    );
    const innerClassName = twMerge(
        'pt-20 md:pl-64 text-main duration-200 transition-transform flex flex-col',
        classNames({
            'rotate-x-30 pointer-events-none transform': state.search,
        }),
    );
    return (
        <GlobalContext.Provider value={contextValue}>
            <ScrollPage className={wrapperClassName}>
                <Page className={innerClassName}>
                    <Nav />
                    <Side />
                    <Content>{children}</Content>
                    <Footer />
                </Page>
            </ScrollPage>
        </GlobalContext.Provider>
    );
}
