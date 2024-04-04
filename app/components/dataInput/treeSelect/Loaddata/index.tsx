'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import TreeSelect, { RTTreeSelectOption } from '@/src/components/TreeSelect';
import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

const treeData = [
    {
        id: uuidV4(),
        name: 'expand to load',
    },
];

const loadRemoteData = () => [
    {
        id: uuidV4(),
        name: 'expand to load',
    },
    {
        id: uuidV4(),
        name: 'expand to load',
    },
];

const LoadData = () => {
    const [data, setData] = useState<RTTreeSelectOption[]>(treeData);

    const formatRemoteData = (
        id: RTTreeSelectOption['id'],
        remoteData: RTTreeSelectOption[],
        list: RTTreeSelectOption[],
    ): RTTreeSelectOption[] => {
        return list.map(item => {
            if (item.id === id) {
                return { ...item, children: remoteData };
            }
            if (item.children && item.children.length) {
                return {
                    ...item,
                    children: formatRemoteData(id, remoteData, item.children),
                };
            }
            return item;
        });
    };

    const loadData = (o: RTTreeSelectOption) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        }).then(() => {
            const remoteData = loadRemoteData();
            console.log(
                'formatRemoteData',
                formatRemoteData(o.id, remoteData, data),
            );
            setData(formatRemoteData(o.id, remoteData, data));
        });
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Loda data</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <TreeSelect
                        multiple
                        options={data}
                        placeholder='load data'
                        loadData={loadData}
                    />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default LoadData;
