import { Config } from '../pageSec/Side/config';

export enum SIDEBARLOCALE {
    left,
    right,
}

export enum THEME {
    'light' = 'light',
    'dark' = 'dark',
    'forest' = 'forest',
    'desert' = 'desert',
    'sky' = 'sky',
}

export enum SIDEBARMODE {
    'normal' = 'normal',
    'densed' = 'densed',
    'free' = 'free',
}

export type GlobalState = {
    theme: THEME;
    search: boolean;
    sideOpenKeys: string[];
    breadcrumb: Config[];
    fullScreen: boolean;
    historys: Config[];
    sideBarHided: boolean;
    sideBarFolded: boolean;
    sideBarWidth: number;
    sideBarLocale: SIDEBARLOCALE;
    headerHeight: number;
    navHeight: number;
    affixPos: { right: number; bottom: number };
    footerHeight: number;
};

export const initialState: GlobalState = {
    theme: <THEME>localStorage.getItem('RT_THEME') || THEME['light'],
    search: false,
    sideOpenKeys: [],
    breadcrumb: [],
    fullScreen: false,
    historys: [],
    sideBarHided: false,
    sideBarFolded: false,
    sideBarWidth: 256,
    sideBarLocale: SIDEBARLOCALE['left'],
    headerHeight: 80,
    navHeight: 36,
    affixPos: { right: 40, bottom: 40 },
    footerHeight: null,
};
