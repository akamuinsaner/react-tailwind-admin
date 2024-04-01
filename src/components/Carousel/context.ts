import { createContext, MutableRefObject } from 'react';
import { RTCarouselDirection } from '.';

export type RTCarouselContext = {
    span: number;
    space: number;
    active: number;
    setActive: (active: number) => void;
    setTransitioning: (transitioning: boolean) => void;
    actualActive: number;
    count: number;
    direction: RTCarouselDirection;
    childrenRefs: MutableRefObject<HTMLElement[]>;
};

export const CarouselContext = createContext<RTCarouselContext>(null);
