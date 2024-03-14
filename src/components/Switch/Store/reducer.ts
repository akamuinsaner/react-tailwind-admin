import { EActions, RTSwitchAction } from './action';
import { RTSwitchState } from './state';

export const reducer = (state: RTSwitchState, action: RTSwitchAction<any>): RTSwitchState => {
    switch (action.type) {
        case EActions['set-checked']:
            return {
                ...state,
                checked: action.value,
            };
        case EActions['set-left']:
            return {
                ...state,
                offsetLeft: action.value,
            };
        default:
            return state;
    }
}