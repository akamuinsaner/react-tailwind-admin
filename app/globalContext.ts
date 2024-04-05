import { createContext } from 'react';

export interface IGlobalContext {
    theme: string;
    search: boolean;
    setTheme: (theme: string) => void;
    setSearch: (search: boolean) => void;
}

export const GlobalContext = createContext<IGlobalContext>(null);
