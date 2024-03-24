export type RTBadgeStyles = {
    base: string;
    sup: {
        base: string;
        count: string;
        primary: string;
        secondary: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        top: string;
        middle: string;
        bottom: string;
        left: string;
        center: string;
        right: string;
    };
};

export const styles: RTBadgeStyles = {
    base: 'relative p-0 m-0 leading-none',
    sup: {
        base: 'absolute rounded-full p-1 z-[1] -translate-x-1/2 -translate-y-1/2 text-xs',
        count: 'h-6 min-w-6 border-2 border-white text-white flex items-center justify-center',
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        success: 'bg-success',
        info: 'bg-info',
        warning: 'bg-warning',
        danger: 'bg-danger',
        top: 'top-0',
        middle: 'top-1/2',
        bottom: 'top-full',
        left: 'left-0',
        center: 'left-1/2',
        right: 'left-full',
    },
};
