export type RTImageStyles = {
    wrapper: string;
    mask: {
        base: string;
        show: string;
    };
    icon: string;
};

export const styles: RTImageStyles = {
    wrapper: 'inline-block overflow-hidden relative',
    mask: {
        base: 'transition-[opacity] duration-100 ease-linear absolute inset-0 bg-black/50 text-white flex items-center justify-center text-sm opacity-0 pointer-events-none cursor-pointer',
        show: 'opacity-1 pointer-events-auto cursor-pointer',
    },
    icon: 'h-5 w-5 mr-1',
};
