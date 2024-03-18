import React, { useContext } from 'react';
import {
    RTDataTableProps,
    RTDataTableColumn,
    RTDataTableSortDirections,
    RTDataTableSortParams,
} from '.';
import { getRowKey, getFixedStyle } from './utils';
import classNames from 'classnames';
import TableCell from '../Table/TableCell';
import { RTTablePaginationProps } from '../Table/TablePagination';
import Checkbox from '../Checkbox';
import TableRow from '../Table/TableRow';
import TableHead from '../Table/TableHead';
import { DataTableContext } from './context';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import DataTableSortLabel from './DataTableSortLabel';

export type RecordTableHeaderCellProps<T> = {
    column: RTDataTableColumn<T>;
    isSorting: boolean;
    sortDirection: RTDataTableSortDirections;
    onSortChange: (orderBy: string, order: RTDataTableSortDirections) => void;
    fixed: 'left' | 'right';
    columns: RTDataTableColumn<T>[];
    index: number;
    filterParams?: { [name: string]: Array<string | number> };
    onFilterChange?: (filterParams: {
        [name: string]: Array<string | number>;
    }) => void;
    scrollingInfo: {
        scrollTop: boolean;
        scrollLeft: boolean;
        scrollRight: boolean;
    };
};

const RecordTableHeaderCell = <T,>({
    column,
    isSorting,
    sortDirection,
    onSortChange,
    fixed,
    columns,
    index,
    filterParams,
    onFilterChange,
    scrollingInfo,
}: RecordTableHeaderCellProps<T>) => {
    const context = useContext(DataTableContext);
    const { expandProps, selectProps, sortProps, filterProps, scrollProps } =
        context;
    const isSortable = !!column.sortable;

    const onSort = () => {
        let newColumnKey = column.key;
        let newSort: RTDataTableSortDirections = 'asc';
        if (isSorting) {
            if (sortDirection === 'asc') {
                newSort = 'desc';
            } else {
                newColumnKey = '';
            }
        } else {
            newSort = 'asc';
        }
        onSortChange(newColumnKey, newSort);
    };

    const getDirection = () => {
        if (isSorting) return sortDirection;
        return 'asc';
    };
    if (column.colSpan === 0) return;
    if (column.rowSpan === 0) return;
    let style = {};
    const fixedStyle = scrollProps?.x
        ? getFixedStyle(
              fixed,
              columns,
              column.key,
              expandProps?.fixed,
              selectProps?.fixed,
          )
        : {};
    style = Object.assign({}, fixedStyle, style);
    let children: any = column.title;
    if (isSortable) {
        children = (
            <DataTableSortLabel
                active={isSortable && isSorting}
                direction={getDirection()}
                onClick={onSort}
            >
                {column.title}
            </DataTableSortLabel>
        );
    }
    const filters = filterProps?.filters
        ? filterProps?.filters(column, index)
        : column.filters;
    if (filters) {
        // children = (
        //     <Filter
        //         column={column}
        //         index={index}
        //         onChange={(value) => onFilterChange({ [column.key]: value })}
        //         value={filterParams[column.key]}
        //     >{children}
        //     </Filter>
        // )
    }
    const showLeftFixShadow =
        !scrollingInfo.scrollLeft &&
        column.fixed === 'left' &&
        columns[index + 1] &&
        columns[index + 1].fixed !== 'left';
    const showRightFixShadow =
        !scrollingInfo.scrollRight &&
        column.fixed === 'right' &&
        columns[index - 1] &&
        columns[index - 1].fixed !== 'right';

    const tableCellClassName = twMerge(
        styles.cell.base,
        classNames({
            [styles.cell.noBorderRight]: column.noBorderRight,
            [styles.cell.scrollLeft]: showLeftFixShadow,
            [styles.cell.scrollRight]: showRightFixShadow,
        }),
    );
    return (
        <TableCell
            align={column.align}
            colSpan={column.colSpan}
            rowSpan={column.rowSpan}
            width={column.width}
            style={style}
            className={tableCellClassName}
        >
            {children}
        </TableCell>
    );
};

