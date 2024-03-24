import { RTPlacement } from '@/src/types/placement';
import { createContext, MutableRefObject, SyntheticEvent } from 'react';
import { RTDropdownProps } from './index';

export type RTDropDownContext = {
    anchor: HTMLElement;
    wrapper: HTMLElement;
    setAnchor: (anchor: HTMLElement) => void;
    setWrapper: (e: SyntheticEvent) => void;
    removeWrapper: () => void;
    placement: RTPlacement;
    trigger: RTDropdownProps['trigger'];
    arrow: boolean;
    leaveTimerRef: MutableRefObject<NodeJS.Timeout>;
};

export const DropDownContext = createContext<RTDropDownContext>(null);
