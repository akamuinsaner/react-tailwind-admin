import { RTPlacement } from "@/src/types/placement";
import { RTSeverity } from "@/src/types/severity";
import { ChangeEvent, createContext } from "react";


export type RTRadioContext = {
    status: RTSeverity;
    disabled: boolean;
    value: string | number;
    onRadioChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioContext = createContext<RTRadioContext>(null);