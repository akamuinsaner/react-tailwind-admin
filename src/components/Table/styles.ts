export type RTTableStyles = {
    wrapper: {
        base: string;
    };
    table: {
        base: string;
        border: string;
    };
    head: {
        base: string;
        border: string;
    };
    body: {
        base: string;
    };
    foot: {
        base: string;
    };
    row: {
        base: string;
        border: string;
    };
    cell: {
        base: string;
        large: string;
        medium: string;
        small: string;
        border: string;
    };
    pagination: {
        base: string;
    };
};

export const styles: RTTableStyles = {
    wrapper: {
        base: 'relative',
    },
    table: {
        base: 'w-full table-auto border-spacing-0 ',
        border: 'border-separate',
    },
    head: {
        base: 'font-semibold',
        border: 'border-t border-mainBorder border-solid',
    },
    body: {
        base: '',
    },
    foot: {
        base: '',
    },
    row: {
        base: 'border-b border-mainBorder border-solid',
        border: 'border-none',
    },
    cell: {
        base: '',
        large: 'py-4 px-4',
        medium: 'py-3 px-4',
        small: 'py-1 px-4',
        border: 'border-mainBorder border-l border-b last:border-r border-solid',
    },
    pagination: {
        base: 'flex justify-end py-2',
    },
};
