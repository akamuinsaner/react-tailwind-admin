export type RTSelectState = {
    hover: boolean;
    wrapper: HTMLDivElement;
    anchor: HTMLDivElement;
    value: string;
    searchValue: string;
}

export const initialState: RTSelectState = {
    hover: false,
    wrapper: null,
    anchor: null,
    value: '',
    searchValue: ''
}