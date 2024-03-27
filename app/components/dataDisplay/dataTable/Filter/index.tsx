'use client';
import React from 'react';
import DataTable, {
    RTDataTableColumn,
    RTDataTableFilterModes,
} from '@/src/components/DataTable';
import Flex from '@/src/components/Flex';
import Text from '@/src/components/Text';
import Select from '@/src/components/Select';
import SelectOption from '@/src/components/Select/SelectOption';
import Checkbox from '@/src/components/Checkbox';
import Card from '@/src/components/Card';
import CardHeader from '@/src/components/Card/CardHeader';
import CardBody from '@/src/components/Card/CardBody';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: RTDataTableColumn<DataType>[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
        filters: [
            {
                id: 'John Brown',
                name: 'John Brown',
            },
            {
                id: 'Jim Green',
                name: 'Jim Green',
            },
            {
                id: 'Joe Black',
                name: 'Joe Black',
            },
        ],
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
        filters: [
            {
                id: 'New York',
                name: 'New York',
            },
            {
                id: 'London',
                name: 'London',
            },
            {
                id: 'Sydney',
                name: 'Sydney',
            },
        ],
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

export default function Filter() {
    const modes = ['checkbox', 'input', 'autoComplete'];
    const [dataSource, setDataSource] = React.useState<DataType[]>(data);
    const [controlled, setControlled] = React.useState<boolean>(false);
    const [filterParams, setFilterParams] = React.useState<{
        [name: string]: Array<string | number>;
    }>({});
    const [filterMode, setFilterMode] =
        React.useState<RTDataTableFilterModes>(null);
    React.useEffect(() => setDataSource(data), [controlled]);
    React.useEffect(() => filterData(), [filterParams]);
    const filterData = () => {
        const result = data.filter(d => {
            let success = true;
            for (let [key, values] of Object.entries(filterParams)) {
                const value = d[key as keyof DataType];
                if (!values || !values.length) continue;
                success = !!values.find(v => {
                    if (typeof v === 'string') {
                        return `${value}`.indexOf(v) > -1;
                    } else {
                        return v === value;
                    }
                });
                if (!success) break;
            }
            return success;
        });
        setDataSource(result);
    };

    return (
        <Card className='mb-6'>
            <CardHeader>Filter</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <Flex direction='row' gap='medium'>
                        {/* <Select
                            value={filterMode}
                            onChange={value => setFilterMode(value as any)}
                            placeholder='Select Filter Mode'
                        >
                            {modes.map(o => (
                                <SelectOption key={o} value={o}>
                                    {o}
                                </SelectOption>
                            ))}
                        </Select> */}
                        <Checkbox
                            checked={controlled}
                            onChange={e => setControlled(e.target.checked)}
                        >
                            controlled
                        </Checkbox>
                    </Flex>
                    <Text>filterParams: {JSON.stringify(filterParams)}</Text>
                    <DataTable<DataType>
                        rowKey='key'
                        columns={columns}
                        dataSource={dataSource}
                        filterProps={{
                            defaultFilterParams: { name: ['Joe Black'] },
                            filterMode: (column, index) => filterMode,
                            filterParams: controlled ? filterParams : null,
                            onFilterChange: params => {
                                console.log('onFilterChange', params);
                                if (controlled) {
                                    setFilterParams(params);
                                }
                            },
                        }}
                    />
                </Flex>
            </CardBody>
        </Card>
    );
}
