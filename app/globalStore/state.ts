import { Config } from '../pageSec/Side/config';

export type GlobalState = {
    theme: string;
    search: boolean;
    sideWidth: number;
    sideOpenKeys: string[];
    breadcrumb: Config[];
    fullScreen: boolean;
};

export const initialState: GlobalState = {
    theme: localStorage.getItem('RT_THEME') || 'light',
    search: false,
    sideWidth: 256,
    sideOpenKeys: [],
    breadcrumb: [],
    fullScreen: false,
};
