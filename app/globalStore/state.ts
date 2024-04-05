export type GlobalState = {
    theme: string;
    search: boolean;
};

export const initialState: GlobalState = {
    theme: localStorage.getItem('RT_THEME') || 'light',
    search: false,
};
