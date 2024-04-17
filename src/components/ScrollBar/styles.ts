export type RTScrollBar = {
    bar: {
        base: string;
        horizontal: string;
        vertical: string;
        active: string;
    };
    track: {
        base: string;
    };
    thumb: {
        base: string;
        horizontal: string;
        vertical: string;
        dragging: string;
    };
};

export const styles: RTScrollBar = {
    bar: {
        base: 'absolute select-none pointer-events-none opacity-0 transition-all duration-standard ease-in z-20',
        horizontal: 'h-1.5 w-full bottom-0 left-0 right-0',
        vertical: 'w-1.5 h-full right-0 top-0 bottom-0',
        active: ' select-auto pointer-events-auto  opacity-100',
    },
    track: {
        base: 'absolute w-full h-full bg-disableBg',
    },
    thumb: {
        base: 'bg-disableText rounded-full transition-all duration-standard ease-in opacity-70',
        horizontal: 'h-full',
        vertical: 'w-full',
        dragging:
            'cursor-grabbing transition-none duration-0 select-none pointer-events-all opacity-100',
    },
};
