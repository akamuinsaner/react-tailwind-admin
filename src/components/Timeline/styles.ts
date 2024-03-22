export type RTTimelineStyles = {
    box: {
        base: string;
        left: string;
        center: string;
        right: string;
    };
    item: {
        base: string;
    };
    content: {
        base: string;
        left: string;
        right: string;
    };
    token: {
        base: string;
        primary: string;
        secondary: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        disable: string;
        center: string;
        left: string;
        right: string;
        outlined: string;
        children: string;
    };
    connector: {
        base: string;
        center: string;
        left: string;
        right: string;
    };
};

export const styles: RTTimelineStyles = {
    box: {
        base: 'flex flex-col p-0 m-0 pt-6',
        left: 'pl-6',
        center: '',
        right: 'pr-6',
    },
    item: {
        base: 'flex pb-12 relative',
    },
    content: {
        base: 'w-1/2 -mt-2.5',
        left: 'pr-8 text-right mr-auto',
        right: 'pl-8 text-left ml-auto',
    },
    token: {
        base: `absolute z-[1] -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full`,
        center: 'left-1/2',
        left: 'left-0',
        right: 'left-full',
        primary: 'bg-primary border-2 border-primary text-primary',
        secondary: 'bg-secondary border-2 border-secondary text-secondary',
        success: 'bg-success border-2 border-success text-success',
        info: 'bg-info border-2 border-info text-info',
        warning: 'bg-warning border-2 border-warning text-warning',
        danger: 'bg-danger border-2 border-danger text-danger',
        disable: 'bg-disableBg border-2 border-disableBg text-disableBg',
        outlined: 'bg-main',
        children: 'border-none bg-main w-6 h-6',
    },
    connector: {
        base: 'absolute z-0 w-0 h-full border-l border-mainBorder -translate-x-1/2',
        center: 'left-1/2',
        left: 'left-0',
        right: 'left-full',
    },
};
