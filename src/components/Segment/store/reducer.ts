import { EActions, RTSegmentAction } from './action';
import { RTSegmentState } from './state';

export const reducer = (
    state: RTSegmentState,
    action: RTSegmentAction<any>,
): RTSegmentState => {
    switch (action.type) {
        case EActions['set-active']:
            return { ...state, active: action.value };
        case EActions['set-anchor']:
            return { ...state, anchor: action.value };
        default:
            return state;
    }
};
