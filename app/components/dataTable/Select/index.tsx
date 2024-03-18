'use client';
import Box from '@/src/components/Box';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Checkbox from '@/src/components/Checkbox';
import DataTable, {
    RTDataTableColumn,
    RTDataTableRowSelection,
} from '@/src/components/DataTable';
import Radio from '@/src/components/Radio';
import RadioGroup from '@/src/components/Radio/RadioGroup';
import { useState } from 'react';
import Text from '@/src/components/Text';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

const columns: RTDataTableColumn<DataType>[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

const data: (key: any) => DataType = key => ({
    key: key,
    name: 'John Brown ' + key,
    age: 32,
    address: 'New York No. 1 Lake Park',
});

const dataSource = Array(50)
    .fill({})
    .map((d, i) => data(i));

const Select = () => {
    const [keys, setKeys] = useState<Array<number | string>>([]);
    const [isControled, setIsControlled] = useState<boolean>(false);
    const [hideAll, setHideAll] = useState<boolean>(false);
    const onHideAllChange = (e: any) => setHideAll(e.target.checked);

    const onSelectionchange = (keys: (string | number)[], rows: any[]) => {
        if (isControled) setKeys(keys);
        console.log('onSelectionchange', keys, rows);
    };

    const onSelect = (record: any, select: boolean) => {
        console.log(record, select);
    };

    let rowSelection: RTDataTableRowSelection<DataType> = {
        defaultSelectedRowKeys: [1, 2, 3, 4, 5, 6],
        onChange: onSelectionchange,
        onSelect: onSelect,
        hideSelectAll: hideAll,
        selectedRowKeys: isControled ? keys : null,
    };
    return (
        <Card className='mb-6'>
            <CardHeader>Select</CardHeader>
            <CardBody>
                <Box className='flex flex-col gap-6'>
                    <Box className='flex flex-row gap-3'>
                        <Checkbox checked={hideAll} onChange={onHideAllChange}>
                            hide all
                        </Checkbox>
                        <Checkbox
                            checked={isControled}
                            onChange={e => setIsControlled(e.target.checked)}
                        >
                            controlled
                        </Checkbox>
                    </Box>
                    <Text>selected keys: {keys.join(' , ')}</Text>
                    <DataTable<DataType>
                        columns={columns}
                        dataSource={dataSource}
                        rowKey={'key'}
                        selectProps={rowSelection}
                    />
                </Box>
            </CardBody>
        </Card>
    );
};

export default Select;
