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
};
