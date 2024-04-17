export type RTModalTypes = {
    base: string;
    mask: string;
    top: string;
    right: string;
    bottom: string;
    left: string;
    show: string;
};

export const styles: RTModalTypes = {
    base: `rounded text-mainText bg-main relative m-auto pointer-events-all overflow-hidden 
        break-inside-avoid fixed z-50 transition-all`,
    mask: `bg-black/45 fixed inset-0 pointer-events-all z-50  transition-all opacity-0`,
    top: 'w-screen origin-top top-0 left-0 right-0 scale-y-0 scale-x-100',
    right: 'h-screen origin-right right-0 top-0 bottom-0 scale-x-0 scale-y-100',
    bottom: 'w-screen origin-bottom bottom-0 left-0 right-0 scale-y-0 scale-x-100',
    left: 'h-screen origin-left left-0 top-0 bottom-0 scale-x-0 scale-y-100',
    show: 'scale-x-100 scale-y-100',
};
