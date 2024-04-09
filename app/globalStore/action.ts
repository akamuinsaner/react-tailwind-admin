import { GlobalState } from './state';

export enum EActions {
    'set-theme',
    'set-search',
    'set-side-open-keys',
    'set-breadcrumb',
    'set-fullscreen',
    'set-historys',
    'set-side-bar-width',
    'set-side-bar-locale',
    'set-side-bar-hided',
    'set-side-bar-folded',
    'set-header-height',
    'set-nav-height',
    'set-affix-pos',
    'set-footer-height',
    'set-setting-panel-open',
    'set-setting-options',
}

export type GlobalAction<T> = {
    type: EActions;
    value: T;
};

export const setThemeAction = <T extends GlobalState['theme']>(
    theme: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-theme'],
        value: theme,
    };
};

export const setSearchAction = <T extends GlobalState['search']>(
    search: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-search'],
        value: search,
    };
};

export const setSideOpenKeysAction = <T extends GlobalState['sideOpenKeys']>(
    sideOpenKeys: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-side-open-keys'],
        value: sideOpenKeys,
    };
};

export const setBreadcrumbAction = <T extends GlobalState['breadcrumb']>(
    breadcrumb: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-breadcrumb'],
        value: breadcrumb,
    };
};

export const setFullscreenAction = <T extends GlobalState['fullScreen']>(
    fullScreen: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-fullscreen'],
        value: fullScreen,
    };
};

export const setHistorysAction = <T extends GlobalState['historys']>(
    historys: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-historys'],
        value: historys,
    };
};

export const setSideBarHidedAction = <T extends GlobalState['sideBarHided']>(
    sideBarHided: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-side-bar-hided'],
        value: sideBarHided,
    };
};

export const setSideBarFoldedAction = <T extends GlobalState['sideBarFolded']>(
    sideBarFolded: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-side-bar-folded'],
        value: sideBarFolded,
    };
};

export const setSideBarWidthAction = <T extends GlobalState['sideBarWidth']>(
    sideBarWidth: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-side-bar-width'],
        value: sideBarWidth,
    };
};

export const setSideBarLocaleAction = <T extends GlobalState['sideBarLocale']>(
    sideBarLocale: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-side-bar-locale'],
        value: sideBarLocale,
    };
};

export const setHeaderHeightAction = <T extends GlobalState['headerHeight']>(
    headerHeight: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-header-height'],
        value: headerHeight,
    };
};

export const setNavHeightAction = <T extends GlobalState['navHeight']>(
    navHeight: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-nav-height'],
        value: navHeight,
    };
};

export const setAffixPosAction = <T extends GlobalState['affixPos']>(
    affixPos: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-affix-pos'],
        value: affixPos,
    };
};

export const setFooterHeightAction = <T extends GlobalState['footerHeight']>(
    footerHeight: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-footer-height'],
        value: footerHeight,
    };
};

export const setSettingPanelOpenAction = <
    T extends GlobalState['settingPanelOpen'],
>(
    settingPanelOpen: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-setting-panel-open'],
        value: settingPanelOpen,
    };
};

export const setSettingOptionsAction = <
    T extends GlobalState['settingOptions'],
>(
    settingOptions: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-setting-options'],
        value: settingOptions,
    };
};
