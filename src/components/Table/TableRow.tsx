'use client';
import {
    CSSProperties,
    FC,
    forwardRef,
    HTMLAttributes,
    memo,
    ReactNode,
    useContext,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TableContext } from './context';
import classNames from 'classnames';

export type RTTableRowProps = {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
} & HTMLAttributes<HTMLTableRowElement>;

const TableRow = forwardRef(
    ({ style, className, children }: RTTableRowProps, ref: any) => {
        const context = useContext(TableContext);
        const { border } = context;
        const rowClassName = twMerge(
            styles.row.base,
            classNames({
                [styles.row.border]: border,
            }),
            className,
        );

        return (
            <tr ref={ref} style={style} className={rowClassName}>
                {children}
            </tr>
        );
    },
);

export default TableRow;
