import { EActions, RTTabsAction } from './action';
import { RTDropdownState } from './state';

export const reducer = (state: RTDropdownState, action: RTTabsAction<any>): RTDropdownState => {
    switch(action.type) {
        case EActions['set-anchor']:
            return { ...state, anchor: action.value };
        case EActions['set-active']:
            return { ...state, active: action.value };
        default:
            return state;
    }
}