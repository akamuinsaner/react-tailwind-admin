'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Cascader, { RTCascaderOption } from '@/src/components/Cascader';
import Flex from '@/src/components/Flex';
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
    const [data, setData] = useState<RTCascaderOption[]>(treeData);

    const formatRemoteData = (
        id: RTCascaderOption['id'],
        remoteData: RTCascaderOption[],
        list: RTCascaderOption[],
    ): RTCascaderOption[] => {
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

    const loadData = (o: RTCascaderOption) => {
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
                    <Cascader
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
