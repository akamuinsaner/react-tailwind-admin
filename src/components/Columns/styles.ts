export type RTColumnsStyles = {
    'gap-small': string;
    'gap-medium': string;
    'gap-large': string;

    'space-small': string;
    'space-medium': string;
    'space-large': string;
};

export const styles: RTColumnsStyles = {
    'gap-small': 'gap-2',
    'gap-medium': 'gap-4',
    'gap-large': 'gap-5',

    'space-small': '[&>*]:mb-2',
    'space-medium': '[&>*]:mb-4',
    'space-large': '[&>*]:mb-6',
};
