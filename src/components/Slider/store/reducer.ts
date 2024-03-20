import { EActions, RTSliderAction } from './action';
import { RTSliderState } from './state';

export const reducer = (
    state: RTSliderState,
    action: RTSliderAction<any>,
): RTSliderState => {
    switch (action.type) {
        case EActions['set-values']:
            return { ...state, values: action.value };
        default:
            return state;
    }
};
