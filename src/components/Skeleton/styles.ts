export type RTSkeletonStyles = {
    base: string;
    pulse: string;
    flow: string;
};

export const styles: RTSkeletonStyles = {
    base: 'w-full h-4 bg-mainText/20 relative overflow-hidden',
    pulse: 'animate-pulse',
    flow: `before:content-[""] before:absolute before:w-full 
    before:h-full before:top-0 before:animate-flow before:bg-[linear-gradient(90deg,_#00000000,_#00000010,_#00000000)]`,
};
