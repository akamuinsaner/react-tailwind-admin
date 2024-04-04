'use client';
import { treeData } from '@/app/utils/data';
import Card from '@/src/components/Card';
import CardBody from '@/src/components/Card/CardBody';
import CardHeader from '@/src/components/Card/CardHeader';
import Flex from '@/src/components/Flex';
import TreeSelect from '@/src/components/TreeSelect';

const Size = () => {
    const onChange = (value: any) => {
        console.log(value);
    };

    return (
        <Card className='break-inside-avoid mb-6'>
            <CardHeader>Size</CardHeader>
            <CardBody>
                <Flex direction='column' gap='medium'>
                    <TreeSelect
                        size='small'
                        options={treeData}
                        onChange={onChange}
                        placeholder='small'
                    />
                    <TreeSelect
                        size='small'
                        multiple
                        options={treeData}
                        onChange={onChange}
                        placeholder='small'
                    />
                    <TreeSelect
                        size='medium'
                        options={treeData}
                        onChange={onChange}
                        placeholder='medium'
                    />
                    <TreeSelect
                        size='medium'
                        multiple
                        options={treeData}
                        onChange={onChange}
                        placeholder='medium'
                    />
                    <TreeSelect
                        size='large'
                        options={treeData}
                        onChange={onChange}
                        placeholder='large'
                    />
                    <TreeSelect
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
