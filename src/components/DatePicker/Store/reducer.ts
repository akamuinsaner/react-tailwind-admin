import { EActions, RTDatePickerAction } from './action';
import { RTDatePickerState } from './state';

export const reducer = (state: RTDatePickerState, action: RTDatePickerAction<any>): RTDatePickerState => {
    switch (action.type) {
        case EActions['set-value']:
            return { ...state, value: action.value, searchValue: '' };
        case EActions['set-wrapper']:
            return { ...state, wrapper: action.value, searchValue: '' };
        case EActions['set-anchor']:
            return { ...state, anchor: action.value };
        case EActions['set-search']:
            return { ...state, searchValue: action.value };
        case EActions['set-hover']:
            return { ...state, hover: action.value };
        case EActions['set-rangeValue']:
            return { ...state, rangeValue: action.value, searchValue: '' };
        default:
            return state;
    }
}