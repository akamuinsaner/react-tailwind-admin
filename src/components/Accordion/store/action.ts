import { RTAccordionState } from './state';

export enum EActions {
    'set-keys',
    'toggle-keys'
}

export type RTAccordionAction<T> = {
    type: EActions,
    value: T
}

export const setKeysAction = <T extends RTAccordionState["openKeys"]>(keys: T): RTAccordionAction<T> => {
    return {
        type: EActions["set-keys"],
        value: keys,
    }
}

export const toggleKeysAction = <T extends (string | number)>(key: T): RTAccordionAction<T> => {
    return {
        type: EActions["toggle-keys"],
        value: key,
    }
}