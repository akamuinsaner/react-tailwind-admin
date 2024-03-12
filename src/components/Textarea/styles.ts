export interface RTTextareaStyles {
    box: {
        base: string;
        focused: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        disabled: string;
    },
    input: string;
    count: string;

}

export const styles: RTTextareaStyles = {
    box: {
        base: 'border rounded overflow-hidden border-solid flex items-center px-3 py-1 relative flex-1',
        success: 'border-success !ring-success',
        info: 'border-info !ring-info',
        warning: 'border-warning !ring-warning',
        danger: 'border-danger !ring-danger',
        focused: 'border-transparent ring-2 ring-primary',
        disabled: 'bg-disableBg'
    },

    input: 'outline-none border-none w-full h-full text-inherit bg-inherit',
    count: 'absolute right-3 bottom-1 text-inherit text-sm',
}

