import { ChevronDownIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useMemo } from 'react';

export type RTSelectUseInputProps = {
    searchValue: string;
    wrapper: HTMLElement;
    multiple: boolean;
    value: string[];
    hover: boolean;
    disabled: boolean;
    allowClear: boolean;
    displayMap: Map<string, string>;
    valueOnChange: (value: Array<string>) => void;
    placeholder: string;
};

const useInput = ({
    searchValue,
    wrapper,
    multiple,
    value,
    hover,
    disabled,
    allowClear,
    displayMap,
    valueOnChange,
    placeholder,
}: RTSelectUseInputProps) => {
    const display = useMemo(() => {
        if (searchValue) return searchValue;
        if (wrapper) return '';
        if (!multiple && value[0]) return displayMap.get(value[0]);
        return '';
    }, [searchValue, wrapper, value, multiple, displayMap]);

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
            return displayMap.get(value[0]);
        }
        return placeholder;
    }, [wrapper, value, placeholder, multiple, displayMap]);

    return {
        display,
        displayIcon,
        showHolder,
    };
};

export default useInput;
