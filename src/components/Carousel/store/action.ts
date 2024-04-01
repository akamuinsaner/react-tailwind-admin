import { RTCarouselState } from './state';

export enum EActions {
    'set-active',
    'set-size',
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
