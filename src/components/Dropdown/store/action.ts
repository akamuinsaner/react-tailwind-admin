import { RTDropdownState } from './state';

export enum EActions {
    'set-anchor',
    'set-wrapper',
}

export type RTDropdownAction<T> = {
    type: EActions;
    value?: T;
};

export const setAnchorAction = <T extends RTDropdownState['anchor']>(
    anchor: T,
): RTDropdownAction<T> => {
    return {
        type: EActions['set-anchor'],
        value: anchor,
    };
};

export const setWrapperAction = <T extends RTDropdownState['wrapper']>(
    wrapper: T,
): RTDropdownAction<T> => {
    return {
        type: EActions['set-wrapper'],
        value: wrapper,
    };
};
