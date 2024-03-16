import { RTStyles } from '../../types/styles';

export interface RTAccordionStyles extends RTStyles {
    base: string;
    panel: string;
    header: {
        base: string;
        open: string;
        disabled: string;
    }
    icon: {
        base: string;
        open: string;
    }
    body: {
        base: string;
        closed: string;
    }
}

export const styles: RTAccordionStyles = {
    base: 'bg-main rounded flex flex-col w-full flex-nowrap break-inside-avoid overflow-hidden',
    panel: 'break-inside-avoid',
    header: {
        base: 'flex w-full items-center justify-between py-4 px-6 font-semibold text-base cursor-pointer border-b border-mainBorder select-none hover:bg-main-hover',
        open: 'bg-main-hover',
        disabled: 'bg-disableBg text-disableText hover:bg-disableBg select-none pointer-events-none'
    },
    icon: {
        base: 'transition-transform duration-200 ease-linear h-6 w-6',
        open: 'transition-transform duration-200 ease-linear h-6 w-6 rotate-180'
    },
    body: {
        base: 'flex-1 overflow-hidden transition-[max-height] duration-200 ease-linear origin-top max-h-64',
        closed: 'max-h-0'
    }
}