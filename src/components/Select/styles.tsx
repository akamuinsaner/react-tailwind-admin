export interface RTSelectStyles {
    box: {
        base: string;
        focused: string;
        large: string;
        medium: string;
        small: string;
        contained: string;
        underlined: string;
        outlined: string;
        underlinedFocus: string;
        borderless: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        disabled: string;
    };
    icon: {
        base: string;
        large: string;
        medium: string;
        small: string;
    };
    wrapper: string;
    inner: string;
    count: string;
    input: string;
    selectBox: {
        base: string;
        show: string;
    };
    option: {
        base: string;
        selected: string;
        large: string;
        medium: string;
        small: string;
    };
    tagBox: string;
    tag: {
        base: string;
        large: string;
        medium: string;
        small: string;
        icon: string;
    };
}

export const styles: RTSelectStyles = {
    box: {
        base: 'rounded overflow-hidden border-solid border-mainBorder flex items-center shrink-0 hover:border-primary pr-8 relative text-mainText transition-all',
        large: 'h-rt-large text-rt-large',
        medium: 'h-rt-medium text-rt-medium',
        small: 'h-rt-small text-rt-small',
        outlined: 'border',
        contained: 'bg-content',
        underlined: '!border-b !ring-0 rounded-none !hover:border-primary',
        underlinedFocus: '!border-primary !border-b',
        borderless: '!border-none !ring-0',
        success: '!border-success  !hover:border-success',
        info: '!border-info  !hover:border-info',
        warning: '!border-warning !hover:border-warning',
        danger: '!border-danger  !hover:border-danger',
        focused: 'border-primary hover:border-primary',
        disabled:
            'bg-disableBg hover:border-disableBg text-disableText pointer-events-none select-none',
    },
    icon: {
        base: 'absolute top-1/2 -translate-y-1/2 right-2 w-6 h-6  cursor-pointer text-inherit',
        large: 'w-7 h-7',
        medium: 'w-6 h-6',
        small: 'w-5 h-5',
    },
    wrapper:
        'px-3 py-1 flex items-center w-full h-full text-inherit bg-inherit',
    inner: 'w-full h-full  text-inherit bg-inherit relative',
    count: 'absolute right-1 top-1/2 -translate-y-1/2 text-inherit',
    input: 'outline-none border-none w-full h-full text-inherit bg-inherit placeholder-disableText',
    selectBox: {
        base: `overflow-hidden bg-main max-h-56 rounded`,
        show: `overflow-auto`,
    },
    option: {
        base: `flex justify-start items-center relative w-full text-left cursor-pointer px-4 py-2 select-none bg-inherit hover:bg-main-hover break-inside-avoid text-mainText  transition-all`,
        selected: 'text-primary bg-primary/10',
        large: 'h-rt-large text-rt-large text-mainText',
        medium: 'h-rt-medium text-rt-medium text-mainText',
        small: 'h-rt-small text-rt-small text-mainText',
    },
    tagBox: 'h-full flex items-center pl-3 py-1 gap-x-0.5',
    tag: {
        base: 'h-full px-2 flex items-center bg-disableBg rounded text-inherit whitespace-nowrap',
        large: 'text-rt-large',
        medium: 'text-rt-medium',
        small: 'text-rt-small',
        icon: 'h-4 w-4 ml-1 cursor-pointer',
    },
};
