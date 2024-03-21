'use client';
import Box from '@/src/components/Box';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Checkbox from '@/src/components/Checkbox';
import DataTable, {
    RTDataTableColumn,
    RTDataTableExpandable,
} from '@/src/components/DataTable';
import Text from '@/src/components/Text';
import { useState } from 'react';

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
    tags: string[];
}

const columns: RTDataTableColumn<DataType>[] = [
    {
        title: 'Key',
        dataIndex: 'key',
        key: 'key',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
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
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => tags.join(','),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const Expand = () => {
    const [expandedRowKeys, setExpandedRowKeys] = useState<
        Array<number | string>
    >([]);
    const [isControlled, setIsControlled] = useState<boolean>(false);
    const [expandByRowClick, setExpandByRowClick] = useState<boolean>(false);

    const onExpandedRowsChange = (
        keys: Array<number | string>,
        rows: any[],
    ) => {
        if (isControlled) setExpandedRowKeys(keys);
        console.log('onExpandedRowsChange', keys, rows);
    };
    const expandable: RTDataTableExpandable<any> = {
        defaultExpandAllRows: true,
        expandedRowKeys: isControlled ? expandedRowKeys : null,
        expandedRowClassName: (record, index) => 'className',
        expandedRowRender: (record, index, expanded) =>
            index + record.name + record.address,
        onExpandedRowsChange: onExpandedRowsChange,
        onExpand: record => console.log('onExpand', record),
        expandRowByClick: expandByRowClick,
    };
    return (
        <Card className='mb-6'>
            <CardHeader>Expand</CardHeader>
            <CardBody>
                <Box className='flex flex-col gap-6'>
                    <Box className='flex gap-6'>
                        <Checkbox
                            checked={isControlled}
                            onChange={e => setIsControlled(e.target.checked)}
                        >
                            Controll
                        </Checkbox>
                        <Checkbox
                            checked={expandByRowClick}
                            onChange={e =>
                                setExpandByRowClick(e.target.checked)
                            }
                        >
                            clickRow
                        </Checkbox>
                    </Box>
                    <Text>expanded rows: {expandedRowKeys.join(' , ')}</Text>
                </Box>
                <DataTable<DataType>
                    columns={columns}
                    dataSource={data}
                    rowKey={'key'}
                    expandProps={expandable}
                />
            </CardBody>
        </Card>
    );
};

export default Expand;
