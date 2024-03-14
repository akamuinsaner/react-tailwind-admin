import { RTRadioState } from './state';

export enum EActions {
    'set-value',
}

export type RTRadioAction<T> = {
    type: EActions,
    value?: T
}

export const setValueAction = <T extends RTRadioState["value"]>(value: T): RTRadioAction<T> => {
    return {
        type: EActions["set-value"],
        value: value,
    }
}