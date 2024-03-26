import { RTCarouselState } from './state';

export enum EActions {
    'set-active',
    'set-span',
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

export const setSpanAction = <T extends RTCarouselState['span']>(
    active: T,
): RTCarouselAction<T> => {
    return {
        type: EActions['set-span'],
        value: active,
    };
};
