import { RTTextareaState } from './state';

export enum EActions {
    'set-value',
    'set-focused',
}

export type RTTextareaAction<T> = {
    type: EActions,
    value?: T
}

export const setValueAction = <T extends RTTextareaState['value']>(value: T): RTTextareaAction<T> => {
    return {
        type: EActions["set-value"],
        value: value,
    }
}

export const setFocusedAction = <T extends RTTextareaState['focused']>(value: T): RTTextareaAction<T> => {
    return {
        type: EActions["set-focused"],
        value: value,
    }
}