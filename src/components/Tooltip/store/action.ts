import { RTTooltipState } from './state';

export enum EActions {
    'set-anchor',
    'set-wrapper',
}

export type RTTooltipAction<T> = {
    type: EActions;
    value?: T;
};

export const setAnchorAction = <T extends RTTooltipState['anchor']>(
    anchor: T,
): RTTooltipAction<T> => {
    return {
        type: EActions['set-anchor'],
        value: anchor,
    };
};

export const setWrapperAction = <T extends RTTooltipState['wrapper']>(
    active: T,
): RTTooltipAction<T> => {
    return {
        type: EActions['set-wrapper'],
        value: active,
    };
};
