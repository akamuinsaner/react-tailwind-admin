import { RTPlacement } from "@/src/types/placement";
import { RTSize } from "@/src/types/size";
import { createContext } from "react";


export type RTSelectContext = {
    value: string;
    anchor: HTMLDivElement;
    wrapper: HTMLDivElement;
    setWrapper: (wrapper: HTMLDivElement) => void;
    removeWrapper: () => void;
    setValue: (value: string) => void;
    size?: RTSize;
    onChange: (value: string) => void;
}

export const SelectContext = createContext<RTSelectContext>(null);