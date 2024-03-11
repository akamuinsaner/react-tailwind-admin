import { RTPlacement } from "@/src/types/placement";
import { createContext } from "react";
import { RTDropdownProps } from './index';

export type RTDropDownContext = {
    anchor: HTMLElement;
    active: boolean;
    setAnchor: (anchor: HTMLElement) => void;
    setActive: (open: boolean, trigger?: RTDropdownProps["trigger"]) => void;
    placement: RTPlacement;
    trigger: RTDropdownProps["trigger"];
    arrow: boolean;
}

export const DropDownContext = createContext<RTDropDownContext>(null);