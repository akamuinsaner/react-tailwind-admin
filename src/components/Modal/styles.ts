export type RTModalTypes = {
    base: string;
    mask: string;
    wrap: string;
    header: string;
    body: string;
    footer: string;
    close: string;
};

export const styles: RTModalTypes = {
    base: `rounded text-mainText bg-main relative top-1/4 m-auto w-[600px] pointer-events-all overflow-hidden break-inside-avoid max-w-full`,
    mask: `bg-black/45 fixed inset-0 pointer-events-none z-50  transition-all opacity-0`,
    wrap: `fixed inset-0 pointer-events-all z-50 cursor-pointer  transition-all scale-0 origin-top`,
    header: 'px-6 py-4 text-xl font-medium flex items-center relative',
    body: 'px-6 pb-4',
    footer: 'p-3 flex justify-end items-center gap-3',
    close: 'absolute h-6 w-6 right-6 top-1/2 -translate-y-1/2',
};
