'use client';
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

const Loading = () => {
    return (
        <Card className='mb-6'>
            <CardHeader>Loading</CardHeader>
            <CardBody>
                <DataTable<DataType>
                    columns={columns}
                    dataSource={dataSource}
                    rowKey={'key'}
                    loadingProps={{}}
                />
            </CardBody>
        </Card>
    );
};

export default Loading;
