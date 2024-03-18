import React from 'react';
import { RTDataTableProps, RTDataTableExpandable } from './index';
import { getRowKey, getRowsFromKeys } from './utils';

type UseExpandedProps<T> = {
    data: T[];
    rowKey: RTDataTableProps<T>['rowKey'];
    expandable: RTDataTableExpandable<T>;
};

export default <T>({ expandable, rowKey, data }: UseExpandedProps<T>) => {
    const getDefaultExpanedRowKeys = () => {
        if (expandable?.defaultExpandedRowKeys) {
            return expandable.defaultExpandedRowKeys;
        } else if (expandable?.defaultExpandAllRows) {
            return data.map((d, index) => getRowKey(d, rowKey, index));
        } else return [];
    };
    const [expandedRowKeys, setExpandedRowKeys] = React.useState<
        Array<number | string>
    >(getDefaultExpanedRowKeys());

    const onExpandChange = (rowKey, expand, record) => {
        let keys = [];
        if (expand) {
            keys = [...expandedRowKeys, rowKey];
        } else keys = expandedRowKeys.filter(k => k !== rowKey);
        if (expandable?.onExpandedRowsChange) {
            expandable.onExpandedRowsChange(
                keys,
                getRowsFromKeys(data, keys, rowKey),
            );
        }
        if (!expandable?.expandedRowKeys) {
            setExpandedRowKeys(keys);
        }
        if (expandable?.onExpand && expand) {
            expandable.onExpand(record);
        }
    };

    React.useEffect(() => {
        if (expandable?.expandedRowKeys)
            setExpandedRowKeys(expandable?.expandedRowKeys);
    }, [expandable?.expandedRowKeys]);

    return {
        expandedRowKeys,
        onExpandChange,
    };
};
