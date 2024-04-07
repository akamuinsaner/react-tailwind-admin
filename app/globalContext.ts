import { DataSet } from '@/src/components/Cascader/utils';
import { createContext } from 'react';
import { Config } from './pageSec/Side/config';
import { GlobalState } from '@/app/globalStore/state';

export interface IGlobalContext {
    navigate: (path: string) => void;
    theme: string;
    search: boolean;
    setTheme: (theme: string) => void;
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
}

export const GlobalContext = createContext<IGlobalContext>(null);
