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
    count: string;
    input: string;
    selectBox: {
        base: string;
        show: string;
    };
    panel: {
        base: string;
        header: {
            base: string;
            icon: string;
            display: string;
            disabledIcon: string;
        };
        body: {
            base: string;
            wrapper: string;
            header: string;
            item: string;
            notInMonth: string;
            isToday: string;
            selected: string;
            outOfRange: string;
        };
        year: {
            selected: string;
            wrapper: string;
            item: string;
            notIn: string;
        };
        footer: {
            base: string;
        };
    };
    range: {
        connector: string;
        wrapper: string;
    };
}

export const styles: RTSelectStyles = {
    box: {
        base: 'rounded overflow-hidden border-solid border-mainBorder flex items-center shrink-0 hover:border-primary pr-8 relative text-mainText',
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
        base: 'absolute top-1/2 -translate-y-1/2 right-2 w-6 h-6 cursor-pointer text-inherit',
        large: 'w-7 h-7',
        medium: 'w-6 h-6',
        small: 'w-5 h-5',
    },
    wrapper:
        'px-3 py-1 flex items-center w-full h-full text-inherit bg-inherit relative',
    count: 'absolute right-1 top-1/2 -translate-y-1/2 text-inherit',
    input: 'outline-none border-none flex-1 h-full text-inherit bg-inherit',
    selectBox: {
        base: `overflow-hidden bg-main rounded`,
        show: `overflow-auto`,
    },
    panel: {
        base: 'text-mainText h-full w-full flex flex-col',
        header: {
            base: 'flex items-center px-4 py-2 border-b text-inherit',
            icon: 'h-4 w-4 mx-0.5 cursor-pointer select-none hover:text-primary text-inherit',
            display: `font-semibold m-auto flex gap-2 text-sm [&>span]:cursor-pointer 
                    [&>span]:select-none [&>span:hover]:text-primary`,
            disabledIcon: `opacity-0 pointer-events-none select-none`,
        },
        body: {
            base: 'px-2 py-2 text-mainText flex-1',
            wrapper: 'grid grid-cols-7 h-full w-full gap-2',
            header: ' flex items-center justify-center font-semibold text-sm',
            item: 'flex items-center justify-center text-sm cursor-pointer hover:bg-disableBg/50 min-h-8 min-w-8 rounded',
            notInMonth: 'text-disableText',
            isToday: 'border-primary border',
            selected: 'bg-primary text-white hover:bg-primary',
            outOfRange:
                'text-disableText bg-disableBg hover:bg-disableBg pointer-events-none select-none',
        },
        year: {
            selected: 'bg-primary text-white hover:bg-primary ',
            wrapper: 'grid grid-cols-3 px-2 py-2 gap-4 flex-1',
            item: 'flex items-center justify-center text-sm cursor-pointer hover:bg-disableBg/50 min-h-8 min-w-8 rounded',
            notIn: 'text-disableText',
        },
        footer: {
            base: 'border-mainBorder border-t flex px-4 py-2 items-center justify-center text-primary font-semibold text-sm [&>span]:cursor-pointer',
        },
    },
    range: {
        connector: 'w-6 mx-2  text-disableText shrink-0',
        wrapper: 'flex',
    },
};
