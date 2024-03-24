import { RTSize } from '@/src/types/size';
import { createContext } from 'react';

export type RTListContext = {
    divider: boolean;
    size: RTSize;
};

export const ListContext = createContext<RTListContext>(null);
