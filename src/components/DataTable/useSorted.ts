import React from 'react';
import { RTTablePaginationProps } from '../Table/TablePagination';
import {
    RTDataTableSortParams,
    RTDataTableSortDirections,
    RTDataTableSortable,
} from './index';

type UseSortedProps<T> = {
    sortInfo: RTDataTableSortable<T>;
    pageParams: Partial<RTTablePaginationProps>;
    onPaginationChange: (page: number, rowsPerPage: number) => void;
};

export default <T>({
    pageParams,
    sortInfo,
    onPaginationChange,
}: UseSortedProps<T>) => {
    const defaultSortParams: RTDataTableSortParams = {
        orderBy: '',
        order: null,
    };

    const [sortParams, setSortParams] = React.useState<RTDataTableSortParams>(
        Object.assign({}, defaultSortParams, sortInfo?.defaultSortParams),
    );

    const onSortChange = (
        orderBy: string,
        order: RTDataTableSortDirections,
    ) => {
        const sortParams = { order, orderBy };
        onPaginationChange(1, pageParams.pageSize);
        if (!sortInfo?.sortParams) {
            setSortParams(sortParams);
        }
        if (sortInfo?.onSortChange) {
            sortInfo.onSortChange(sortParams);
        }
    };

    React.useEffect(() => {
        if (sortInfo?.sortParams) setSortParams(sortInfo?.sortParams);
    }, [sortInfo?.sortParams]);

    return {
        sortParams,
        onSortChange,
    };
};
