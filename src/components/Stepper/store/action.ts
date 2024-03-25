import { RTStepperState } from './state';

export enum EActions {
    'set-active',
}

export type RTTabsAction<T> = {
    type: EActions,
    value: T
}

export const setActiveAction = <T extends RTStepperState["active"]>(active: T): RTTabsAction<T> => {
    return {
        type: EActions["set-active"],
        value: active,
    }
}
