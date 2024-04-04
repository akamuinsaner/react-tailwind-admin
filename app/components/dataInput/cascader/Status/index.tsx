'use client';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Cascader from '@/src/components/Cascader';
import Flex from '@/src/components/Flex';

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

const Status = () => {
    const onChange = (value: any) => {
        console.log(value);
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Status</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <Cascader
                        options={treeData}
                        onChange={onChange}
                        placeholder='success'
                        status='success'
                    />
                    <Cascader
                        options={treeData}
                        onChange={onChange}
                        placeholder='info'
                        status='info'
                    />
                    <Cascader
                        options={treeData}
                        onChange={onChange}
                        placeholder='warning'
                        status='warning'
                    />
                    <Cascader
                        options={treeData}
                        onChange={onChange}
                        placeholder='danger'
                        status='danger'
                    />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Status;
