import React, { useContext } from 'react';
import { RTDataTableProps, RTDataTableColumn } from '.';
import {
    getCellData,
    getRowKey,
    getRowClassName,
    getFixedStyle,
} from './utils';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import classNames from 'classnames';
import { DataTableContext } from './context';
import TableCell from '../Table/TableCell';
import Radio from '../Radio';
import Checkbox from '../Checkbox';
import TableRow from '../Table/TableRow';
import TableBody from '../Table/TableBody';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

type RTDataTableCellProps<T> = {
    data: any;
    align: 'left' | 'right' | 'center';
    onCell: any;
    width: number;
    columns: RTDataTableColumn<T>[];
    column: RTDataTableColumn<T>;
    columnKey: any;
    fixed: 'left' | 'right';
    scrollingInfo: {
        scrollTop: boolean;
        scrollLeft: boolean;
        scrollRight: boolean;
    };
    columnIndex: number;
};

const RecordTableBodyCell = <T,>({
    data,
    align,
    onCell,
    width,
    columns,
    column,
    columnKey,
    fixed,
    scrollingInfo,
    columnIndex,
}: RTDataTableCellProps<T>) => {
    const colSpan = onCell?.colSpan;
    const rowSpan = onCell?.rowSpan;
    const context = useContext(DataTableContext);
    const { expandProps, selectProps, scrollProps } = context;
    if (colSpan === 0 || rowSpan === 0) return;
    let style = onCell?.style || {};
    const fixedStyle = scrollProps?.x
        ? getFixedStyle(
              fixed,
              columns,
              columnKey,
              expandProps?.fixed,
              selectProps?.fixed,
          )
        : {};
    style = Object.assign({}, fixedStyle, style);
    const showLeftFixShadow =
        !scrollingInfo.scrollLeft &&
        column.fixed === 'left' &&
        columns[columnIndex + 1] &&
        columns[columnIndex + 1].fixed !== 'left';
    const showRightFixShadow =
        !scrollingInfo.scrollRight &&
        column.fixed === 'right' &&
        columns[columnIndex - 1] &&
        columns[columnIndex - 1].fixed !== 'right';
    return (
        <TableCell
            align={align}
            colSpan={colSpan}
            rowSpan={rowSpan}
            width={width}
            style={style}
            // sx={sx}
            // className={classNames({
            //     [styles['mr-table-column-scroll-left']]: showLeftFixShadow,
            //     [styles['mr-table-column-scroll-right']]: showRightFixShadow,
            // })}
        >
            {data}
        </TableCell>
    );
};

type RTDataTableRowProps<T> = Partial<RTDataTableProps<T>> & {
    record: T;
    rowIndex: number;
    selectRowKeys: Array<string | number>;
    onSelectChange: (
        keys: Array<number | string>,
        index: number,
        select?: boolean,
        row?: T,
    ) => void;
    rowKey: number | string;
    expanded: boolean;
    onExpandChange: (key: number | string, expand: boolean, record: T) => void;
    scrollingInfo: {
        scrollTop: boolean;
        scrollLeft: boolean;
        scrollRight: boolean;
    };
};

