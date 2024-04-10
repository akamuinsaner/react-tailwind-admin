import { DataSet } from '@/src/components/Cascader/utils';
import { createContext } from 'react';
import { Config } from './pageSec/Side/config';
import { GlobalState, SIDEBARLOCALE, THEME } from '@/app/globalStore/state';

export interface IGlobalContext {
    navigate: (path: string) => void;
    search: boolean;
    setSearch: (search: boolean) => void;
    sideOpenKeys: string[];
    setSideOpenKeys: (sideOpenKeys: string[]) => void;
    pathname: string;
    dataSet: DataSet<Config>;
    breadcrumb: Config[];
    navHeight: number;
    setNavHeight: (headerHeight: number) => void;
    historys: GlobalState['historys'];
    setHisorys: (historys: GlobalState['historys']) => void;
    sideBarWidth: number;
    setSideBarWidth: (sideWidth: number) => void;
    headerHeight: number;
    setHeaderHeight: (headerHeight: number) => void;
    affixPos: GlobalState['affixPos'];
    footerHeight: number;
    setFooterHeight: (footerHeight: number) => void;
    sideBarFolded: boolean;
    setSideBarFolded: (sideBarFolded: boolean) => void;
    settingPanelOpen: boolean;
    setSettingPanelOpen: (open: boolean) => void;
    settingOptions: GlobalState['settingOptions'];
    setSettingOptions: (settingOptions: GlobalState['settingOptions']) => void;
}

export const GlobalContext = createContext<IGlobalContext>(null);
