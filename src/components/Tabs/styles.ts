import { RTStyles } from '../../types/styles';

export interface RTTabsStyles {
    base: {
        base: string;
        left: string;
        bottom: string;
        right: string;
    };
    tabs: {
        base: string;
        left: string;
        bottom: string;
        right: string;
    },
    tab: {
        base: string;
        active: string;
        disabled: string;
    }
    pane: string;
    focus: {
        base: string;
        left: string;
        bottom: string;
        right: string;
    }
}

export const styles: RTTabsStyles = {
    base: {
        base: 'bg-main rounded flex flex-col w-full flex-nowrap break-inside-avoid overflow-hidden relative',
        left: 'bg-main rounded flex flex-row w-full flex-nowrap break-inside-avoid overflow-hidden relative',
        bottom: 'bg-main rounded flex flex-col-reverse w-full flex-nowrap break-inside-avoid overflow-hidden relative',
        right: 'bg-main rounded flex flex-row-reverse w-full flex-nowrap break-inside-avoid overflow-hidden relative'
    },
    tabs: {
        base: 'flex items-center break-inside-avoid border-b border-mainBorder relative',
        left: 'flex flex-col items-center break-inside-avoid border-b border-mainBorder relative',
        bottom: 'flex items-center break-inside-avoid border-t border-mainBorder relative',
        right: 'flex flex-col items-center break-inside-avoid border-l border-mainBorder relative',
    },
    tab: {
        base: `relative inline-flex flex-col items-center justify-center py-4 px-6 font-semibold text-base 
                cursor-pointer select-none outline-none hover:text-primary`,
        active: `relative inline-flex flex-col items-center justify-center py-4 px-6 font-semibold text-base 
                cursor-pointer select-none outline-none text-primary`,
        disabled: `relative inline-flex flex-col items-center justify-center py-4 px-6 font-semibold text-base 
                cursor-pointer select-none outline-none bg-disableBg text-disableText hover:text-disableText`
    },
    pane: 'hidden flex-1 overflow-auto max-h-64 box-border py-4 px-6',
    focus: {
        base: 'absolute bottom-0 h-[3px] bg-primary block transition-[left] duration-200 ease-linear',
        left: 'absolute right-0 w-[3px] bg-primary block transition-[top] duration-200 ease-linear',
        bottom: 'absolute top-0 h-[3px] bg-primary block transition-[left] duration-200 ease-linear',
        right: 'absolute left-0 w-[3px] bg-primary block transition-[top] duration-200 ease-linear'
    }
}