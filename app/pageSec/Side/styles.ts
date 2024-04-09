export const styles = {
    main: {
        base: 'hidden md:block max-w-64 w-full overflow-visible transition-[width] duration-200 ease-in',
        left: 'left-0 right-auto',
        right: 'right-0 left-auto',
    },
    hover: 'absolute rounded-lg bg-main-hover transition-[top] duration-300 ease-in',
    active: {
        base: 'absolute bg-primary transition-[top] duration-300 w-1 right-0',
        left: 'left-0 right-auto',
        right: 'right-0 left-auto',
    },
    menu: {
        wrapper: 'w-full h-full overflow-y-auto',
        children:
            'origin-top overflow-hidden transition-[max-height] duration-300 ease-in',
    },
    item: {
        base: ' whitespace-nowrap',
        right: 'text-right',
        arrow: 'transition-transform duration-300 ease-in h-4 w-4',
    },
    bar: {
        wrapper: {
            base: 'h-full w-0 absolute left-full overflow-visible top-0',
        },
        inner: {
            base: `cursor-pointer h-10 w-6 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                    bg-main text-mainText flex items-center justify-center z-40 shadow-lg`,
        },
        icon: {
            base: 'w-4 h-4',
        },
    },
};
