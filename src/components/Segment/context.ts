import { RTSize } from '@/src/types/size';
import { createContext } from 'react';

export type RTSegmentContext = {
    active: string | number;
    setActive: (value: string | number) => void;
    setAnchor: (anchor: HTMLElement) => void;
    size: RTSize;
    disabled: boolean;
};

export const SegmentContext = createContext<RTSegmentContext>(null);
