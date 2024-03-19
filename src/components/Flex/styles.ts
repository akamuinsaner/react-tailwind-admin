export type RTFlexStyles = {
    base: string;

    inline: string;

    row: string;
    'row-reverse': string;
    column: string;
    'column-reverse': string;

    nowrap: string;
    wrap: string;
    'wrap-reverse': string;

    'align-stretch': string;
    'align-start': string;
    'align-end': string;
    'align-center': string;
    'align-baseline': string;

    'justify-normal': string;
    'justify-start': string;
    'justify-end': string;
    'justify-center': string;
    'justify-between': string;
    'justify-around': string;
    'justify-evenly': string;
    'justify-stretch': string;

    'gap-small': string;
    'gap-medium': string;
    'gap-large': string;
};

export const styles: RTFlexStyles = {
    base: 'flex',

    inline: 'inline-flex',

    row: 'flex-row',
    'row-reverse': 'flex-row-reverse',
    column: 'flex-col',
    'column-reverse': 'flex-col-reverse',

    nowrap: 'flex-nowrap',
    wrap: 'flex-wrap',
    'wrap-reverse': 'flex-wrap-reverse',

    'align-stretch': 'items-stretch',
    'align-start': 'items-start',
    'align-end': 'items-end',
    'align-center': 'items-center',
    'align-baseline': 'items-baseline',

    'justify-normal': 'justify-normal',
    'justify-start': 'justify-start',
    'justify-end': 'justify-end',
    'justify-center': 'justify-center',
    'justify-between': 'justify-between',
    'justify-around': 'justify-around',
    'justify-evenly': 'justify-evenly',
    'justify-stretch': 'justify-stretch',

    'gap-small': 'gap-2',
    'gap-medium': 'gap-4',
    'gap-large': 'gap-6',
};
