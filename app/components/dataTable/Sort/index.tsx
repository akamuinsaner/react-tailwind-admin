'use client';
import Box from '@/src/components/Box';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Checkbox from '@/src/components/Checkbox';
import DataTable, {
    RTDataTableColumn,
    RTDataTableSortable,
    RTDataTableSortParams,
} from '@/src/components/DataTable';
import Text from '@/src/components/Text';
import { useEffect, useState } from 'react';

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
        sortable: true,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sortable: true,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        sortable: true,
    },
];

const data: (key: any) => DataType = key => ({
    key: key,
    name: 'John Brown ' + key,
    age: 32 + key,
    address: 'New York No. 1 Lake Park' + key,
});

const datas = Array(50)
    .fill({})
    .map((d, i) => data(i));

const Sort = () => {
    const [dataSource, setDataSource] = useState<DataType[]>(datas);
    const [sortParams, setSortParams] = useState<RTDataTableSortParams>({
        order: 'asc',
        orderBy: '',
    });
    const [isControlled, setIsControlled] = useState<boolean>(false);
    useEffect(() => setDataSource(datas), [isControlled]);
    useEffect(() => sortData(), [sortParams]);

    const sortInfo: RTDataTableSortable<any> = {
        defaultSortParams: { order: 'desc', orderBy: 'age' },

        sortParams: isControlled ? sortParams : null,
        onSortChange: sortParams => {
            console.log('onSortChange', sortParams);
            if (isControlled) setSortParams(sortParams);
        },
    };
    const sortData = () => {
        const { order, orderBy } = sortParams;
        let sorter = (a: any, b: any) => 0;
        if (order === 'asc' && orderBy)
            sorter = (a, b) => (a[orderBy] > b[orderBy] ? 1 : -1);
        if (order === 'desc' && orderBy)
            sorter = (a, b) => (a[orderBy] > b[orderBy] ? -1 : 1);
        setDataSource(datas.sort(sorter));
    };
    return (
        <Card className='mb-6'>
            <CardHeader>Sort</CardHeader>
            <CardBody>
                <Box className='flex flex-col gap-6'>
                    <Checkbox
                        checked={isControlled}
                        onChange={e => setIsControlled(e.target.checked)}
                    >
                        controll
                    </Checkbox>
                    <Text>
                        order: {sortParams.order} orderBy: {sortParams.orderBy}
                    </Text>
                    <DataTable<DataType>
                        columns={columns}
                        dataSource={dataSource}
                        rowKey={'key'}
                        sortProps={sortInfo}
                    />
                </Box>
            </CardBody>
        </Card>
    );
};

export default Sort;
