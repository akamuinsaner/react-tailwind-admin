import { RTTablePaginationProps } from '../Table/TablePagination';
import {
    RTDataTableColumn,
    RTDataTableProps,
    RTDataTableSortParams,
} from './index';

export const getDataColumns = (
    columns: RTDataTableColumn<any>[],
    result = [],
): RTDataTableColumn<any>[] => {
    columns.map(column => {
        if (column.children && column.children.length) {
            getDataColumns(column.children, result);
        } else {
            result.push(column);
        }
    });
    return result;
};

export const getRenderColumns = (columns: RTDataTableColumn<any>[]): any => {
    let columnsList = [];
    const separateColumnsByLevel = (columns: RTDataTableColumn<any>[]) => {
        let nextLevelColumns = [];
        columns.map((column, index) => {
            const nextItem = columns[index + 1];
            if (column.children && column.children.length) {
                if (nextItem || column.noBorderRight) {
                    column.children[column.children.length - 1].noBorderRight =
                        true;
                }
                nextLevelColumns = [...nextLevelColumns, ...column.children];
            }
        });
        columnsList.push(columns);
        if (nextLevelColumns.length) {
            separateColumnsByLevel(nextLevelColumns);
        }
    };
    separateColumnsByLevel(columns);
    const getColSpanOfColumn = (
        list: RTDataTableColumn<any>[],
        result = [],
    ) => {
        if (list && list.length) {
            list.map(column => {
                getColSpanOfColumn(column.children, result);
            });
        } else {
            result.push(1);
        }
        return result.length;
    };
    return columnsList.map((levelList, level) => {
        return levelList.map(column => {
            const hasChildren = column.children && column.children.length;
            return {
                ...column,
                rowSpan: hasChildren ? 1 : columnsList.length - level,
                colSpan: getColSpanOfColumn(column.children),
            };
        });
    });
};

const getCellValueByDataIndex = <T>(
    record: T,
    dataIndex: RTDataTableColumn<T>['dataIndex'],
) => {
    let dataIndexList: string[];
    if (typeof dataIndex === 'string') {
        dataIndexList = dataIndex.split('.');
    } else {
        dataIndexList = dataIndex;
    }
    let result = record;
    for (let key of dataIndexList) {
        if (key in result) {
            result = record[key];
        } else {
            result = null;
            break;
        }
    }
    return result;
};

export const getCellData = <T>(
    column: RTDataTableColumn<T>,
    record: T,
    index: number,
) => {
    let value: any = null;
    if (!!column.dataIndex) {
        value = getCellValueByDataIndex<T>(record, column.dataIndex);
    } else {
        value = record[column.key];
    }
    if (!!column.render) return column.render(value, record, index);
    return value;
};

export const getRowKey = <T>(
    record: T,
    rowKey: RTDataTableProps<T>['rowKey'],
    index: number,
) => {
    return typeof rowKey === 'function'
        ? rowKey(record)
        : rowKey
          ? record[rowKey]
          : index;
};

export const getRowClassName = <T>(
    record: T,
    rowClassName: RTDataTableProps<T>['rowClassName'],
    index: number,
) => {
    return typeof rowClassName === 'function'
        ? rowClassName(record, index)
        : rowClassName;
};

export const getRowsFromKeys = (data, keys, rowKey) => {
    return data.filter((d, index) =>
        keys.includes(getRowKey(d, rowKey, index)),
    );
};

export const getFilteredData = (
    dataSource: any[],
    filterParams: { [name: string]: Array<string | number> },
) => {
    let data = [...dataSource];
    data = data.filter(d => {
        let success = true;
        for (let [key, values] of Object.entries(filterParams)) {
            const value = d[key];
            if (!values || !values.length) continue;
            success = !!values.find(v => {
                if (typeof v === 'string') {
                    return `${value}`.indexOf(v) > -1;
                } else {
                    return v === value;
                }
            });
            if (!success) break;
        }
        return success;
    });
    return data;
};

export const getDataDisplay = (
    dataSource: any[],
    pagination: Partial<RTTablePaginationProps> | false,
    pageParams: Partial<RTTablePaginationProps>,
    sortParams: RTDataTableSortParams,
) => {
    let data = [...dataSource];
    const { order, orderBy } = sortParams;
    let sorter = (a, b) => 0;
    if (order === 'asc' && orderBy)
        sorter = (a, b) => (a[orderBy] > b[orderBy] ? 1 : -1);
    if (order === 'desc' && orderBy)
        sorter = (a, b) => (a[orderBy] > b[orderBy] ? -1 : 1);
    data = data.sort(sorter);
    if (pagination === false || !!pagination) {
        data = data;
    } else {
        const { page, pageSize } = pageParams;
        data = data.filter(
            (d, i) => i >= (page - 1) * pageSize && i < page * pageSize,
        );
    }
    return data;
};

export const getFixedWidth = (
    columns: RTDataTableColumn<any>[],
    key: any,
    expandFixed: boolean,
    selectFixed: boolean,
) => {
    const column = columns.find(item => item.key === key);
    if (!column || !column.fixed) return null;
    if (column.fixed === 'left') {
        let fixDistance =
            expandFixed && selectFixed
                ? 100
                : expandFixed || selectFixed
                  ? 50
                  : 0;
        for (let i = 0; i < columns.length; i++) {
            if (columns[i].key === key) break;
            if (!columns[i].width) return null;
            fixDistance += columns[i].width;
        }
        return fixDistance;
    }
    if (column.fixed === 'right') {
        let fixDistance = 0;
        for (let i = columns.length - 1; i >= 0; i--) {
            if (columns[i].key === key) break;
            if (!columns[i].width) return null;
            fixDistance += columns[i].width;
        }
        return fixDistance;
    }
};

export const getFixedStyle = (
    fixed: 'left' | 'right',
    columns: RTDataTableColumn<any>[],
    key: any,
    expandFixed: boolean,
    selectFixed: boolean,
) => {
    if (fixed && fixed === 'left') {
        return Object.assign(
            {},
            {
                left: getFixedWidth(columns, key, expandFixed, selectFixed),
                position: 'sticky',
                backgroundColor: '#fff',
                zIndex: 5,
            },
        );
    }
    if (fixed && fixed === 'right') {
        return Object.assign(
            {},
            {
                right: getFixedWidth(columns, key, expandFixed, selectFixed),
                position: 'sticky',
                backgroundColor: '#fff',
                zIndex: 5,
            },
        );
    }
    return {};
};
