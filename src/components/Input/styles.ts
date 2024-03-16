export interface RTInputStyles {
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
    wrapper: string;
    inner: string;
    count: string;
    addOnBefore: string;
    prefix: {
        base: string;
        warning: string;
        danger: string;
    };
    input: string;
    suffix: {
        base: string;
        warning: string;
        danger: string;
    };
    addOnAfter: string;
}

export const styles: RTInputStyles = {
    box: {
        base: 'rounded overflow-hidden border-solid border-mainBorder text-mainText flex items-center hover:border-primary shrink-0',
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
        disabled: 'bg-disableBg hover:bg-disableBg text-disableText pointer-events-none select-none'
    },
    wrapper: ' px-3 py-1 flex items-center w-full h-full text-inherit bg-inherit',
    inner: 'w-full h-full  text-inherit bg-inherit relative',
    count: 'absolute right-1 top-1/2 -translate-y-1/2 text-inherit',
    addOnBefore: 'bg-inherit inline-block h-full shrink-0 flex items-center text-inherit px-3 bg-main [&>*]:border-none',
    prefix: {
        base :'bg-inherit inline-block h-full shrink-0 flex items-center text-inherit mr-3 text-inherit [&>svg]:h-5 [&>svg]:cursor-pointer',
        warning: 'text-warning',
        danger: 'text-danger'
    },
    input: 'outline-none border-none w-full h-full text-inherit bg-inherit',
    suffix: {
        base: 'bg-inherit inline-block h-full shrink-0 flex items-center text-inherit ml-3 [&>svg]:h-5 [&>svg]:cursor-pointer',
        warning: 'text-warning',
        danger: 'text-danger'
    },
    addOnAfter: 'bg-inherit inline-block h-full shrink-0 flex items-center text-inherit px-3 bg-main [&>*]:border-none'
}

