import { RTInputState } from './state';

export enum EActions {
    'set-value',
    'set-focused',
}

export type RTInputAction<T> = {
    type: EActions,
    value?: T
}

export const setValueAction = <T extends RTInputState['value']>(value: T): RTInputAction<T> => {
    return {
        type: EActions["set-value"],
        value: value,
    }
}

export const setFocusedAction = <T extends RTInputState['focused']>(value: T): RTInputAction<T> => {
    return {
        type: EActions["set-focused"],
        value: value,
    }
}