import { RTSliderState } from './state';

export enum EActions {
    'set-values',
}

export type RTSliderAction<T> = {
    type: EActions;
    value: T;
};

export const setValuesAction = <T extends RTSliderState['values']>(
    values: T,
): RTSliderAction<T> => {
    return {
        type: EActions['set-values'],
        value: values,
    };
};
