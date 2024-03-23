import { RTTabsState } from './state';

export enum EActions {
    'set-active',
    'set-focus-info'
}

export type RTTabsAction<T> = {
    type: EActions,
    value: T
}

export const setActiveAction = <T extends RTTabsState["active"]>(active: T): RTTabsAction<T> => {
    return {
        type: EActions["set-active"],
        value: active,
    }
}

export const setFocusInfoAction = <T extends RTTabsState["focusInfo"]>(info: T): RTTabsAction<T> => {
    return {
        type: EActions["set-focus-info"],
        value: info,
    }
}