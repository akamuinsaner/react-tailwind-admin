import { EActions, RTCarouselAction } from './action';
import { RTCarouselState } from './state';

export const reducer = (
    state: RTCarouselState,
    action: RTCarouselAction<any>,
): RTCarouselState => {
    switch (action.type) {
        case EActions['set-active']:
            return { ...state, active: action.value };
        case EActions['set-span']:
            return { ...state, span: action.value };
        default:
            return state;
    }
};
