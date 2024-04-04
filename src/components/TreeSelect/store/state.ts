import { RESERVED_KEY, DataSet, initialDataSet } from '../../Cascader/utils';
import { RTTreeSelectOption } from '../index';

export type RTTreeSelectState = {
    loadingId: number | string;
    dataSet: DataSet<RTTreeSelectOption>;
    openKeys: any[];
    hover: boolean;
    wrapper: HTMLDivElement;
    anchor: HTMLDivElement;
    value: Array<string | number>;
    searchValue: string;
};

export const initialState: RTTreeSelectState = {
    loadingId: null,
    dataSet: initialDataSet,
    openKeys: [],
    hover: false,
    wrapper: null,
    anchor: null,
    value: [],
    searchValue: '',
};
