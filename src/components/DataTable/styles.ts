export type RTTableStyles = {
    wrapper: {
        base: string;
        scroll: string;
    };
    container: {
        base: string;
        scrollX: string;
        scrollY: string;
    };
    table: {
        base: string;
    };
    header: {
        base: string;
        sticky: string;
        scrollTop: string;
    };
    row: {
        base: string;
    };
    cell: {
        base: string;
        noBorderRight: string;
        scrollLeft: string;
        scrollRight: string;
    };
    select: {
        base: string;
        fixed: string;
        afterExpand: string;
    };
    expand: {
        base: string;
        fixed: string;
        icon: string;
    };
    sort: {
        base: string;
        icon: {
            base: string;
            show: string;
            reverse: string;
        };
    };
};

export const styles: RTTableStyles = {
    wrapper: {
        base: 'flex flex-col relative bg-main',
        scroll: 'h-full',
    },
    container: {
        base: 'w-auto overflow-hidden bg-inherit',
        scrollX: 'w-full overflow-x-auto table-fixed',
        scrollY: 'overflow-y-auto',
    },
    table: {
        base: 'table-auto overflow-x-hidden bg-inherit',
    },
    header: {
        base: 'bg-main',
        sticky: 'sticky top-0 z-10',
        scrollTop: 'shadow-lg',
    },
    row: {
        base: 'hover:bg-main-hover',
    },
    cell: {
        base: '',
        noBorderRight: '!border-r-0',
        scrollLeft: 'shadow-tableLeft',
        scrollRight: 'shadow-tableRight',
    },
    select: {
        base: '',
        fixed: 'left-0 sticky !w-[50px] !z-10 bg-main',
        afterExpand: 'left-[50px]',
    },
    expand: {
        base: '',
        fixed: 'sticky left-0 !z-10',
        icon: 'h-6 w-6',
    },
    sort: {
        base: 'inline-flex items-center gap-2 cursor-pointer select-none',
        icon: {
            base: 'h-5 w-5 opacity-0 transition-[opacity,transform] ease-linear duration-100',
            show: 'opacity-1',
            reverse: 'rotate-180',
        },
    },
};
