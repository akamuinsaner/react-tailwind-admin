import { ChevronDownIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useMemo } from 'react';
import { BaseTreeData } from './utils';

export type RTCascaderUseInputProps<T> = {
    searchValue: string;
    wrapper: HTMLElement;
    multiple: boolean;
    value: (string | number)[];
    hover: boolean;
    disabled: boolean;
    allowClear: boolean;
    idTreeNodeMap: Map<BaseTreeData<T>['id'], T>;
    valueOnChange: (value: Array<number | string>) => void;
    placeholder: string;
};

const useInput = <T extends BaseTreeData<T>>({
    searchValue,
    wrapper,
    multiple,
    value,
    hover,
    disabled,
    allowClear,
    idTreeNodeMap,
    valueOnChange,
    placeholder,
}: RTCascaderUseInputProps<T>) => {
    const display = useMemo(() => {
        if (searchValue) return searchValue;
        if (wrapper) return '';
        if (!multiple && value[0]) {
            const o = idTreeNodeMap.get(value[0]);
            return `${o?.name}` || '';
        }
        return '';
    }, [searchValue, wrapper, value, multiple, idTreeNodeMap]);

    const displayIcon = useMemo(() => {
        if (hover && value.length && !disabled && allowClear)
            return (
                <XCircleIcon
                    onClick={e => {
                        e.stopPropagation();
                        valueOnChange([]);
                    }}
                />
            );
        return <ChevronDownIcon />;
    }, [hover, value, disabled, allowClear]);

    const showHolder = useMemo(() => {
        if (wrapper && value[0] && !multiple) {
            const o = idTreeNodeMap.get(value[0]);
            return `${o?.name}` || '';
        }
        return placeholder;
    }, [wrapper, value, placeholder, multiple, idTreeNodeMap]);

    return {
        display,
        displayIcon,
        showHolder,
    };
};

export default useInput;