export type RTDataTableHeadProps<T> = Partial<RTDataTableProps<T>> & {
    sortParams: RTDataTableSortParams;
    onSortChange: (orderBy: string, order: RTDataTableSortDirections) => void;
    selectRowKeys: Array<number | string>;
    pageParams: Partial<RTTablePaginationProps>;
    onSelectAll: (keys: Array<number | string>, rows: T[]) => void;
    isSticky: boolean;
    renderColumns: RTDataTableColumn<T>[][];
    filterParams?: { [name: string]: Array<string | number> };
    onFilterChange?: (filterParams: {
        [name: string]: Array<string | number>;
    }) => void;
    scrollingInfo: {
        scrollTop: boolean;
        scrollLeft: boolean;
        scrollRight: boolean;
    };
};

const RTDataTableHead = <T,>() => {
    const {
        scrollProps,
        sortParams,
        onSortChange,
        onFilterChange,
        filterParams,
        scrollingInfo,
        onSelectAll,
        displayData: dataSource,
        rowKey,
        selectProps,
        expandProps,
        selectRowKeys,
        renderColumns,
    } = useContext(DataTableContext);
    const renderHeaderCells = columns => {
        return columns.map((column, index) => {
            const isSorting = sortParams.orderBy === column.key;
            const sortDirection = sortParams.order;
            return (
                <RecordTableHeaderCell<T>
                    key={column.key}
                    column={column}
                    isSorting={isSorting}
                    sortDirection={sortDirection}
                    onSortChange={onSortChange}
                    fixed={column.fixed}
                    columns={columns}
                    index={index}
                    onFilterChange={onFilterChange}
                    filterParams={filterParams}
                    scrollingInfo={scrollingInfo}
                />
            );
        });
    };
    const onSelectAllChange = (e: any) => {
        const checked = e.target.checked;
        if (checked) {
            onSelectAll(
                dataSource.map((d, i) => getRowKey(d, rowKey, i)),
                dataSource,
            );
        } else {
            onSelectAll([], []);
        }
    };

    const renderSelectionHeaderCell = depth => {
        if (depth !== 0) return null;
        if (!selectProps) return null;
        const { hideSelectAll } = selectProps;

        const selectClassName = twMerge(
            styles.cell.base,
            styles.select.base,
            classNames({
                [styles.select.fixed]: selectProps?.fixed,
                [styles.select.afterExpand]: expandProps?.fixed,
            }),
        );
        if (!hideSelectAll)
            return (
                <TableCell
                    rowSpan={renderColumns.length}
                    className={selectClassName}
                >
                    <Checkbox
                        checked={dataSource.length === selectRowKeys.length}
                        indeterminate={
                            selectRowKeys.length > 0 &&
                            selectRowKeys.length < dataSource.length
                        }
                        onChange={onSelectAllChange}
                    />
                </TableCell>
            );
        return (
            <TableCell
                className={selectClassName}
                rowSpan={renderColumns.length}
            ></TableCell>
        );
    };

    const renderExpandHeaderCell = depth => {
        if (depth !== 0) return null;
        if (!expandProps) return null;
        const expandClassName = twMerge(
            styles.cell.base,
            classNames({
                [styles.expand.fixed]: expandProps?.fixed,
            }),
        );
        return (
            <TableCell
                rowSpan={renderColumns.length}
                className={expandClassName}
            ></TableCell>
        );
    };

    const renderheaderColumns = () => {
        return renderColumns.map((rc, depth) => {
            return (
                <TableRow key={depth}>
                    {renderExpandHeaderCell(depth)}
                    {renderSelectionHeaderCell(depth)}
                    {renderHeaderCells(rc)}
                </TableRow>
            );
        });
    };

    const headClassName = twMerge(
        styles.header.base,
        classNames({
            [styles.header.sticky]: !!scrollProps?.y,
            [styles.header.scrollTop]: !scrollingInfo.scrollTop
        }),
    );

    return (
        <TableHead className={headClassName}>{renderheaderColumns()}</TableHead>
    );
};

export default RTDataTableHead;
