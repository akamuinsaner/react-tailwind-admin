export interface RTAlertStyles {
    base: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
    icon: string;
    normal: string;
    contained: string;
    outlined: string;
    accent: string;
    action: string;
}

export const styles: RTAlertStyles = {
    base: 'py-4 px-6 rounded flex items-center justity-center',
    success: 'bg-success text-success border-success',    
    info: 'bg-info text-info border-info',
    warning: 'bg-warning text-warning border-warning',
    danger: 'bg-danger text-danger border-danger',
    icon: 'h-6 w-6 mr-3',
    normal: 'bg-opacity-10 border-opacity-10',
    contained: 'text-white',
    outlined: 'bg-white border',
    accent: 'border-t-4 border-opacity-100',
    action: 'ml-auto min-w-4 cursor-pointer'
}