'use client';
import Border from '@/app/components/dataTable/Border';
import classNames from 'classnames';
import { CSSProperties, FC, memo, ReactNode, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TableContext } from './context';

export type RTTableHeadProps = {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
};

const TableHead: FC<RTTableHeadProps> = ({ style, className, children }) => {
    const { border } = useContext(TableContext);
    const headClassName = twMerge(
        styles.head.base,
        classNames({
            [styles.head.border]: border,
        }),
        className,
    );

    return (
        <thead style={style} className={headClassName}>
            {children}
        </thead>
    );
};

export default memo(TableHead);
