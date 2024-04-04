import { useEffect } from 'react';
import { RTCascaderOption } from '.';
import { BaseTreeData } from './utils';

export type RTCascaderUseValueProps<T extends BaseTreeData<T>> = {
    multiple: boolean;
    value: Array<number | string>;
    ctrlValue: any;
    defaultValue: any;
    setValue: (value: Array<number | string>) => void;
    checkWithRelation: boolean;
    idChildrenIdMap: Map<T['id'], T['id'][]>;
    parentChainMap: Map<T['id'], T['id'][]>;
    onChange: (value: any) => void;
};

const useValue = <T extends BaseTreeData<T>>({
    multiple,
    value,
    setValue,
    ctrlValue,
    defaultValue,
    checkWithRelation,
    idChildrenIdMap,
    parentChainMap,
    onChange,
}: RTCascaderUseValueProps<T>) => {
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

    const valueOnChange = (curVal: (string | number)[]) => {
        if (onChange) onChange(curVal);
        if (ctrlValue !== undefined) return;
        setValue(curVal);
    };

    const toggleCheck = (node: RTCascaderOption, checked: boolean) => {
        let newCheckedKeys = [...value];
        if (checkWithRelation) {
            const selfAndAllChildrenKeys = [
                node.id,
                ...idChildrenIdMap.get(node.id),
            ];
            if (checked) {
                newCheckedKeys = [
                    ...new Set([...newCheckedKeys, ...selfAndAllChildrenKeys]),
                ];
            } else {
                newCheckedKeys = newCheckedKeys.filter(
                    key => !selfAndAllChildrenKeys.includes(key),
                );
            }
            const parentChain = parentChainMap.get(node.id);
            parentChain.forEach(parentId => {
                if (checked) {
                    const allChildrenKeys = idChildrenIdMap.get(parentId);
                    const notAllIn = !!allChildrenKeys.find(
                        key => !newCheckedKeys.includes(key),
                    );
                    if (!notAllIn)
                        newCheckedKeys = [...newCheckedKeys, parentId];
                } else {
                    newCheckedKeys = newCheckedKeys.filter(
                        key => key !== parentId,
                    );
                }
            });
        } else {
            if (checked) newCheckedKeys = [...newCheckedKeys, node.id];
            else newCheckedKeys = newCheckedKeys.filter(key => key !== node.id);
        }

        valueOnChange(newCheckedKeys);
    };

    const onOptionSelect = (o: RTCascaderOption) => {
        if (multiple) {
            if (value.includes(o.id)) {
                valueOnChange(value.filter(s => s !== o.id));
            } else {
                valueOnChange([...value, o.id]);
            }
        } else {
            valueOnChange([o.id]);
        }
    };

    return { toggleCheck, onOptionSelect, valueOnChange };
};

export default useValue;
