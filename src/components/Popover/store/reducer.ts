import { EActions, RTPopoverAction } from './action';
import { RTPopoverState } from './state';

export const reducer = (
    state: RTPopoverState,
    action: RTPopoverAction<any>,
): RTPopoverState => {
    switch (action.type) {
        case EActions['set-anchor']:
            return { ...state, anchor: action.value };
        case EActions['set-wrapper']:
            return { ...state, wrapper: action.value };
        default:
            return state;
    }
};
