export type RTStepperStyles = {
    wrapper: {
        base: string;
        horizontal: string;
        vertical: string;
    };
    item: {
        base: string;
        alternative: string;
        last: string;
        description: string;
        vertical: string;
    };
    inner: {
        base: string;
        alternative: string;
    };
    label: {
        base: string;
        alternative: string;
        last: string;
    };
    order: {
        base: string;
        alternative: string;
        last: string;
        first: string;
        vertical: string;
        active: string;
    };
};

export const styles: RTStepperStyles = {
    wrapper: {
        base: 'flex align-start',
        horizontal: 'flex-row',
        vertical: 'flex-col',
    },
    item: {
        base: `flex flex-row relative grow overflow-hidden mr-4`,
        alternative: 'mr-0',
        last: 'grow-0',
        description: 'text-sm text-disableText',
        vertical: 'pb-6',
    },
    inner: {
        base: 'flex flex-row  gap-2',
        alternative: 'flex-col items-center text-center',
    },
    label: {
        base: 'pr-4 relative after:content-[""] after:absolute after:w-screen after:top-1/2 after:border-t after:left-full  after:border-mainBorder',
        last: 'after:content-none',
        alternative: 'pr-0 after:content-none',
    },
    order: {
        base: 'h-6 w-6 rounded-full bg-disableBg flex items-center justify-center relative',
        alternative: `
        before:content-[""] before:absolute before:w-screen before:top-1/2 before:border-t before:right-full before:border-mainBorder
        after:content-[""] after:absolute after:w-screen after:top-1/2 after:border-t after:left-full after:border-mainBorder
            `,
        vertical: `
        before:content-[""] before:absolute before:h-screen before:left-1/2 before:border-l before:bottom-full before:border-mainBorder
        after:content-[""] after:absolute after:h-screen after:left-1/2 after:border-l after:top-full after:border-mainBorder`,
        last: 'after:content-none',
        first: 'before:content-none',
        active: 'bg-primary text-white',
    },
};
