import { RTStyles } from '../../types/styles';

export interface RTListStyles extends RTStyles {
    item: {
        base: string;
        divider: string;
        active: string;
        large: string;
        medium: string;
        small: string;
    };
    icon: string;
    text: string;
    action: string;
    avatar: string;
}

export const styles: RTListStyles = {
    base: 'bg-inherit relative p-0 m-0 list-none text-mainText',
    item: {
        base: `flex justify-start items-center relative w-full text-left 
            cursor-pointer px-4 py-2 select-none text-inherit
            hover:bg-main-hover break-inside-avoid`,
        divider: 'border-y border-mainBorder -mt-px',
        active: 'text-primary bg-primary/10 hover:bg-primary/10',
        small: 'py-1 text-sm',
        medium: 'py-2 text-sm',
        large: 'py-3 text-base',
    },
    icon: 'child:h-full child:w-full shrink-0 mr-2 h-6 w-6 text-inherit flex items-center justify-center',
    text: 'flex-1 text-inherit flex justify-center flex-col',
    action: 'child:h-full child:w-full shrink-0 ml-2 h-6 w-6 text-inherit flex items-center justify-center',
    avatar: 'mr-4 text-inherit',
};
