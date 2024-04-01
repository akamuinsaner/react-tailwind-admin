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
        case EActions['set-transitioning']:
            return { ...state, transitioning: action.value };
        case EActions['set-transform']:
            return { ...state, transform: action.value };
        case EActions['set-reverse']:
            return { ...state, reverse: action.value };
        default:
            return state;
    }
};
