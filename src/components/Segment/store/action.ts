import { RTSegmentState } from './state';

export enum EActions {
    'set-active',
    'set-anchor',
}

export type RTSegmentAction<T> = {
    type: EActions;
    value: T;
};

export const setActiveAction = <T extends RTSegmentState['active']>(
    active: T,
): RTSegmentAction<T> => {
    return {
        type: EActions['set-active'],
        value: active,
    };
};

export const setAnchorAction = <T extends RTSegmentState['anchor']>(
    anchor: T,
): RTSegmentAction<T> => {
    return {
        type: EActions['set-anchor'],
        value: anchor,
    };
};
