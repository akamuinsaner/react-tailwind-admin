export type GlobalState = {
    theme: string;
    search: boolean;
    sideWidth: number;
    sideOpenKeys: string[];
};

export const initialState: GlobalState = {
    theme: localStorage.getItem('RT_THEME') || 'light',
    search: false,
    sideWidth: 256,
    sideOpenKeys: [],
};
