import { RTSelectState } from './state';

export enum EActions {
    'set-hover',
    'set-value',
    'set-wrapper',
    'set-anchor',
    'set-search',
}

export type RTSelectAction<T> = {
    type: EActions,
    value?: T
}

export const setValueAction = <T extends RTSelectState['value']>(value: T): RTSelectAction<T> => {
    return {
        type: EActions["set-value"],
        value: value,
    }
}


export const setWrapperAction = <T extends RTSelectState['wrapper']>(value: T): RTSelectAction<T> => {
    return {
        type: EActions["set-wrapper"],
        value: value,
    }
}

export const setAnchorAction = <T extends RTSelectState['anchor']>(value: T): RTSelectAction<T> => {
    return {
        type: EActions["set-anchor"],
        value: value,
    }
}

export const setSearchAction = <T extends RTSelectState['searchValue']>(value: T): RTSelectAction<T> => {
    return {
        type: EActions["set-search"],
        value: value,
    }
}

export const setHoverAction = <T extends RTSelectState['hover']>(value: T): RTSelectAction<T> => {
    return {
        type: EActions["set-hover"],
        value: value,
    }
}

