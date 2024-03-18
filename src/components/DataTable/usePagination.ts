import React from 'react';
import { RTTablePaginationProps } from '../Table/TablePagination';
import { RTDataTableProps } from './index';

type UsePaginationProps<T> = {
    dataSource: T[];
    pagination: RTDataTableProps<T>['paginationProps'];
    onSelectAll: (keys: (string | number)[], rows: T[]) => void;
};

export default <T>({
    dataSource,
    pagination,
    onSelectAll,
}: UsePaginationProps<T>) => {
    const defaultPageParams: Partial<RTTablePaginationProps> = {
        total: dataSource.length,
        page: 1,
        pageSize: pagination === false ? dataSource.length : 10,
    };
    const [pageParams, setPageParams] = React.useState<
        Partial<RTTablePaginationProps>
    >(Object.assign({}, defaultPageParams, pagination));
    const onPaginationChange = (page: number, pageSize: number) => {
        setPageParams({ ...pageParams, page, pageSize });
        onSelectAll([], []);
    };
    React.useEffect(() => {
        if (pagination) {
            const { page, total, pageSize } = pagination;
            setPageParams({ ...defaultPageParams, page, total, pageSize });
        }
    }, [pagination]);

    return {
        pageParams,
        setPageParams,
        onPaginationChange,
    };
};
