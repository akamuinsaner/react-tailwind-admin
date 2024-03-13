export type RTMultiSelectState = {
    hover: boolean;
    wrapper: HTMLDivElement;
    anchor: HTMLDivElement;
    value: string[];
    searchValue: string;
}

export const initialState: RTMultiSelectState = {
    hover: false,
    wrapper: null,
    anchor: null,
    value: [],
    searchValue: ''
}