import { RTStyles } from '../../types/styles';

export interface RTPaginationStyles {
    base: string;
    item: {
        base: string;
        large: string;
        medium: string;
        small: string;
        square: string;
        circle: string;
        primary: string;
        secondary: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
        text: string;
        contained: string;
        outlined: string;
        forbid: string;
        current: string;
        containedAndCurrent: string;
        disabled: string;
        icon: {
            base: string;
            large: string;
            medium: string;
            small: string;
        };
    };
}

export const styles: RTPaginationStyles = {
    base: 'flex gap-2 items-center',
    item: {
        base: 'flex shrink-0 items-center justify-center text-mainText cursor-pointer border border-mainBorder select-none transition-all',
        large: 'w-rt-large h-rt-large text-lg',
        medium: 'w-rt-medium h-rt-medium text-base',
        small: 'w-rt-small h-rt-small text-sm',
        square: 'rounded border-mainBorder',
        circle: 'rounded-full border-mainBorder',
        text: 'bg-transparent border-transparent hover:bg-transparent hover:border-transparent',
        contained: '',
        containedAndCurrent: 'text-white hover:text-white',
        outlined: 'bg-transparent hover:bg-transparent',
        primary:
            'bg-primary text-primary border-primary hover:bg-primary-hover hover:text-primary-hover hover:border-primary-hover',
        secondary:
            'bg-secondary text-secondary border-secondary hover:bg-secondary-hover hover:text-secondary-hover hover:border-secondary-hover',
        success:
            'bg-success text-success border-success hover:bg-success-hover hover:text-success-hover hover:border-success-hover',
        info: 'bg-info text-info border-info hover:bg-info-hover hover:text-info-hover hover:border-info-hover',
        warning:
            'bg-warning text-warning border-warning hover:bg-warning-hover hover:text-warning-hover hover:border-warning-hover',
        danger: 'bg-danger text-danger border-danger hover:bg-danger-hover hover:text-danger-hover hover:border-danger-hover',
        forbid: 'select-none pointer-events-none',
        current: '',
        disabled:
            'text-disableText bg-disableBg hover:disableBg select-none pointer-events-none border-disableBg',
        icon: {
            base: '',
            large: 'h-[18px] w-[18px]',
            medium: 'h-4 w-4',
            small: 'h-[14px] w-[14px]',
        },
    },
};
