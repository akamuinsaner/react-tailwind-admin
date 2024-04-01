export type RTCarouselStyles = {
    container: string;
    wrapper: {
        base: string;
        horizontal: string;
        vertical: string;
    };
    item: {
        base: string;
        horizontal: string;
        vertical: string;
    };
    pagination: {
        base: string;
        item: string;
        active: string;
    };
    navigation: {
        base: string;
        prev: string;
        after: string;
        icon: {
            base: string;
        };
    };
};

export const styles: RTCarouselStyles = {
    container: 'w-full h-full relative overflow-hidden select-none',
    wrapper: {
        base: 'flex relative ease-linear',
        horizontal: 'h-full flex-row',
        vertical: 'w-full flex-col',
    },
    item: {
        base: 'flex items-center justify-center shrink-0 bg-inherit text-inherit relative h-full',
        horizontal: 'h-full',
        vertical: 'w-full',
    },
    pagination: {
        base: 'inline-flex absolute gap-2 z-1 bottom-4 left-1/2 -translate-x-1/2',
        item: 'w-2 h-2 rounded-full bg-main cursor-pointer',
        active: 'bg-primary',
    },
    navigation: {
        base: 'absolute h-full px-4 flex items-center justify-center top-0',
        prev: 'left-0 bg-gradient-to-l from-black/0 to-black/20',
        after: 'right-0 bg-gradient-to-r from-black/0 to-black/20',
        icon: {
            base: 'h-8 w-8 text-white font-bold cursor-pointer',
        },
    },
};
