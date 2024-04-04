import { RTTreeSelectState } from './state';

export enum EActions {
    'set-anchor',
    'set-value',
    'set-wrapper',
    'set-search',
    'set-hover',
    'set-open-keys',
    'set-data-set',
    'set-loading-id',
}

export type RTTreeSelectAction<T> = {
    type: EActions;
    value: T;
};

export const setDataSetAction = <T extends RTTreeSelectState['dataSet']>(
    value: T,
): RTTreeSelectAction<T> => {
    return {
        type: EActions['set-data-set'],
        value: value,
    };
};

export const setOpenKeysAction = <T extends RTTreeSelectState['openKeys']>(
    value: T,
): RTTreeSelectAction<T> => {
    return {
        type: EActions['set-open-keys'],
        value: value,
    };
};

export const setValueAction = <T extends RTTreeSelectState['value']>(
    value: T,
): RTTreeSelectAction<T> => {
    return {
        type: EActions['set-value'],
        value: value,
    };
};

export const setWrapperAction = <T extends RTTreeSelectState['wrapper']>(
    value: T,
): RTTreeSelectAction<T> => {
    return {
        type: EActions['set-wrapper'],
        value: value,
    };
};

export const setAnchorAction = <T extends RTTreeSelectState['anchor']>(
    value: T,
): RTTreeSelectAction<T> => {
    return {
        type: EActions['set-anchor'],
        value: value,
    };
};

export const setSearchAction = <T extends RTTreeSelectState['searchValue']>(
    value: T,
): RTTreeSelectAction<T> => {
    return {
        type: EActions['set-search'],
        value: value,
    };
};

export const setHoverAction = <T extends RTTreeSelectState['hover']>(
    value: T,
): RTTreeSelectAction<T> => {
    return {
        type: EActions['set-hover'],
        value: value,
    };
};

export const setLoadingIdAction = <T extends RTTreeSelectState['loadingId']>(
    value: T,
): RTTreeSelectAction<T> => {
    return {
        type: EActions['set-loading-id'],
        value: value,
    };
};
