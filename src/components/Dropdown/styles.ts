export interface RTDropDownStyles {
    base: string;
    anchor: string;
    box: {
        base: string;
        show: string;
        arrow: string;
    };
}

export const styles: RTDropDownStyles = {
    base: 'inline-block',
    anchor: '',
    box: {
        base: `opacity-0 max-h-0 overflow-hidden absolute z-50 shadow-[0_0_60px_rgba(0,0,0,0.3)] bg-main 
                transition-[max-height, opacity] duration-200 ease-linear`,
        show: 'block max-h-64 opacity-100 overflow-visible',
        arrow: 'h-3 w-3 absolute bg-main',
    },
};