const RecordTableRow = <T,>({
    record,
    columns,
    rowIndex,
    rowKey,
    selectRowKeys,
    onSelectChange,
    expanded,
    onExpandChange,
    scrollingInfo,
}: RTDataTableRowProps<T>) => {
    const context = useContext(DataTableContext);
    const { expandProps, selectProps, rowClassName, dragProps } = context;
    const onCheckBoxChange = e => {
        const checked = e.target.checked;
        if (checked) {
            onSelectChange(
                Array.from(new Set([...selectRowKeys, rowKey])),
                rowIndex,
                true,
                record,
            );
        } else {
            onSelectChange(
                selectRowKeys.filter(k => k !== rowKey),
                rowIndex,
                false,
                record,
            );
        }
    };

    const renderTableCells = () => {
        return columns.map((column, columnIndex) => {
            return (
                <RecordTableBodyCell
                    key={column.key}
                    columnKey={column.key}
                    width={column.width}
                    align={column.align}
                    data={getCellData<T>(column, record, rowIndex)}
                    onCell={column.onCell && column.onCell(record, rowIndex)}
                    columns={columns}
                    column={column}
                    columnIndex={columnIndex}
                    fixed={column.fixed}
                    scrollingInfo={scrollingInfo}
                />
            );
        });
    };

    const renderSelectionCell = () => {
        if (!selectProps) return null;
        const selectClassName = twMerge(
            styles.cell.base,
            styles.select.base,
            classNames({
                [styles.select.fixed]: selectProps?.fixed,
                [styles.select.afterExpand]: expandProps?.fixed,
            }),
        );
        return (
            <TableCell className={selectClassName}>
                <Checkbox
                    checked={selectRowKeys.includes(rowKey)}
                    onChange={onCheckBoxChange}
                />
            </TableCell>
        );
    };

    const expandIcon = expanded ? <ChevronUpIcon /> : <ChevronDownIcon />;

    const renderExpandCell = () => {
        if (!expandProps) return null;
        const expandClassName = twMerge(
            styles.cell.base,
            classNames({
                [styles.expand.fixed]: expandProps?.fixed,
            }),
        );
        const expandIconClassName = twMerge(styles.expand.icon);
        return (
            <TableCell className={expandClassName}>
                <div
                    className={expandIconClassName}
                    onClick={e => {
                        e.stopPropagation();
                        onExpandChange(rowKey, !expanded, record);
                    }}
                >
                    {expandIcon}
                </div>
            </TableCell>
        );
    };

    const renderExpandContent = () => {
        if (!expanded || !expandProps) return null;
        let colSpan = columns.length + 1;
        if (selectProps) colSpan += 1;
        const rowClassName = expandProps?.expandedRowClassName
            ? expandProps.expandedRowClassName(record, rowIndex)
            : '';
        const rowRender = expandProps?.expandedRowRender
            ? expandProps.expandedRowRender(record, rowIndex, expanded)
            : '';
        return (
            <TableRow className={rowClassName}>
                <TableCell colSpan={colSpan}>{rowRender}</TableCell>
            </TableRow>
        );
    };

    const onRowClick = e => {
        e.stopPropagation();
        if (expandProps?.expandRowByClick) {
            onExpandChange(rowKey, !expanded, record);
        }
    };

    const rowClassNames = twMerge(
        styles.row.base,
        getRowClassName(record, rowClassName, rowIndex),
    );

    if (dragProps) {
        const disabled = dragProps.disabledRows
            ? dragProps.disabledRows(record, rowIndex)
            : false;
        const {
            attributes,
            listeners,
            setNodeRef,
            transform,
            transition,
            isDragging,
            isSorting,
            isOver,
        } = useSortable({ id: rowKey, disabled });
        let style = Object.assign(
            {},
            {
                transform: CSS.Transform.toString(transform),
                transition,
            },
            isDragging ? dragProps?.dragStyle : null,
        );

        const rowClassNames = twMerge(
            styles.row.base,
            getRowClassName(record, rowClassName, rowIndex),
            classNames({
                // [styles['mr-table-row-disable']]: disabled,
                // [styles['mr-table-row-dragging']]: isDragging,
            }),
        );
        return (
            <>
                <TableRow
                    // hover
                    tabIndex={-1}
                    key={rowKey}
                    className={rowClassNames}
                    onClick={onRowClick}
                    ref={setNodeRef}
                    {...listeners}
                    {...attributes}
                >
                    {renderExpandCell()}
                    {renderSelectionCell()}
                    {renderTableCells()}
                </TableRow>
                {renderExpandContent()}
            </>
        );
    }

    return (
        <>
            <TableRow
                tabIndex={-1}
                key={rowKey}
                className={rowClassNames}
                onClick={onRowClick}
            >
                {renderExpandCell()}
                {renderSelectionCell()}
                {renderTableCells()}
            </TableRow>
            {renderExpandContent()}
        </>
    );
};

const RTDataTableBody = <T,>() => {
    const context = useContext(DataTableContext);
    const {
        dragProps,
        rowKey,
        displayData: dataSource,
        expandedRowKeys,
        dataColumns: columns,
        selectRowKeys,
        onSelectChange,
        onExpandChange,
        scrollingInfo,
        pageParams,
    } = context;
    const renderTableRows = () => {
        return dataSource.map((record, index) => {
            const finalRowKey = getRowKey(record, rowKey, index);
            const expanded = expandedRowKeys.includes(finalRowKey);
            return (
                <RecordTableRow<T>
                    key={finalRowKey}
                    columns={columns}
                    record={record}
                    rowIndex={index}
                    rowKey={finalRowKey}
                    selectRowKeys={selectRowKeys}
                    onSelectChange={onSelectChange}
                    expanded={expanded}
                    onExpandChange={onExpandChange}
                    scrollingInfo={scrollingInfo}
                />
            );
        });
    };

    if (dragProps) {
        const sensors = useSensors(
            useSensor(PointerSensor, {
                activationConstraint: {
                    delay: dragProps.delay || 0,
                    distance: dragProps.distance || 0,
                },
            }),
            useSensor(KeyboardSensor, {
                coordinateGetter: sortableKeyboardCoordinates,
            }),
        );

        const modifiers = [];

        if (dragProps?.lockAxis) {
            modifiers.push(restrictToVerticalAxis);
        }

        const handleDragEnd = e => {
            const { active, over } = e;
            const dragKey = active.id;
            const dropKey = over.id;
            const dragRow = dataSource.find(
                (d, i) => getRowKey(d, rowKey, i) === dragKey,
            );
            const dropRow = dataSource.find(
                (d, i) => getRowKey(d, rowKey, i) === dropKey,
            );
            const dragIndex = dataSource.findIndex(
                (d, i) => getRowKey(d, rowKey, i) === dragKey,
            );
            const dropIndex = dataSource.findIndex(
                (d, i) => getRowKey(d, rowKey, i) === dropKey,
            );
            dragProps?.onDropEnd(
                {
                    key: dragKey,
                    index: dragIndex + pageParams.page * pageParams.rowsPerPage,
                    record: dragRow,
                },
                {
                    key: dropKey,
                    index: dropIndex + pageParams.page * pageParams.rowsPerPage,
                    record: dropRow,
                },
            );
        };

        return (
            <TableBody>
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    modifiers={modifiers}
                >
                    <SortableContext
                        items={dataSource.map((r, i) =>
                            getRowKey(r, rowKey, i),
                        )}
                        strategy={verticalListSortingStrategy}
                    >
                        {renderTableRows()}
                    </SortableContext>
                </DndContext>
            </TableBody>
        );
    }
    return <TableBody>{renderTableRows()}</TableBody>;
};

export default RTDataTableBody;
