'use client';
import Box from '@/src/components/Box';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import DataTable, { RTDataTableColumn } from '@/src/components/DataTable';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

const sharedOnCell = () => {
    return {
        sx: {
            whiteSpace: 'nowrap',
        },
    };
};

const columns: RTDataTableColumn<DataType>[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        fixed: 'left',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 100,
        fixed: 'left',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address1',
        onCell: sharedOnCell,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address2',
        onCell: sharedOnCell,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address3',
        onCell: sharedOnCell,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address4',
        onCell: sharedOnCell,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address5',
        onCell: sharedOnCell,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address6',
        onCell: sharedOnCell,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address7',
        onCell: sharedOnCell,
    },
    {
        title: 'Action',
        dataIndex: 'address',
        key: 'Action',
        render: (_, record) => <a>Delete</a>,
        width: 100,
        fixed: 'right',
    },
];

const data: (key: any) => DataType = key => ({
    key: key,
    name: 'John Brown ' + key,
    age: 32,
    address: 'New York No. 1 Lake Park',
});

const dataSource = Array(2)
    .fill({})
    .map((d, i) => data(i));

const FixColumn = () => {
    return (
        <Card className='mb-6'>
            <CardHeader>Fix column</CardHeader>
            <CardBody>
                <DataTable<DataType>
                    columns={columns}
                    dataSource={dataSource}
                    rowKey={'key'}
                    scrollProps={{
                        x: 2000,
                    }}
                />
            </CardBody>
        </Card>
    );
};

export default FixColumn;
