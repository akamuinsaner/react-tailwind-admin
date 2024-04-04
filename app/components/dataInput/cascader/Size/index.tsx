'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Cascader from '@/src/components/Cascader';
import Flex from '@/src/components/Flex';
import { useState } from 'react';

const treeData = [
    {
        id: 'parent 1',
        name: 'parent 1',
        children: [
            {
                id: 'parent 1-0',
                name: 'parent 1-0',
                children: [
                    {
                        id: 'leaf1',
                        name: 'leaf1',
                    },
                    {
                        id: 'leaf2',
                        name: 'leaf2',
                    },
                ],
            },
            {
                id: 'parent 1-1',
                name: 'parent 1-1',
                children: [
                    {
                        id: 'leaf3',
                        name: 'leaf3',
                    },
                ],
            },
        ],
    },
];

const Size = () => {
    const onChange = (value: any) => {
        console.log(value);
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Size</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <Cascader
                        size='small'
                        options={treeData}
                        onChange={onChange}
                        placeholder='small'
                    />
                    <Cascader
                        size='small'
                        multiple
                        options={treeData}
                        onChange={onChange}
                        placeholder='small'
                    />
                    <Cascader
                        size='medium'
                        options={treeData}
                        onChange={onChange}
                        placeholder='medium'
                    />
                    <Cascader
                        size='medium'
                        multiple
                        options={treeData}
                        onChange={onChange}
                        placeholder='medium'
                    />
                    <Cascader
                        size='large'
                        options={treeData}
                        onChange={onChange}
                        placeholder='large'
                    />
                    <Cascader
                        size='large'
                        multiple
                        options={treeData}
                        onChange={onChange}
                        placeholder='large'
                    />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Size;
