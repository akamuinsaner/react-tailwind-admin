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
        disabled: string;
    },
    group: {
        base: string;
        vertical: string;
    }
}

export const styles: RTCheckboxStyles = {
    box: {
        base: 'inline-flex items-center cursor-pointer select-none text-mainText',
        disabled: 'text-disableText pointer-events-none select-none'
    },
    wrapper: 'relative w-5 h-5 overflow-hidden border border-mainBorder overflow-hidden mr-2 rounded-full',
    input: 'absolute z-[1] opacity-0 cursor-pointer w-full h-full',
    inner: {
        base: `inline-block absolute w-full h-full overflow-hidden after:content=['']
            after:absolute after:border-white transition-[background-color] duration-200 ease-linear`,
        checked: `bg-primary after:w-1.5 after:h-1.5 after:rounded-full after:bg-white
        after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2`,
        success: 'bg-success',
        info: 'bg-info',
        warning: 'bg-warning',
        danger: 'bg-danger',
        disabled: 'bg-disableBg pointer-events-none select-none'
    },
    group: {
        base: 'inline-flex flex-row gap-3',
        vertical: 'flex-col'
    }
}

