export type RTFormStyles = {
    label: {
        base: string;
        large: string;
        medium: string;
        small: string;
        required: string;
        inline: string;
    };
    wrapper: {
        base: string;
    };
    errorText: string;
};

export const styles: RTFormStyles = {
    label: {
        base: 'relative whitespace-nowrap text-ellipsis overflow-hidden mb-2',
        large: 'leading-rt-large',
        medium: 'leading-rt-medium',
        small: 'leading-rt-small',
        required: 'before:content-["*"] before:text-danger before:mr-1',
        inline: 'text-right after:content-[":"] after:mr-2 mb-0',
    },
    wrapper: {
        base: 'relative',
    },
    errorText: 'text-danger text-sm',
};
