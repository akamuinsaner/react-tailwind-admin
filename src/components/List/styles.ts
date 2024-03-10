import { RTStyles } from '../../types/styles';

export interface RTListStyles extends RTStyles {
    item: string;
    icon: string;
    text: string;
    action: string;
    avatar: string;
}

export const styles: RTListStyles = {
    base: 'bg-inherit relative p-0 m-0 list-none [&>li>div]:min-h-12',
    item: `flex justify-start items-center relative w-full text-left 
            cursor-pointer px-4 py-2 select-none
            hover:bg-main-hover break-inside-avoid`,
    icon: 'child:h-full child:w-full shrink-0 mr-2 h-6 w-6',
    text: 'flex-1',
    action: 'child:h-full child:w-full shrink-0 ml-2 h-6 w-6',
    avatar: 'mr-4'
}