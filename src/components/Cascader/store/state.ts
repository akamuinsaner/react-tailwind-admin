import { RESERVED_KEY, DataSet, initialDataSet } from '../utils';
import { RTCascaderOption } from '../index';

export type RTCascaderState = {
    loadingId: number | string;
    dataSet: DataSet<RTCascaderOption>;
    openKeys: any[];
    hover: boolean;
    wrapper: HTMLDivElement;
    anchor: HTMLDivElement;
    value: Array<string | number>;
    searchValue: string;
};

export const initialState: RTCascaderState = {
    loadingId: null,
    dataSet: initialDataSet,
    openKeys: [RESERVED_KEY],
    hover: false,
    wrapper: null,
    anchor: null,
    value: [],
    searchValue: '',
};
