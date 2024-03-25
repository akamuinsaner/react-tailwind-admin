export type RTCascaderState = {
    hover: boolean;
    wrapper: HTMLDivElement;
    anchor: HTMLDivElement;
    value: string;
    searchValue: string;
};

export const initialState: RTCascaderState = {
    hover: false,
    wrapper: null,
    anchor: null,
    value: '',
    searchValue: ''
};
