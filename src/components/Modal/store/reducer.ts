import { EActions, RTTabsAction } from './action';
import { RTModalState } from './state';

export const reducer = (state: RTModalState, action: RTTabsAction<any>): RTModalState => {
    switch(action.type) {
        case EActions['set-wrapper']:
            return { ...state, wrapper: action.value };
        default:
            return state;
    }
}