export type RTProgressStyles = {
    linear: {
        box: {
            base: string;
        };
        inner: {
            base: string;
            primary: string;
            secondary: string;
            success: string;
            info: string;
            warning: string;
            danger: string;
        };
        prog: {
            base: string;
            primary: string;
            secondary: string;
            success: string;
            info: string;
            warning: string;
            danger: string;
            controlled: string;
        };
    };
    circular: {
        box: {
            base: string;
        };
        inner: {
            base: string;
        };
        prog: {
            base: string;
            primary: string;
            secondary: string;
            success: string;
            info: string;
            warning: string;
            danger: string;
            controlled: string;
        };
    };
};

export const styles: RTProgressStyles = {
    linear: {
        box: {
            base: 'flex items-center w-full h-full',
        },
        inner: {
            base: 'relative flex-1 h-1 overflow-hidden',
            primary: 'bg-primary/30',
            secondary: 'bg-secondary/30',
            success: 'bg-success/30',
            info: 'bg-info/30',
            warning: 'bg-warning/30',
            danger: 'bg-danger/30',
        },
        prog: {
            base: 'w-full h-full animate-linearProgress absolute top-0',
            primary: 'bg-primary',
            secondary: 'bg-secondary',
            success: 'bg-success',
            info: 'bg-info',
            warning: 'bg-warning',
            danger: 'bg-danger',
            controlled:
                'animate-none -left-full transition-[left] duration-750',
        },
    },
    circular: {
        box: {
            base: 'flex h-10 w-10',
        },
        inner: {
            base: 'w-full h-full',
        },
        prog: {
            base: 'fill-none animate-circularProgress',
            primary: 'stroke-primary',
            secondary: 'stroke-secondary',
            success: 'stroke-success',
            info: 'stroke-info',
            warning: 'stroke-warning',
            danger: 'stroke-danger',
            controlled: '',
        },
    },
};
