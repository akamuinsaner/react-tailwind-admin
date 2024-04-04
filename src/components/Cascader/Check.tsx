import React from 'react';
import { RTCascaderOption } from './index';
import Checkbox from '../Checkbox';
import { DataSet } from './utils';

export type CheckProps = {
    show: boolean;
    value: Array<RTCascaderOption['id']>;
    option: RTCascaderOption;
    toggleCheck: (node: RTCascaderOption, checked: boolean) => void;
    idChildrenIdMap: DataSet<RTCascaderOption>['idChildrenIdMap'];
    checkWithRelation: boolean;
};

export default ({
    show,
    option,
    value,
    toggleCheck,
    idChildrenIdMap,
    checkWithRelation,
}: CheckProps) => {
    if (!show) return null;

    const checked = value.includes(option.id);
    const onCheck = e => toggleCheck(option, e.target.checked);
    const indeterminate =
        !!idChildrenIdMap.get(option.id).find(id => value.includes(id)) &&
        !checked &&
        checkWithRelation;

    return (
        <Checkbox
            onClick={e => e.stopPropagation()}
            onChange={onCheck}
            checked={checked}
            indeterminate={indeterminate}
        />
    );
};
