export type RTToolTipStyles = {
    box: {
        base: string;
        show: string;
        arrow: string;
        title: string;
        content: string;
    };
};

export const styles: RTToolTipStyles = {
    box: {
        base: `bg-main text-mainText min-w-40 
                 rounded p-4 text-sm`,
        show: 'block',
        arrow: 'h-3 w-3 absolute bg-main',
        title: 'mb-2 font-semibold',
        content: 'text-sm',
    },
};
