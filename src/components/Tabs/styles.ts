import { RTStyles } from '../../types/styles';

export interface RTTabsStyles {
    base: {
        base: string;
        vertical: string;
    };
    tabs: {
        base: string;
        vertical: string;
    },
    tab: {
        base: string;
        active: string;
        disabled: string;
    }
    pane: string;
    focus: {
        base: string;
        vertical: string;
    }
}

export const styles: RTTabsStyles = {
    base: {
        base: 'bg-main rounded flex flex-col w-full flex-nowrap break-inside-avoid overflow-hidden relative',
        vertical: 'bg-main rounded flex flex-row w-full flex-nowrap break-inside-avoid overflow-hidden relative',
    },
    tabs: {
        base: 'flex items-center break-inside-avoid border-b relative',
        vertical: 'flex flex-col items-center break-inside-avoid border-b relative'
    },
    tab: {
        base: `relative inline-flex flex-col items-center justify-center py-4 px-6 font-semibold text-base 
                cursor-pointer select-none outline-none hover:text-primary`,
        active: `relative inline-flex flex-col items-center justify-center py-4 px-6 font-semibold text-base 
                cursor-pointer select-none outline-none text-primary`,
        disabled: `relative inline-flex flex-col items-center justify-center py-4 px-6 font-semibold text-base 
                cursor-pointer select-none outline-none bg-disableBg text-disableText hover:text-disableText`
    },
    pane: 'hidden flex-1 overflow-auto border-b max-h-64 box-border py-4 px-6',
    focus: {
        base: 'absolute bottom-0 h-[3px] bg-primary block transition-[left] duration-100 ease-linear',
        vertical: 'absolute right-0 w-[3px] bg-primary block transition-[top] duration-100 ease-linear'
    }
}