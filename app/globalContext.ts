import { createContext } from "react";

export interface IGlobalContext {
    theme: string;
    setTheme: (theme: string) => void;
}

export const GlobalContext = createContext<IGlobalContext>(null);