import { DataSet } from '@/src/components/Cascader/utils';
import { createContext } from 'react';
import { Config } from './pageSec/Side/config';
import { GlobalState, SIDEBARLOCALE, THEME } from '@/app/globalStore/state';

export interface IGlobalContext {
    navigate: (path: string) => void;
    theme: THEME;
    search: boolean;
    setTheme: (theme: THEME) => void;
    setSearch: (search: boolean) => void;
    sideOpenKeys: string[];
    setSideOpenKeys: (sideOpenKeys: string[]) => void;
    pathname: string;
    dataSet: DataSet<Config>;
    breadcrumb: Config[];
    fullScreen: boolean;
    navHeight: number;
    setNavHeight: (headerHeight: number) => void;
    historys: GlobalState['historys'];
    setHisorys: (historys: GlobalState['historys']) => void;
    sideBarWidth: number;
    setSideBarWidth: (sideWidth: number) => void;
    headerHeight: number;
    setHeaderHeight: (headerHeight: number) => void;
    sideBarLocale: SIDEBARLOCALE;
    setSideBarLocale: (locale: SIDEBARLOCALE) => void;
    affixPos: GlobalState['affixPos'];
}

export const GlobalContext = createContext<IGlobalContext>(null);
