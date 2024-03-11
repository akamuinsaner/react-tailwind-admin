import { RTPlacement } from "@/src/types/placement";
import { createContext } from "react";


export type RTModalContext = {
    closable: boolean;
    onClickClose: () => void;
}

export const ModalContext = createContext<RTModalContext>(null);