import { createContext } from 'react';

export interface IGlobalContext {
    theme: string;
    search: boolean;
    setTheme: (theme: string) => void;
    setSearch: (search: boolean) => void;
    sideOpenKeys: string[];
    setSideOpenKeys: (sideOpenKeys: string[]) => void;
    sideWidth: number;
    setSideWidth: (sideWidth: number) => void;
}

export const GlobalContext = createContext<IGlobalContext>(null);
