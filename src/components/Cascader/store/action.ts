import { RTCascaderState } from './state';

export enum EActions {
    'set-anchor',
}

export type RTCascaderAction<T> = {
    type: EActions;
    value: T;
};

export const setValueAction = <T extends RTCascaderState['value']>(
    value: T,
): RTCascaderAction<T> => {
    return {
        type: EActions['set-value'],
        value: value,
    };
};

export const setWrapperAction = <T extends RTCascaderState['wrapper']>(
    value: T,
): RTCascaderAction<T> => {
    return {
        type: EActions['set-wrapper'],
        value: value,
    };
};

export const setAnchorAction = <T extends RTCascaderState['anchor']>(
    value: T,
): RTCascaderAction<T> => {
    return {
        type: EActions['set-anchor'],
        value: value,
    };
};

export const setSearchAction = <T extends RTCascaderState['searchValue']>(
    value: T,
): RTCascaderAction<T> => {
    return {
        type: EActions['set-search'],
        value: value,
    };
};

export const setHoverAction = <T extends RTCascaderState['hover']>(
    value: T,
): RTCascaderAction<T> => {
    return {
        type: EActions['set-hover'],
        value: value,
    };
};
