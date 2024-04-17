import React from 'react';
import { RTDataTableColumn, RTDataTableProps } from '.';
import { RTDataTableContext, DataTableContext } from './context';
import classNames from 'classnames';
import Flex from '../Flex';
import IconButton from '../Button/IconButton';
import Dropdown from '../Dropdown';
import DropdownAnchor from '../Dropdown/DropdownAnchor';
import Popover from '../Popover';
import ModalFooter from '../Modal/ModalFooter';
import ModalBody from '../Modal/ModalBody';
import Button from '../Button';
import { FunnelIcon } from '@heroicons/react/24/solid';
import Checkbox from '../Checkbox';
import Input from '../Input';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';

export type RecordTableFilters = {
    parentId?: string | number;
    name: string;
    id: string | number;
    children?: RecordTableFilters;
};

export type ReactTableFilterModes = 'autoComplete' | 'input' | 'checkbox';

export type RecordTableFilterProps = {
    column: RTDataTableColumn<any>;
    index: number;
    value?: Array<string | number>;
    onChange?: (value: Array<string | number>) => void;
    children?: any;
};

export default ({
    column,
    index,
    value,
    onChange,
    children,
}: RecordTableFilterProps) => {
    const context = React.useContext<RTDataTableContext>(DataTableContext);
    const { filterProps } = context;
    const filters = filterProps?.filters
        ? filterProps?.filters(column, index)
        : column.filters;
    const mode = filterProps?.filterMode
        ? filterProps?.filterMode(column, index)
        : column.filterMode;

    const [values, setValues] = React.useState<Array<string | number>>([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    React.useEffect(() => {
        setValues(value || []);
    }, [value]);
    const reset = e => {
        e.stopPropagation();
        setValues([]);
    };
    const onConfirm = e => {
        e.stopPropagation();
        onChange(values);
        closePopper();
    };
    const showPopper = e => {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
    };
    const closePopper = () => {
        setAnchorEl(null);
        document.removeEventListener('click', closePopper);
        document.body.click();
    };
    const renderFilters = () => {
        switch (mode) {
            case 'checkbox':
            default:
                return (
                    <Flex direction='column' gap='medium'>
                        {filters.map(filter => (
                            <Checkbox
                                checked={values.includes(filter.id)}
                                onChange={e => {
                                    if (e.target.checked) {
                                        setValues([...values, filter.id]);
                                    } else {
                                        setValues(
                                            values.filter(v => v !== filter.id),
                                        );
                                    }
                                }}
                            >
                                {filter.name}
                            </Checkbox>
                        ))}
                    </Flex>
                );
        }
    };
    let popperProps = {
        open: !!anchorEl,
        anchorEl,
        placement: 'bottom-end',
        onClick: e => e.stopPropagation(),
    };
    if (filterProps?.popperProps) {
        if (typeof filterProps.popperProps === 'function') {
            popperProps = Object.assign(
                {},
                popperProps,
                filterProps.popperProps(column, index),
            );
        } else {
            popperProps = Object.assign(
                {},
                popperProps,
                filterProps.popperProps,
            );
        }
    }

    let FilterIcon: any = FunnelIcon;
    let filterIconProps = {
        className: twMerge(styles.filter.icon.base),
    };
    if (filterProps?.filterIcon) {
        FilterIcon = filterProps.filterIcon(column, index);
    }
    if (value && value.length) {
        filterIconProps = Object.assign({}, filterIconProps, {
            className: twMerge(
                styles.filter.icon.base,
                styles.filter.icon.active,
            ),
        });
    }

    return (
        <Flex justify='between' align='center' direction='row'>
            {children}
            <Popover
                className='p-0 pt-4'
                trigger='click'
                content={
                    <div
                        onClick={e => e.stopPropagation()}
                        className='text-base'
                    >
                        <ModalBody>{renderFilters()}</ModalBody>
                        <ModalFooter>
                            <Button
                                size='small'
                                variant='text'
                                disabled={!values.length}
                                onClick={reset}
                            >
                                reset
                            </Button>
                            <Button
                                size='small'
                                variant='contained'
                                onClick={onConfirm}
                            >
                                confirm
                            </Button>
                        </ModalFooter>
                    </div>
                }
            >
                <IconButton size='small' onClick={showPopper}>
                    <FilterIcon {...filterIconProps} />
                </IconButton>
            </Popover>
        </Flex>
    );
};
