import { RTDropdownState } from './state';

export enum EActions {
    'set-anchor',
    'set-active',
}

export type RTTabsAction<T> = {
    type: EActions,
    value?: T
}

export const setAnchorAction = <T extends RTDropdownState["anchor"]>(anchor: T): RTTabsAction<T> => {
    return {
        type: EActions["set-anchor"],
        value: anchor,
    }
}

export const setActiveAction = <T extends RTDropdownState["active"]>(active: T): RTTabsAction<T> => {
    return {
        type: EActions["set-active"],
        value: active,
    }
}