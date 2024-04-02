export interface RTTextareaStyles {
    box: {
        base: string;
        focused: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        disabled: string;
    };
    input: string;
    count: string;
}

export const styles: RTTextareaStyles = {
    box: {
        base: 'border border-mainBorder text-mainText rounded overflow-hidden border-solid flex items-center px-3 py-1 relative flex-1 hover:border-primary',
        success: '!border-success  !hover:border-success',
        info: '!border-info  !hover:border-info',
        warning: '!border-warning !hover:border-warning',
        danger: '!border-danger  !hover:border-danger',
        focused: 'border-primary hover:border-primary',
        disabled:
            'bg-disableBg hover:border-disableBg text-disableText pointer-events-none select-none',
    },

    input: 'outline-none border-none w-full h-full text-inherit bg-inherit',
    count: 'absolute right-3 bottom-1 text-inherit text-sm',
};
