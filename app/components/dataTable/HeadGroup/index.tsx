'use client';
import Box from '@/src/components/Box';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import DataTable, { RTDataTableColumn } from '@/src/components/DataTable';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    street: string;
    building: string;
    number: number;
    companyAddress: string;
    companyName: string;
    gender: string;
}

const columns: RTDataTableColumn<DataType>[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 100,
        fixed: 'left',
    },
    {
        key: 'other',
        title: 'Other',
        align: 'center',
        children: [
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                width: 150,
            },
            {
                key: 'address',
                title: 'Address',
                align: 'center',
                children: [
                    {
                        title: 'Street',
                        dataIndex: 'street',
                        key: 'street',
                        width: 150,
                    },
                    {
                        key: 'block',
                        title: 'Block',
                        align: 'center',
                        children: [
                            {
                                title: 'Building',
                                dataIndex: 'building',
                                key: 'building',
                                width: 100,
                            },
                            {
                                title: 'Door No.',
                                dataIndex: 'number',
                                key: 'number',
                                width: 100,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: 'company',
        title: 'Company',
        align: 'center',
        children: [
            {
                title: 'Company Address',
                dataIndex: 'companyAddress',
                key: 'companyAddress',
                width: 200,
            },
            {
                title: 'Company Name',
                dataIndex: 'companyName',
                key: 'companyName',
            },
        ],
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        width: 80,
        fixed: 'right',
    },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
    });
}

const HeadGroup = () => {
    return (
        <Card className='mb-6'>
            <CardHeader>Head Group</CardHeader>
            <CardBody>
                <Box className='h-[400px]'>
                    <DataTable<DataType>
                        columns={columns}
                        dataSource={data}
                        rowKey={'key'}
                        border
                        scrollProps={{ x: 1200, y: 600 }}
                    />
                </Box>
            </CardBody>
        </Card>
    );
};

export default HeadGroup;
