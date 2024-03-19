export type GlobalState = {
    theme: string;
};

export const initialState: GlobalState = {
    theme: localStorage.getItem('RT_THEME') || 'light',
};
