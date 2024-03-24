export type RTSegmentState = {
    active: string | number;
    anchor: HTMLElement;
};

export const initialState: RTSegmentState = {
    active: null,
    anchor: null,
};
