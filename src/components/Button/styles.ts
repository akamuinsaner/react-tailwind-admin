import { RTStyles } from '../../types/styles';

export type RTButtonStyles = {
    base: string;
    large: string;
    medium: string;
    small: string;
    contained: string;
    outlined: string;
    text: string;
    primary: string;
    secondary: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
    disabled: string;
    prefix: string;
    suffix: string;
    largeIcon: string;
    mediumIcon: string;
    smallIcon: string;
    iconButton: {
        base: string;
        large: string;
        medium: string;
        small: string;
    };
    group: string;
    icon: string;
};

export const styles: RTButtonStyles = {
    base: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded',
    large: 'min-h-12 text-base',
    medium: 'min-h-10 text-sm',
    small: 'min-h-8 text-sm',
    contained: ' text-white hover:text-white',
    outlined: 'bg-transparent hover:bg-transparent',
    text: 'bg-transparent border-transparent hover:bg-transparent hover:border-transparent',
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
    disabled:
        'bg-disableBg text-disableText border-disableBg hover:border-disableBg hover:bg-disableBg hover:text-disableText select-none pointer-events-none',
    prefix: 'mr-3',
    suffix: 'ml-3',
    largeIcon: 'h-6 w-6',
    mediumIcon: 'h-6 w-6',
    smallIcon: 'h-4 w-4',
    iconButton: {
        base: '[&>*]:h-6 [&>*]:w-6',
        large: '[&>*]:h-9 [&>*]:w-9',
        medium: '[&>*]:h-7 [&>*]:w-7',
        small: '[&>*]:h-5 [&>*]:w-5',
    },
    group: 'inline-flex items-center overflow-hidden shrink-0',
    icon: 'outline-none inline-flex items-center justify-center cursor-pointer py-1.5 px-1.5 rounded',
};
