import React from 'react';
import { RTTreeSelectOption, RTTreeSelectProps } from './index';
import { RESERVED_KEY, DataSet } from '../Cascader/utils';

type UseExpandedProps = {
    flattedData: DataSet<RTTreeSelectOption>['flattedData'];
    defaultExpandAll: RTTreeSelectProps['defaultExpandAll'];
    defaultExpandedKeys: RTTreeSelectProps['defaultExpandedKeys'];
    expandedKeys: RTTreeSelectProps['expandedKeys'];
    onExpand: RTTreeSelectProps['onExpand'];
};

export default ({
    flattedData,
    defaultExpandAll,
    defaultExpandedKeys,
    expandedKeys,
    onExpand,
}: UseExpandedProps) => {
    const getDefaultExpandKeys = () => {
        if (defaultExpandedKeys) return defaultExpandedKeys;
        if (defaultExpandAll) return flattedData.map(o => o.id);
        return [];
    };

    const [expandKeys, setExpandKeys] = React.useState<
        Array<RTTreeSelectOption['id']>
    >(getDefaultExpandKeys());

    const toggleExpand = (id: RTTreeSelectOption['id']) => {
        let keys = [];
        if (!expandKeys.includes(id)) keys = [...expandKeys, id];
        else keys = expandKeys.filter(item => item !== id);
        if (onExpand) onExpand(keys);
        if (!expandedKeys) setExpandKeys(keys);
    };

    React.useEffect(() => {
        if (expandedKeys) {
            setExpandKeys(expandedKeys)
        };
    }, [expandedKeys]);

    return {
        expandKeys,
        toggleExpand,
    };
};
