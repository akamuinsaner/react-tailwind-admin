import { RTDatePickerState } from './state';

export enum EActions {
    'set-hover',
    'set-value',
    'set-wrapper',
    'set-anchor',
    'set-search',
    'set-rangeValue'
}

export type RTDatePickerAction<T> = {
    type: EActions,
    value?: T
}


export const setValueAction = <T extends RTDatePickerState['value']>(value: T): RTDatePickerAction<T> => {
    return {
        type: EActions["set-value"],
        value: value,
    }
}


export const setWrapperAction = <T extends RTDatePickerState['wrapper']>(value: T): RTDatePickerAction<T> => {
    return {
        type: EActions["set-wrapper"],
        value: value,
    }
}

export const setAnchorAction = <T extends RTDatePickerState['anchor']>(value: T): RTDatePickerAction<T> => {
    return {
        type: EActions["set-anchor"],
        value: value,
    }
}

export const setSearchAction = <T extends RTDatePickerState['searchValue']>(value: T): RTDatePickerAction<T> => {
    return {
        type: EActions["set-search"],
        value: value,
    }
}

export const setHoverAction = <T extends RTDatePickerState['hover']>(value: T): RTDatePickerAction<T> => {
    return {
        type: EActions["set-hover"],
        value: value,
    }
}

export const setRangeValueAction = <T extends RTDatePickerState['rangeValue']>(value: T): RTDatePickerAction<T> => {
    return {
        type: EActions["set-rangeValue"],
        value: value,
    }
}
