import { RTModalState } from './state';

export enum EActions {
    'set-wrapper',
}

export type RTTabsAction<T> = {
    type: EActions,
    value?: T
}


export const setWrapperAction = <T extends RTModalState["wrapper"]>(wrapper: T): RTTabsAction<T> => {
    return {
        type: EActions["set-wrapper"],
        value: wrapper,
    }
}