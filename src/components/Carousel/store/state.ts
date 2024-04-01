export type RTCarouselState = {
    size: number;
    active: number;
    transitioning: boolean;
    reverse: boolean;
    transform: {
        x: number;
        y: number;
    }
};

export const initialState: RTCarouselState = {
    size: 0,
    active: 0,
    transitioning: false,
    reverse: false,
    transform: {
        x: 0,
        y: 0
    }
};
