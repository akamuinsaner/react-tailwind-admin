import { EActions, RTTabsAction } from './action';
import { RTStepperState } from './state';

export const reducer = (state: RTStepperState, action: RTTabsAction<any>): RTStepperState => {
    switch(action.type) {
        case EActions['set-active']:
            return { ...state, active: action.value };
        default:
            return state;
    }
}