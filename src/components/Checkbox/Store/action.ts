import { RTCheckboxState } from './state';

export enum EActions {
    'set-checked',
    'set-indeterminate',
}

export type RTCheckboxAction<T> = {
    type: EActions,
    value?: T
}

export const setCheckedAction = <T extends RTCheckboxState["checked"]>(checked: T): RTCheckboxAction<T> => {
    return {
        type: EActions["set-checked"],
        value: checked,
    }
}

export const setIndeterminateAction = <T extends RTCheckboxState["indeterminate"]>(indeterminate: T): RTCheckboxAction<T> => {
    return {
        type: EActions["set-indeterminate"],
        value: indeterminate,
    }
}