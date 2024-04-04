'use client';
import { treeData } from '@/app/utils/data';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import TreeSelect from '@/src/components/TreeSelect';
const Status = () => {
    const onChange = (value: any) => {
        console.log(value);
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Status</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <TreeSelect
                        options={treeData}
                        onChange={onChange}
                        placeholder='success'
                        status='success'
                    />
                    <TreeSelect
                        options={treeData}
                        onChange={onChange}
                        placeholder='info'
                        status='info'
                    />
                    <TreeSelect
                        options={treeData}
                        onChange={onChange}
                        placeholder='warning'
                        status='warning'
                    />
                    <TreeSelect
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
