import { CSSProperties, FC, memo, ReactNode, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { TableContext } from './context';
import Pagination, { RTPaginationProps } from '../Pagination';

export type RTTablePaginationProps = {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
} & RTPaginationProps;

const TablePagination: FC<RTTablePaginationProps> = ({
    style,
    className,
    ...pageProps
}) => {
    const paginationClassName = twMerge(styles.pagination.base, className);

    return (
        <div style={style} className={paginationClassName}>
            <Pagination {...pageProps} />
        </div>
    );
};

export default memo(TablePagination);
