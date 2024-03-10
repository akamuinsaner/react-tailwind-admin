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
    iconButton: string;
}

export const styles: RTButtonStyles = {
    base: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded',
    large: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded min-h-12 text-base',
    medium: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded min-h-10 text-sm',
    small: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded min-h-8 text-xs',
    contained: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded text-main hover:text-main',
    outlined: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded bg-transparent hover:bg-transparent',
    text: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded bg-transparent border-transparent hover:bg-transparent hover:border-transparent',
    primary: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded bg-primary text-primary border-primary hover:bg-primary-hover hover:text-primary-hover hover:border-primary-hover',
    secondary: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded bg-secondary text-secondary border-secondary hover:bg-secondary-hover hover:text-secondary-hover hover:border-secondary-hover',
    success: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded bg-success text-success border-success hover:bg-success-hover hover:text-success-hover hover:border-success-hover',
    info: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded bg-info text-info border-info hover:bg-info-hover hover:text-info-hover hover:border-info-hover',
    warning: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded bg-warning text-warning border-warning hover:bg-warning-hover hover:text-warning-hover hover:border-warning-hover',
    danger: 'outline-none border-solid border inline-flex items-center justify-center cursor-pointer py-1.5 px-4 rounded bg-danger text-danger border-danger hover:bg-danger-hover hover:text-danger-hover hover:border-danger-hover',
    disabled: 'outline-none border-solid border inline-flex items-center justify-center cursor-none py-1.5 px-4 rounded bg-disableBg text-disableText border-disableBg hover:border-disableBg hover:bg-disableBg hover:text-disableText',
    prefix: 'mr-2',
    suffix: 'ml-2',
    largeIcon: 'h-4 w-4',
    mediumIcon: 'h-4 w-4',
    smallIcon: 'h-2 w-2',
    iconButton: '[&>*]:h-6 [&>*]:w-6 p-0'
}