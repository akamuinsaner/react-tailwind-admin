export interface RTCheckboxStyles {
    box: {
        base: string;
        disabled: string;
    };
    wrapper: string;
    input: string;
    inner: {
        base: string;
        checked: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        indeterminate: string;
        disabled: string;
    };
}

export const styles: RTCheckboxStyles = {
    box: {
        base: 'inline-flex items-center cursor-pointer select-none text-mainText shrink-0',
        disabled: 'text-disableText pointer-events-none select-none',
    },
    wrapper:
        'relative w-5 h-5 overflow-hidden border border-mainBorder overflow-hidden mr-2 rounded  shrink-0',
    input: 'absolute z-[1] opacity-0 cursor-pointer w-full h-full',
    inner: {
        base: `inline-block absolute w-full h-full overflow-hidden after:content=['']
            after:absolute after:border-white transition-[background-color] duration-200 ease-linear`,
        checked: `bg-primary after:border-r-2 after:border-b-2 after:w-2 after:h-4
                 after:-translate-y-px after:translate-x-1.5 after:rotate-45`,
        success: 'bg-success',
        info: 'bg-info',
        warning: 'bg-warning',
        danger: 'bg-danger',
        indeterminate: `bg-primary after:w-4 after:border-t-2 after:top-1/2 after:left-1/2 
        after:rounded-full after:-translate-x-1/2 after:-translate-y-1/2`,
        disabled: 'bg-disableBg pointer-events-none select-none',
    },
};
