'use client';
import ScrollPage from '@/src/components/ScrollPage';
import Page from '@/src/components/Page';
import Nav from './pageSec/Nav';
import Side from './pageSec/Side';
import Content from '@/src/components/Content';
import { ReactNode } from 'react';
import { GlobalContext, IGlobalContext } from './globalContext';
import { useReducer } from 'react';
import {
    reducer,
    setThemeAction,
    initialState,
    setSearchAction,
    setSideOpenKeysAction,
    setSideWidthAction,
} from './globalStore';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

export default function App({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const setTheme = (theme: string) => dispatch(setThemeAction(theme));
    const setSearch = (search: boolean) => dispatch(setSearchAction(search));
    const setSideWidth = (width: number) => dispatch(setSideWidthAction(width));
    const setSideOpenKeys = (openKeys: string[]) =>
        dispatch(setSideOpenKeysAction(openKeys));
    const contextValue: IGlobalContext = {
        theme: state.theme,
        search: state.search,
        setTheme: setTheme,
        setSearch: setSearch,
        sideOpenKeys: state.sideOpenKeys,
        setSideOpenKeys,
        sideWidth: state.sideWidth,
        setSideWidth,
    };

    const wrapperClassName = twMerge(
        classNames({
            'perspective-1600 h-screen overflow-hidden': state.search,
        }),
    );
    const innerClassName = twMerge(
        'pt-20 md:pl-64 text-main duration-200 transition-transform',
        classNames({
            'rotate-x-30 pointer-events-none  transform': state.search,
        }),
    );
    return (
        <GlobalContext.Provider value={contextValue}>
            <ScrollPage className={wrapperClassName}>
                <Page className={innerClassName}>
                    <Nav />
                    <Side />
                    <Content>{children}</Content>
                </Page>
            </ScrollPage>
        </GlobalContext.Provider>
    );
}
