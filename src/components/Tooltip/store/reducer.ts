import { EActions, RTTooltipAction } from './action';
import { RTTooltipState } from './state';

export const reducer = (
    state: RTTooltipState,
    action: RTTooltipAction<any>,
): RTTooltipState => {
    switch (action.type) {
        case EActions['set-anchor']:
            return { ...state, anchor: action.value };
        case EActions['set-wrapper']:
            return { ...state, wrapper: action.value };
        default:
            return state;
    }
};
