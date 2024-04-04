'use client';
import { treeData } from '@/app/utils/data';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Cascader from '@/src/components/Cascader';
import Flex from '@/src/components/Flex';
import TreeSelect from '@/src/components/TreeSelect';

const Expand = () => {
    const onChange = (value: any) => {
        console.log(value);
    };

    const onExpand = keys => {
        console.log(keys);
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Expand</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <TreeSelect
                        options={treeData}
                        onChange={onChange}
                        placeholder='single select'
                        defaultValue={'parent 1-1'}
                        defaultExpandAll
                        onExpand={onExpand}
                    />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Expand;
