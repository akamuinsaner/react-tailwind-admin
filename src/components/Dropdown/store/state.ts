export type RTDropdownState = {
    anchor: HTMLElement;
    active: boolean;
}

export const initialState: RTDropdownState = {
    anchor: null,
    active: false,
}