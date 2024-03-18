'use client';
import {
    CSSProperties,
    FC,
    memo,
    ReactNode,
    TdHTMLAttributes,
    useContext,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TableContext } from './context';
import classNames from 'classnames';

export type RTTableCellProps = {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
} & TdHTMLAttributes<HTMLTableDataCellElement>;

const TableCell: FC<RTTableCellProps> = ({
    style,
    className,
    children,
    ...domProps
}) => {
    const context = useContext(TableContext);
    const { size, border } = context;
    const cellClassName = twMerge(
        styles.cell.base,
        styles.cell[size],
        classNames({
            [styles.cell.border]: border,
        }),
        className,
    );

    return (
        <td style={style} className={cellClassName} {...domProps}>
            {children}
        </td>
    );
};

export default memo(TableCell);
