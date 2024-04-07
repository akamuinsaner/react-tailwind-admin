import { Config } from '../pageSec/Side/config';

export type GlobalState = {
    theme: string;
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

export const initialState: GlobalState = {
    theme: localStorage.getItem('RT_THEME') || 'light',
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
