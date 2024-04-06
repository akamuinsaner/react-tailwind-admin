import { GlobalState } from './state';

export enum EActions {
    'set-theme',
    'set-search',
    'set-side-width',
    'set-side-open-keys',
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

export const setSideWidthAction = <T extends GlobalState['sideWidth']>(
    sideWidth: T,
): GlobalAction<T> => {
    return {
        type: EActions['set-side-width'],
        value: sideWidth,
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
