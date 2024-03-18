export type RTTabsState = {
    active: string | number;
    focusInfo: {
        left: number;
        width: number;
    }
}

export const initialState: RTTabsState = {
    active: null,
    focusInfo: null
}