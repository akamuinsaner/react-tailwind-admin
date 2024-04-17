export interface RTCheckboxStyles {
    base: string;
    box: {
        base: string;
        checked: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        disabled: string;
        large: string;
        medium: string;
        small: string;
    };
    input: string;
    text: {
        base: string;
        checked: string;
        large: string;
        medium: string;
        small: string;
    };
    inner: {
        base: string;
        disabled: string;
        large: string;
        medium: string;
        small: string;
    };
}

export const styles: RTCheckboxStyles = {
    base: 'inline-flex items-center gap-2 text-mainText',
    box: {
        base: `inline-flex items-center cursor-pointer select-none min-w-12 rounded-full 
            overflow-hidden h-6 relative bg-primary bg-disableText transition-all`,
        checked: 'bg-primary',
        success: 'bg-success',
        info: 'bg-info',
        warning: 'bg-warning',
        danger: 'bg-danger',
        disabled: 'text-disableText pointer-events-none select-none opacity-50',
        large: 'h-7',
        medium: 'h-6',
        small: 'h-5',
    },
    input: 'absolute z-[1] opacity-0 cursor-pointer w-full h-full',
    text: {
        base: 'w-full h-full text-center flex items-center justify-center pl-7 pr-2 text-sm text-white',
        checked: 'pl-2 pr-7',
        large: 'text-md',
        medium: 'text-sm',
        small: 'text-xs',
    },
    inner: {
        base: `inline-block absolute w-5 h-5 overflow-hidden bg-white rounded-full
        transition-all left-[2px] top-1/2 -translate-y-1/2`,
        disabled: 'bg-disableBg pointer-events-none select-none',
        large: 'h-6 w-6',
        medium: 'h-5 w-5',
        small: 'h-4 w-4',
    },
};
