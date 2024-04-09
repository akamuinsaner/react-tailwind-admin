import { Config } from '../pageSec/Side/config';
import {
    SETTINGSTORAGENAME,
    SIDEBARFOLDSTORAGENAME,
    THEMESTORAGENAME,
} from '../utils/constants';
import { getLocalStorage } from '../utils/storage';

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

export const SIDEBARFOLDEDWIDTH = 60;
export const SIDEBARNORMALWidth = 256;

const initialSettings = {
    grayMode: false,
    blindMode: false,
    footerVisible: true,
    navVisible: true,
    rtl: false,
};

const folded =
    getLocalStorage(SIDEBARFOLDSTORAGENAME) === 'true' ? true : false;
const settings = getLocalStorage(SETTINGSTORAGENAME)
    ? Object.assign(
          {},
          initialSettings,
          JSON.parse(getLocalStorage(SETTINGSTORAGENAME)),
      )
    : initialSettings;

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
    settingPanelOpen: boolean;
    settingOptions: {
        grayMode: boolean;
        blindMode: boolean;
        footerVisible: boolean;
        navVisible: boolean;
        rtl: boolean;
    };
};

export const initialState: GlobalState = {
    theme: <THEME>getLocalStorage(THEMESTORAGENAME) || THEME['light'],
    search: false,
    sideOpenKeys: [],
    breadcrumb: [],
    fullScreen: false,
    historys: [],
    sideBarHided: false,
    sideBarFolded: folded,
    sideBarWidth: folded ? SIDEBARFOLDEDWIDTH : SIDEBARNORMALWidth,
    sideBarLocale: SIDEBARLOCALE['left'],
    headerHeight: 80,
    navHeight: 36,
    affixPos: { right: 40, bottom: 40 },
    footerHeight: null,
    settingPanelOpen: false,
    settingOptions: settings,
};
