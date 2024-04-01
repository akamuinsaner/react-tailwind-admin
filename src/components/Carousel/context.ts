import { createContext, MutableRefObject } from 'react';
import { RTCarouselDirection } from '.';

export type RTCarouselContext = {
    span: number;
    space: number;
    active: number;
    actualActive: number;
    count: number;
    direction: RTCarouselDirection;
    childrenRefs: MutableRefObject<HTMLElement[]>;
};

export const CarouselContext = createContext<RTCarouselContext>(null);
