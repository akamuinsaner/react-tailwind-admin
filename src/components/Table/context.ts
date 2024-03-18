import { RTSize } from '@/src/types/size';
import { createContext } from 'react';

export type RTTableContext = {
    size: RTSize;
    border: boolean;
};

export const TableContext = createContext<RTTableContext>(null);
