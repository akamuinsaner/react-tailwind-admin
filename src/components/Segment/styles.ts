export type RTSegmentStyles = {
    wrapper: {
        base: string;
        large: string;
        medium: string;
        small: string;
        disabled: string;
        block: string;
    };
    focus: {
        base: string;
    };
    item: {
        base: string;
        large: string;
        medium: string;
        small: string;
        disabled: string;
    };
    icon: {
        base: string;
        children: string;
    };
};

export const styles: RTSegmentStyles = {
    wrapper: {
        base: 'inline-flex items-center rounded overflow-hidden bg-disableBg relative',
        large: 'min-h-rt-large',
        medium: 'min-h-rt-medium',
        small: 'min-h-rt-small',
        disabled: 'select-none text-disableText pointer-events-none',
        block: 'flex w-full',
    },
    focus: {
        base: 'bg-white/60 absolute top-0.5 bottom-0.5 rounded transition-all',
    },
    item: {
        base: 'flex flex-1 items-center justify-center px-4 h-full cursor-pointer relative z-[1] select-none',
        large: 'min-h-rt-large',
        medium: 'min-h-rt-medium',
        small: 'min-h-rt-small',
        disabled: 'select-none text-disableText pointer-events-none',
    },
    icon: {
        base: 'h-5 w-5',
        children: 'mr-2',
    },
};
