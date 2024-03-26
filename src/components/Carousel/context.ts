import { createContext, MutableRefObject } from 'react';
import { RTCarouselDirection } from '.';

export type RTCarouselContext = {
    span: number;
    space: number;
    direction: RTCarouselDirection;
    childrenRefs: MutableRefObject<HTMLElement[]>;
};

export const CarouselContext = createContext<RTCarouselContext>(null);
