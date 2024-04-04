import { useEffect } from 'react';

export type RTSelectUseValueProps = {
    multiple: boolean;
    value: Array<string>;
    ctrlValue: any;
    defaultValue: any;
    setValue: (value: Array<string>) => void;
    onChange: (value: any) => void;
};

const useValue = ({
    multiple,
    value,
    setValue,
    ctrlValue,
    defaultValue,
    onChange,
}: RTSelectUseValueProps) => {
    const getSafeValue = value => {
        if (Array.isArray(value)) return value;
        if (value) return [value];
        return [];
    };

    useEffect(() => {
        if (ctrlValue) {
            setValue(getSafeValue(ctrlValue));
            return;
        }
        if (defaultValue) {
            setValue(getSafeValue(defaultValue));
        }
    }, [ctrlValue]);

    const valueOnChange = (curVal: string[]) => {
        if (onChange) onChange(multiple ? curVal : curVal[0]);
        if (ctrlValue !== undefined) return;
        setValue(curVal);
    };

    const onOptionSelect = (v: string) => {
        if (multiple) {
            if (value.includes(v)) {
                valueOnChange(value.filter(s => s !== v));
            } else {
                valueOnChange([...value, v]);
            }
        } else {
            valueOnChange([v]);
        }
    };

    return { onOptionSelect, valueOnChange };
};

export default useValue;
