'use client';
import { CSSProperties, FC, memo, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TableContext, RTTableContext } from './context';
import { RTSize } from '@/src/types/size';
import classNames from 'classnames';

export type RTTableProps = {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    size?: RTSize;
    border?: boolean;
};

const Table: FC<RTTableProps> = ({
    style,
    className,
    children,
    size = 'medium',
    border,
}) => {
    const wrapperClassName = twMerge(styles.wrapper.base);
    const contextValue: RTTableContext = {
        size,
        border,
    };
    const tableClassName = twMerge(
        styles.table.base,
        classNames({
            [styles.table.border]: border,
        }),
        className,
    );

    return (
        <TableContext.Provider value={contextValue}>
            <div className={wrapperClassName}>
                <table style={style} className={tableClassName}>
                    {children}
                </table>
            </div>
        </TableContext.Provider>
    );
};

export default memo(Table);
