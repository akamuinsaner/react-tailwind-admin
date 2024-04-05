import { GlobalState } from './state';

export enum EActions {
    'set-theme',
    'set-search',
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
