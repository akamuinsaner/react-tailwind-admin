import { EActions, RTDropdownAction } from './action';
import { RTDropdownState } from './state';

export const reducer = (state: RTDropdownState, action: RTDropdownAction<any>): RTDropdownState => {
    switch(action.type) {
        case EActions['set-anchor']:
            return { ...state, anchor: action.value };
        case EActions['set-wrapper']:
            return { ...state, wrapper: action.value };
        default:
            return state;
    }
}