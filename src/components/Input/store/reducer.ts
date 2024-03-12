import { EActions, RTInputAction } from './action';
import { RTInputState } from './state';

export const reducer = (state: RTInputState, action: RTInputAction<any>): RTInputState => {
    switch(action.type) {
        case EActions['set-value']:
            return { ...state, value: action.value };
        case EActions['set-focused']:
            return { ...state, focused: action.value };
        default:
            return state;
    }
}