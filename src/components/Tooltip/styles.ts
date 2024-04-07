export type RTToolTipStyles = {
    box: {
        base: string;
        show: string;
        arrow: string;
    };
};

export const styles: RTToolTipStyles = {
    box: {
        base: `bg-black/90 text-white
                 rounded p-2 px-4 text-sm`,
        show: 'block',
        arrow: 'h-3 w-3 absolute bg-main',
    },
};
