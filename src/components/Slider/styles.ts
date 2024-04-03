export type RTSliderStyles = {
    box: {
        base: string;
        disabled: string;
    };
    track: {
        base: string;
    };
    bar: {
        base: string;
        active: string;
        disabled: string;
    };
    prog: {
        base: string;
        disabled: string;
    };
    num: {
        base: string;
    };
};

export const styles: RTSliderStyles = {
    box: {
        base: 'flex items-center h-6 py-2 overflow-visible rounded-full relative',
        disabled: 'opacity-50 select-none pointer-events-none',
    },
    track: {
        base: 'h-full w-full bg-mainBorder rounded-full relative',
    },
    bar: {
        base: `w-4 h-4 rounded-full border-2 border-primary/50 absolute -translate-x-1/2
            bg-main cursor-pointer hover:w-6 hover:h-6 hover:border-4 hover:border-primary select-none`,
        active: ` w-6 h-6 border-4 border-primary`,
        disabled: 'select-none pointer-events-none',
    },
    prog: {
        base: 'h-full bg-primary absolute',
        disabled: '',
    },
    num: {
        base: 'z-50 text-sm bg-black/50 text-white p-1 rounded absolute left-1/2 -translate-x-1/2 -translate-y-full',
    },
};
