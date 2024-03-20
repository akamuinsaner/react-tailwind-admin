export type RTDividerStyles = {
    base: string;
    'gap-small-x': string;
    'gap-medium-x': string;
    'gap-large-x': string;
    'gap-small-y': string;
    'gap-medium-y': string;
    'gap-large-y': string;
    vertical: string;
    withText: string;
    text: string;
    left: string;
    center: string;
    right: string;
};

export const styles: RTDividerStyles = {
    base: 'flex clear-both w-full h-0 border-t border-mainborder self-stretch shrink-0',
    'gap-small-x': 'mx-2',
    'gap-medium-x': 'mx-4',
    'gap-large-x': 'mx-6',
    'gap-small-y': 'my-2',
    'gap-medium-y': 'my-4',
    'gap-large-y': 'my-6',
    vertical:
        'inline-block w-0 h-auto border-l self-stretch border-t-0 align-middle',
    withText: `items-center before:content-[''] before:inline-block after:content-[''] after:inline-block 
        before:border-t after:border-t before:border-mainBorder after:border-mainBorder border-none`,
    text: 'shrink-0 px-4',
    left: 'before:grow after:grow-[10]',
    center: 'before:flex-1 after:flex-1',
    right: 'before:grow-[10] after:grow',
};
