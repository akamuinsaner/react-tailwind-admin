import { GlobalState } from './state';

export enum EActions {
    'set-theme',
}

export type GlobalAction<T> = {
    type: EActions,
    value: T
}

export const setThemeAction = <T extends GlobalState["theme"]>(keys: T): GlobalAction<T> => {
    return {
        type: EActions["set-theme"],
        value: keys,
    }
}