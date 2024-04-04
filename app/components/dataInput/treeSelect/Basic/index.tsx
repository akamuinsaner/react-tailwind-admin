'use client';
import { treeData } from '@/app/utils/data';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Cascader from '@/src/components/Cascader';
import Flex from '@/src/components/Flex';
import TreeSelect from '@/src/components/TreeSelect';

const Basic = () => {
    const onChange = (value: any) => {
        console.log(value);
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Basic usage</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <TreeSelect
                        options={treeData}
                        onChange={onChange}
                        placeholder='single select'
                        defaultValue={'parent 1-1'}
                    />
                    <TreeSelect
                        multiple
                        options={treeData}
                        onChange={onChange}
                        placeholder='multiple select'
                        defaultValue={['leaf1', 'parent 1-1']}
                    />
                    <TreeSelect
                        disabled
                        options={treeData}
                        onChange={onChange}
                        placeholder='single select'
                        defaultValue={'parent 1-1'}
                    />
                    <TreeSelect
                        multiple
                        disabled
                        options={treeData}
                        onChange={onChange}
                        placeholder='multiple select '
                        defaultValue={['leaf1', 'parent 1-1']}
                    />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Basic;
