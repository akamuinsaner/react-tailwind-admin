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
        base: 'flex w-full items-center justify-between py-4 px-6 font-semibold text-base cursor-pointer border-b select-none hover:bg-main-hover',
        open: 'flex w-full items-center justify-between py-4 px-6 font-semibold text-base cursor-pointer border-b select-none bg-main-hover',
        disabled: 'flex w-full items-center justify-between py-4 px-6 font-semibold text-base cursor-pointer border-b select-none bg-disableBg text-disableText hover:bg-disableBg'
    },
    icon: {
        base: 'transition-transform duration-100 ease-linear h-6 w-6',
        open: 'transition-transform duration-100 ease-linear h-6 w-6 rotate-180'
    },
    body: {
        base: 'flex-1 overflow-hidden border-b transition-[max-height] duration-100 ease-linear origin-top max-h-64',
        closed: 'flex-1 border-b transition-[max-height] duration-100 ease-linear origin-top max-h-0 overflow-hidden'
    }
}