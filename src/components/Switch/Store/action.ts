import { RTSwitchState } from './state';

export enum EActions {
    'set-checked',
    'set-left',
}

export type RTSwitchAction<T> = {
    type: EActions,
    value?: T
}

export const setCheckedAction = <T extends RTSwitchState["checked"]>(checked: T): RTSwitchAction<T> => {
    return {
        type: EActions["set-checked"],
        value: checked,
    }
}

export const setLeftAction = <T extends RTSwitchState["offsetLeft"]>(checked: T): RTSwitchAction<T> => {
    return {
        type: EActions["set-left"],
        value: checked,
    }
}