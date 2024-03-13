import { RTMultiSelectState } from './state';

export enum EActions {
    'set-hover',
    'set-value',
    'set-wrapper',
    'set-anchor',
    'set-search',
}

export type RTMultiSelectAction<T> = {
    type: EActions,
    value?: T
}

export const setValueAction = <T extends RTMultiSelectState['value']>(value: T): RTMultiSelectAction<T> => {
    return {
        type: EActions["set-value"],
        value: value,
    }
}


export const setWrapperAction = <T extends RTMultiSelectState['wrapper']>(value: T): RTMultiSelectAction<T> => {
    return {
        type: EActions["set-wrapper"],
        value: value,
    }
}

export const setAnchorAction = <T extends RTMultiSelectState['anchor']>(value: T): RTMultiSelectAction<T> => {
    return {
        type: EActions["set-anchor"],
        value: value,
    }
}

export const setSearchAction = <T extends RTMultiSelectState['searchValue']>(value: T): RTMultiSelectAction<T> => {
    return {
        type: EActions["set-search"],
        value: value,
    }
}

export const setHoverAction = <T extends RTMultiSelectState['hover']>(value: T): RTMultiSelectAction<T> => {
    return {
        type: EActions["set-hover"],
        value: value,
    }
}

