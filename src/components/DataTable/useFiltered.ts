import React from 'react';
import {
    RTDataTableFilterable
} from './index';
import {
    getFilteredData,
} from './utils';
import { RTTablePaginationProps } from '../Table/TablePagination';

type UseFilteredProps<T> = {
    dataSource: T[];
    pageParams: Partial<RTTablePaginationProps>;
    filterInfo: RTDataTableFilterable<T>;
    setPageParams: (data: Partial<RTTablePaginationProps>) => void;
    onPaginationChange: (page: number, rowsPerPage: number) => void;
}

export default <T>({
    dataSource,
    pageParams,
    filterInfo,
    setPageParams,
    onPaginationChange
}: UseFilteredProps<T>) => {
    const [filteredData, setFilteredData] = React.useState<T[]>([]);
    const [filterParams, setFilterParams]
        = React.useState<{ [name: string]: Array<string | number> }>(Object.assign({}, filterInfo?.defaultFilterParams));

    const onFilterChange = (params: { [name: string]: Array<string | number> }) => {
        onPaginationChange(1, pageParams.pageSize);
        const newFilterParams = {
            ...filterParams,
            ...params
        };
        if (!filterInfo?.filterParams) {
            setFilterParams(newFilterParams);
        }
        if (filterInfo?.onFilterChange) {
            filterInfo.onFilterChange(newFilterParams);
        }
    }
    React.useEffect(() => {
        if (filterInfo?.filterParams) {
            setFilterParams(filterInfo?.filterParams);
        }
    }, [filterInfo?.filterParams]);

    React.useEffect(() => {
        const filteredData = getFilteredData(dataSource, filterParams);
        setFilteredData(filteredData);
        setPageParams({ ...pageParams, page: 1, total: filteredData.length });
    }, [dataSource, filterParams]);

    return {
        filteredData,
        filterParams,
        onFilterChange
    }
}