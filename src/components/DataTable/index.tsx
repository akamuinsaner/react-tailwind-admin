import {
    CSSProperties,
    FC,
    forwardRef,
    memo,
    MutableRefObject,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { DataTableContext, RTDataTableContext } from './context';
import Table, { RTTableProps } from '../Table';
import TablePagination, {
    RTTablePaginationProps,
} from '../Table/TablePagination';
import { getDataColumns, getDataDisplay, getRenderColumns } from './utils';
import useScroll from './useScroll';
import useSelected from './useSelected';
import usePagination from './usePagination';
import useFiltered from './useFiltered';
import useSorted from './useSorted';
import useExpanded from './useExpanded';
import RTDataTableHead from './DataTableHead';
import RTDataTableBody from './DataTableBody';
import classNames from 'classnames';
import CircularProgress, {
    RTCircularProgressProps,
} from '../Progress/CircularProgress';

export type RTDataTableFilters = {
    parentId?: string | number;
    name: string;
    id: string | number;
    children?: RTDataTableFilters;
};

export type RTDataTableFilterModes = 'autoComplete' | 'input' | 'checkbox';

export type RTDataTableSortDirections = 'asc' | 'desc';

export type RTDataTableSortParams = {
    order: RTDataTableSortDirections;
    orderBy: string;
};

export type RTDataTableColumn<T> = {
    align?: 'left' | 'right' | 'center';
    className?: string;
    colSpan?: number;
    rowSpan?: number;
    dataIndex?: string | string[];
    noBorderRight?: boolean;
    key: string;
    render?: (value: any, record: T, index: number) => any;
    sortable?: boolean;
    title?: ReactNode;
    width?: number;
    onCell?: (record: T, index: number) => any;
    fixed?: 'left' | 'right';
    filters?: RTDataTableFilters[];
    filterMode?: RTDataTableFilterModes;
    children?: RTDataTableColumn<T>[];
};

export type RTDataTableExpandable<T> = {
    defaultExpandAllRows?: boolean;
    defaultExpandedRowKeys?: Array<string | number>;
    expandedRowClassName?: (record: T, index: number) => string;
    expandedRowKeys?: Array<string | number>;
    expandedRowRender?: (record: T, index: number, expanded) => ReactNode;
    expandRowByClick?: boolean;
    expandIcon?: (record: T, index: number, expanded) => ReactNode;
    fixed?: boolean;
    onExpand?: (record: T) => void;
    onExpandedRowsChange?: (
        expandKeys: Array<string | number>,
        expandedRows: T[],
    ) => void;
};

export type RTDataTableRowSelection<T> = {
    defaultSelectedRowKeys?: Array<string | number>;
    fixed?: boolean;
    hideSelectAll?: boolean;
    onChange?: (
        selectedRowKeys: RTDataTableRowSelection<T>['selectedRowKeys'],
        selectRows: T[],
    ) => void;
    onSelect?: (record: T, selected: boolean) => void;
    selectedRowKeys?: Array<number | string>;
};

export type RTDataTableSortable<T> = {
    defaultSortParams?: RTDataTableSortParams;
    sortParams?: RTDataTableSortParams;
    onSortChange?: (sortParams: RTDataTableSortParams) => void;
};

export type RTDataTableDropable<T> = {
    dragStyle?: CSSProperties;
    lockAxis?: boolean;
    distance?: number;
    delay?: number;
    disabledRows?: (record: T, index: number) => boolean;
    disableStyle?: CSSProperties;
    onDropEnd?: (
        drag: { index: number; key: string | number; record: T },
        drop: { index: number; key: string | number; record: T },
    ) => void;
};

export type RTDataTableFilterable<T> = {
    defaultFilterParams?: { [name: string]: Array<string | number> };
    filterIcon?: (column: RTDataTableColumn<T>, index: number) => ReactNode;
    filterMode?: (
        column: RTDataTableColumn<T>,
        index: number,
    ) => RTDataTableFilterModes;
    filters?: (
        column: RTDataTableColumn<T>,
        index: number,
    ) => RTDataTableFilters[];
    filterParams?: { [name: string]: Array<string | number> };
    onFilterChange?: (filterParams: {
        [name: string]: Array<string | number>;
    }) => void;
};

export type RTDataTableProps<T> = {
    border?: boolean;
    className?: string;
    columns: RTDataTableColumn<T>[];
    dataSource: T[];
    dragProps?: RTDataTableDropable<T>;
    expandProps?: RTDataTableExpandable<T>;
    loadingProps?: RTCircularProgressProps; //erwewrwe
    paginationProps?: RTTablePaginationProps | false;
    rowClassName?: string | { (record: T, index: number): string };
    rowKey?: string | number | { (record: T): string | number };
    selectProps?: RTDataTableRowSelection<T>;
    size?: RTTableProps['size'];
    scrollProps?: { x?: number; y?: number | 'auto' };
    style?: CSSProperties;
    sortProps?: RTDataTableSortable<T>;
    filterProps?: RTDataTableFilterable<T>;
    onChange?: (
        pagination,
        filters,
        sorter,
        extra: {
            currentDataSource: T[];
            action: 'paginate' | 'sort' | 'filter';
        },
    ) => void;
};

const TableContainer = forwardRef(
    (props: { children: ReactNode }, ref: any) => {
        const { scrollProps } = useContext(DataTableContext);
        const containerClassName = twMerge(
            styles.container.base,
            classNames({
                [styles.container.scrollX]: !!scrollProps?.x,
                [styles.container.scrollY]: !!scrollProps?.y,
            }),
        );
        return (
            <div ref={ref} className={containerClassName}>
                {props.children}
            </div>
        );
    },
);

const TableWrapper = ({ children }: { children: ReactNode }) => {
    const { scrollProps } = useContext(DataTableContext);
    const wrapperClassName = twMerge(
        styles.wrapper.base,
        classNames({
            [styles.wrapper.scroll]: !!scrollProps?.y,
        }),
    );
    return <div className={wrapperClassName}>{children}</div>;
};

const DataTable = <T extends object>(props: RTDataTableProps<T>) => {
    const {
        style,
        className,
        border,
        columns,
        dataSource,
        dragProps,
        expandProps,
        loadingProps,
        paginationProps,
        rowClassName,
        rowKey,
        selectProps,
        size,
        scrollProps,
        sortProps,
        filterProps,
        onChange,
    } = props;
    const dataColumns = getDataColumns(columns);
    const renderColumns = getRenderColumns(columns);
    const [displayData, setDisplayData] = useState<T[]>([]);

    const { containerRef, scrollingInfo } = useScroll();

    const { selectRowKeys, onSelectAll, onSelectChange } = useSelected<T>({
        data: displayData,
        rowKey,
        rowSelection: selectProps,
    });

    const { pageParams, onPaginationChange, setPageParams } = usePagination<T>({
        dataSource,
        pagination: paginationProps,
        onSelectAll,
    });

    const { filteredData, filterParams, onFilterChange } = useFiltered<T>({
        dataSource,
        pageParams,
        filterInfo: filterProps,
        setPageParams,
        onPaginationChange,
    });

    const { sortParams, onSortChange } = useSorted<T>({
        sortInfo: sortProps,
        pageParams,
        onPaginationChange,
    });

    const { expandedRowKeys, onExpandChange } = useExpanded<T>({
        data: displayData,
        rowKey,
        expandable: expandProps,
    });

    useEffect(() => {
        const newData = getDataDisplay(
            filteredData,
            paginationProps,
            pageParams,
            sortParams,
        );
        setDisplayData(newData);
    }, [filteredData, pageParams, sortParams, paginationProps]);
    const tablwTWWidth = `w-[${scrollProps?.x}px]`;
    const tableClassName = twMerge(
        styles.table.base,
        classNames({
            [tablwTWWidth]: !!scrollProps?.x,
        }),
        className,
    );
    let tableStyle = { ...style };
    if (!!scrollProps?.x)
        tableStyle = Object.assign(tableStyle, { width: `${scrollProps.x}px` });
    const contextValue: RTDataTableContext = {
        ...props,
        displayData,
        dataColumns,
        renderColumns,
        scrollingInfo,
        selectRowKeys,
        onSelectAll,
        onSelectChange,
        pageParams,
        onPaginationChange,
        setPageParams,
        filteredData,
        filterParams,
        onFilterChange,
        sortParams,
        onSortChange,
        expandedRowKeys,
        onExpandChange,
    };
    return (
        <DataTableContext.Provider value={contextValue}>
            <TableWrapper>
                <TableContainer ref={containerRef}>
                    <Table
                        style={tableStyle}
                        className={tableClassName}
                        size={size}
                        border={border}
                    >
                        <RTDataTableHead />
                        <RTDataTableBody />
                    </Table>
                </TableContainer>
                {paginationProps === false ? null : (
                    <TablePagination
                        size={size}
                        {...paginationProps}
                        total={pageParams.total}
                        page={pageParams.page}
                        pageSize={pageParams.pageSize}
                        onChange={onPaginationChange}
                    />
                )}
                {loadingProps ? (
                    <div className={styles.loading.mask}>
                        <CircularProgress />
                    </div>
                ) : null}
            </TableWrapper>
        </DataTableContext.Provider>
    );
};

export default DataTable;
