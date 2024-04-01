import { RTCarouselState } from './state';

export enum EActions {
    'set-active',
    'set-size',
    'set-transitioning',
    'set-transform',
    'set-reverse',
}

export type RTCarouselAction<T> = {
    type: EActions;
    value: T;
};

export const setActiveAction = <T extends RTCarouselState['active']>(
    active: T,
): RTCarouselAction<T> => {
    return {
        type: EActions['set-active'],
        value: active,
    };
};

export const setSizeAction = <T extends RTCarouselState['size']>(
    active: T,
): RTCarouselAction<T> => {
    return {
        type: EActions['set-size'],
        value: active,
    };
};

export const setTransitioningAction = <
    T extends RTCarouselState['transitioning'],
>(
    active: T,
): RTCarouselAction<T> => {
    return {
        type: EActions['set-transitioning'],
        value: active,
    };
};

export const setTransformAction = <T extends RTCarouselState['transform']>(
    active: T,
): RTCarouselAction<T> => {
    return {
        type: EActions['set-transform'],
        value: active,
    };
};

export const setReverseAction = <T extends RTCarouselState['reverse']>(
    reverse: T,
): RTCarouselAction<T> => {
    return {
        type: EActions['set-reverse'],
        value: reverse,
    };
};
