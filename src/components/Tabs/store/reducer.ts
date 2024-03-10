import { EActions, RTTabsAction } from './action';
import { RTTabsState } from './state';

export const reducer = (state: RTTabsState, action: RTTabsAction<any>): RTTabsState => {
    switch(action.type) {
        case EActions['set-active']:
            return { ...state, active: action.value };
        case EActions["set-focus-info"]:
            return { ...state, focusInfo: action.value };
        default:
            return state;
    }
}