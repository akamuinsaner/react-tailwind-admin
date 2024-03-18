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
const FixHeader = () => {
    return (
        <Card className='mb-6'>
            <CardHeader>Fix header</CardHeader>
            <CardBody>
                <Box className='h-[300px]'>
                    <DataTable<DataType>
                        columns={columns}
                        dataSource={dataSource}
                        rowKey={'key'}
                        scrollProps={{
                            y: 'auto',
                        }}
                    />
                </Box>
            </CardBody>
        </Card>
    );
};

export default FixHeader;
