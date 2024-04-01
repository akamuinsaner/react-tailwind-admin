import { EActions, RTCarouselAction } from './action';
import { RTCarouselState } from './state';

export const reducer = (
    state: RTCarouselState,
    action: RTCarouselAction<any>,
): RTCarouselState => {
    switch (action.type) {
        case EActions['set-active']:
            return { ...state, active: action.value };
        case EActions['set-size']:
            return { ...state, size: action.value };
        default:
            return state;
    }
};
