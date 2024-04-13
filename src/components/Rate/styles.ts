export type RTRateStyles = {
    box: string;
    readOnly: string;
    item: {
        base: string;
        small: string;
        medium: string;
        large: string;
        inner: string;
        left: string;
        right: string;
    };
    icon: {
        base: string;
        string: string;
        left: string;
        right: string;
        active: string;
    };
};

export const styles: RTRateStyles = {
    box: 'inline-flex p-0 m-0 relative gap-1 items-center overflow-hidden',
    readOnly: 'select-none pointer-events-none',
    item: {
        base: 'flex items-center relative cursor-pointer',
        small: 'h-rt-small w-rt-small text-[32px]',
        medium: 'h-rt-medium w-rt-medium text-[40px]',
        large: 'h-rt-large w-rt-large text-[48px]',
        inner: 'w-1/2 h-full overflow-hidden absolute',
        left: 'left-0',
        right: 'right-0',
    },
    icon: {
        base: 'text-disableText h-full',
        string: 'w-[200%] flex items-center justify-center',
        left: 'absolute left-0',
        right: 'absolute right-0',
        active: 'text-yellow-400',
    },
};
