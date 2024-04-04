import { EActions, RTCascaderAction } from './action';
import { RTCascaderState } from './state';

export const reducer = (
    state: RTCascaderState,
    action: RTCascaderAction<any>,
): RTCascaderState => {
    switch (action.type) {
        case EActions['set-open-keys']:
            return { ...state, openKeys: action.value };
        case EActions['set-data-set']:
            return { ...state, dataSet: action.value };
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
        case EActions['set-loading-id']:
            return { ...state, loadingId: action.value };
        default:
            return state;
    }
};
