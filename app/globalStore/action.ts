import { GlobalState } from './state';

export enum EActions {
    'set-theme',
    'set-search',
    'set-side-open-keys',
    'set-breadcrumb',
    'set-fullscreen',
    'set-historys',
    'set-side-bar-width',
    'set-header-height',
    'set-nav-height',
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

export const setSideBarWidthAction = <T extends GlobalState['sideBarWidth']>(
    sideBarWidth: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-side-bar-width'],
        value: sideBarWidth,
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
