export const styles = {
    main: {
        base: 'hidden md:block px-2',
        left: 'left-0 right-auto',
        right: 'right-0 left-auto',
    },
    hover: 'absolute rounded-lg bg-main-hover transition-[top] duration-300',
    active: {
        base: 'absolute bg-primary transition-[top] duration-300 w-1 right-0',
        left: 'left-0 right-auto',
        right: 'right-0 left-auto',
    },
    menu: {
        children:
            'origin-top overflow-hidden transition-[max-height] duration-300 linear',
    },
    item: {
        base: 'bg-inherit hover:bg-inherit',
        right: 'text-right',
        arrow: 'transition-transform duration-300 linear h-4 w-4',
    },
};
