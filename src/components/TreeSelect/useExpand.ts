import React from 'react';
import { RTTreeSelectOption, RTTreeSelectProps } from './index';
import { RESERVED_KEY, DataSet } from '../Cascader/utils';

type UseExpandedProps = {
    flattedData: DataSet<RTTreeSelectOption>['flattedData'];
    defaultExpandAll: RTTreeSelectProps['defaultExpandAll'];
    defaultExpandKeys: RTTreeSelectProps['defaultExpandKeys'];
    expandKeys: RTTreeSelectProps['expandKeys'];
    onExpand: RTTreeSelectProps['onExpand'];
    setOpenKeys: (openKeys: any[]) => void;
    openKeys: any[];
};

export default ({
    flattedData,
    defaultExpandAll,
    defaultExpandKeys,
    expandKeys,
    onExpand,
    setOpenKeys,
    openKeys,
}: UseExpandedProps) => {
    const toggleExpand = (id: RTTreeSelectOption['id']) => {
        let keys = [];
        if (!openKeys.includes(id)) keys = [...openKeys, id];
        else keys = openKeys.filter(item => item !== id);
        if (onExpand) onExpand(keys);
        if (!!expandKeys) return;
        setOpenKeys(keys);
    };

    React.useEffect(() => {
        if (expandKeys) {
            setOpenKeys(expandKeys);
            return;
        }
        if (defaultExpandKeys) {
            setOpenKeys(defaultExpandKeys);
            return;
        }
        if (defaultExpandAll) {
            setOpenKeys(flattedData.map(item => item.id));
        }
    }, [expandKeys]);

    return {
        toggleExpand,
    };
};
