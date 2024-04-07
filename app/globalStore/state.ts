import { Config } from '../pageSec/Side/config';

export type GlobalState = {
    theme: THEME;
    search: boolean;
    sideOpenKeys: string[];
    breadcrumb: Config[];
    fullScreen: boolean;
    historys: Config[];
    sideBarWidth: number;
    sideBarLocale: SIDEBARLOCALE;
    headerHeight: number;
    navHeight: number;
    affixPos: { right: number; bottom: number };
};

export enum SIDEBARLOCALE {
    left,
    right,
}

export enum THEME {
    'light' = 'light',
    'dark' = 'dark',
    'forest' = 'forest',
}

export const initialState: GlobalState = {
    theme: <THEME>localStorage.getItem('RT_THEME') || THEME['light'],
    search: false,
    sideOpenKeys: [],
    breadcrumb: [],
    fullScreen: false,
    historys: [],
    sideBarWidth: null,
    sideBarLocale: SIDEBARLOCALE['left'],
    headerHeight: null,
    navHeight: null,
    affixPos: { right: 40, bottom: 40 },
};
