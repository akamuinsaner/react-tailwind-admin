import { EActions, GlobalAction } from './action';
import { GlobalState } from './state';

export const reducer = (state: GlobalState, action: GlobalAction<any>): GlobalState => {
    switch(action.type) {
        case EActions['set-theme']:
            return { ...state, theme: action.value };

        default:
            return state;
    }
}