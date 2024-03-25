import { EActions, RTCascaderAction } from './action';
import { RTCascaderState } from './state';

export const reducer = (
    state: RTCascaderState,
    action: RTCascaderAction<any>,
): RTCascaderState => {
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
        default:
            return state;
    }
};
