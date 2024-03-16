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
    },
    icon: {
        base: string;
        large: string;
        medium: string;
        small: string;
    },
    wrapper: string;
    inner: string;
    count: string;
    input: string;
    selectBox: {
        base: string;
        show: string;
    }
    option: {
        base: string;
        selected: string;
        large: string;
        medium: string;
        small: string;
    },
    tagBox: string;
    tag: {
        base: string;
        large: string;
        medium: string;
        small: string;
        icon: string;
    }
}

export const styles: RTSelectStyles = {
    box: {
        base: 'rounded overflow-hidden border-solid border-mainBorder text-mainText flex items-center shrink-0 hover:border-primary pr-8 relative',
        large: 'h-rt-large text-rt-large',
        medium: 'h-rt-medium text-rt-medium',
        small: 'h-rt-small text-rt-small',
        outlined: 'border',
        contained: 'bg-content',
        underlined: '!border-b !ring-0 rounded-none !hover:border-primary',
        underlinedFocus: '!border-primary !border-b-2',
        borderless: '!border-none !ring-0',
        success: 'border-success !ring-success hover:border-success',
        info: 'border-info !ring-info hover:border-info',
        warning: 'border-warning !ring-warning hover:border-warning',
        danger: 'border-danger !ring-danger hover:border-danger',
        focused: 'border-transparent ring-2 ring-primary hover:border-transparent',
        disabled: 'bg-disableBg hover:border-disableBg text-disableText select-none pointer-event-none'
    },
    icon: {
        base: 'absolute top-1/2 -translate-y-1/2 right-2 w-6 h-6  cursor-pointer text-disableText',
        large: 'w-7 h-7',
        medium: 'w-6 h-6',
        small: 'w-5 h-5',
    },
    wrapper: 'px-3 py-1 flex items-center w-full h-full text-inherit bg-inherit',
    inner: 'w-full h-full  text-inherit bg-inherit relative',
    count: 'absolute right-1 top-1/2 -translate-y-1/2 text-inherit',
    input: 'outline-none border-none w-full h-full text-inherit bg-inherit',
    selectBox: {
        base: `opacity-0 overflow-hidden absolute z-10 shadow bg-main  transition-[transform, opacity] 
        duration-200 ease-linear scale-y-0 max-h-56`,
        show: `opacity-100 scale-y-1`
    },
    option: {
        base: `flex justify-start items-center relative w-full text-left  cursor-pointer px-4 py-2 select-none bg-inherit hover:bg-main-hover break-inside-avoid text-mainText`,
        selected: 'text-primary bg-primary/10 hover:bg-primary/10',
        large: 'h-rt-large text-rt-large text-mainText',
        medium: 'h-rt-medium text-rt-medium text-mainText',
        small: 'h-rt-small text-rt-small text-mainText',
    },
    tagBox: 'h-full flex items-center pl-3 py-1 gap-x-0.5',
    tag: {
        base: 'h-full px-2 flex items-center bg-disableBg rounded text-inherit',
        large: 'text-rt-large',
        medium: 'text-rt-medium',
        small: 'text-rt-small',
        icon: 'h-4 w-4 ml-1 cursor-pointer'
    }
}

