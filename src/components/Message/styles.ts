export type RTMessageStyles = {
    box: {
        base: string;
        show: string;
    };
    icon: {
        base: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
    };
};

export const styles: RTMessageStyles = {
    box: {
        base: `bg-main text-mainText opacity-0 -top-20  transition-all left-1/2
                 rounded py-2 px-3 text-base fixed shadow-lg -translate-x-1/2 z-50 flex items-center`,
        show: 'opacity-100 top-3',
    },
    icon: {
        base: 'h-6 w-6 mr-2',
        success: 'text-success',
        info: 'text-info',
        warning: 'text-warning',
        danger: 'text-danger',
    },
};
