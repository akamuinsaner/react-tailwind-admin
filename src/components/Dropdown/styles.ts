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
        base: `bg-main py-1 text-mainText`,
        show: 'block overflow-visible',
        arrow: 'h-3 w-3 absolute bg-main',
    },
};
