import { RTPopoverState } from './state';

export enum EActions {
    'set-anchor',
    'set-wrapper',
}

export type RTPopoverAction<T> = {
    type: EActions;
    value?: T;
};

export const setAnchorAction = <T extends RTPopoverState['anchor']>(
    anchor: T,
): RTPopoverAction<T> => {
    return {
        type: EActions['set-anchor'],
        value: anchor,
    };
};

export const setWrapperAction = <T extends RTPopoverState['wrapper']>(
    active: T,
): RTPopoverAction<T> => {
    return {
        type: EActions['set-wrapper'],
        value: active,
    };
};
