import { createContext, MutableRefObject } from 'react';

export type RTTabsContext = {
    setActive: (active: string | number) => void;
    controlled: boolean;
    active: string | number;
    focusInfo: { width: number; left: number };
    setFocusInfo: (info: { width: number; left: number }) => void;
    placement: 'top' | 'left' | 'bottom' | 'right';
    tabRefs: MutableRefObject<HTMLElement[]>;
};

export const TabsContext = createContext<RTTabsContext>(null);
