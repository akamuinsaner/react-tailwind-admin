import { Config } from '../pageSec/Side/config';

export type GlobalState = {
    theme: string;
    search: boolean;
    sideOpenKeys: string[];
    breadcrumb: Config[];
    fullScreen: boolean;
    historys: Config[];
    sideBarWidth: number;
    headerHeight: number;
    navHeight: number;
};

export const initialState: GlobalState = {
    theme: localStorage.getItem('RT_THEME') || 'light',
    search: false,
    sideOpenKeys: [],
    breadcrumb: [],
    fullScreen: false,
    historys: [],
    sideBarWidth: null,
    headerHeight: null,
    navHeight: null,
};
