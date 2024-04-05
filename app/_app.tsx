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
} from './globalStore';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

export default function App({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const setTheme = (theme: string) => dispatch(setThemeAction(theme));
    const setSearch = (search: boolean) => dispatch(setSearchAction(search));
    const contextValue: IGlobalContext = {
        theme: state.theme,
        search: state.search,
        setTheme: setTheme,
        setSearch: setSearch,
    };

    const wrapperClassName = twMerge(
        classNames({
            'perspective-1600 h-screen overflow-hidden': state.search,
        }),
    );
    const innerClassName = twMerge(
        'pt-20 md:pl-64 text-main transform duration-200 transition-transform',
        classNames({
            'rotate-x-30 pointer-events-none': state.search,
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
